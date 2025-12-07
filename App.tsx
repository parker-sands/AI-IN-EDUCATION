import React, { useState } from 'react';
import { AppPhase, GeneratedContent, WebsiteConfig } from './types';
import { VocabularyView } from './components/VocabularyView';
import { ExampleComparisonView } from './components/ExampleComparisonView';
import { BuilderForm } from './components/BuilderForm';
import { GeneratedWebsite } from './components/GeneratedWebsite';
import { generateWebsiteContent } from './services/geminiService';
import { BookOpen, MonitorPlay, Hammer, Home } from 'lucide-react';

const App: React.FC = () => {
  const [phase, setPhase] = useState<AppPhase>(AppPhase.INTRO);
  const [generatedContent, setGeneratedContent] = useState<GeneratedContent | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleBuildSubmit = async (config: WebsiteConfig) => {
    setIsLoading(true);
    try {
      const content = await generateWebsiteContent(config);
      setGeneratedContent(content);
      setPhase(AppPhase.BUILDER_RESULT);
    } catch (error) {
      alert("Something went wrong while generating the website. Please check the API key and try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const NavItem = ({ p, label, icon: Icon }: { p: AppPhase; label: string; icon: any }) => (
    <button
      onClick={() => setPhase(p)}
      disabled={isLoading}
      className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
        phase === p
          ? 'bg-slate-900 text-white'
          : 'text-slate-600 hover:bg-slate-200'
      }`}
    >
      <Icon size={16} />
      <span className="hidden sm:inline">{label}</span>
    </button>
  );

  return (
    <div className="flex flex-col h-screen bg-slate-50">
      {/* Top Navigation */}
      <header className="bg-white border-b border-slate-200 h-16 flex items-center justify-between px-6 shrink-0">
        <div className="flex items-center gap-2 font-bold text-xl text-indigo-600">
          <MonitorPlay className="fill-current" />
          <span>WebDesign<span className="text-slate-900">101</span></span>
        </div>
        
        {phase !== AppPhase.BUILDER_RESULT && (
            <nav className="flex gap-2">
                <NavItem p={AppPhase.INTRO} label="Home" icon={Home} />
                <NavItem p={AppPhase.VOCABULARY} label="Vocabulary" icon={BookOpen} />
                <NavItem p={AppPhase.EXAMPLES} label="Case Study" icon={MonitorPlay} />
                <NavItem p={AppPhase.BUILDER_SETUP} label="Builder" icon={Hammer} />
            </nav>
        )}

        {phase === AppPhase.BUILDER_RESULT && (
            <div className="text-sm font-medium text-slate-500">
                Generated Preview
            </div>
        )}
      </header>

      {/* Main Content Area */}
      <main className="flex-1 overflow-hidden relative">
        {phase === AppPhase.INTRO && (
          <div className="h-full flex items-center justify-center p-6 text-center">
            <div className="max-w-2xl">
              <h1 className="text-5xl font-black text-slate-900 mb-6">Learn to Build the Web.</h1>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed">
                Master the vocabulary of web design, analyze real-world examples, and use AI to generate a custom website structure for your school projects.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <button 
                    onClick={() => setPhase(AppPhase.VOCABULARY)}
                    className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:bg-indigo-700 hover:scale-105 transition-all"
                  >
                      Start Orientation
                  </button>
                  <button 
                     onClick={() => setPhase(AppPhase.BUILDER_SETUP)}
                     className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-xl font-bold shadow-sm hover:bg-slate-50 transition-all"
                  >
                      Skip to Builder
                  </button>
              </div>
            </div>
          </div>
        )}

        {phase === AppPhase.VOCABULARY && <VocabularyView />}
        {phase === AppPhase.EXAMPLES && <ExampleComparisonView />}
        {phase === AppPhase.BUILDER_SETUP && <BuilderForm onSubmit={handleBuildSubmit} isLoading={isLoading} />}
        {phase === AppPhase.BUILDER_RESULT && generatedContent && (
            <GeneratedWebsite 
                content={generatedContent} 
                onRestart={() => setPhase(AppPhase.BUILDER_SETUP)} 
            />
        )}
      </main>
    </div>
  );
};

export default App;