import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import boostIcon from '../assets/boosticon.png';

export default function Create() {
    const [vibe, setVibe] = useState('Gig-ready');
    const [commitment, setCommitment] = useState('Core member');
    const [boostEnabled, setBoostEnabled] = useState(false);

    const vibeLevels = ['Newbie friendly', 'Gig-ready', 'Pro / studio', 'Legendary'];
    const commitmentLevels = ['Core member', 'Regular gigs', 'Writing & recording', 'Tour-ready'];

    return (
        <div className="flex min-h-screen bg-white font-sans text-brand-dark">
            <Sidebar />

            <main className="flex-1 h-screen overflow-y-auto pt-24 md:pt-6 pb-24 px-4 md:px-6 no-scrollbar">
                <div className="max-w-[650px] mx-auto flex flex-col gap-10">

                    {/* Header Section */}
                    <div className="space-y-4">
                        <h1 className="text-[40px] md:text-[56px] leading-[0.9] font-sans font-black uppercase tracking-tighter text-brand-dark">
                            LOCK IN<br />YOUR NEXT<br />BANDMATE
                        </h1>
                        <p className="text-[17px] text-[#64748B] font-medium leading-tight">
                            Permanent spot in your band. No temp gigs, no maybe-later energy.
                        </p>
                        <div className="flex items-center gap-3 pt-2">
                            <div className="px-3 py-1.5 border-[1px] border-brand-dark rounded-full flex items-center gap-2">
                                <span className="text-[11px] font-black tracking-widest font-sans font-regular uppercase text-[#64748B]">BAND</span>
                                <span className="text-[14px] font-bold text-brand-dark">Auto-Distribute</span>
                            </div>
                            <p className="text-[13px] text-[#64748B] font-sans font-medium">This position will live under the band's profile and sales.</p>
                        </div>
                    </div>

                    {/* Who do you need */}
                    <div className="space-y-3">
                        <label className="text-[13px] font-black uppercase font-sans font-extrabold tracking-widest text-brand-dark">Who do you need?</label>
                        <input
                            type="text"
                            placeholder="e.g. Bassist, Sound Engineer..."
                            className="w-full bg-[#F3F5F9] border-b-[2px] border-brand-dark px-4 py-4 font-medium text-[16px] focus:outline-none placeholder:text-gray-400 placeholder:font-[Nimbus Mono PS] placeholder:font-medium"
                        />
                    </div>

                    {/* Vibe / Level */}
                    <div className="space-y-4">
                        <label className="text-[13px] font-black font-sans font-extrabold uppercase tracking-widest text-brand-dark block">Vibe | Level</label>
                        <div className="flex flex-wrap gap-2">
                            {vibeLevels.map((lvl) => (
                                <button
                                    key={lvl}
                                    onClick={() => setVibe(lvl)}
                                    className={`px-4 md:px-5 py-2 md:py-2.5 rounded-full border-[1.5px] font-bold text-[12px] md:text-[14px] transition-all duration-200 ${vibe === lvl
                                        ? 'bg-brand-dark text-white border-brand-dark shadow-[4px_4px_0_0_#356BFF] -translate-x-[2px] -translate-y-[2px]'
                                        : 'text-[#64748B] border-black hover:border-brand-dark'
                                        }`}
                                >
                                    {lvl}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* The Lowdown */}
                    <div className="space-y-2">
                        <label className="text-[13px] font-black uppercase tracking-widest text-brand-dark block">The Lowdown</label>
                        <textarea
                            placeholder="Describe the role. Weekly writing, docketing, how often you jam. Paint the picture."
                            className="w-full h-[180px] bg-[#F3F5F9] border-l-[4px] border-brand-dark p-6 font-mono text-[14px] leading-relaxed focus:outline-none resize-none placeholder:text-gray-400"
                        />
                        <p className="text-[12px] text-gray-400 font-regular">This is a long-term band role, not a one-off studio or gig listing.</p>
                    </div>

                    {/* Requirements */}
                    <div className="space-y-4">
                        <label className="text-[13px] font-black uppercase tracking-widest font-sans font-extrabold  text-brand-dark block">Requirements</label>
                        <div className="space-y-2">
                            <div className="flex items-center justify-between p-3 md:p-4 bg-[#F8F8F8] rounded-[6px] border border-transparent hover:border-gray-200 transition-colors gap-2">
                                <span className="font-semibold font-sans text-[14px] md:text-[15px] truncate">Gear required</span>
                                <button className="px-3 py-1.5 border-[1.5px] border-black rounded-full font-sans font-semibold text-[10px] md:text-[11px] uppercase tracking-tight shrink-0">Required</button>
                            </div>
                            <div className="flex items-center justify-between p-3 md:p-4 bg-[#F8F8F8] rounded-[6px] border border-transparent hover:border-gray-200 transition-colors gap-2">
                                <span className="font-semibold font-sans text-[14px] md:text-[15px] truncate">Own transport</span>
                                <button className="px-3 py-1.5 border-[1.5px] border-black rounded-full font-sans font-black text-[10px] md:text-[11px] uppercase tracking-tight shrink-0">Required</button>
                            </div>
                        </div>
                    </div>

                    {/* Commitment Expectations */}
                    <div className="space-y-4">
                        <label className="text-[13px] font-black font-sans font-extrabold uppercase tracking-widest text-brand-dark block">Commitment Expectations</label>
                        <div className="flex flex-wrap gap-2">
                            {commitmentLevels.map((lvl) => (
                                <button
                                    key={lvl}
                                    onClick={() => setCommitment(lvl)}
                                    className={`px-4 md:px-5 py-2 md:py-2.5 rounded-full border-[2px] border-black font-bold text-black text-[12px] md:text-[14px] transition-all duration-200 ${commitment === lvl
                                        ? 'bg-brand-dark text-white border-brand-dark shadow-[4px_4px_0_0_#356BFF] -translate-x-[2px] -translate-y-[2px]'
                                        : 'text-[#64748B]'
                                        }`}
                                >
                                    {lvl}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Boost Section */}
                    <div className="bg-brand-dark rounded-xl p-4 md:p-6 text-white relative overflow-hidden group">
                        {/* Glow effect */}
                        {/* <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/20 blur-[60px] pointer-events-none group-hover:bg-brand-orange/30 transition-all"></div> */}

                        <div className="flex items-start justify-between gap-4">
                            <div className="flex gap-3 md:gap-4">
                                <div className="w-8 h-8 md:w-10 md:h-10 bg-brand-orange rounded-full flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(53,107,255,0.5)]">
                                    <img src={boostIcon} alt="boost-icon" className="w-5 h-5 md:w-6 md:h-6 object-contain" />
                                </div>
                                <div>
                                    <h4 className="font-black text-[16px] md:text-[18px] uppercase leading-tight tracking-tight">Boost This Request</h4>
                                    <p className="text-brand-orange text-[11px] md:text-[13px] font-sans font-black uppercase tracking-[0.2em] mb-2 md:mb-3">Recommended</p>
                                    <p className="text-[#CCCCCC] text-[13px] md:text-[14px] font-sans font-regular leading-snug max-w-[340px]">
                                        Get 3x more views by pinning this to the top of the Discover feed for 7 days.
                                    </p>
                                    <p className="mt-3 md:mt-4 font-black font-sans font-bold text-[16px] md:text-[18px] tracking-tight">+ $4.00</p>
                                </div>
                            </div>

                            <label className="relative inline-flex items-center cursor-pointer shrink-0 mt-1 md:mt-0">
                                <input
                                    type="checkbox"
                                    className="sr-only peer"
                                    checked={boostEnabled}
                                    onChange={() => setBoostEnabled(!boostEnabled)}
                                />
                                <div className="w-[52px] h-[28px] bg-[#2E2E35] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-[24px] after:content-[''] after:absolute after:top-[3px] after:left-[3px] after:bg-white after:rounded-full after:h-[22px] after:w-[22px] after:transition-all peer-checked:bg-white after:peer-checked:bg-brand-dark"></div>
                            </label>
                        </div>
                    </div>

                    {/* Footer Actions */}
                    <div className="flex flex-col-reverse sm:flex-row items-center justify-between mt-4 pt-8 md:pt-10 border-t border-gray-100 gap-6 sm:gap-4">
                        <button className="text-[13px] md:text-[14px] font-black uppercase tracking-widest text-[#B0B0B0] hover:text-brand-dark transition-colors pl-0 sm:pl-4 font-sans">Cancel</button>
                        <button className="relative group w-full sm:w-[400px]">
                            <div className="absolute inset-0 bg-brand-dark translate-x-[4px] translate-y-[4px]"></div>
                            <div className="relative w-full py-4 bg-brand-orange text-white font-black text-[14px] md:text-[16px] uppercase tracking-widest border-[1.5px] border-brand-dark group-active:translate-x-[2px] group-active:translate-y-[2px] transition-all flex items-center justify-center font-sans">
                                Post Band Position
                            </div>
                        </button>
                    </div>

                </div>
            </main>
        </div>
    );
}
