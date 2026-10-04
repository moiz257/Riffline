import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import TagPeople from './tag-people';
import TagLocation from './tag-location';

// Assets
import studioImg from '../assets/Studio.png';
import locationIcon from '../assets/location-icon.svg';
import imageCrossIcon from '../assets/image-cross.png';

export default function AddMedia() {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('IMAGE');
    const [caption, setCaption] = useState('Just wrapped up a session at the hive. New noise coming soon. ⚡');
    const [isTagModalOpen, setIsTagModalOpen] = useState(false);
    const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);

    const tabs = ['VIDEO', 'IMAGE', 'AUDIO'];

    return (
        <div className="flex min-h-screen bg-white font-sans text-brand-dark">
            <Sidebar />

            {isTagModalOpen && (
                <div className="fixed inset-0 z-[100]">
                    <TagPeople onClose={() => setIsTagModalOpen(false)} />
                </div>
            )}

            {isLocationModalOpen && (
                <div className="fixed inset-0 z-[110]">
                    <TagLocation onClose={() => setIsLocationModalOpen(false)} />
                </div>
            )}

            <main className="flex-1 min-w-0 p-2 md:p-12 pt-24 md:pt-12 overflow-y-auto overflow-x-hidden">
                {/* Header */}
                <div className="flex justify-between items-center mb-6 md:mb-4">
                    <h1 className="text-[28px] md:text-[48px] font-heading font-black tracking-tighter uppercase leading-none truncate">
                        ADD MEDIA
                    </h1>
                    <button
                        onClick={() => navigate(-1)}
                        className="flex items-center gap-2 font-bold text-[13px] md:text-[14px] hover:opacity-70 transition-opacity shrink-0 ml-4"
                    >
                        CANCEL <span className="text-[16px] md:text-[18px]">✕</span>
                    </button>
                </div>

                <div className="h-[1.5px] bg-brand-gray w-full mb-8 md:mb-10" />

                {/* Tabs */}
                <div className="w-full relative mb-8 md:mb-10">
                    <div className="flex gap-2.5 overflow-x-auto no-scrollbar pb-1">
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-8 md:px-12 py-2.5 md:py-3.5 font-bold text-[12px] md:text-[14px] tracking-widest transition-all border-2 shrink-0 ${activeTab === tab
                                    ? 'bg-[#0F172A] text-white border-[#0F172A]'
                                    : 'bg-white text-brand-dark border-[#E4E8F0]'
                                    }`}
                                style={{
                                    boxShadow: activeTab === tab ? '4px 4px 0px #356BFF' : 'none'
                                }}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 max-w-full">
                    {/* Left Column: Image */}
                    <div className="flex-1 relative aspect-square bg-[#F3F3F3] border-[1px] border-black/10 overflow-hidden">
                        <img
                            src={studioImg}
                            alt="Studio Session"
                            className="w-full h-full object-cover"
                        />
                        <button
                            className="absolute bottom-6 right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center transition-transform hover:scale-105 active:scale-95 z-10"
                            style={{ boxShadow: '4px 4px 0px #0F172A' }}
                        >
                            <img src={imageCrossIcon} alt="Crop" className="w-8 h-8 object-contain" />
                        </button>
                    </div>

                    {/* Right Column: Metadata */}
                    <div className="w-full lg:w-[450px] flex flex-col">
                        {/* Caption Section */}
                        <div className="mb-2">
                            <label className="block text-[14px] font-extrabold text-[#64748B] font-sans uppercase tracking-[0.1em] mb-4">
                                CAPTION
                            </label>
                            <p className="text-[20px] font-medium leading-[1.5] text-[#0F172A] mb-4">
                                Just wrapped up a session at the hive. New noise coming soon. ⚡
                            </p>
                            <div className="h-[1.5px] bg-[#E4E8F0] w-full" />
                        </div>

                        {/* Person Tags Section */}
                        <div className="mb-4 flex items-center py-6 border-b border-[#E4E8F0]">
                            <div className="w-11 h-11 flex items-center justify-center bg-[#F8F8F8] border border-[#E4E8F0] rounded-[4px] mr-5 shrink-0">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2D2D2D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                    <circle cx="8.5" cy="7" r="4" />
                                    <line x1="20" y1="8" x2="20" y2="14" />
                                    <line x1="17" y1="11" x2="23" y2="11" />
                                </svg>
                            </div>
                            <div className="flex flex-wrap gap-2.5 items-center">
                                <div className="bg-brand-dark text-white px-4 py-2 rounded-full text-[13.5px] font-bold flex items-center gap-2 shadow-sm">
                                    @Rishi_Drums <span className="text-[#949494] text-[12px] cursor-pointer hover:text-white">✕</span>
                                </div>
                                <div className="bg-brand-dark text-white px-4 py-2 rounded-full text-[13.5px] font-bold flex items-center gap-2 shadow-sm">
                                    @Bass_Man <span className="text-[#949494] text-[12px] cursor-pointer hover:text-white">✕</span>
                                </div>
                                <button
                                    onClick={() => setIsTagModalOpen(true)}
                                    className="text-[#356BFF] font-black text-[13px] tracking-wider ml-3 hover:opacity-80"
                                >
                                    + ADD
                                </button>
                            </div>
                        </div>

                        {/* Location Section */}
                        <div className="mb-10 flex items-center py-6 border-b border-[#E4E8F0]">
                            <div className="w-11 h-11 flex items-center justify-center bg-[#F8F8F8] border border-[#E4E8F0] rounded-[4px] mr-5 shrink-0">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2D2D2D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                    <circle cx="12" cy="10" r="3" />
                                </svg>
                            </div>
                            <div className="flex flex-1 justify-between items-center">
                                <p className="text-[17px] font-bold text-brand-dark">The Hive Studio, Mumbai</p>
                                <button
                                    onClick={() => setIsLocationModalOpen(true)}
                                    className="text-[#356BFF] font-black text-[13px] tracking-wider hover:opacity-80"
                                >
                                    CHANGE
                                </button>
                            </div>
                        </div>

                        {/* Action Button */}
                        <div className="mt-8">
                            <button 
                                onClick={() => navigate('/profile')}
                                className="w-full bg-[#356BFF] text-white font-heading font-black text-[18px] uppercase font-bold font-[Liberation Sans] tracking-wider py-5 border-[3px] border-[#356BFF] shadow-[6px_6px_0_0_#0F172A] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_#0F172A] active:translate-x-[0px] active:translate-y-[0px] active:shadow-[4px_4px_0px_#0F172A] transition-all"
                            >
                                POST TO PROFILE
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
