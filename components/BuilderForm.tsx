import React, { useState } from 'react';
import { Subject, WebsiteConfig } from '../types';
import { CheckSquare, Square, ArrowRight, Wand2 } from 'lucide-react';

interface BuilderFormProps {
  onSubmit: (config: WebsiteConfig) => void;
  isLoading: boolean;
}

export const BuilderForm: React.FC<BuilderFormProps> = ({ onSubmit, isLoading }) => {
  const [subject, setSubject] = useState<string>('');
  const [features, setFeatures] = useState({
    header: false,
    hero: false,
    sections: false,
    nav: false,
    footer: false,
    gallery: false,
    contact: false,
  });

  const toggleFeature = (key: keyof typeof features) => {
    setFeatures(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleCreate = () => {
    if (!subject) {
        alert("Please select a subject!");
        return;
    }
    onSubmit({ subject, features });
  };

  return (
    <div className="h-full flex items-center justify-center p-6">
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-xl overflow-hidden border-2 border-slate-900 flex flex-col md:flex-row">
        
        {/* Left Side: The Form */}
        <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col gap-8">
            <div>
                <h2 className="text-3xl font-black text-slate-900 mb-1">Website Teacher 1.0</h2>
                <p className="text-slate-500">Configure your class website.</p>
            </div>

            <div className="space-y-6">
                {/* Subject Selection */}
                <div className="space-y-2">
                    <label className="text-lg font-bold flex items-center gap-2">
                        1. On the topic:
                    </label>
                    <select 
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className="w-full p-3 rounded-xl border-2 border-slate-300 focus:border-indigo-600 focus:ring-4 focus:ring-indigo-100 outline-none font-medium bg-slate-50 appearance-none"
                    >
                        <option value="" disabled>Choose a subject...</option>
                        {Object.values(Subject).map(s => (
                            <option key={s} value={s}>{s}</option>
                        ))}
                    </select>
                </div>

                {/* Features Selection */}
                <div className="space-y-2">
                    <label className="text-lg font-bold">
                        2. Include key terms:
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                        {Object.entries(features).map(([key, checked]) => (
                            <div 
                                key={key}
                                onClick={() => toggleFeature(key as keyof typeof features)}
                                className={`flex items-center gap-3 p-3 rounded-lg border-2 cursor-pointer transition-all ${
                                    checked 
                                    ? 'border-indigo-600 bg-indigo-50 text-indigo-700' 
                                    : 'border-slate-200 hover:border-slate-300 text-slate-600'
                                }`}
                            >
                                {checked ? <CheckSquare className="w-5 h-5 shrink-0" /> : <Square className="w-5 h-5 shrink-0" />}
                                <span className="capitalize font-medium">{key === 'nav' ? 'Navigation' : key}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <button
                onClick={handleCreate}
                disabled={isLoading}
                className={`mt-4 py-4 px-6 rounded-xl font-bold text-lg flex items-center justify-center gap-2 shadow-lg transition-transform active:scale-95 ${
                    isLoading 
                    ? 'bg-slate-300 cursor-not-allowed text-slate-500' 
                    : 'bg-indigo-600 text-white hover:bg-indigo-700'
                }`}
            >
                {isLoading ? (
                    'Generating...'
                ) : (
                    <>
                        Create Website <ArrowRight className="w-5 h-5" />
                    </>
                )}
            </button>
        </div>

        {/* Right Side: Visual Context */}
        <div className="hidden md:flex w-1/2 bg-slate-100 border-l-2 border-slate-900 items-center justify-center p-12 relative overflow-hidden">
             {/* Abstract floating elements */}
             <div className="absolute top-10 right-10 w-20 h-20 bg-yellow-400 rounded-full opacity-20 blur-xl"></div>
             <div className="absolute bottom-10 left-10 w-32 h-32 bg-blue-500 rounded-full opacity-20 blur-xl"></div>
             
             <div className="text-center space-y-4 relative z-10">
                <div className="w-24 h-24 bg-white rounded-2xl shadow-xl mx-auto flex items-center justify-center border border-slate-200 mb-6">
                    <Wand2 className="w-10 h-10 text-indigo-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800">AI Powered Builder</h3>
                <p className="text-slate-600 max-w-xs mx-auto">
                    Select your requirements and our AI will structure a perfect starting point for your project using the vocabulary you just learned.
                </p>
             </div>
        </div>

      </div>
    </div>
  );
};