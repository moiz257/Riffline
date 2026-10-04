import React from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

import marcusImg from '../assets/marcus.png';
import saraImg from '../assets/sara.png';
import pfpImg from '../assets/pfp.png';
import profileImg from '../assets/profile.png';
import studioSessionImg from '../assets/studio-session.png';
import bandSingingImg from '../assets/band-singing.jpg';
import StudioImg from '../assets/Studio.png';
import concertImg from '../assets/concert.jpg';
import musicalPortraitImg from '../assets/musical_potrait.jpg';

import velvetNoiseImg from '../assets/velvet-noise.png';
import staticVoidImg from '../assets/static-void.png';
import staticVoidBgImg from '../assets/static-void-bg.png';
import riffRaffImg from '../assets/riff-raff.png';
import pedalDropImg from '../assets/pedal-drop.png';
import mariaImg from '../assets/maria.png';
import locationIcon from '../assets/location-icon.svg';
import fingerIcon from '../assets/finger.svg';
import chat2Icon from '../assets/chat-2.svg';

import arjunImg from '../assets/arjun.png';
import niaImg from '../assets/nia.png';
import liamImg from '../assets/liam.png';
import yukiImg from '../assets/yuki.png';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen bg-[#FFFFFF] font-sans text-brand-dark">
      {/* Reusable Sidebar */}
      <Sidebar />

      {/* Main Feed */}
      <main className="flex-1 w-full max-w-[800px] bg-white min-h-screen pb-20 ml-0 md:ml-20 mx-auto pt-16 md:pt-0">
        
        {/* Header */}
        <div className="px-4 md:px-8 py-6 md:py-8 bg-white sticky top-16 md:top-0 z-10 flex justify-between items-start">
          <div>
            <p className="font-bold text-[16px] leading-none tracking-normal uppercase text-[#356BFF] mb-2">Today in London</p>
            <h2 className="text-[40px] md:text-[64px] font-black leading-[1] md:leading-[54.4px] tracking-[-3px] uppercase align-middle text-[#0F172A]">The<br/>Scene</h2>
          </div>
          <button className="p-2 border-[2px] border-brand-dark rounded-full hover:bg-gray-100 transition-colors md:mt-20">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
            </svg>
          </button>
        </div>

        {/* Post 1: Opportunity */}
        <div className="m-4 md:m-8 min-h-[288px] h-auto pt-[31px] px-6 md:px-[32px] pb-[32px] flex flex-col gap-[15px] rounded-[6px] bg-[#0F172A] text-white shadow-[4px_4px_0_0_#356BFF] md:shadow-[6px_6px_0_0_#356BFF]">
          <div>
            <div className="bg-[#356BFF] text-brand-dark text-[11px] font-black tracking-widest uppercase w-[81.24px] h-[29px] pt-[6px] pr-[12px] pb-[6px] pl-[12px] border-[1px] border-[#FFFFFF] inline-flex items-center justify-center -rotate-2">OPENING</div>
          </div>
          <h3 className="font-extrabold text-[24px] md:text-[32px] leading-tight md:leading-[35.2px] tracking-normal uppercase text-white">Keys Player Needed For Psych Rock Project</h3>
          <p className="font-normal text-[16px] leading-none tracking-normal text-white opacity-50">Neon District • Gigging Level</p>
          
          <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-700/50">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate('/profile')}>
              <img src={velvetNoiseImg} className="w-8 h-8 rounded-full border-[1px] border-white object-cover" alt="Avatar" />
              <span className="font-bold text-sm tracking-wide">Velvet Noise</span>
            </div>
            <button 
              onClick={() => navigate('/view-listings')}
              className="font-bold text-[13px] tracking-[0.1em] flex items-center gap-2 hover:text-[#356BFF] transition-colors uppercase"
            >
              Apply <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </button>
          </div>
        </div>

        {/* Post 2: Social */}
        <div className="m-4 md:m-8 border-2 border-[#0F172A] rounded-[6px] bg-[#FFFFFF] shadow-[4px_4px_0_0_#0F172A] md:shadow-[6px_6px_0_0_#0F172A] flex flex-col h-auto md:h-[760px] overflow-hidden">
          <div className="w-full h-[74px] px-[24px] py-[16px] flex justify-between items-center bg-[#FFFFFF] shrink-0">
            <div className="flex items-center gap-[16px] cursor-pointer" onClick={() => navigate('/discover')}>
              <img src={staticVoidImg} className="w-10 h-10 rounded-full border-1 border-[#0F172A] object-cover" alt="Avatar" />
              <span className="font-extrabold text-[15px] text-[#0F172A]">Static Void</span>
            </div>
            <span className="text-gray-400 text-[13px] font-bold">2h ago</span>
          </div>
          <div className="flex-1 w-full border-b-2 border-[#0F172A] bg-gray-200 overflow-hidden h-[300px] md:h-auto min-h-[300px]">
            <img src={staticVoidBgImg} className="w-full h-full object-cover" alt="Studio" />
          </div>
          <div className="p-5">
            <div className="flex gap-5 mb-4 text-brand-dark">
              {/* Like Icon */}
              <button className="hover:opacity-70 transition-opacity">
                <img src={fingerIcon} alt="Like" className="w-[26px] h-[26px]" />
              </button>
              {/* Comment Icon */}
              <button className="hover:opacity-70 transition-opacity">
                <img src={chat2Icon} alt="Comment" className="w-[26px] h-[26px]" />
              </button>
              {/* Share Icon */}
              <button className="ml-auto hover:text-brand-orange transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
              </button>
            </div>
            <p className="text-[15px] font-medium leading-relaxed">
              <span className="font-extrabold mr-2 cursor-pointer hover:underline" onClick={() => navigate('/discover')}>Static Void</span>
              Last night at The Basement was electric. Big love to everyone who came out.
            </p>
          </div>
        </div>

        {/* Post 3: Promoted/Ad */}
        <div className="m-4 md:m-8 border-2 border-[#0F172A] rounded-[6px] bg-[#FFF8F0] shadow-[4px_4px_0_0_#0F172A] md:shadow-[6px_6px_0_0_#0F172A] flex flex-col h-auto md:h-[280px] overflow-hidden">
          <div className="w-full min-h-[58px] py-[12px] px-4 md:px-[24px] flex flex-wrap gap-2 justify-between items-center bg-[#FFFFFF] border-b-2 border-[#0F172A] shrink-0">
            <div className="flex items-center gap-[12px]">
              <img src={riffRaffImg} className="w-8 h-8 rounded-full border-2 border-[#0F172A] object-cover" alt="Avatar" />
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-[6px]">
                <span className="font-extrabold text-[14px] leading-none text-[#0F172A]">Riff Raff Audio</span>
                <span className="font-normal text-[10px] sm:text-[12px] leading-none uppercase text-[#64748B] tracking-normal">Sponsored • Local shop</span>
              </div>
            </div>
            <span className="font-bold text-[11px] leading-none tracking-[1px] uppercase text-[#64748B]">Ad</span>
          </div>
          <div className="p-4 md:p-5 border-b-2 border-[#0F172A] flex-1 flex flex-col sm:flex-row gap-4 md:gap-6 items-start sm:items-center">
            <img src={pedalDropImg} className="w-full sm:w-[96px] h-[160px] sm:h-[120px] object-cover border border-[#0F172A] rounded-[4px]" alt="Pedal" />
            <div className="flex flex-col justify-center py-1">
              <h4 className="font-extrabold text-[20px] leading-none tracking-normal uppercase text-[#0F172A] mb-2">Pedal Drop This Week</h4>
              <p className="font-normal text-[15px] leading-[21px] tracking-normal text-[#64748B] mb-3 md:pr-4">Fresh crate of vintage pedals just landed. 15% off for Riffline members this week.</p>
              <button className="font-bold text-[14px] leading-none tracking-normal text-[#356BFF] text-left flex items-center gap-1.5 hover:underline w-max">
                Visit shop <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
              </button>
            </div>
          </div>
          <div className="px-4 md:px-5 py-3 flex flex-wrap gap-2 justify-between items-center font-normal text-[13px] leading-none tracking-normal text-[#0F172A] mt-auto">
            <span>Camden • 0.8 km away</span>
            <span>Open til 9pm</span>
          </div>
        </div>

        {/* Post 4: Social */}
        <div className="m-4 md:m-8 border-2 border-[#0F172A] rounded-[6px] bg-[#FFFFFF] shadow-[4px_4px_0_0_#0F172A] md:shadow-[6px_6px_0_0_#0F172A] flex flex-col mb-12 h-auto md:h-[711px] overflow-hidden">
          <div className="px-5 py-4 flex justify-between items-center shrink-0">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate('/profile')}>
              <img src={mariaImg} className="w-9 h-9 rounded-full border-1 border-[#0F172A] object-cover" alt="Avatar" />
              <span className="font-extrabold text-[16px] leading-[24px] tracking-normal text-[#0F172A]">Maria S.</span>
            </div>
            <span className="text-gray-400 text-[13px] font-bold">5h ago</span>
          </div>
          <div className="w-full h-[300px] md:flex-1 md:h-auto min-h-0">
            <img src={StudioImg} className="w-full h-full object-cover" alt="Guitars" />
          </div>
          <div className="p-5 shrink-0">
            <div className="flex gap-5 mb-4 text-brand-dark">
              <button className="hover:opacity-70 transition-opacity">
                <img src={fingerIcon} alt="Like" className="w-[26px] h-[26px]" />
              </button>
              <button className="hover:opacity-70 transition-opacity">
                <img src={chat2Icon} alt="Comment" className="w-[26px] h-[26px]" />
              </button>
              <button className="ml-auto hover:text-brand-orange transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
              </button>
            </div>
            <p className="font-normal text-[16px] leading-none tracking-normal text-[#0F172A]">
              <span className="font-extrabold text-[16px] leading-[24px] tracking-normal mr-2 cursor-pointer hover:underline" onClick={() => navigate('/profile')}>Maria S.</span>
              Finally finished tracking vocals. This new project is going to be <br></br>heavy.
            </p>
          </div>
        </div>

      </main>

      {/* Right Sidebar: New Nearby */}
      <aside className="w-[320px] p-8 hidden lg:block sticky top-0 h-screen overflow-y-auto ml-auto mr-12">
        <div className="flex items-center gap-2.5 mb-8">
          <img src={locationIcon} alt="Location" className="w-5 h-5" />
          <h3 className="font-black text-[18px] uppercase tracking-tight text-[#0F172A]">New Nearby</h3>
        </div>
        
        <div className="space-y-4">
          {[
            { name: "Arjun", instrument: "DRUMS", img: arjunImg },
            { name: "Nia", instrument: "VOCALS", img: niaImg },
            { name: "Liam", instrument: "BASS", img: liamImg },
            { name: "Yuki", instrument: "SYNTH", img: yukiImg },
          ].map((user, idx) => (
            <div key={idx} className="border-2 border-[#0F172A] rounded-[6px] bg-white p-[12px] flex justify-between items-center cursor-pointer hover:bg-gray-50 transition-colors" onClick={() => navigate('/profile')}>
              <div className="flex items-center gap-[12px]">
                <img src={user.img} className="w-11 h-11 rounded-[4px] border-[1px] border-[#0F172A] object-cover" alt="Avatar" />
                <div className="flex flex-col justify-center">
                  <p className="font-extrabold text-[16px] leading-none tracking-normal text-[#0F172A] mb-0.5">{user.name}</p>
                  <p className="font-semibold text-[12px] leading-none tracking-normal uppercase text-[#64748B]">{user.instrument}</p>
                </div>
              </div>
              <button className="text-gray-400 hover:text-[#0F172A] px-2 font-light text-[28px] leading-none transition-colors">
                +
              </button>
            </div>
          ))}
        </div>
      </aside>
    </div>
  );
}
