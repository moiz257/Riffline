import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import frequencyIcon from '../assets/frequency.svg';
import chat2Icon from '../assets/chat-2.svg';

export default function ApplicationReview() {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const applicant = location.state?.applicant || {
        name: 'Rohan Bass',
        shortExp: '5 Yrs Exp',
        location: 'Mumbai',
        img: 'https://i.pravatar.cc/150?img=11',
        gear: 'Fender Jazz Bass, Ampeg PF-500',
        genres: 'Funk, Neo-Soul, Jazz Fusion',
        topTrack: 'Midnight Groove',
        availability: 'Weekends + Evenings',
        pitch: "Hey guys, love your sound. I've got a Fender Jazz Bass and plenty of studio experience. I'm free on the 12th and live close to The Hive. Check out my audition tape below!",
        media: 'Slap_Bass_Demo_23.mp3'
    };

    return (
        <div className="flex h-screen bg-white font-sans text-[#0F172A] overflow-hidden">
            <Sidebar />

            <div className="flex-1 flex flex-col relative overflow-hidden">
                {/* Scrollable Content */}
                <main className="flex-1 overflow-y-auto pt-24 md:pt-12 px-6 md:px-12 pb-32">
                    <div className="max-w-[1000px] w-full mx-auto">
                        
                        {/* Header */}
                        <div className="mb-8">
                            <button 
                                onClick={() => navigate(-1)} 
                                className="flex items-center gap-2 font-bold text-[13px] text-[#64748B] hover:text-[#0F172A] transition-colors mb-6"
                            >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="19" y1="12" x2="5" y2="12"></line>
                                    <polyline points="12 19 5 12 12 5"></polyline>
                                </svg>
                                Back to Applicants
                            </button>
                            <h3 className="font-sans font-[700] text-[14px] leading-none tracking-[0.5px] uppercase text-[#64748B] mb-3">
                                BASS • THE HIVE STUDIO
                            </h3>
                            <h1 className="text-[36px] md:text-[42px] font-black uppercase tracking-tighter leading-none text-[#0F172A]">
                                APPLICATION REVIEW
                            </h1>
                        </div>

                        {/* Content Grid */}
                        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-8 xl:gap-12">
                            
                            {/* Left: Applicant Profile */}
                            <div className="border border-[#E4E8F0] rounded-[8px] p-8 flex flex-col items-center bg-white shadow-sm">
                                <div className="w-[120px] h-[120px] rounded-full border-[3px] border-[#0F172A] overflow-hidden mb-5 bg-[#E2E2E2] flex items-center justify-center">
                                    <img src={applicant.img} alt={applicant.name} className="w-full h-full object-cover scale-[1.15]" />
                                </div>
                                <h2 className="font-black text-[24px] tracking-tight text-[#0F172A] mb-3">{applicant.name}</h2>
                                <div className="flex gap-2 mb-8">
                                    <span className="bg-[#F3F5F9] text-[#0F172A] font-bold text-[11px] px-3 py-1.5 rounded-[4px]">{applicant.shortExp}</span>
                                    <span className="bg-[#F3F5F9] text-[#0F172A] font-bold text-[11px] px-3 py-1.5 rounded-[4px]">{applicant.location}</span>
                                </div>

                                <div className="w-full border-t border-[#E4E8F0] mb-6"></div>

                                <div className="w-full space-y-6">
                                    <div>
                                        <h4 className="font-sans font-[700] text-[12px] leading-none tracking-[0px] uppercase text-[#64748B] mb-1.5">GEAR</h4>
                                        <p className="font-bold text-[14px] text-[#0F172A]">{applicant.gear}</p>
                                    </div>
                                    <div>
                                        <h4 className="font-sans font-[700] text-[12px] leading-none tracking-[0px] uppercase text-[#64748B] mb-1.5">GENRES</h4>
                                        <p className="font-bold text-[14px] text-[#0F172A]">{applicant.genres}</p>
                                    </div>
                                    <div>
                                        <h4 className="font-sans font-[700] text-[12px] leading-none tracking-[0px] uppercase text-[#64748B] mb-1.5">TOP TRACK</h4>
                                        <p className="font-bold text-[14px] text-[#0F172A]">{applicant.topTrack}</p>
                                    </div>
                                    <div>
                                        <h4 className="font-sans font-[700] text-[12px] leading-none tracking-[0px] uppercase text-[#64748B] mb-1.5">AVAILABILITY</h4>
                                        <p className="font-bold text-[14px] text-[#0F172A]">{applicant.availability}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Right: Notes & Media */}
                            <div className="flex flex-col gap-8">
                                
                                {/* Application Note */}
                                <div>
                                    <h3 className="flex items-center gap-2 font-black text-[13px] uppercase tracking-wide text-[#0F172A] mb-4">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                                        </svg>
                                        APPLICATION NOTE
                                    </h3>
                                    <div className="bg-[#F8F9FA] rounded-[8px] p-6 relative">
                                        <div className="absolute top-[-10px] left-4 text-[#E4E8F0] font-['Liberation_Serif'] font-[900] text-[80px] leading-none select-none">
                                            "
                                        </div>
                                        <p className="font-medium text-[15px] leading-relaxed text-[#0F172A] relative z-10 pl-6 pt-2">
                                            {applicant.pitch}
                                        </p>
                                    </div>
                                </div>

                                {/* Attached Media */}
                                <div>
                                    <h3 className="flex items-center gap-2 font-black text-[13px] uppercase tracking-wide text-[#0F172A] mb-4">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
                                        </svg>
                                        ATTACHED MEDIA
                                    </h3>
                                    
                                    {/* Audio Player Component */}
                                    <div className="bg-[#0F172A] rounded-[8px] p-5 flex items-center gap-5">
                                        <button className="w-[48px] h-[48px] rounded-full bg-[#356BFF] flex items-center justify-center shrink-0 hover:bg-[#244FC4] transition-colors">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="black" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                                                <polygon points="5 3 19 12 5 21 5 3"></polygon>
                                            </svg>
                                        </button>
                                        <div className="flex-1 overflow-hidden">
                                            <p className="text-white font-bold text-[13px] mb-2 truncate">{applicant.media}</p>
                                            {/* Audio Waveform */}
                                            <div className="w-[412px] max-w-full h-[32px] opacity-90 mt-2 flex items-center">
                                                <img src={frequencyIcon} alt="Audio frequency waveform" className="w-full h-full object-fill" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>

                        </div>
                    </div>
                </main>

                {/* Fixed Footer */}
                <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-[#E4E8F0] px-6 md:px-12 py-5 flex items-center justify-end gap-4 z-10">
                    <button className="w-[48px] h-[48px] flex items-center justify-center border-2 border-[#0F172A] rounded-[4px] hover:bg-gray-50 transition-colors">
                        <img src={chat2Icon} alt="Chat" className="w-[20px] h-[20px] object-contain" />
                    </button>
                    <button className="bg-[#F3F5F9] text-[#0F172A] font-black text-[13px] px-8 h-[48px] rounded-[4px] hover:bg-[#E4E8F0] transition-colors uppercase tracking-widest">
                        DECLINE
                    </button>
                    <button className="bg-[#356BFF] text-white font-black text-[13px] px-10 h-[48px] rounded-[4px] hover:bg-[#244FC4] transition-colors uppercase tracking-widest shadow-sm">
                        ACCEPT
                    </button>
                </div>
            </div>
        </div>
    );
}
