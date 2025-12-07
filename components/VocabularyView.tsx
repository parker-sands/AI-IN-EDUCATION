import React, { useState } from 'react';
import { VOCAB_TERMS } from '../types';
import { MousePointer2, Layout, Type, Image as ImageIcon, Grid } from 'lucide-react';

export const VocabularyView: React.FC = () => {
  const [activeTerm, setActiveTerm] = useState<string | null>(null);

  return (
    <div className="flex h-full flex-col md:flex-row gap-6 p-6">
      {/* Left Panel: Vocabulary List */}
      <div className="w-full md:w-1/3 bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden flex flex-col">
        <div className="p-5 bg-indigo-600 text-white">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <Layout className="w-5 h-5" />
            Web Design 101
          </h2>
          <p className="text-indigo-100 text-sm mt-1">Hover over a term to see it on the wireframe.</p>
        </div>
        <div className="flex-1 overflow-y-auto p-2">
          {VOCAB_TERMS.map((item, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setActiveTerm(item.term)}
              onMouseLeave={() => setActiveTerm(null)}
              className={`p-4 mb-2 rounded-lg cursor-pointer transition-all duration-200 border-l-4 ${
                activeTerm === item.term
                  ? 'bg-indigo-50 border-indigo-500 shadow-sm'
                  : 'bg-white border-transparent hover:bg-slate-50'
              }`}
            >
              <h3 className={`font-semibold ${activeTerm === item.term ? 'text-indigo-700' : 'text-slate-700'}`}>
                {item.term}
              </h3>
              <p className="text-xs text-slate-500 mt-1">{item.definition}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Right Panel: Interactive Wireframe */}
      <div className="w-full md:w-2/3 bg-slate-100 rounded-2xl shadow-inner border border-slate-300 p-8 relative overflow-hidden flex items-center justify-center">
        
        {/* Mock Browser Window */}
        <div className="w-full max-w-2xl bg-white rounded-lg shadow-2xl overflow-hidden flex flex-col h-[600px] border border-slate-200 relative">
          
          {/* Header Area */}
          <div className={`border-b p-4 flex justify-between items-center transition-colors duration-300 ${
            activeTerm === 'Header' || activeTerm === 'Navigation' ? 'bg-yellow-100 ring-2 ring-yellow-400 z-10' : 'bg-white'
          }`}>
            <div className="font-bold text-xl text-slate-800">Logo</div>
            <div className={`flex gap-4 text-sm font-medium text-slate-600 ${
                 activeTerm === 'Navigation' ? 'bg-yellow-200 p-1 rounded ring-2 ring-yellow-500' : ''
            }`}>
              <span>Home</span>
              <span>About</span>
              <span>Contact</span>
            </div>
          </div>

          {/* Hero Section */}
          <div className={`p-12 text-center bg-slate-50 flex flex-col items-center justify-center min-h-[200px] transition-colors duration-300 ${
            activeTerm === 'Hero Section' || activeTerm === 'Call to Action (CTA)' ? 'bg-blue-100 ring-2 ring-blue-400 relative z-10' : ''
          }`}>
            <h1 className={`text-4xl font-extrabold mb-4 text-slate-900 transition-all ${
                 activeTerm === 'Hierarchy' ? 'scale-110 text-blue-700' : ''
            }`}>
              Welcome to the Future
            </h1>
            <p className={`text-slate-600 mb-6 max-w-md mx-auto ${
                activeTerm === 'Hierarchy' ? 'text-xs opacity-50' : ''
            }`}>
              Learn the basics of web design in an interactive way.
            </p>
            <button className={`px-6 py-2 bg-indigo-600 text-white rounded-full font-medium shadow-md transition-transform ${
                 activeTerm === 'Call to Action (CTA)' ? 'scale-125 bg-red-500 animate-pulse' : ''
            }`}>
              Get Started
            </button>
          </div>

          {/* Grid Content */}
          <div className={`flex-1 p-8 grid grid-cols-3 gap-6 transition-colors duration-300 ${
               activeTerm === 'Grid System' || activeTerm === 'White Space' ? 'bg-green-50 ring-2 ring-green-400 z-10 relative' : ''
          }`}>
            {[1, 2, 3].map((i) => (
              <div key={i} className={`bg-slate-100 rounded-lg h-32 flex items-center justify-center border-2 border-dashed border-slate-300 ${
                   activeTerm === 'White Space' ? 'scale-75' : ''
              } ${activeTerm === 'Resolution' ? (i === 1 ? 'blur-[0px]' : 'blur-[2px]') : ''}`}>
                 {activeTerm === 'Resolution' ? (
                     i === 1 ? <ImageIcon className="text-green-600 w-8 h-8"/> : <ImageIcon className="text-slate-400 w-8 h-8"/>
                 ) : (
                     <span className="text-slate-400 text-sm">Content {i}</span>
                 )}
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className={`p-4 bg-slate-800 text-slate-300 text-xs text-center mt-auto transition-colors duration-300 ${
               activeTerm === 'Footer' ? 'bg-purple-600 text-white ring-2 ring-purple-400 z-10' : ''
          }`}>
            &copy; 2023 Web Design 101. All rights reserved. | <span className="underline">Credits</span>
          </div>

          {/* Overlays for specific abstract concepts */}
          {activeTerm === 'Grid System' && (
             <div className="absolute inset-0 pointer-events-none grid grid-cols-3 gap-6 p-8 pt-[280px]">
                 <div className="bg-red-500/10 border-x border-red-500/30 h-full"></div>
                 <div className="bg-red-500/10 border-x border-red-500/30 h-full"></div>
                 <div className="bg-red-500/10 border-x border-red-500/30 h-full"></div>
             </div>
          )}

        </div>
      </div>
    </div>
  );
};