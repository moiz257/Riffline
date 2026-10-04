import React from 'react';
import { useNavigate } from 'react-router-dom';

// Assets
import zadieImg from '../assets/zadie.png';
import alexImg from '../assets/alex.png';
import staticVoidCoverImg from '../assets/static-void-cover.png';
import drummerNeededImg from '../assets/drummer-needed.png';
import keyPlayersImg from '../assets/key-players.png';
import voiceIcon from '../assets/voice-icon.svg';
import studioVocalistIcon from '../assets/studio-vocalist.png';
import greyLocationIcon from '../assets/grey-location.svg';
import whiteLocationIcon from '../assets/white-location.svg';
import greyMusicIcon from '../assets/grey-music.svg';
import settingIcon from '../assets/setting.svg';

export default function Discover2({ onClose }) {
  const navigate = useNavigate();

  return (
    <div className="w-full max-w-[1200px] mx-auto p-12 bg-white">
      {/* Header Area */}
      <div className="flex justify-between items-end mb-12">

        <div className="relative group">
          <button
            onClick={onClose}
            className="absolute -left-16 top-4 w-12 h-12 flex items-center justify-center rounded-full bg-white border-[2px] border-[#0F172A] shadow-[4px_4px_0_0_#0F172A] opacity-0 group-hover:opacity-100 transition-all hover:-translate-y-1 z-10"
            title="Go Back"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0F172A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
          </button>
          <h1 className="text-[#0F172A] font-black text-[72px] uppercase leading-[0.9] tracking-tighter">
            FIND<br />YOUR<br />NOISE
          </h1>
        </div>

        <div className="flex flex-col gap-6 w-full max-w-[600px]">
          {/* Tabs */}
          <div className="flex w-full h-[41px] gap-[32px] border-b-[2px] border-[#0F172A14]">
            <button className="w-[33.8px] h-[41px] text-[#0F172A] font-bold text-[14px] uppercase tracking-wider pb-[16px] border-b-[4px] border-[#356BFF]">ALL</button>
            <button className="h-[41px] text-[#64748B] font-bold text-[14px] uppercase tracking-wider pb-[16px] border-b-[4px] border-transparent hover:text-[#0F172A] transition-colors">MUSICIANS</button>
            <button className="h-[41px] text-[#64748B] font-bold text-[14px] uppercase tracking-wider pb-[16px] border-b-[4px] border-transparent hover:text-[#0F172A] transition-colors">BANDS</button>
            <button className="h-[41px] text-[#64748B] font-bold text-[14px] uppercase tracking-wider pb-[16px] border-b-[4px] border-transparent hover:text-[#0F172A] transition-colors">POSITIONS</button>
          </div>

          {/* Search & Filter */}
          <div className="flex gap-4">
            <div className="flex-1 border-[2px] border-[#0F172A] flex items-center px-4 bg-white">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <input
                type="text"
                placeholder="Search artists, bands, gigs..."
                className="w-full h-[48px] outline-none text-[15px] font-medium placeholder:text-[#64748B]"
              />
            </div>
            <button className="w-[52px] h-[52px] bg-[#0F172A] border-[2px] border-[#0F172A] flex items-center justify-center shrink-0 hover:bg-gray-800 transition-colors">
              <img src={settingIcon} alt="Settings" className="w-6 h-6 object-contain" />
            </button>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* Card 1 */}
        <div 
          onClick={() => navigate('/view-listings')}
          className="w-[322.66px] h-[389.39px] border-[2px] border-[#0F172A] rounded-[6px] bg-[#FFFFFF] shadow-[6px_6px_0_0_#356BFF] p-6 flex flex-col relative mx-auto md:mx-0 cursor-pointer hover:-translate-y-1 transition-transform"
        >
          <div className="flex justify-between items-start mb-6">
            <img src={studioVocalistIcon} alt="Studio Vocalist" className="w-12 h-12 object-contain" />
            <span className="bg-[#0F172A] text-white font-bold text-[10px] uppercase tracking-widest px-3 py-1 rounded-[4px]">ONE-OFF</span>
          </div>
          <h2 className="text-[#0F172A] font-black text-[24px] uppercase leading-tight tracking-tight mb-2">STUDIO VOCALIST<br />NEEDED</h2>
          <p className="text-[#64748B] text-[13px] font-medium mb-6">Recording Session • Oct 24</p>
          <div className="flex flex-wrap gap-2 mb-auto">
            <span className="bg-[#F3F5F9] text-[#0F172A] font-bold text-[10px] uppercase tracking-wider px-3 py-1.5 rounded-[4px]">R&B</span>
            <span className="bg-[#F3F5F9] text-[#0F172A] font-bold text-[10px] uppercase tracking-wider px-3 py-1.5 rounded-[4px]">PAID</span>
            <span className="bg-[#F3F5F9] text-[#0F172A] font-bold text-[10px] uppercase tracking-wider px-3 py-1.5 rounded-[4px]">3 HOURS</span>
          </div>
          <div className="flex items-center gap-2 text-[#64748B] text-[14px] font-[500] leading-none tracking-normal mt-4">
            <img src={greyLocationIcon} alt="Location" className="w-3.5 h-3.5" />
            <span>The Hive Studio • 1.2km away</span>
          </div>
        </div>

        {/* Card 2 */}
        <div 
          onClick={() => navigate('/view-listings')}
          className="w-[322.67px] h-[390.39px] bg-[#0F172A] rounded-[6px] shadow-[6px_6px_0_0_#64748B] p-6 flex flex-col mx-auto md:mx-0 cursor-pointer hover:-translate-y-1 transition-transform"
        >
          <div className="flex justify-between items-start mb-6">
            <h2 className="text-white font-black text-[24px] uppercase leading-tight tracking-tight">DRUMMER<br />NEEDED</h2>
            <img src={drummerNeededImg} alt="Avatar" className="w-10 h-10 rounded-full  border-white object-cover" />
          </div>
          <div className="flex flex-wrap gap-2 mb-auto mt-2">
            <span className="bg-white/10 text-white font-bold text-[10px] uppercase tracking-wider px-3 py-1.5 rounded-[4px]">PSYCH ROCK</span>
            <span className="bg-white/10 text-white font-bold text-[10px] uppercase tracking-wider px-3 py-1.5 rounded-[4px]">STUDIO</span>
            <span className="bg-white/10 text-white font-bold text-[10px] uppercase tracking-wider px-3 py-1.5 rounded-[4px]">MEMBER</span>
          </div>
          <div className="flex items-center gap-2 text-[#FFFFFFB2] text-[14px] font-[500] leading-none tracking-normal mt-4">
            <img src={whiteLocationIcon} alt="Location" className="w-3.5 h-3.5" />
            <span>Neon District • 2km away</span>
          </div>
        </div>

        {/* Card 3 */}
        <div 
          onClick={() => navigate('/profile')}
          className="w-[322.66px] h-[390.39px] border-[2px] border-[#0F172A] rounded-[6px] bg-[#FFFFFF] shadow-[6px_6px_0_0_#0F172A] flex flex-col overflow-hidden mx-auto md:mx-0 cursor-pointer hover:-translate-y-1 transition-transform"
        >
          <div className="h-[240px] border-b-[2px] border-[#0F172A] relative bg-gray-100 overflow-hidden shrink-0">
            <img src={zadieImg} alt="Zadie" className="w-full h-full object-cover object-top" />
            <div className="absolute top-4 left-4">
              <span className="bg-[#356BFF] text-[#0F172A] font-bold text-[10px] uppercase tracking-widest px-3 py-1 border-[2px] border-[#0F172A]">AVAILABLE</span>
            </div>
          </div>
          <div className="p-6 flex flex-col flex-1">
            <h2 className="text-[#0F172A] font-[800] text-[24px] uppercase leading-[26.4px] tracking-normal mb-4">ZADIE, 24</h2>
            <div className="flex flex-wrap gap-2 mb-auto">
              <span className="bg-[#F3F5F9] text-[#0F172A] font-bold text-[10px] uppercase tracking-wider px-3 py-1.5">BASS</span>
              <span className="bg-[#F3F5F9] text-[#0F172A] font-bold text-[10px] uppercase tracking-wider px-3 py-1.5">SYNTH</span>
              <span className="bg-[#F3F5F9] text-[#0F172A] font-bold text-[10px] uppercase tracking-wider px-3 py-1.5">NEO-SOUL</span>
            </div>
            <div className="flex items-center gap-2 text-[#64748B] text-[14px] font-[500] leading-none tracking-normal mt-4">
              <img src={greyLocationIcon} alt="Location" className="w-3.5 h-3.5" />
              <span>Central • Active 2h ago</span>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div 
          onClick={() => navigate('/discover')}
          className="w-[322.66px] h-[390.39px] border-[2px] border-[#0F172A] rounded-[6px] bg-[#FFFFFF] shadow-[6px_6px_0_0_#0F172A] flex flex-col overflow-hidden mx-auto md:mx-0 cursor-pointer hover:-translate-y-1 transition-transform"
        >
          <div className="h-[240px] border-b-[2px] border-[#0F172A] bg-gray-100 overflow-hidden shrink-0">
            <img src={staticVoidCoverImg} alt="Static Void" className="w-full h-full object-cover" />
          </div>
          <div className="p-6 flex flex-col flex-1">
            <h2 className="text-[#0F172A] font-[800] text-[24px] uppercase leading-[26.4px] tracking-normal mb-4">STATIC VOID</h2>
            <div className="flex flex-wrap gap-2 mb-auto">
              <span className="bg-[#F3F5F9] text-[#0F172A] font-bold text-[10px] uppercase tracking-wider px-3 py-1.5">POST-PUNK</span>
              <span className="bg-[#F3F5F9] text-[#0F172A] font-bold text-[10px] uppercase tracking-wider px-3 py-1.5">NOISE</span>
            </div>
            <div className="flex items-center gap-2 text-[#64748B] text-[14px] font-[500] leading-none tracking-normal mt-4">
              <img src={greyMusicIcon} alt="Music" className="w-3.5 h-3.5" />
              <span>4 Members • Formed 2021</span>
            </div>
          </div>
        </div>

        {/* Card 5 */}
        <div 
          onClick={() => navigate('/profile')}
          className="w-[322.67px] h-[390.39px] border-[2px] border-[#0F172A] rounded-[6px] bg-[#FFFFFF] shadow-[6px_6px_0_0_#0F172A] flex flex-col overflow-hidden mx-auto md:mx-0 cursor-pointer hover:-translate-y-1 transition-transform"
        >
          <div className="h-[240px] border-b-[2px] border-[#0F172A] bg-gray-100 overflow-hidden shrink-0">
            <img src={alexImg} alt="Alex" className="w-full h-full object-cover object-top" />
          </div>
          <div className="p-6 flex flex-col flex-1">
            <h2 className="text-[#0F172A] font-black text-[22px] uppercase leading-tight tracking-tight mb-4">ALEX, 22</h2>
            <div className="flex flex-wrap gap-2 mb-auto">
              <span className="bg-[#F3F5F9] text-[#0F172A] font-bold text-[10px] uppercase tracking-wider px-3 py-1.5 rounded-[4px]">DRUMS</span>
              <span className="bg-[#F3F5F9] text-[#0F172A] font-bold text-[10px] uppercase tracking-wider px-3 py-1.5 rounded-[4px]">PERCUSSION</span>
            </div>
            <div className="flex items-center gap-2 text-[#64748B] text-[14px] font-[500] leading-none tracking-normal mt-4">
              <img src={greyLocationIcon} alt="Location" className="w-3.5 h-3.5" />
              <span>East Side • Active 5m ago</span>
            </div>
          </div>
        </div>

        {/* Card 6 */}
        <div 
          onClick={() => navigate('/view-listings')}
          className="w-[322.66px] h-[390.39px] bg-[#0F172A] rounded-[6px] shadow-[6px_6px_0_0_#64748B] p-6 flex flex-col mx-auto md:mx-0 cursor-pointer hover:-translate-y-1 transition-transform"
        >
          <div className="flex justify-between items-start mb-6">
            <h2 className="text-white font-black text-[24px] uppercase leading-tight tracking-tight">KEYS PLAYER<br />WANTED</h2>
            <img src={keyPlayersImg} alt="Avatar" className="w-10 h-10 rounded-full           border-white object-cover" />
          </div>
          <div className="flex flex-wrap gap-2 mb-auto mt-2">
            <span className="bg-white/10 text-[#FFFFFF] font-[600] text-[12px] uppercase leading-none tracking-normal px-3 py-1.5 rounded-[4px]">JAZZ FUSION</span>
            <span className="bg-white/10 text-[#FFFFFF] font-[600] text-[12px] uppercase leading-none tracking-normal px-3 py-1.5 rounded-[4px]">LIVE</span>
          </div>
          <div className="flex items-center gap-2 text-[#FFFFFFB2] text-[14px] font-[500] leading-none tracking-normal mt-4">
            <img src={whiteLocationIcon} alt="Location" className="w-3.5 h-3.5" />
            <span>Blue Note • 5km away</span>
          </div>
        </div>

      </div>
    </div>
  );
}
