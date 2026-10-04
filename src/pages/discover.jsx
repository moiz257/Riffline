import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Discover2 from '../components/discover2';

import neonDistrictImg from '../assets/neon-district.png';
import locationIcon from '../assets/location-icon.svg';
import calanderIcon from '../assets/calander.svg';
import chatIcon from '../assets/chat-icon.svg';
import musicIcon from '../assets/music-icon.svg';
import blackMsgIcon from '../assets/black-msg.svg';
import tickIcon from '../assets/tick.svg';
import voiceIcon from '../assets/voice-icon.svg';

// Media images (placeholders based on available assets)
import studioSessionImg from '../assets/studio-session.png';
import mikeImg from '../assets/mike.png';
import dgVibeImg from '../assets/dg-vibe.png';
import grayscaleBandImg from '../assets/grayscale-band.png';
import pcRoomImg from '../assets/pc-room.png';
import staticVoidBgImg from '../assets/static-void-bg.png';
import musicalPotraitImg from '../assets/musical_potrait.jpg';

import ananyaImg from '../assets/ananya.png';
import rohanImg from '../assets/rohan.png';
import vikImg from '../assets/vik.png';
import sanaImg from '../assets/Sana.png';

// The Scene View Imports
import velvetNoiseImg from '../assets/velvet-noise.png';
import staticVoidImg from '../assets/static-void.png';
import riffRaffImg from '../assets/riff-raff.png';
import pedalDropImg from '../assets/pedal-drop.png';
import mariaImg from '../assets/maria.png';
import arjunImg from '../assets/arjun.png';
import niaImg from '../assets/nia.png';
import liamImg from '../assets/liam.png';
import yukiImg from '../assets/yuki.png';
import rightArrowIcon from '../assets/rightarrow.svg';
import fingerIcon from '../assets/finger.svg';
import chat2Icon from '../assets/chat-2.svg';
import arrowIcon from '../assets/arrow.svg';

