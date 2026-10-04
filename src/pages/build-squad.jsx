import React from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import priyaImg from '../assets/maya.png';
import marcusImg from '../assets/marcus.png';
import liImg from '../assets/sara.png';
import jaxonImg from '../assets/alex.png';

export default function BuildSquad() {
    const navigate = useNavigate();

    const suggestedMusicians = [
        {
            id: 1,
            name: "Priya 'Bass' K",
            tags: ['Bass', 'Vocals'],
            img: priyaImg
        },
        {
            id: 2,
            name: "Marcus D.",
            tags: ['Drums', 'Percussion'],
            img: marcusImg
        },
        {
            id: 3,
            name: "Li Wei",
            tags: ['Synth', 'Keys'],
            img: liImg
        },
        {
            id: 4,
            name: "Jaxon V.",
            tags: ['Guitar'],
            img: jaxonImg
        }
    ];

    return (
        <div className="flex h-screen bg-white font-sans text-[#0F172A] overflow-hidden">
            <Sidebar />

            <div className="flex-1 flex flex-col overflow-y-auto">
                <main className="flex-1 px-4 sm:px-6 md:px-16 py-24 md:py-20 flex justify-center">
                    <div className="w-full max-w-[1100px] grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-24">
                        
                        {/* Left Column */}
                        <div className="flex flex-col pt-4">
                            <h1 className="text-[42px] sm:text-[56px] md:text-[68px] font-black uppercase tracking-tighter leading-[0.9] text-[#0F172A] mb-4 sm:mb-6">
                                BUILD<br/>THE SQUAD
                            </h1>
                            <p className="text-[14px] sm:text-[15px] font-medium leading-[1.5] text-[#64748B] mb-8 sm:mb-12 max-w-[340px]">
                                Search for musicians to add to the roster, or send an invite link.
                            </p>

                            <div className="relative mb-8">
                                <input 
                                    type="text" 
                                    placeholder="Search username..." 
                                    className="w-full h-[40px] sm:h-[50px] bg-transparent border-b-[3px] border-[#0F172A] pb-2 font-bold text-[18px] sm:text-[22px] leading-none text-[#0F172A] placeholder:text-[#C4C4C4] focus:outline-none transition-colors pr-10"
                                />
                                <div className="absolute right-0 top-1/2 -translate-y-1/2 pb-2">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0F172A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="11" cy="11" r="8"></circle>
                                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                    </svg>
                                </div>
                            </div>

                            <div className="bg-[#F8F9FA] rounded-[8px] p-4 sm:p-5 flex items-center justify-between mb-8 sm:mb-12 gap-3">
                                <div>
                                    <h3 className="font-sans font-[800] text-[14px] sm:text-[16px] leading-none tracking-[0px] uppercase text-[#0F172A] mb-1.5 sm:mb-2">NOT ON RIFFLINE YET?</h3>
                                    <p className="font-medium text-[12px] sm:text-[13px] text-[#64748B]">Share an invite link via text or social.</p>
                                </div>
                                <button className="w-[44px] h-[44px] rounded-full bg-[#0F172A] flex items-center justify-center shrink-0 hover:bg-[#2A2A2A] transition-colors">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="18" cy="5" r="3"></circle>
                                        <circle cx="6" cy="12" r="3"></circle>
                                        <circle cx="18" cy="19" r="3"></circle>
                                        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                                        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                                    </svg>
                                </button>
                            </div>

                            <div>
                                <button 
                                    onClick={() => navigate(-1)}
                                    className="w-full sm:w-auto bg-[#0F172A] text-white font-black text-[13px] uppercase tracking-[0.05em] px-8 py-4 rounded-[24px] hover:bg-[#2A2A2A] transition-colors"
                                >
                                    DONE ADDING
                                </button>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="flex flex-col">
                            <h3 className="font-sans font-[800] text-[12px] sm:text-[14px] leading-none tracking-[1px] uppercase text-[#64748B] mb-3 sm:mb-5 pl-1">
                                SUGGESTED MUSICIANS
                            </h3>
                            <div className="flex flex-col gap-3 sm:gap-4">
                                {suggestedMusicians.map((musician) => (
                                    <div key={musician.id} className="bg-white border border-[#E4E8F0] rounded-[6px] p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between hover:border-[#0F172A] transition-colors group gap-4 sm:gap-0">
                                        <div className="flex items-center gap-4 sm:gap-5">
                                            <div className="w-[56px] h-[56px] sm:w-[68px] sm:h-[68px] rounded-full overflow-hidden border border-[#E4E8F0] shrink-0 bg-[#E2E2E2] flex items-center justify-center">
                                                <img src={musician.img} alt={musician.name} className="w-full h-full object-cover scale-[1.15]" />
                                            </div>
                                            <div className="flex flex-col gap-1.5 sm:gap-2.5">
                                                <h4 className="font-sans font-[700] text-[18px] sm:text-[22px] leading-none sm:leading-[24.2px] tracking-[0px] text-[#0F172A] truncate max-w-[150px] sm:max-w-none">{musician.name}</h4>
                                                <div className="flex flex-wrap items-center gap-2">
                                                    {musician.tags.map((tag, idx) => (
                                                        <span key={idx} className="bg-[#F3F5F9] text-[#0F172A] font-bold text-[10px] sm:text-[11px] px-2 sm:px-2.5 py-1 rounded-[4px] leading-none">
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                        <button className="bg-white border-[2px] border-[#0F172A] text-[#0F172A] font-black text-[11px] uppercase tracking-wide w-full sm:w-auto px-5 py-2.5 rounded-[2px] shadow-[3px_3px_0px_0px_#0F172A] active:translate-y-[2px] active:translate-x-[2px] active:shadow-[1px_1px_0px_0px_#0F172A] hover:bg-[#F8F9FA] transition-all">
                                            ADD
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </main>
            </div>
        </div>
    );
}
