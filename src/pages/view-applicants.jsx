import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

import rohanImg from '../assets/musical_potrait.jpg';
import ananyaImg from '../assets/ananya.png';
import filterIcon from '../assets/music-icon.svg';
import locationIcon from '../assets/location-icon.svg';
import calanderIcon from '../assets/calander.svg';
import musicCircleIcon from '../assets/musicicon.png';
import messageIcon from '../assets/messageicon.png';

const APPLICANTS = [
    {
        id: 1,
        name: 'Rohan Bass',
        exp: '5 Yrs Exp • Funk, Jazz',
        shortExp: '5 Yrs Exp',
        location: 'Mumbai',
        pitch: "Hey guys, love your sound. I've got a Fender Jazz Bass and plenty of studio experience. I'm free on the 12th and live close to The Hive. Check out my audition tape below!",
        img: rohanImg,
        new: false,
        gear: 'Fender Jazz Bass, Ampeg PF-500',
        genres: 'Funk, Neo-Soul, Jazz Fusion',
        topTrack: 'Midnight Groove',
        availability: 'Weekends + Evenings',
        media: 'Slap_Bass_Demo_23.mp3'
    },
    {
        id: 2,
        name: 'Ananya V.',
        exp: '3 Yrs Exp • Rock, Indie',
        shortExp: '3 Yrs Exp',
        location: 'Delhi',
        pitch: "Super interested in this session. I’m free on the 12th. I play a solid rhythm guitar and have a home setup. Let me know if you need any samples.",
        img: ananyaImg,
        new: true,
        gear: 'Fender Stratocaster, Boss Katana 50',
        genres: 'Rock, Indie, Alternative',
        topTrack: 'City Lights Jam',
        availability: 'Evenings',
        media: 'Indie_Riff_Idea.wav'
    },
    {
        id: 3,
        name: 'Dev Singh',
        exp: '7 Yrs Exp • Metal, Prog',
        shortExp: '7 Yrs Exp',
        location: 'Bangalore',
        pitch: "Might be a bit heavy for what you want but I can adapt. I've got my own drum kit and can travel. Hit me up.",
        img: rohanImg,
        new: false,
        gear: 'Pearl Export, Zildjian Cymbals',
        genres: 'Metal, Prog Rock, Hard Rock',
        topTrack: 'Double Kick Madness',
        availability: 'Anytime',
        media: 'Drum_Cam_Live.mp4'
    }
];

