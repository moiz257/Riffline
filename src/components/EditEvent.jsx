import React from 'react';
import deleteIcon from '../assets/delete-icon.svg';

export default function EditEvent({ onClose }) {
  return (
    <div className="w-full max-w-[800px] mx-auto animate-in fade-in slide-in-from-bottom-4 duration-300 pb-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-10 pt-4">
        <h2 className="font-sans font-black text-[32px] tracking-[-1px] uppercase text-[#0F172A]">EDIT EVENT</h2>
        <button 
          onClick={onClose}
          className="w-10 h-10 rounded-full bg-[#F3F5F9] flex items-center justify-center hover:bg-gray-200 transition-colors"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0F172A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap gap-3 mb-12">
        {['Jam Session', 'Practice', 'Gig', 'Hangout'].map(cat => (
          <button key={cat} className="px-5 py-2.5 rounded-full bg-[#F3F5F9] hover:bg-gray-200 transition-colors font-sans font-bold text-[13px] text-[#0F172A]">
            {cat}
          </button>
        ))}
        <button className="px-6 py-2.5 rounded-full bg-[#0F172A] font-sans font-bold text-[13px] text-white shadow-sm">
          Other
        </button>
      </div>

      <div className="space-y-12">
        {/* The Vibe */}
        <div>
          <label className="block font-sans font-[800] text-[14px] leading-none tracking-[1px] uppercase text-[#64748B] mb-4">THE VIBE</label>
          <input 
            type="text" 
            defaultValue="Midnight Jam"
            className="w-[780px] h-[75px] bg-transparent border-b-[3px] border-[#0F172A] pt-[12px] pb-[12px] font-sans font-black text-[32px] text-[#0F172A] placeholder-gray-300 focus:outline-none"
            placeholder="Event Title"
          />
        </div>

        {/* The Spot */}
        <div>
          <label className="block font-sans font-[800] text-[14px] leading-none tracking-[1px] uppercase text-[#64748B] mb-4">THE SPOT</label>
          <div className="flex items-center gap-3">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#356BFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            <input 
              type="text" 
              defaultValue="The Hive Studio, Mumbai"
              className="w-[740px] h-[65px] bg-transparent border-b-[2px] border-[#0F172A] pt-[12px] pb-[12px] font-sans font-black text-[32px] leading-none tracking-[-1.5px] text-[#0F172A] placeholder-gray-300 focus:outline-none"
              placeholder="Location"
            />
          </div>
        </div>

        {/* The Plan */}
        <div>
          <label className="block font-sans font-[800] text-[14px] leading-none tracking-[1px] uppercase text-[#64748B] mb-4">THE PLAN</label>
          
          <div className="flex gap-8">
            {/* Left Column */}
            <div className="w-[240px] shrink-0">
              <div className="flex p-[4px] bg-[#F3F5F9] rounded-[30px] mb-8 w-[240px] h-[62px]">
                <button className="w-[108px] h-full pl-[24px] pt-[10px] pb-[10px] rounded-[24px] font-sans font-[800] text-[11px] tracking-[0.5px] uppercase text-[#0F172A] leading-tight text-left flex flex-col justify-center">
                  <span>SET</span>
                  <span>DATE</span>
                </button>
                <button className="w-[124px] h-[54px] pl-[24px] pt-[10px] pb-[10px] rounded-[24px] bg-[#0F172A] shadow-sm font-sans font-[800] text-[11px] tracking-[0.5px] uppercase text-white leading-tight text-left flex flex-col justify-center">
                  <span>POLL</span>
                  <span>DATES</span>
                </button>
              </div>

              <button className="flex items-center gap-1.5 font-sans font-[800] text-[11px] tracking-[0.5px] uppercase text-[#356BFF] hover:text-[#244FC4] transition-colors">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                ADD ANOTHER TIME
              </button>
            </div>

            {/* Right Column */}
            <div className="flex-1 space-y-4 max-w-[500px]">
              {/* Option 1 */}
              <div className="w-[500px] h-[80px] bg-white border-[1px] border-[#0F172A14] rounded-[12px] p-[20px] shadow-[4px_4px_0px_0px_#0F172A0D]">
                <div className="font-sans font-[800] text-[9px] tracking-[1px] uppercase text-[#64748B] mb-1">OPTION 1</div>
                <div className="flex items-center gap-2">
                  <span className="font-sans font-[800] text-[16px] text-[#0F172A]">Fri, 12 Oct</span>
                  <span className="font-sans font-semibold text-[15px] text-[#64748B]">20:00</span>
                </div>
              </div>

              {/* Option 2 */}
              <div className="relative w-[500px] h-[80px] bg-white border-[1px] border-[#0F172A14] rounded-[12px] p-[20px] shadow-[4px_4px_0px_0px_#0F172A0D]">
                <div className="font-sans font-[800] text-[9px] tracking-[1px] uppercase text-[#64748B] mb-1">OPTION 2</div>
                <div className="flex items-center gap-2">
                  <span className="font-sans font-[800] text-[16px] text-[#0F172A]">Sat, 13 Oct</span>
                  <span className="font-sans font-semibold text-[15px] text-[#64748B]">18:00</span>
                </div>
                <button className="absolute -right-2.5 -top-2.5 w-[22px] h-[22px] bg-[#0F172A] rounded-full flex items-center justify-center hover:bg-black hover:scale-110 transition-all shadow-[0_2px_4px_rgba(0,0,0,0.1)]">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Who's In? */}
        <div>
          <label className="block font-sans font-[800] text-[14px] leading-none tracking-[1px] uppercase text-[#64748B] mb-4">WHO'S IN?</label>
          <div className="max-w-[500px] border-[1.5px] border-gray-200 rounded-[12px] p-4 flex items-center justify-between cursor-pointer hover:border-gray-300 transition-colors">
            <div className="flex items-center gap-4">
              <div className="w-[52px] h-[52px] bg-[#0F172A] rounded-[8px] flex items-center justify-center shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              </div>
              <div>
                <div className="font-sans font-[800] text-[16px] text-[#0F172A] mb-0.5">The Jam Session</div>
                <div className="font-sans font-semibold text-[13px] text-[#64748B]">Group Chat • 5 Members</div>
              </div>
            </div>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-12 border-t border-[#0F172A0D] flex items-center justify-between">
          <button className="flex items-center gap-2 px-6 py-3.5 bg-[#356BFF] border-[2.5px] border-[#0F172A] shadow-[4px_4px_0px_0px_#0F172A] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#0F172A] transition-all font-sans font-bold text-[14px] tracking-[0.5px] uppercase text-white">
            SAVE CHANGES
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline></svg>
          </button>
          
          <button className="flex items-center justify-center gap-[12px] w-[230px] h-[56px] px-[32px] py-[16px] bg-transparent border-[2px] border-[#D92D20] hover:bg-[#fff5f5] transition-colors font-sans font-[800] text-[14px] tracking-[0.5px] uppercase text-[#D92D20]">
            CANCEL EVENT
            <img src={deleteIcon} alt="Cancel" />
          </button>
        </div>
      </div>
    </div>
  );
}
