import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import searchIcon from '../assets/searchicon.png';

export default function MakeItOfficial() {
    const navigate = useNavigate();
    const [university, setUniversity] = useState('');
    const [email, setEmail] = useState('');

    return (
        <div className="min-h-screen bg-white font-sans text-[#0F172A] relative flex flex-col overflow-x-hidden">
            
            {/* Top Left Back Button */}
            <div className="absolute top-6 left-6 sm:top-8 sm:left-8 md:top-12 md:left-12">
                <button 
                    onClick={() => navigate(-1)} 
                    className="flex items-center gap-3 font-bold text-[14px] uppercase tracking-[0.05em] text-[#0F172A] hover:text-[#52525B] transition-colors"
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="19" y1="12" x2="5" y2="12"></line>
                        <polyline points="12 19 5 12 12 5"></polyline>
                    </svg>
                    BACK
                </button>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col items-center justify-center px-6 sm:px-8 py-28 sm:py-24 md:py-20 mt-12 md:mt-0">
                <div className="w-full max-w-[520px]">
                    
                    <h1 className="text-[50px] sm:text-[60px] md:text-[68px] font-black uppercase tracking-tighter leading-[0.9] text-[#0F172A] mb-4 sm:mb-5">
                        MAKE IT<br/>OFFICIAL
                    </h1>
                    
                    <p className="text-[14px] sm:text-[15px] md:text-[16px] text-[#52525B] font-medium leading-[1.45] mb-10 sm:mb-12 max-w-[380px]">
                        Verify your student status to find musicians<br className="hidden sm:block"></br> on campus and unlock exclusive uni gigs.
                    </p>

                    <div className="space-y-8">
                        {/* University Input */}
                        <div>
                            <label className="block text-[11px] font-[800] uppercase tracking-[0.08em] text-[#0F172A] mb-3">
                                FIND YOUR UNIVERSITY
                            </label>
                            <div className="relative">
                                <svg className="absolute left-0 top-1/2 -translate-y-1/2 w-[22px] sm:w-[26px] h-[22px] sm:h-[26px] text-[#757575]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                </svg>
                                <input 
                                    type="text" 
                                    placeholder="Search..." 
                                    value={university}
                                    onChange={(e) => setUniversity(e.target.value)}
                                    className="w-full h-[56px] sm:h-[69px] bg-transparent border-b-[3px] border-[#0F172A14] pt-[12px] sm:pt-[16px] pb-[12px] sm:pb-[16px] pl-[36px] sm:pl-[40px] pr-4 font-sans font-[700] text-[22px] sm:text-[28px] leading-none tracking-[0px] text-[#757575] focus:outline-none focus:border-[#0F172A] transition-colors placeholder:text-[#757575]"
                                />
                            </div>
                        </div>

                        {/* Email Input */}
                        <div>
                            <label className="block text-[11px] font-[800] uppercase tracking-[0.08em] text-[#0F172A] mb-3">
                                UNIVERSITY EMAIL
                            </label>
                            <div className="relative">
                                <input 
                                    type="email" 
                                    placeholder="you@student.edu" 
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full h-[56px] sm:h-[69px] bg-transparent border-b-[3px] border-[#0F172A14] pt-[12px] sm:pt-[16px] pb-[12px] sm:pb-[16px] pl-0 pr-4 font-sans font-[700] text-[22px] sm:text-[28px] leading-none tracking-[0px] text-[#757575] focus:outline-none focus:border-[#0F172A] transition-colors placeholder:text-[#757575]"
                                />
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="pt-6 relative">
                            <button className="w-full bg-[#0F172A] text-white text-[13px] font-bold uppercase tracking-[0.02em] py-[18px] px-6 transition-transform active:translate-y-1 active:translate-x-1 hover:bg-[#1a1a1e] border-[1px] border-[#0F172A] shadow-[4px_4px_0px_0px_#0F172A]">
                                SEND VERIFICATION LINK
                            </button>
                        </div>
                        
                        {/* Footer text */}
                        <p className="font-sans font-[400] text-[14px] leading-[21px] tracking-[0px] text-center text-[#777777] pt-3 px-2">
                            We'll send a magic link to your inbox. You must have access to this email address to verify.
                        </p>
                    </div>

                </div>
            </div>

        </div>
    );
}