export default function ViewApplicants() {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Use state if available, otherwise default to image content
    const position = location.state?.position || {
        role: 'BASSIST FOR\nSTUDIO\nSESH',
        band: 'The Hive Studio, Mumbai',
        time: 'Oct 12 • 2:00 PM',
        genres: 'Funk, Jazz, Soul'
    };

    return (
        <div className="flex min-h-screen bg-[#FFFFFF] font-sans text-[#0F172A]">
            <Sidebar />

            <main className="flex-1 flex flex-col lg:flex-row overflow-y-auto lg:overflow-hidden pt-16 md:pt-0">

                {/* ── LEFT PANEL ── */}
                <div className="w-full lg:w-[380px] px-6 md:px-12 py-6 lg:overflow-y-auto shrink-0 border-b lg:border-b-0 lg:border-r border-[#F0F0F0]">
                    <button
                        onClick={() => navigate('/discover')}
                        className="flex items-center gap-2 text-[15px] text-[#64748B] font-bold mb-6 hover:text-[#0F172A] transition-colors group"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="19" y1="12" x2="5" y2="12"></line>
                            <polyline points="12 19 5 12 12 5"></polyline>
                        </svg>
                        Back to Positions
                    </button>

                    <div className="mb-4">
                        <span className="bg-[#22C55E] text-white font-sans font-bold text-[13px] uppercase tracking-[2px] px-2.5 py-1 rounded-[2px] shadow-sm">
                            ACTIVE • OPEN
                        </span>
                    </div>

                    <p className="font-black text-[40px] md:text-[56px] font-sans font-extrabold uppercase leading-[0.95] tracking-tight mb-4 text-[#0F172A]">
                        {position.role || 'BASSIST FOR\nSTUDIO\nSESH'}
                    </p>

                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-3">
                            <img src={locationIcon} alt="Location" className="w-[18px] opacity-60 transition-opacity" style={{ filter: 'invert(46%) sepia(13%) saturate(693%) hue-rotate(178deg) brightness(95%) contrast(93%)' }} />
                            <p className="text-[17px] font-medium font-sans text-[#64748B]">{position.band || 'The Hive Studio, Mumbai'}</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <img src={calanderIcon} alt="Calendar" className="w-[18px] opacity-60 transition-opacity" style={{ filter: 'invert(46%) sepia(13%) saturate(693%) hue-rotate(178deg) brightness(95%) contrast(93%)' }} />
                            <p className="text-[17px] font-medium font-sans text-[#64748B]">{position.time || 'Oct 12 • 2:00 PM'}</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <img src={musicCircleIcon} alt="Music" className="w-[18px] opacity-60 transition-opacity" style={{ filter: 'invert(46%) sepia(13%) saturate(693%) hue-rotate(178deg) brightness(95%) contrast(93%)' }} />
                            <p className="text-[17px] font-medium font-sans text-[#64748B]">{position.genres || 'Funk, Jazz, Soul'}</p>
                        </div>
                    </div>
                </div>

                {/* ── RIGHT PANEL ── */}
                <div className="flex-1 bg-white lg:overflow-y-auto px-6 md:px-12 py-8 md:py-12">

                    {/* Header */}
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="font-sans font-extrabold text-[24px] font-sans uppercase text-black">3 APPLICANTS</h2>
                        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
                            </svg>
                        </button>
                    </div>
                    <div className="h-[2px] bg-[#0F172A] w-full mb-10" />

                    {/* Applicants List */}
                    <div className="flex flex-col gap-6">
                        {APPLICANTS.map((app) => (
                            <div key={app.id} className="bg-white border-[1px] border-[#F0F0F0] p-6 sm:p-8 rounded-[6px]">
                                <div className="flex items-center gap-3 mb-6 sm:mb-8">
                                    <div className="w-[60px] h-[60px] sm:w-[72px] sm:h-[72px] rounded-full overflow-hidden border-[3px] border-[#0F172A] shrink-0">
                                        <img src={app.img} alt={app.name} className="w-full h-full object-cover" />
                                    </div>
                                    <div className="overflow-hidden">
                                        <h3 className="font-black text-[20px] sm:text-[24px] font-sans font-extrabold text-[#0F172A] leading-none mb-1 truncate">{app.name}</h3>
                                        <div className="flex flex-wrap items-center gap-2">
                                            <p className="text-[13px] sm:text-[15px] font-medium font-sans tracking-widest text-[#64748B] truncate">{app.exp}</p>
                                            {app.new && (
                                                <span className="bg-[#F3F5F9] text-black font-sans font-bold text-[10px] uppercase tracking-widest px-2 py-0.5 shrink-0">
                                                    New
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-[#F3F5F9] border-l-[4px] border-l-[#356BFF] rounded-[4px] px-4 sm:px-6 py-4 sm:py-5 mb-6 sm:mb-8">
                                    <p className="text-[14px] sm:text-[16px] font-regular font-sans text-[#0F172A] leading-[1.6]">
                                        {app.pitch}
                                    </p>
                                </div>

                                <div className="flex gap-3 sm:gap-4">
                                    <button 
                                        onClick={() => navigate('/application-review', { state: { applicant: app } })}
                                        className="flex-1 bg-[#0F172A] text-white font-black text-[12px] sm:text-[14px] uppercase tracking-widest py-3 sm:py-4 hover:bg-[#2A2A2A] transition-all active:scale-[0.98]"
                                    >
                                        VIEW APP<span className="hidden sm:inline">LICATION</span>
                                    </button>
                                    <button 
                                        onClick={() => navigate('/messages')}
                                        className="w-[48px] h-[48px] sm:w-[56px] sm:h-[56px] border-[1.5px] border-[#0F172A] shrink-0 flex items-center justify-center hover:bg-[#F3F5F9] transition-colors active:scale-[0.95]"
                                    >
                                        <img src={messageIcon} alt="Message" className="w-[18px] h-[18px] sm:w-[20px] sm:h-[20px]" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </main>
        </div>
    );
}
