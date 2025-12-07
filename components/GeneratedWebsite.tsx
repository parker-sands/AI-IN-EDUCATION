import React from 'react';
import { GeneratedContent } from '../types';
import { Image } from 'lucide-react';

interface GeneratedWebsiteProps {
  content: GeneratedContent;
  onRestart: () => void;
}

export const GeneratedWebsite: React.FC<GeneratedWebsiteProps> = ({ content, onRestart }) => {
  return (
    <div className="h-full flex flex-col bg-white overflow-hidden">
      {/* Simulation Bar */}
      <div className="bg-slate-900 text-white p-3 flex justify-between items-center shrink-0">
         <div className="flex gap-2 items-center">
             <div className="flex gap-1.5 mr-4">
                 <div className="w-3 h-3 rounded-full bg-red-500"></div>
                 <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                 <div className="w-3 h-3 rounded-full bg-green-500"></div>
             </div>
             <span className="font-mono text-sm opacity-70">preview-mode: localhost:3000</span>
         </div>
         <button onClick={onRestart} className="text-xs bg-slate-700 px-3 py-1 rounded hover:bg-slate-600 transition">
             Build Another
         </button>
      </div>

      {/* Actual Website Content Area - Scrollable */}
      <div className="flex-1 overflow-y-auto font-sans" style={{ '--primary': content.primaryColor, '--accent': content.accentColor } as React.CSSProperties}>
          
          {/* Nav */}
          <nav className="border-b sticky top-0 bg-white/95 backdrop-blur z-30" style={{ borderTop: `4px solid ${content.primaryColor}` }}>
              <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                  <div className="text-2xl font-bold" style={{ color: content.primaryColor }}>{content.title}</div>
                  <div className="hidden md:flex gap-6">
                      {content.navLinks.map((link, i) => (
                          <a key={i} href="#" className="text-slate-600 hover:text-slate-900 font-medium transition-colors">
                              {link}
                          </a>
                      ))}
                  </div>
              </div>
          </nav>

          {/* Hero */}
          <header className="relative py-24 px-6 overflow-hidden bg-slate-50">
               <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ background: content.primaryColor }}></div>
               <div className="max-w-4xl mx-auto text-center relative z-10">
                   <h1 className="text-5xl md:text-6xl font-black mb-6 text-slate-900 tracking-tight leading-tight">
                       {content.heroHeadline}
                   </h1>
                   <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
                       {content.heroSubheadline}
                   </p>
                   <button 
                    className="px-8 py-4 rounded-lg font-bold text-lg text-white shadow-lg transform transition hover:-translate-y-1"
                    style={{ backgroundColor: content.accentColor }}
                   >
                       Learn More
                   </button>
               </div>
          </header>

          {/* Sections */}
          <main className="max-w-5xl mx-auto py-16 px-6 space-y-24">
              {content.sections.map((section, idx) => (
                  <section key={idx} className="scroll-mt-20">
                      {section.layoutType === 'text-only' && (
                          <div className="text-center max-w-3xl mx-auto">
                              <h2 className="text-3xl font-bold mb-6 text-slate-800">{section.title}</h2>
                              <div className="h-1 w-20 mx-auto mb-8 rounded-full" style={{ backgroundColor: content.primaryColor }}></div>
                              <p className="text-lg text-slate-600 leading-relaxed">{section.content}</p>
                          </div>
                      )}
                      
                      {section.layoutType === 'image-left' && (
                          <div className="grid md:grid-cols-2 gap-12 items-center">
                              <div className="bg-slate-100 rounded-xl aspect-video flex items-center justify-center text-slate-300">
                                  <img 
                                    src={`https://picsum.photos/seed/${idx}web/600/400`} 
                                    className="w-full h-full object-cover rounded-xl shadow-md"
                                    alt="Placeholder"
                                  />
                              </div>
                              <div>
                                  <h2 className="text-3xl font-bold mb-4 text-slate-800">{section.title}</h2>
                                  <p className="text-lg text-slate-600 leading-relaxed">{section.content}</p>
                              </div>
                          </div>
                      )}

                      {section.layoutType === 'image-right' && (
                          <div className="grid md:grid-cols-2 gap-12 items-center">
                              <div className="order-2 md:order-1">
                                  <h2 className="text-3xl font-bold mb-4 text-slate-800">{section.title}</h2>
                                  <p className="text-lg text-slate-600 leading-relaxed">{section.content}</p>
                              </div>
                              <div className="order-1 md:order-2 bg-slate-100 rounded-xl aspect-video flex items-center justify-center text-slate-300">
                                   <img 
                                    src={`https://picsum.photos/seed/${idx}web2/600/400`} 
                                    className="w-full h-full object-cover rounded-xl shadow-md"
                                    alt="Placeholder"
                                  />
                              </div>
                          </div>
                      )}

                      {section.layoutType === 'grid' && (
                          <div>
                              <div className="text-center mb-12">
                                  <h2 className="text-3xl font-bold mb-4 text-slate-800">{section.title}</h2>
                                  <p className="text-lg text-slate-600 max-w-2xl mx-auto">{section.content}</p>
                              </div>
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                  {[1, 2, 3].map(i => (
                                      <div key={i} className="bg-white p-6 rounded-lg shadow-sm border border-slate-100 hover:shadow-md transition">
                                          <div className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center text-white" style={{ backgroundColor: content.primaryColor }}>
                                              <Image size={24} />
                                          </div>
                                          <h3 className="font-bold mb-2">Feature {i}</h3>
                                          <p className="text-sm text-slate-500">Supporting detail for this topic.</p>
                                      </div>
                                  ))}
                              </div>
                          </div>
                      )}
                  </section>
              ))}
          </main>

          {/* Footer */}
          <footer className="bg-slate-900 text-slate-400 py-12 px-6">
              <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 mb-8 border-b border-slate-800 pb-8">
                  <div>
                      <div className="text-white font-bold text-lg mb-4">{content.title}</div>
                      <p className="text-sm">Designed for educational purposes.</p>
                  </div>
                  <div>
                      <div className="text-white font-bold mb-4">Quick Links</div>
                      <ul className="space-y-2 text-sm">
                          {content.navLinks.map((link, i) => <li key={i}>{link}</li>)}
                      </ul>
                  </div>
                  <div>
                      <div className="text-white font-bold mb-4">Contact</div>
                      <p className="text-sm">school@education.edu</p>
                  </div>
              </div>
              <div className="text-center text-sm">
                  {content.footerText}
              </div>
          </footer>
      </div>
    </div>
  );
};