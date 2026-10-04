import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import locationIcon from '../assets/grey-location.svg';
import gridIcon from '../assets/grid.svg';
import downArrowIcon from '../assets/down-arrow.svg';
import voiceIcon from '../assets/voice-icon.svg';
import greymikeIcon from '../assets/grey-mike.svg';
import cupIcon from '../assets/cup.svg';
import EditEvent from '../components/EditEvent';

const EventPill = ({ text, color, onClick }) => {
  const styles = {
    green: 'bg-[#E8F5E9] border-[#C8E6C9] text-[#2E7D32]',
    orange: 'bg-[#FFF3E0] border-[#FFE0B2] text-[#E65100]',
    grey: 'bg-[#F1F4F9] border-[#E5E7EB] text-[#4B5563]'
  };

  const Icon = () => {
    if (color === 'green') return <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>;
    if (color === 'orange') return <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="10" rx="2" ry="2"></rect><path d="M7 7v10"></path><path d="M17 7v10"></path></svg>;
    return <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" x2="12" y1="19" y2="22"></line></svg>;
  };

  return (
    <div 
      onClick={onClick}
      className={`flex items-center gap-1.5 px-2 py-1.5 border rounded-[4px] font-sans font-bold text-[9px] leading-none tracking-[0.3px] ${styles[color]} cursor-pointer hover:opacity-80 transition-opacity`}
    >
      <Icon />
      {text}
    </div>
  );
};

const CalendarCell = ({ day, inactive, isFirstOfMonth, month, children }) => {
  return (
    <div className="min-h-[140px] p-2 border-b-[1px] border-r-[1px] border-[#0F172A14] [&:nth-child(7n)]:border-r-0">
      <div className="flex justify-between items-start mb-2 px-1 pt-1">
        <span className={`font-sans font-[800] text-[12px] leading-none ${inactive ? 'text-[#D1D5DB]' : isFirstOfMonth ? 'text-[#0F172A]' : 'text-[#64748B]'}`}>
          {day}
        </span>
        {isFirstOfMonth && (
          <span className="font-sans font-[800] text-[12px] leading-none text-[#0F172A] pr-1">{month}</span>
        )}
      </div>
      <div className="space-y-1.5">
        {children}
      </div>
    </div>
  );
};

