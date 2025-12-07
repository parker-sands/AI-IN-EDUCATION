import React, { useState } from 'react';
import { CheckCircle2, XCircle, Search, Menu } from 'lucide-react';

export const ExampleComparisonView: React.FC = () => {
  const [view, setView] = useState<'good' | 'bad'>('good');

  return (
    <div className="h-full flex flex-col p-6 max-w-6xl mx-auto">
      <div className="mb-6 text-center">
        <h2 className="text-3xl font-bold text-slate-800 mb-2">Design Case Study: Anatomy Class</h2>
        <p className="text-slate-500">Compare a well-designed educational site vs. a poorly designed one.</p>
        
        <div className="flex justify-center mt-6 gap-4">
            <button 
                onClick={() => setView('good')}
                className={`flex items-center gap-2 px-6 py-2 rounded-full font-bold transition-all ${
                    view === 'good' ? 'bg-green-600 text-white shadow-lg scale-105' : 'bg-slate-200 text-slate-600 hover:bg-slate-300'
                }`}
            >
                <CheckCircle2 size={20} />
                Good Design
            </button>
            <button 
                onClick={() => setView('bad')}
                className={`flex items-center gap-2 px-6 py-2 rounded-full font-bold transition-all ${
                    view === 'bad' ? 'bg-red-600 text-white shadow-lg scale-105' : 'bg-slate-200 text-slate-600 hover:bg-slate-300'
                }`}
            >
                <XCircle size={20} />
                Bad Design
            </button>
        </div>
      </div>

      {/* Browser Frame */}
      <div className="flex-1 bg-slate-900 rounded-t-xl shadow-2xl overflow-hidden border border-slate-700 flex flex-col">
        {/* Browser Header */}
        <div className="bg-slate-800 p-3 flex items-center gap-4">
            <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="flex-1 bg-slate-700 rounded-md px-4 py-1 text-xs text-slate-400 font-mono text-center">
                {view === 'good' ? 'anatomy-101.edu/muscles' : 'unknown-server.net/~user12/my_site.html'}
            </div>
        </div>

        {/* Viewport */}
        <div className="flex-1 overflow-y-auto bg-white relative">
            
            {view === 'good' && (
                <div className="font-sans text-slate-800">
                    <header className="bg-blue-900 text-white p-6 flex justify-between items-center sticky top-0 z-20 shadow-md">
                        <div className="text-xl font-bold tracking-tight">Human Anatomy <span className="font-light text-blue-300">Class 101</span></div>
                        <nav className="flex gap-6 text-sm font-medium">
                            <a href="#" className="hover:text-blue-300 transition-colors">Muscular System</a>
                            <a href="#" className="hover:text-blue-300 transition-colors">Skeletal System</a>
                            <a href="#" className="hover:text-blue-300 transition-colors">Nervous System</a>
                        </nav>
                    </header>

                    <section className="bg-slate-50 py-16 px-8 text-center border-b">
                        <h1 className="text-4xl font-extrabold text-slate-900 mb-4">The Pectoral Region</h1>
                        <p className="max-w-2xl mx-auto text-lg text-slate-600 leading-relaxed">
                            Understanding the major muscles of the chest and their functions in movement and respiration.
                        </p>
                    </section>

                    <main className="max-w-5xl mx-auto py-12 px-6 grid md:grid-cols-2 gap-12 items-start">
                        <div className="bg-white p-2 rounded-xl shadow-sm border border-slate-100">
                             {/* Placeholder for High Quality Image */}
                            <div className="aspect-[4/3] bg-slate-200 rounded-lg overflow-hidden relative group">
                                <img 
                                    src="https://picsum.photos/seed/muscleGood/800/600" 
                                    alt="Detailed muscle diagram" 
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-2 py-1 rounded">
                                    Fig 1.1: Anterior View
                                </div>
                            </div>
                            <p className="mt-2 text-sm text-slate-500 italic text-center">High-resolution diagram with clear orientation.</p>
                        </div>

                        <div className="space-y-6">
                            <div className="bg-white p-6 rounded-lg shadow-sm border border-l-4 border-l-blue-600">
                                <h3 className="text-xl font-bold text-slate-800 mb-2">Pectoralis Major</h3>
                                <p className="text-slate-600">A thick, fan-shaped muscle, situated at the chest (anterior) of the human body. It makes up the bulk of the chest muscles and lies under the breast.</p>
                                <ul className="mt-4 space-y-2 text-sm">
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>Origin: Clavicle, Sternum</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>Insertion: Humerus</li>
                                </ul>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-sm border border-l-4 border-l-blue-600">
                                <h3 className="text-xl font-bold text-slate-800 mb-2">Pectoralis Minor</h3>
                                <p className="text-slate-600">A thin, triangular muscle, situated at the upper part of the chest, beneath the pectoralis major.</p>
                            </div>
                        </div>
                    </main>

                    <footer className="bg-slate-900 text-slate-400 py-8 text-center text-sm">
                        <p>References: Gray's Anatomy, 2024 Edition.</p>
                    </footer>
                </div>
            )}

            {view === 'bad' && (
                <div className="font-serif bg-[#ffffcc] text-black h-full">
                    <center>
                        <h1 className="text-red-600 text-5xl font-comic-sans underline mt-4 decoration-wavy">MUSCLES!!!!!!!</h1>
                    </center>
                    <br/>
                    <div className="border border-black m-2 p-2 bg-white w-1/2 mx-auto">
                        <a href="#">Home</a> | <a href="#">Click here</a> | <a href="#">Page 2</a> | <a href="#">Email Me</a>
                    </div>
                    
                    <div className="flex flex-col items-center mt-10">
                        {/* Placeholder for Low Quality Image */}
                         <div className="border-4 border-red-500 p-1">
                            <img 
                                src="https://picsum.photos/seed/muscleBad/200/200" 
                                alt="bad diagram" 
                                className="w-64 h-64 object-cover blur-[2px] contrast-150 grayscale"
                            />
                        </div>
                        <span className="text-xs text-red-600 font-bold bg-yellow-200 px-1">IMG_0023.jpg</span>

                        <div className="w-full px-4 mt-8">
                            <p className="text-xl leading-3 text-blue-800 font-bold">
                                THE CHEST IS A BIG AREA. IT HAS MUSCLES. 
                                LOOK AT THE PICTURE ABOVE TO SEE THEM. 
                                IT IS VERY IMPORTANT TO KNOW THIS FOR THE TEST ON TUESDAY.
                            </p>
                            <br/><br/>
                            <p className="text-xs">
                                (c) 1999 webmaster.
                            </p>
                        </div>
                    </div>
                    {/* Intentionally broken layout elements */}
                    <div className="fixed bottom-10 right-0 bg-red-600 text-white p-4 rotate-12 animate-bounce">
                        CLICK HERE NOW!!!
                    </div>
                </div>
            )}
        </div>
      </div>

      {/* Annotation Box */}
      <div className="mt-4 bg-white p-4 rounded-xl shadow border border-slate-200">
         <h3 className="font-bold text-lg mb-2">Instructor Notes:</h3>
         {view === 'good' ? (
             <ul className="list-disc ml-5 space-y-1 text-green-700">
                 <li><strong>Navigation:</strong> Clear, top-level menu.</li>
                 <li><strong>Hierarchy:</strong> Headings are distinct from body text.</li>
                 <li><strong>Visuals:</strong> High-resolution diagram with labels.</li>
                 <li><strong>White Space:</strong> Content is padded, easy to read.</li>
             </ul>
         ) : (
             <ul className="list-disc ml-5 space-y-1 text-red-600">
                 <li><strong>Colors:</strong> Clashing background and text colors (accessibility issue).</li>
                 <li><strong>Fonts:</strong> Too many fonts, "Comic Sans" style usage, poor readability.</li>
                 <li><strong>Visuals:</strong> Low resolution, grainy, missing labels.</li>
                 <li><strong>Navigation:</strong> Unclear links ("Page 2", "Click here").</li>
             </ul>
         )}
      </div>
    </div>
  );
};