import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import musicianPortrait from '../assets/musical_potrait.jpg';
import marcus from '../assets/marcus.png';
import liam from '../assets/liam.png';
import maya from '../assets/maya.png';
import concert from '../assets/concert.jpg';
import studio_img from '../assets/Studio.png';
import activeIcon from '../assets/activeicon.svg';
import graduationIcon from '../assets/graduationhat.svg';
import locationIcon from '../assets/locationicon.svg';
import arrowIcon from '../assets/arrow.svg';
import studio_session from '../assets/studio-session.png';
import mic from '../assets/mic.jpg';
import dgVibe from '../assets/dg-vibe.png';


export default function Profile() {
    return (
        <div className="flex h-screen overflow-hidden font-sans bg-[#fcfcfc]">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto custom-scrollbar px-6 md:px-10 pt-24 md:pt-10 pb-20 bg-white">
                <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-8 lg:gap-12">

                    {/* Left Column - Profile Card */}
                    <div className="space-y-6">
                        <div className="relative">
                            <span className="bg-black text-white text-[11px] font-black tracking-widest px-3 py-1 uppercase absolute -top-8 left-0 -rotate-1">GUITARIST</span>
                            <h1 className="text-[48px] md:text-[64px] font-black font-Ibrand leading-[0.8] mb-8 tracking-tighter uppercase text-[#0F172A]">
                                ARIYA<br />SINGH
                            </h1>

                            <div className="relative w-full max-w-[380px] aspect-[4/5] bg-[#FFFFFF01] border-[2px] border-[#0F172A14] shadow-[6px_6px_0_0_#0F172A] md:shadow-[8px_8px_0_0_#0F172A] overflow-hidden">
                                <img src={musicianPortrait} alt="Ariya Singh" className="w-full h-full object-cover grayscale" />

                                {/* Image Tags */}
                                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                                    <div className="bg-[#356BFF] text-white font-black text-[13px] px-3 py-2 leading-none uppercase border-[2px] border-black">
                                        23 Y/O
                                    </div>
                                    <div className="bg-[#FFFFFF] text-black font-bold text-[11px] px-3 py-2 leading-none flex items-center gap-1.5 shadow-lg border border-black border-[2px]">
                                        <img src={locationIcon} alt="Location" className="w-3.5 h-3.5 object-contain" />
                                        BRISTOL
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-2 justify-between items-center py-4 border-y-2 border-gray-100">
                            <div className="text-[12px] font-black font-extrabold font-sans tracking-widest text-[#0F172A] uppercase">142 CONNECTIONS</div>
                            <div className="flex items-center gap-2 text-[14px] font-black font-bold font-sans  text-[#356BFF] uppercase">
                                <img src={activeIcon} alt="Active" className="w-4 h-4 object-contain" />
                                ACTIVE NOW
                            </div>
                        </div>

                        <div className="space-y-3 pt-2 font-Liberation">
                            <button className="w-full bg-[#0F172A] py-4 hover:bg-black transition-all font-['Liberation_Sans'] font-[800] text-[16px] leading-none tracking-normal text-center uppercase text-[#FFFFFF]">CONNECT</button>
                            <Link to="/messages" className="block w-full bg-white py-4 border-[2px] border-black hover:bg-gray-50 transition-all font-['Liberation_Sans'] font-[800] text-[16px] leading-none tracking-normal text-center uppercase text-[#0F172A]">MESSAGE</Link>
                            <button className="w-full bg-[#356BFF] py-4 border-[2px] border-black  hover:bg-[#244FC4] transition-all font-['Liberation_Sans'] font-[800] text-[16px] leading-none tracking-normal text-center uppercase text-[#FFFFFF]">INVITE TO BAND</button>
                        </div>
                    </div>

                    {/* Right Column - Details */}
                    <div className="space-y-12">
                        {/* Bio Section */}
                        <div className="relative pl-6 md:pl-8 border-l-[6px] border-[#356BFF]">
                            <p className="text-[22px] md:text-[28px] font-bold font-sans leading-tight text-[#0F172A] tracking-tight">
                                Self-taught riff machine obsessed with 90s shoegaze and modern noise rock. Looking for a drummer who hits hard.
                            </p>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 pt-4">
                            <div className="space-y-2">
                                <h4 className="text-[12px] font-sans tracking-wider font-black font-ExtraBold  text-[#888888] uppercase">INSTRUMENTS</h4>
                                <p className="text-[15px] font-sans font-bold text-[#0F172A] leading-snug">Electric Guitar, Bass, Synth, Backing Vocals</p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-[12px] font-sans tracking-wider font-black font-ExtraBold  text-[#888888] uppercase">GENRES</h4>
                                <p className="text-[15px] font-sans font-bold text-[#0F172A] leading-snug">Indie Rock, Punk, Shoegaze, Noise, Alt-Pop</p>
                            </div>
                        </div>

                        {/* Education */}
                        <div className="space-y-2">
                            <h4 className="text-[12px] font-sans tracking-wider font-black font-ExtraBold  text-[#888888] uppercase">EDUCATION</h4>
                            <div className="w-fit bg-[#D32F2F] text-white p-4 pr-8 flex items-center gap-5 rounded-[12px] relative group cursor-pointer shadow-[6px_6px_0px_rgba(0,0,0,0.6)]">
                                <div className="w-12 h-12 border border-white/50 rounded-full flex items-center justify-center shrink-0">
                                    <img src={graduationIcon} alt="Graduation" className="w-6 h-6 object-contain brightness-0 invert" />
                                </div>
                                <div className="leading-tight">
                                    <p className="text-[12px] font-sans font-bold uppercase tracking-widest opacity-90">University</p>
                                    <p className="text-[20px] font-sans font-bold">Mumbai School of Music</p>
                                </div>
                            </div>
                        </div>

                        {/* Affiliated Bands */}
                        <div className="space-y-4">
                            <h4 className="text-[12px] font-black font-sans tracking-wider  text-[#64748B] uppercase">AFFILIATED BANDS</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    { name: 'The Neon Riot', role: 'GUITARIST', img: liam },
                                    { name: 'Sunday Service', role: 'LEAD SINGER', img: maya }
                                ].map((band, idx) => (
                                    <Link key={idx} to="/discover" className="border border-gray-100 p-5 flex items-center gap-4 hover:border-black transition-all cursor-pointer group bg-white relative">
                                        <div className="w-16 h-16 rounded-full overflow-hidden shrink-0 border border-gray-100">
                                            <img src={band.img} className="w-full h-full object-cover grayscale" alt={band.name} />
                                        </div>
                                        <div className="flex-1">
                                            <h5 className="text-[18px] font-bold text-[#0F172A] leading-tight mb-1">{band.name}</h5>
                                            <span className="bg-[#F3F5F9] text-[#0F172A] text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider border border-gray-100">
                                                {band.role}
                                            </span>
                                        </div>
                                        <img src={arrowIcon} alt="Arrow" className="w-5 h-5 object-contain opacity-40 group-hover:opacity-100 transition-all group-hover:translate-x-1" />
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Gear Grid */}
                        <div className="space-y-4">
                            <h4 className="text-[12px] font-black font-sans tracking-wider  text-[#64748B] uppercase">GEAR & SETUP</h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    { title: 'Guitars', tags: ['GIBSON LES PAUL STANDARD', 'SQUIER JAZZMASTER'] },
                                    { title: 'Pedals & FX', tags: ['OVERDRIVE', 'FUZZ', 'DELAY', 'REVERB'] },
                                    { title: 'Drums / Kits', tags: ['LUDWIG 4-PIECE KIT', 'HYBRID TRIGGERS'] },
                                    { title: 'Backline notes', tags: ['OWN AMP', 'CAN SHARE PEDALS', 'COMFORTABLE ON HOUSE KIT'] }
                                ].map((item, idx) => (
                                    <div key={idx} className="border border-gray-100 p-3 bg-white space-y-4">
                                        <h5 className="text-[#0F172A] font-sans font-[800] text-[18px] leading-none tracking-normal">{item.title}</h5>
                                        <div className="flex flex-wrap gap-2">
                                            {item.tags.map(tag => (
                                                <span key={tag} className="bg-[#F3F5F9] text-[#0F172A] font-sans font-[800] text-[11px] leading-none tracking-normal px-3 py-1.5 rounded-full uppercase border border-gray-100">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Sound & Vision */}
                        <div className="space-y-6 pt-4">
                            <div className="flex flex-wrap gap-4 justify-between items-end">
                                <h4 className="bg-black text-white text-[16px] font-sans font-extrabold font-black px-4 py-2 uppercase transform inline-block rotate-1">SOUND & VISION</h4>
                                <Link to="/user-drops" className="text-[11px] font-black tracking-widest uppercase border-b-2 border-black">VIEW ALL MEDIA</Link>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                <div className="aspect-video bg-gray-100 overflow-hidden border-2 border-black hover:translate-y-[-4px] transition-transform cursor-pointer ">
                                    <img src={mic} alt="Media" className="w-full h-full object-cover" />
                                </div>
                                <div className="aspect-video bg-gray-100 overflow-hidden border-2 border-black hover:translate-y-[-4px] transition-transform cursor-pointer ">
                                    <img src={studio_img} alt="Media" className="w-full h-full object-cover" />
                                </div>
                                <div className="aspect-video bg-gray-100 overflow-hidden border-2 border-black hover:translate-y-[-4px] transition-transform cursor-pointer ">
                                    <img src={dgVibe} alt="Media" className="w-full h-full object-cover" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <style dangerouslySetInnerHTML={{
                __html: `
                .custom-scrollbar::-webkit-scrollbar {
                    width: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #e5e7eb;
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: #356BFF;
                }
            `}} />
        </div>
    );
}