export default function Calendar() {
  const [viewMode, setViewMode] = useState('month');
  const [isEditingEvent, setIsEditingEvent] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden font-sans bg-[#fcfcfc]">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto custom-scrollbar px-4 lg:px-16 pt-24 lg:pt-10 pb-8 bg-white">
        <div className="max-w-[1024px] w-full mx-auto">
          {isEditingEvent ? (
            <EditEvent onClose={() => setIsEditingEvent(false)} />
          ) : (
            <div className="w-full h-full">
              {/* Header Section */}
              <div className="mb-10">
            <h1 className="font-sans font-black text-[40px] md:text-[56px] leading-[0.9] tracking-[-2px] uppercase text-[#0F172A] mb-8">
              GIGS &<br />JAMS
            </h1>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-8">
              <div className="inline-flex items-center gap-2 cursor-pointer">
                <span className="font-sans font-bold text-[18px] leading-none tracking-normal text-[#0F172A] border-b-[3px] border-[#0F172A] pb-1">October 2023</span>
                <img src={downArrowIcon} alt="Down" className="w-4 h-4 object-contain" />
              </div>

              <div className="flex flex-wrap items-center gap-4">
                {viewMode === 'list' ? (
                  <button
                    onClick={() => setViewMode('month')}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-full border-[1.5px] border-gray-200 hover:border-[#0F172A] transition-colors font-sans font-bold text-[13px] leading-none tracking-[0.5px] uppercase text-[#0F172A]"
                  >
                    <img src={gridIcon} alt="Grid View" className="w-4 h-4 object-contain" />
                    MONTH VIEW
                  </button>
                ) : (
                  <div className="flex border-[1.5px] border-[#0F172A14] rounded-[8px] overflow-hidden bg-white shrink-0">
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 transition-colors ${viewMode === 'list' ? 'bg-[#0F172A] text-white' : 'text-[#64748B] hover:bg-gray-50'}`}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
                    </button>
                    <div className="w-[1.5px] bg-[#0F172A14]"></div>
                    <button
                      onClick={() => setViewMode('month')}
                      className={`p-2 transition-colors ${viewMode === 'month' ? 'bg-[#0F172A] text-white' : 'text-[#64748B] hover:bg-gray-50'}`}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
                    </button>
                  </div>
                )}
                <button className="px-5 py-2.5 rounded-full bg-[#356BFF] border-[2px] border-[#0F172A] shadow-[2px_2px_0px_0px_#0F172A] hover:bg-[#244FC4] transition-colors font-['Liberation_Sans'] font-bold text-[14px] leading-none tracking-[0.5px] text-center uppercase text-[#FFFFFF]">
                  {viewMode === 'list' ? '+ ADD EVENT' : '+ NEW EVENT'}
                </button>
              </div>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-3">
              <button className="px-5 py-2 rounded-full bg-[#0F172A] border-[2px] border-[#0F172A] font-sans font-semibold text-[14px] leading-none tracking-normal text-[#FFFFFF]">
                All Events
              </button>
              <button className="px-5 py-2 rounded-full bg-white border-[1.5px] border-gray-200 hover:border-gray-300 font-sans font-semibold text-[14px] leading-none tracking-normal text-[#64748B]">
                The Neon Rats
              </button>
              <button className="px-5 py-2 rounded-full bg-white border-[1.5px] border-gray-200 hover:border-gray-300 font-sans font-semibold text-[14px] leading-none tracking-normal text-[#64748B]">
                Velvet Echo
              </button>
              <button className="px-5 py-2 rounded-full bg-white border-[1.5px] border-gray-200 hover:border-gray-300 font-sans font-semibold text-[14px] leading-none tracking-normal text-[#64748B]">
                Solo Projects
              </button>
            </div>
          </div>

          {viewMode === 'list' && (
            <div className="space-y-12">
              {/* Today / Oct 12 */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <span className="font-sans font-[800] text-[16px] leading-none tracking-[1px] uppercase text-[#64748B]">TODAY · OCT 12</span>
                  <div className="flex-1 h-[1px] bg-gray-100"></div>
                </div>

                {/* Event Card: Rats vs Calendar */}
                <div className="flex bg-[#FFFFFF] border-[1px] border-dashed border-[#0F172A14] shadow-[6px_6px_0px_0px_#0F172A0D]">
                  <div className="flex flex-col items-center justify-center w-[70px] md:w-[100px] shrink-0 border-r-[1px] border-gray-100">
                    <div className="font-sans font-[800] text-[16px] md:text-[20px] leading-[20px] tracking-normal text-[#0F172A]">8:30</div>
                    <div className="font-sans font-bold text-[11px] md:text-[13px] leading-none tracking-normal uppercase text-[#64748B] mt-1">PM</div>
                  </div>

                  <div className="flex-1 p-4 md:p-6 relative group overflow-hidden">
                    <div className="flex justify-between items-start mb-4">
                      <span className="inline-block py-[6px] px-[10px] bg-[#F3F5F9] border-[1px] border-[#0F172A14] rounded-[4px] font-sans font-bold text-[11px] leading-none tracking-[0.5px] uppercase text-[#0F172A]">JAM?</span>
                      <button className="px-4 py-1.5 rounded-full border border-gray-200 text-[10px] font-black tracking-widest uppercase text-[#0F172A] hover:bg-gray-50 transition-colors">EDIT</button>
                    </div>

                    <h3 className="font-sans font-[800] text-[20px] md:text-[24px] leading-tight md:leading-[28.8px] tracking-normal text-[#0F172A] mb-3">Rats vs Calendar</h3>

                    <div className="flex flex-wrap items-center gap-3 md:gap-6 font-sans font-semibold text-[14px] leading-none tracking-normal text-[#64748B] mb-6">
                      <div className="flex items-center gap-1.5">
                        <img src={locationIcon} alt="Location" className="w-3.5 h-3.5" />
                        The Hive Studio
                      </div>
                      <div className="flex items-center gap-1.5">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                          <circle cx="9" cy="7" r="4"></circle>
                          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                        </svg>
                        The Neon Rats
                      </div>
                    </div>

                    {/* Poll UI */}
                    <div className="flex flex-col gap-[12px] bg-[#F3F5F9] border-[1px] border-[#0F172A14] rounded-[8px] p-[16px]">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                        <div className="flex items-center gap-2 text-[12px] font-bold text-[#0F172A]">
                          <span className="w-[8px] h-[8px] rounded-[4px] bg-[#356BFF]"></span>
                          Poll running · waiting on replies
                        </div>
                        <div className="text-[12px] font-bold text-gray-400">3 / 5 voted</div>
                      </div>

                      <div className="space-y-[12px]">
                        <div className="flex items-center gap-4 text-[12px] font-bold">
                          <span className="w-12 text-[#0F172A]">Oct 12</span>
                          <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div className="h-full bg-[#356BFF] w-[60%]"></div>
                          </div>
                          <span className="w-12 text-right text-gray-400">3 yes</span>
                        </div>
                        <div className="flex items-center gap-4 text-[12px] font-bold">
                          <span className="w-12 text-[#0F172A] opacity-60">Oct 13</span>
                          <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div className="h-full bg-[#356BFF] opacity-60 w-[100px]"></div>
                          </div>
                          <span className="w-12 text-right text-gray-400 opacity-80">1 yes</span>
                        </div>
                      </div>

                      <div className="flex flex-col md:flex-row justify-between items-start md:items-center pt-[12px] border-t border-[#0F172A14] gap-4">
                        <Link to="/messages" className="flex items-center gap-2 font-sans font-semibold text-[12px] leading-none tracking-[0.5px] uppercase text-[#64748B] hover:text-black">
                          <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                          </svg>
                          POLL IN "NEON RATS" CHAT
                        </Link>
                        <div className="flex flex-wrap gap-3">
                          <span className="inline-block py-[8px] px-[12px] bg-[#FFFFFF] border-[1px] border-solid border-[#0F172A14] rounded-full font-sans font-bold text-[11px] leading-none tracking-normal uppercase text-[#0F172A]">PENDING</span>
                          <button className="py-[6px] px-[16px] bg-[#0F172A] border-[1px] border-solid border-[#0F172A] rounded-full hover:bg-black transition-colors font-sans font-bold text-[11px] leading-none tracking-[0.6px] uppercase text-[#FFFFFF]">END POLL & LOCK IN</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Friday / Oct 14 */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <span className="font-sans font-[800] text-[16px] leading-none tracking-[1px] uppercase text-[#64748B]">FRIDAY · OCT 14</span>
                  <div className="flex-1 h-[1px] bg-gray-100"></div>
                </div>

                {/* Event Card: Underground Showcase */}
                <div className="flex bg-[#FFFFFF] border-[1px] border-solid border-[#0F172A14] shadow-[6px_6px_0px_0px_#0F172A0D]">
                  <div className="flex flex-col items-center justify-center w-[70px] md:w-[100px] shrink-0 border-r-[1px] border-[#0F172A14] bg-[#F3F5F9]">
                    <div className="font-sans font-[800] text-[16px] md:text-[20px] leading-[20px] tracking-normal text-[#0F172A]">9:30</div>
                    <div className="font-sans font-bold text-[11px] md:text-[13px] leading-none tracking-normal uppercase text-[#64748B] mt-1">PM</div>
                  </div>

                  <div className="flex-1 p-4 md:p-6 relative group overflow-hidden">
                    <div className="flex justify-between items-start mb-4">
                      <span className="inline-block py-[6px] px-[10px] bg-[#356BFF] rounded-[4px] font-sans font-bold text-[11px] leading-none tracking-[0.5px] uppercase text-[#FFFFFF]">LIVE GIG</span>
                      <button className="px-4 py-1.5 rounded-full border border-gray-200 text-[10px] font-black tracking-widest uppercase text-[#0F172A] hover:bg-gray-50 transition-colors">EDIT</button>
                    </div>

                    <h3 className="font-sans font-[800] text-[20px] md:text-[24px] leading-tight md:leading-[28.8px] tracking-normal text-[#0F172A] mb-3">Underground Showcase</h3>

                    <div className="flex flex-wrap items-center gap-3 md:gap-6 font-sans font-semibold text-[14px] leading-none tracking-normal text-[#64748B]">
                      <div className="flex items-center gap-1.5">
                        <img src={locationIcon} alt="Location" className="w-3.5 h-3.5" />
                        AntiSocial, Lower Parel
                      </div>
                      <div className="flex items-center gap-1.5">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                          <circle cx="9" cy="7" r="4"></circle>
                          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                        </svg>
                        Velvet Echo
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tuesday / Oct 18 */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <span className="font-sans font-[800] text-[16px] leading-none tracking-[1px] uppercase text-[#64748B]">TUESDAY · OCT 18</span>
                  <div className="flex-1 h-[1px] bg-gray-100"></div>
                </div>

                <div className="space-y-6">
                  {/* Event Card: Vocal Tracking */}
                  <div className="flex bg-[#FFFFFF] border-[1px] border-solid border-[#0F172A14] shadow-[6px_6px_0px_0px_#0F172A0D]">
                    <div className="flex flex-col items-center justify-center w-[70px] md:w-[100px] shrink-0 border-r-[1px] border-[#0F172A14] bg-[#F3F5F9]">
                      <div className="font-sans font-[800] text-[16px] md:text-[20px] leading-[20px] tracking-normal text-[#0F172A]">2:00</div>
                      <div className="font-sans font-bold text-[11px] md:text-[13px] leading-none tracking-normal uppercase text-[#64748B] mt-1">PM</div>
                    </div>

                    <div className="flex-1 p-4 md:p-6 relative group overflow-hidden">
                      <div className="flex justify-between items-start mb-4">
                        <span className="inline-block py-[6px] px-[10px] bg-[#64748B] rounded-[4px] font-sans font-bold text-[11px] leading-none tracking-[0.5px] uppercase text-[#FFFFFF]">RECORDING</span>
                        <button className="px-4 py-1.5 rounded-full border border-gray-200 text-[10px] font-black tracking-widest uppercase text-[#0F172A] hover:bg-gray-50 transition-colors">EDIT</button>
                      </div>

                      <h3 className="font-sans font-[800] text-[20px] md:text-[24px] leading-tight md:leading-[28.8px] tracking-normal text-[#0F172A] mb-3">Vocal Tracking: "Dust"</h3>

                      <div className="flex flex-wrap items-center gap-3 md:gap-6 font-sans font-semibold text-[14px] leading-none tracking-normal text-[#64748B]">
                        <div className="flex items-center gap-1.5">
                          <img src={greymikeIcon} alt="Studio" className="w-4 h-4 object-contain" />
                          Home Studio
                        </div>
                        <div className="flex items-center gap-1.5">
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                          </svg>
                          Solo Project
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Event Card: Indie Mixer Night */}
                  <div className="flex bg-[#FFFFFF] border-[1px] border-solid border-[#0F172A14] shadow-[6px_6px_0px_0px_#0F172A0D]">
                    <div className="flex flex-col items-center justify-center w-[70px] md:w-[100px] shrink-0 border-r-[1px] border-[#0F172A14] bg-[#F3F5F9]">
                      <div className="font-sans font-[800] text-[16px] md:text-[20px] leading-[20px] tracking-normal text-[#0F172A] opacity-70">8:00</div>
                      <div className="font-sans font-bold text-[11px] md:text-[13px] leading-none tracking-normal uppercase text-[#64748B] mt-1">PM</div>
                    </div>

                    <div className="flex-1 p-4 md:p-6 relative group overflow-hidden">
                      <div className="flex justify-between items-start mb-4">
                        <span className="inline-block py-[6px] px-[10px] bg-[#64748B] opacity-70 rounded-[4px] font-sans font-bold text-[11px] leading-none tracking-[0.5px] uppercase text-[#FFFFFF]">MEETUP</span>
                        <button className="px-4 py-1.5 rounded-full border border-gray-200 text-[10px] font-black tracking-widest uppercase text-[#0F172A] hover:bg-gray-50 transition-colors">EDIT</button>
                      </div>

                      <h3 className="font-sans font-[800] text-[20px] md:text-[24px] leading-tight md:leading-[28.8px] tracking-normal text-[#0F172A] opacity-50 mb-3">Indie Mixer Night</h3>

                      <div className="flex flex-wrap items-center gap-3 md:gap-6 font-sans font-semibold text-[14px] leading-none tracking-normal text-[#64748B]">
                        <div className="flex items-center gap-1.5">
                          <img src={cupIcon} alt="Location" className="w-3.5 h-3.5" />
                          Bonobo
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {viewMode === 'month' && (
            <div>
              <div className="bg-white border-[1px] border-[#0F172A14] rounded-[8px] overflow-x-auto">
                <div className="min-w-[700px]">
                  <div className="grid grid-cols-7 bg-[#F3F5F9] border-b-[1px] border-[#0F172A14]">
                  {['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'].map((day, i) => (
                    <div key={day} className={`py-4 text-center font-sans font-[800] text-[10px] tracking-widest text-[#64748B] ${i < 6 ? 'border-r-[1px] border-[#0F172A14]' : ''}`}>
                      {day}
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-7">
                  {[25, 26, 27, 28, 29, 30].map(day => <CalendarCell key={'prev-' + day} day={day} inactive />)}
                  <CalendarCell day={1} isFirstOfMonth month="Oct">
                    <EventPill onClick={() => setIsEditingEvent(true)} text="Jam Poll: Neon Rats" color="green" />
                  </CalendarCell>

                  {[2, 3].map(day => <CalendarCell key={day} day={day} />)}
                  <CalendarCell day={4}>
                    <EventPill onClick={() => setIsEditingEvent(true)} text="Studio: Vocals" color="grey" />
                  </CalendarCell>
                  {[5, 6].map(day => <CalendarCell key={day} day={day} />)}
                  <CalendarCell day={7}>
                    <EventPill onClick={() => setIsEditingEvent(true)} text="Show: AntiSocial" color="orange" />
                  </CalendarCell>
                  <CalendarCell day={8} />

                  {[9, 10, 11].map(day => <CalendarCell key={day} day={day} />)}
                  <CalendarCell day={12}>
                    <EventPill onClick={() => setIsEditingEvent(true)} text="Jam: The Hive" color="green" />
                  </CalendarCell>
                  <CalendarCell day={13} />
                  <CalendarCell day={14}>
                    <EventPill onClick={() => setIsEditingEvent(true)} text="Gig: Bonobo" color="orange" />
                  </CalendarCell>
                  <CalendarCell day={15} />

                  {[16, 17].map(day => <CalendarCell key={day} day={day} />)}
                  <CalendarCell day={18}>
                    <EventPill onClick={() => setIsEditingEvent(true)} text="Mix Review" color="grey" />
                  </CalendarCell>
                  {[19, 20, 21, 22].map(day => <CalendarCell key={day} day={day} />)}

                  {[23, 24, 25].map(day => <CalendarCell key={day} day={day} />)}
                  <CalendarCell day={26}>
                    <EventPill onClick={() => setIsEditingEvent(true)} text="Jam Session" color="green" />
                  </CalendarCell>
                  <CalendarCell day={27} />
                  <CalendarCell day={28}>
                    <EventPill onClick={() => setIsEditingEvent(true)} text="Festival Slot" color="orange" />
                  </CalendarCell>
                  <CalendarCell day={29} />

                  <CalendarCell day={30} />
                  {[1, 2, 3, 4, 5, 6].map(day => <CalendarCell key={'next-' + day} day={day} inactive />)}
                </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mt-6 px-1">
                <div className="flex flex-wrap items-center gap-3 sm:gap-6">
                  <span className="font-sans font-bold text-[11px] text-[#64748B]">Legend:</span>
                  <div className="flex items-center gap-2 font-sans font-semibold text-[11px] text-[#64748B]">
                    <span className="w-2 h-2 rounded-full bg-[#E65100]"></span> Gig / Show
                  </div>
                  <div className="flex items-center gap-2 font-sans font-semibold text-[11px] text-[#64748B]">
                    <span className="w-2 h-2 rounded-full bg-[#2E7D32]"></span> Jam / Rehearsal
                  </div>
                  <div className="flex items-center gap-2 font-sans font-semibold text-[11px] text-[#64748B]">
                    <span className="w-2 h-2 rounded-full bg-[#4B5563]"></span> Recording / Studio
                  </div>
                </div>
                <div className="font-sans font-semibold text-[11px] text-[#64748B]">
                  Click a date to add an event
                </div>
              </div>
            </div>
          )}
          </div>
          )}
        </div>
      </main>
    </div>
  );
}
