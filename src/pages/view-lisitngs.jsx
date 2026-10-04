import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

import neonDistrictImg from '../assets/neon-district.png';
import musicIcon from '../assets/music-icon.svg';
import voiceIcon from '../assets/voice-icon.svg';
import locationIcon from '../assets/location-icon.svg';

export default function ViewListings() {
    const navigate = useNavigate();
    const location = useLocation();

    // Accept position data passed via navigation state (from discover.jsx)
    const position = location.state?.position || {
        role: 'Lead\nGuitarist',
        label: 'We Need A',
        tags: ['Gig Ready', 'Pro Gear', 'Touring Exp'],
        color: '#356BFF',
        icon: musicIcon,
        band: 'NEON RIOT',
        location: 'Mumbai, Mir',
        img: neonDistrictImg,
    };

    const [pitch, setPitch] = useState('');
    const [experience, setExperience] = useState('3-5 years');
    const [availability, setAvailability] = useState('Most weeknights');
    const [demoFile, setDemoFile] = useState(null);
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const experienceOptions = ['Just starting out', '1-2 years', '3-5 years', '5+ years / touring'];
    const availabilityOptions = ['Most weeknights', 'Weekends only', 'Daytime', 'Flexible / ask me'];

    function handleSend() {
        setSubmitted(true);
    }

    if (submitted) {
        return (
            <div className="flex min-h-screen bg-[#FFFFFF] font-sans">
                <Sidebar />
                <main className="flex-1 flex items-center justify-center pt-16 md:pt-0">
                    <div className="text-center max-w-[420px] px-8">
                        <div className="w-20 h-20 bg-[#356BFF] border-[3px] border-[#0F172A] shadow-[6px_6px_0_0_#0F172A] flex items-center justify-center mx-auto mb-8">
                            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#0F172A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12" />
                            </svg>
                        </div>
                        <h1 className="font-black text-[42px] uppercase leading-none tracking-tight text-[#0F172A] mb-4">
                            Application<br />Sent!
                        </h1>
                        <p className="font-medium text-[16px] text-[#64748B] mb-10">
                            {position.band} will review your pitch and get back to you soon.
                        </p>
                        <button
                            onClick={() => navigate('/discover')}
                            className="bg-[#356BFF] border-[3px] border-[#0F172A] font-bold text-[14px] uppercase px-8 py-4 text-[#0F172A] shadow-[6px_6px_0_0_#0F172A] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_#0F172A] transition-all"
                        >
                            Back to Discover
                        </button>
                    </div>
                </main>
            </div>
        );
    }

    return (
        <div className="flex min-h-screen bg-[#FFFFFF] font-sans text-[#0F172A]">
            <Sidebar />

            <main className="flex-1 overflow-y-auto pt-16 md:pt-0">

                {/* Top bar */}
                <div className="px-4 md:px-10 pt-6 md:pt-8 pb-0">
                    <button
                        onClick={() => navigate('/discover')}
                        className="flex items-center gap-2 font-medium text-[13px] text-[#64748B] bg-[#F2F2F2] hover:bg-[#E4E8F0] hover:text-[#0F172A] transition-colors rounded-full px-4 py-2 mb-8"
                    >
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="15 18 9 12 15 6" />
                        </svg>
                        Back to Listing
                    </button>
                </div>

                {/* Main Content */}
                <div className="px-4 md:px-10 pb-16 max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-[250px_1fr] lg:grid-cols-[300px_1fr] gap-8 md:gap-12">

                    {/* ── LEFT PANEL ── */}
                    <div className="flex flex-col gap-8 pt-2">

                        {/* Band Identity Row */}
                        <div className="flex items-center gap-4">
                            {/* Circular avatar */}
                            <div className="w-[72px] h-[72px] rounded-full overflow-hidden border-[2.5px] border-[#0F172A] shrink-0">
                                <img src={position.img} alt={position.band} className="w-full h-full object-cover" />
                            </div>
                            <div>
                                <p className="font-black text-[18px] uppercase leading-none tracking-tight text-[#0F172A]">
                                    {position.band}
                                </p>
                                <p className="font-medium text-[13px] text-[#64748B] mt-[3px]">
                                    {position.location}
                                </p>
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="h-[2px] bg-[#F3F5F9]" />

                        {/* Applying For + Role */}
                        <div>
                            <p className="font-black text-[12px] uppercase font-sans font-extrabold tracking-[1px] text-[#356BFF] mb-3">
                                Applying For
                            </p>
                            <h2 className="font-black text-[40px] md:text-[56px] uppercase leading-[0.95] tracking-tight text-[#0F172A] mb-6">
                                {position.role.split('\n').map((line, i) => (
                                    <span key={i} className="block">{line}</span>
                                ))}
                            </h2>

                            {/* Tag pills */}
                            <div className="flex flex-wrap gap-2">
                                {position.tags.map(tag => (
                                    <span
                                        key={tag}
                                        className="bg-[#0F172A] text-white rounded-[6px] font-bold text-[14px] tracking-wider px-4 py-[7px]"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                    </div>

                    {/* ── RIGHT PANEL ── */}
                    <div className="flex flex-col gap-8">

                        {/* THE PITCH */}
                        <div>
                            <label className="block font-sans font-extrabold text-[13px] uppercase tracking-widest text-black mb-3">
                                The Pitch
                            </label>
                            <textarea
                                value={pitch}
                                onChange={e => setPitch(e.target.value)}
                                placeholder="Hey! I've been playing for 5 years, got my own transport and a solid pedalboard. Let's jam?"
                                rows={5}
                                className="w-full border border-gray-200 border-l-[4px] border-l-[#356BFF] bg-[#F3F5F9] pl-5 pr-4 py-5 font-sans font-medium text-[16px] leading-[28.8px] align-middle text-[#0F172A] placeholder:text-[#ADADAD] resize-none outline-none focus:bg-white transition-colors"
                            />
                        </div>

                        {/* EXPERIENCE */}
                        <div>
                            <label className="block font-sans font-extrabold text-[13px] uppercase tracking-widest text-black mb-3">
                                Experience For This Role
                            </label>
                            <div className="flex flex-wrap gap-3">
                                {experienceOptions.map(opt => (
                                    <button
                                        key={opt}
                                        onClick={() => setExperience(opt)}
                                        className={`font-bold text-[13px] uppercase tracking-wide px-4 py-[9px] border-[2.5px] rounded-[6px] transition-all ${experience === opt
                                            ? 'bg-[#356BFF] text-white border-[#0F172A] shadow-[3px_3px_0_0_#0F172A]'
                                            : 'bg-white text-[#0F172A] border-gray-200 hover:bg-[#F3F5F9]'
                                            }`}
                                    >
                                        {opt}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* AVAILABILITY */}
                        <div>
                            <label className="block font-sans font-extrabold text-[13px] uppercase tracking-widest text-black mb-3">
                                Availability This Week
                            </label>
                            <div className="flex flex-wrap gap-3">
                                {availabilityOptions.map(opt => (
                                    <button
                                        key={opt}
                                        onClick={() => setAvailability(opt)}
                                        className={`font-bold text-[13px] uppercase tracking-wide px-4 py-[9px] border-[2.5px] rounded-[6px] transition-all ${availability === opt
                                            ? 'bg-[#356BFF] text-white border-[#0F172A] shadow-[3px_3px_0_0_#0F172A]'
                                            : 'bg-white text-[#0F172A] border-gray-200 hover:bg-[#F3F5F9]'
                                            }`}
                                    >
                                        {opt}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* SHOW YOUR CHOPS */}
                        <div>
                            <label className="block font-sans font-extrabold text-[13px] uppercase tracking-widest text-black mb-3">
                                Show Your Chops
                            </label>
                            <label
                                htmlFor="demo-upload"
                                className="flex items-center justify-between border-[2.5px] border-dashed border-[#D1D5DB] rounded-xl bg-white px-6 py-5 cursor-pointer hover:border-[#64748B] transition-colors group"
                            >
                                <div className="flex items-center gap-4">
                                    {/* music note icon */}
                                    <div className="w-16 h-16 rounded-full border-[2px] border-[#0F172A] flex items-center justify-center bg-white shrink-0">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0F172A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M9 18V5l12-2v13" />
                                            <circle cx="6" cy="18" r="3" />
                                            <circle cx="18" cy="16" r="3" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="font-bold text-[14px] text-[#0F172A]">
                                            {demoFile ? demoFile.name : 'Attach Demo'}
                                        </p>
                                        <p className="font-medium text-[12px] text-[#64748B]">
                                            {demoFile ? 'File attached ✓' : 'Upload audio, video, or paste a link'}
                                        </p>
                                    </div>
                                </div>
                                <div className="w-9 h-9 rounded-full flex items-center justify-center bg-[#F3F5F9] group-hover:border-[#0F172A] transition-colors">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0F172A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="12" y1="5" x2="12" y2="19" />
                                        <line x1="5" y1="12" x2="19" y2="12" />
                                    </svg>
                                </div>
                            </label>
                            <input
                                id="demo-upload"
                                type="file"
                                accept="audio/*,video/*"
                                className="hidden"
                                onChange={e => setDemoFile(e.target.files?.[0] || null)}
                            />
                        </div>

                        {/* ACTION BUTTONS */}
                        <div className="flex flex-col-reverse sm:flex-row items-center justify-between pt-4 border-t-[2px] border-[#F3F5F9] mt-2 gap-4">
                            <button
                                onClick={() => navigate('/discover')}
                                className="font-bold text-[13px] w-full sm:w-auto uppercase tracking-widest text-[#64748B] hover:text-[#0F172A] transition-colors py-4 sm:py-0"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleSend}
                                className="bg-[#356BFF] border-[3px] w-full sm:w-auto flex-1 border-[#0F172A] font-black text-[15px] uppercase tracking-wider px-6 md:px-10 py-4 text-[#0F172A] shadow-[4px_4px_0_0_#0F172A] md:shadow-[6px_6px_0_0_#0F172A]"
                            >
                                Send Application
                            </button>
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
}