export default function Discover() {
  const navigate = useNavigate();
  const [showScene, setShowScene] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#FFFFFF] font-sans text-brand-dark">
      <Sidebar />
      <main className="flex-1 overflow-y-auto pt-16 md:pt-0">
        {showScene ? (
          <Discover2 onClose={() => setShowScene(false)} />
        ) : (
          <>
            {/* Hero Section */}
            <div className="relative w-full h-[400px]">
          <img src={neonDistrictImg} alt="Hero" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
          
          <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 flex flex-col md:flex-row md:justify-between items-start md:items-end gap-6 md:gap-0">
            <div className="w-full md:w-auto">
              <h1 className="text-white font-black text-[48px] md:text-[72px] leading-none uppercase tracking-tight mb-4 md:mb-6">Neon District</h1>
              
              <div className="flex flex-wrap gap-2 md:gap-4 mb-4">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-3 md:px-4 py-1.5 md:py-2 rounded-[4px]">
                  <img src={locationIcon} className="w-3.5 h-3.5 md:w-4 md:h-4 invert brightness-0" alt="Location" />
                  <span className="font-bold text-[12px] md:text-[14px]">Mumbai, IN</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-3 md:px-4 py-1.5 md:py-2 rounded-[4px]">
                  <img src={calanderIcon} className="w-3.5 h-3.5 md:w-4 md:h-4 invert brightness-0" alt="Calendar" />
                  <span className="font-bold text-[12px] md:text-[14px]">Est. 2019</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 md:gap-3">
                {['SYNTH-POP', 'INDIE', 'ELECTRONIC'].map(tag => (
                  <span key={tag} className="border-2 border-white text-white font-bold text-[10px] md:text-[12px] uppercase tracking-wider px-2 md:px-3 py-1">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row w-full md:w-auto gap-4">
              <button className="w-full sm:w-[197.77px] h-[56px] bg-[#FFFFFF] border-[3px] border-[#FFFFFF] text-[#0F172A] font-[800] text-[16px] uppercase px-[32px] flex items-center justify-center gap-[10px] transition-transform hover:scale-105">
                <img src={tickIcon} alt="Tick" className="shrink-0 w-[18px] h-[18px]" />
                <span className="leading-none text-center tracking-[0px]">Following</span>
              </button>
              <button 
                onClick={() => navigate('/messages')}
                className="w-full sm:w-[211.86px] h-[56px] bg-[#356BFF] text-[#0F172A] font-[800] text-[16px] uppercase pt-[7px] pr-[47.92px] pb-[8px] pl-[32px] flex items-center justify-center sm:justify-start gap-[25.92px] border-[3px] border-[#0F172A] shadow-[6px_6px_0_0_#0F172A] transition-transform hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_#0F172A] active:translate-y-[4px] active:shadow-none"
              >
                <img src={blackMsgIcon} alt="Message" className="shrink-0 w-[18px] h-[18px]" />
                <span className="leading-none text-center tracking-[0px]">MESSAGE<br/>BAND</span>
              </button>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 md:p-12 max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-8 md:gap-16">
          
          {/* Left Column */}
          <div className="flex flex-col gap-8 md:gap-12">
            
            {/* Sounds & Sights */}
            <section>
              <div className="flex justify-between items-end w-full pb-[16px] border-b-[2px] border-[#F3F5F9] mb-6">
                <h2 className="font-sans font-black text-[24px] md:text-[28px] leading-none tracking-[-0.5px] uppercase text-[#0F172A]">Sounds & Sights</h2>
                <a href="#" onClick={(e) => { e.preventDefault(); setShowScene(true); }} className="font-bold text-[10px] md:text-[12px] text-[#64748B] uppercase tracking-wider hover:text-black transition-colors shrink-0">View All Media</a>
              </div>
              
              <div className="flex flex-col gap-4 md:gap-6 w-full">
                <div className="flex flex-col sm:flex-row gap-4 md:gap-6 h-auto sm:h-[240px]">
                  <div className="flex-1 w-full sm:w-auto h-[200px] sm:h-[240px] relative border-2 border-[#0F172A] bg-[#F3F5F9]">
                    <img src={staticVoidBgImg} className="w-full h-full object-cover" alt="Media" />
                    <div className="absolute top-4 right-4 bg-black/50 p-2 rounded-full backdrop-blur-sm text-white">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                    </div>
                  </div>
                  <div className="w-full sm:w-[200px] h-[200px] sm:h-[240px] shrink-0 relative border-2 border-[#0F172A] bg-[#F3F5F9]">
                    <img src={mikeImg} className="w-full h-full object-cover" alt="Media" />
                    <div className="absolute top-4 right-4 bg-black/50 p-2 rounded-full backdrop-blur-sm text-white">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 md:gap-6 h-auto sm:h-[240px]">
                  {[dgVibeImg, grayscaleBandImg, pcRoomImg].map((img, i) => (
                    <div key={i} className="flex-1 w-full sm:w-auto h-[200px] sm:h-[240px] relative border-2 border-[#0F172A] bg-[#F3F5F9]">
                      <img src={img} className="w-full h-full object-cover" alt="Media" />
                      <div className="absolute top-4 right-4 bg-black/50 p-2 rounded-full backdrop-blur-sm text-white">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
 
            {/* The Lineup */}
            <section>
              <h2 className="w-full font-black text-[24px] md:text-[28px] uppercase tracking-tight text-[#0F172A] border-b-2 border-[#F3F5F9] pb-[16px] mb-8">The Lineup</h2>
              <div className="flex flex-wrap justify-center sm:justify-between items-center gap-6 md:gap-4 px-0 sm:px-4">
                {[
                  { name: 'Ananya', role: 'VOCALS/KEYS', img: ananyaImg },
                  { name: 'Rohan', role: 'DRUMS', img: rohanImg },
                  { name: 'Vik', role: 'BASS', img: vikImg },
                  { name: 'Sana', role: 'MANAGER', img: sanaImg }
                ].map(member => (
                  <div key={member.name} className="flex flex-col items-center cursor-pointer group" onClick={() => navigate('/profile')}>
                    <img src={member.img} className="w-[100px] h-[100px] md:w-[120px] md:h-[120px] object-contain mb-4 transition-transform group-hover:scale-105" alt={member.name} />
                    <span className="font-extrabold text-[16px] md:text-[18px] text-[#0F172A] leading-none mb-1 group-hover:underline">{member.name}</span>
                    <span className="font-bold text-[10px] md:text-[12px] text-[#64748B] uppercase tracking-widest">{member.role}</span>
                  </div>
                ))}
              </div>
            </section>
            
          </div>

          {/* Right Column (Open Positions) */}
          <div className="flex flex-col gap-6">
            <h2 className="font-black text-[28px] uppercase tracking-tight text-[#0F172A] mb-2">Open Positions</h2>
            
            {/* Card 1 */}
            <div className="border-[3px] border-[#0F172A] bg-[#356BFF] p-8 shadow-[8px_8px_0_0_#0F172A] relative">
              <div className="flex justify-between items-start mb-8">
                <span className="bg-[#0F172A] text-white font-bold text-[11px] uppercase tracking-widest px-3 py-1">Position Open</span>
                <img src={musicIcon} alt="Music" className="w-6 h-6 object-contain" />
              </div>
              <p className="font-bold text-[13px] text-[#0F172A] uppercase tracking-widest mb-1">We Need A</p>
              <h3 className="font-black text-[36px] text-[#0F172A] leading-[1.1] uppercase tracking-tight mb-4">Lead<br/>Guitarist</h3>
              <p className="font-medium text-[15px] text-[#0F172A] leading-snug mb-8 pr-4">Must have own gear and be <br></br>available for weekend gigs. No<br></br> egos.</p>
              <button
                onClick={() => navigate('/view-listings', {
                  state: {
                    position: {
                      role: 'Lead\nGuitarist',
                      label: 'We Need A',
                      tags: ['Gig Ready', 'Pro Gear', 'Touring Exp'],
                      color: '#356BFF',
                      band: 'NEON RIOT',
                      location: 'Mumbai, IN',
                      img: neonDistrictImg,
                    }
                  }
                })}
                className="bg-white border-[3px] border-[#0F172A] font-bold text-[14px] uppercase px-6 py-3 hover:bg-gray-100 transition-colors text-[#0F172A]"
              >
                Apply Now
              </button>
            </div>

            {/* Card 2 */}
            <div className="w-full min-h-[390px] border-[3px] border-[#0F172A] bg-[#FFE3C4] p-8 shadow-[8px_8px_0_0_#0F172A] relative rotate-2">
              <div className="flex justify-between items-start mb-8">
                <span className="bg-[#0F172A] text-white font-bold text-[11px] uppercase tracking-widest px-3 py-1">Position Open</span>
                <img src={voiceIcon} alt="Voice" className="w-6 h-6 object-contain" />
              </div>
              <p className="font-sans font-bold text-[14px] leading-none tracking-[0px] text-[#0F172A] opacity-70 uppercase mb-1 inline-block -rotate-4">LOOKING FOR</p>
              <h3 className="font-black text-[36px] text-[#0F172A] leading-[1.1] uppercase tracking-tight mb-4">Backing<br/>Vocalist</h3>
              <p className="font-medium text-[15px] text-[#0F172A] leading-snug mb-8 pr-4">For festival season. Comfortable with harmonies and light synths. Paid shows.</p>
              <button
                onClick={() => navigate('/view-applicants', {
                  state: {
                    position: {
                      role: 'Backing\nVocalist',
                      label: 'Looking For',
                      tags: ['Harmonies', 'Synths', 'Paid Shows'],
                      color: '#FFE3C4',
                      band: 'NEON RIOT',
                      location: 'Mumbai, IN',
                      img: neonDistrictImg,
                    }
                  }
                })}
                className="bg-white border-[3px] border-[#0F172A] font-bold text-[14px] uppercase px-6 py-3 hover:bg-gray-100 transition-colors text-[#0F172A]"
              >
                Apply Now
              </button>
            </div>

          </div>

        </div>
        </>
        )}
      </main>
    </div>
  );
}
