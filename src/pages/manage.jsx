import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import musicianPortrait from '../assets/musical_potrait.jpg';
import plusIcon from '../assets/plusicon.png';
import arrowIcon from '../assets/arrow.svg';
import dotsIcon from '../assets/3dots.svg';
import calendarIcon from '../assets/calander.svg';
import rightArrowIcon from '../assets/rightarrow.svg';
import heartbeatIcon from '../assets/heartbeat.svg';
import CreateBandModal from '../components/create-band-modal';

export default function Manage() {
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [bands, setBands] = useState([
        { id: 1, name: 'The Neon Riot', role: 'ADMIN', avatar: musicianPortrait, status: 'ADMIN' },
        { id: 2, name: 'Sunday Service', role: 'MEMBER', avatar: musicianPortrait, status: 'MEMBER' }
    ]);

    const handleCreateBand = (newBand) => {
        const bandObj = {
            id: Date.now(),
            name: newBand.name,
            role: 'ADMIN',
            avatar: musicianPortrait, 
            status: 'ADMIN'
        };
        setBands(prev => [bandObj, ...prev]);
        setIsCreateModalOpen(false);
    };

    return (
        <div className="flex h-screen overflow-hidden font-sans">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto lg:overflow-hidden flex flex-col lg:flex-row relative">
                <div className="flex-1 lg:overflow-y-auto custom-scrollbar p-4 lg:p-10 lg:pr-6 bg-white pt-24 lg:pt-10">
                    {/* Header */}
                    <div className="mb-10">
                        <h2 className="text-[32px] md:text-[56px] font-black font-Ibrand tracking-tight leading-none mb-2">MANAGE YOUR HUSTLE</h2>
                        <p className="text-[#64748B] font-medium text-[14px]">Control the chaos from here. Everything in one place.</p>
                    </div>

                    {/* YOUR BANDS */}
                    <section className="mb-12">
                        <h3 className="text-[24px] font-black font-sans tracking-widest text-black uppercase mb-4">YOUR BANDS</h3>
                        <div className="border-t border-black mb-6"></div>

                        <button 
                            onClick={() => setIsCreateModalOpen(true)}
                            className="w-full bg-[#0F172A] text-white font-sans py-4 text-[13px] font-black tracking-widest hover:bg-black transition-all mb-6 flex items-center justify-center gap-3"
                        >
                            <img src={plusIcon} alt="Plus" className="w-4 h-4 object-contain brightness-0 invert" />
                            CREATE NEW BAND
                        </button>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                            {bands.map(band => (
                                <Link key={band.id} to="/discover" className={`border-[1.5px] ${band.status === 'ADMIN' ? 'border-black' : 'border-gray-200 hover:border-black'} p-4 flex items-center gap-4 bg-white relative group cursor-pointer transition-colors`}>
                                    <div className="w-14 h-14 rounded-full overflow-hidden border border-gray-100">
                                        <img src={band.avatar} alt={band.name} className="w-full h-full object-cover grayscale" />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-sans font-black text-[15px] leading-tight uppercase tracking-tight">{band.name}</h4>
                                        <div className="flex flex-wrap items-center gap-2 mt-1">
                                            {band.status === 'ADMIN' ? (
                                                <span className="bg-[#356BFF] text-white text-[10px] font-sans tracking-wider font-black px-2 py-0.5 rounded-sm uppercase">ADMIN</span>
                                            ) : (
                                                <span className="bg-[#F3F5F9] text-[#64748B] text-[10px] font-black px-2 py-0.5 rounded-sm uppercase tracking-tighter">Member</span>
                                            )}
                                            {band.status === 'ADMIN' && (
                                                <button className="text-[10px] font-sans tracking-wider font-black px-2 py-0.5 border border-black hover:bg-black hover:text-white transition-all uppercase">MANAGE</button>
                                            )}
                                        </div>
                                    </div>
                                    <img src={arrowIcon} alt="Arrow" className="w-5 h-5 object-contain opacity-40 group-hover:opacity-100 transition-opacity" />
                                </Link>
                            ))}
                        </div>
                    </section>

                    {/* BAND POSITIONS */}
                    <section className="mb-12">
                        <div className="flex justify-between items-end mb-4">
                            <h3 className="text-[16px] font-black font-sans tracking-widest text-black uppercase">BAND POSITIONS</h3>
                            <Link to="/discover" className="text-[#356BFF] text-[14px] font-sans font-black tracking-widest uppercase hover:underline">VIEW ALL</Link>
                        </div>
                        <div className="border-t border-black mb-6"></div>

                        <div className="space-y-3">
                            {/* Position 1 */}
                            <div 
                                onClick={() => navigate('/view-applicants')}
                                className="bg-[#F3F5F9] p-3.5 flex items-start gap-4 hover:bg-[#f1f1f1] transition-colors relative cursor-pointer"
                            >
                                <div className="w-[4px] h-full bg-[#0F172A] absolute left-0 top-0"></div>
                                <div className="flex-1 pl-3.5">
                                    <h4 className="font-sans font-black text-[15px] text-[#0F172A] tracking-tight">Guitarist for The Neon Riot</h4>
                                    <p className="text-[#64748B] text-[12px] mt-0.5 font-medium italic opacity-80">Ongoing • Weekly rehearsals</p>
                                    <div className="flex flex-wrap items-center gap-2 mt-2">
                                        <span className="text-[#356BFF] text-[12px] font-black tracking-wider uppercase flex items-center gap-1.5">
                                            <img src={heartbeatIcon} alt="Heartbeat" className="w-4 h-4 object-contain" />
                                            OPEN • 5 APPLICANTS
                                        </span>
                                    </div>
                                </div>
                                <button className="text-gray-300 hover:text-black mt-1">
                                    <img src={dotsIcon} alt="Options" className="w-[20px] h-[20px] object-contain" />
                                </button>
                            </div>

                            {/* Position 2 */}
                            <div 
                                onClick={() => navigate('/view-applicants')}
                                className="bg-[#F3F5F9] p-3.5 flex items-start gap-4 hover:bg-[#f1f1f1] transition-colors relative cursor-pointer"
                            >
                                <div className="w-[4px] h-full bg-[#64748B] absolute left-0 top-0"></div>
                                <div className="flex-1 pl-3.5">
                                    <h4 className="font-sans font-black text-[15px] text-[#0F172A] tracking-tight">Keys / Synth for Sunday Service</h4>
                                    <p className="text-[#64748B] text-[12px] mt-0.5 font-medium italic opacity-60">Ongoing • Live shows + studio</p>
                                    <div className="flex flex-wrap items-center gap-2 mt-2">
                                        <span className="text-[#64748B] text-[12px] font-black tracking-wider uppercase">ON HOLD</span>
                                    </div>
                                </div>
                                <button className="text-gray-300 hover:text-black mt-1">
                                    <img src={dotsIcon} alt="Options" className="w-[20px] h-[20px] object-contain" />
                                </button>
                            </div>
                        </div>
                    </section>

                    {/* ONE-OFF GIGS & SESSIONS */}
                    <section>
                        <div className="flex justify-between items-end mb-4">
                            <h3 className="text-[16px] font-black font-sans tracking-widest text-black uppercase">ONE-OFF GIGS & SESSIONS</h3>
                            <Link to="#" className="text-[#356BFF] text-[14px] font-sans font-black tracking-widest uppercase hover:underline">+ POST ONE-OFF</Link>
                        </div>
                        <div className="border-t border-black mb-6"></div>

                        <div 
                            onClick={() => navigate('/view-applicants')}
                            className="bg-[#F3F5F9] p-3.5 flex items-start gap-4 hover:bg-[#f1f1f1] transition-colors relative cursor-pointer"
                        >
                            <div className="w-[4px] h-full bg-black absolute left-0 top-0"></div>
                            <div className="flex-1 pl-3.5">
                                <h4 className="font-sans font-black text-[15px] text-[#0F172A] tracking-tight">Need Bassist for Studio</h4>
                                <p className="text-[#64748B] text-[12px] mt-0.5 font-medium italic opacity-80">Oct 12 • The Hive Studio</p>
                                <div className="flex flex-wrap items-center gap-2 mt-2">
                                    <span className="text-[#356BFF] text-[12px] font-black tracking-wider uppercase flex items-center gap-1.5">
                                        <img src={heartbeatIcon} alt="Heartbeat" className="w-4 h-4 object-contain" />
                                        ACTIVE • 3 APPLICANTS
                                    </span>
                                </div>
                            </div>
                            <button className="text-gray-300 hover:text-black mt-1">
                                <img src={dotsIcon} alt="Options" className="w-[20px] h-[20px] object-contain" />
                            </button>
                        </div>
                    </section>
                </div>

                {/* Right Sidebar */}
                <aside className="w-full lg:w-[320px] bg-white border-t lg:border-t-0 lg:border-l border-gray-100 p-4 lg:p-8 lg:overflow-y-auto custom-scrollbar shrink-0 pb-20">
                    {/* Calendar Widget */}
                    <div className="bg-[#0F172A] p-6 text-white text-center mb-8 flex flex-col items-center">
                        <div className="w-12 h-12 mb-6">
                            <img src={calendarIcon} alt="Calendar" className="w-full h-full object-contain brightness-0 invert" />
                        </div>
                        <h4 className="font-sans font-black text-[15px] uppercase tracking-tight mb-8 text-center">NEED THE FULL PICTURE?</h4>
                        <Link to="/calendar" className="bg-white text-black font-black text-[10px] tracking-widest px-4 md:px-6 py-3 uppercase flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors group w-full sm:w-auto">
                            OPEN FULL CALENDAR
                            <img src={rightArrowIcon} alt="Arrow" className="w-[18px] h-[18px] object-contain group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    {/* COMING UP */}
                    <div>
                        <h4 className="font-black font-Ibrand tracking-widest text-black uppercase mb-6 text-[14px]">COMING UP</h4>
                        <div className="space-y-4 font-sans">
                            {[
                                { title: 'Tonight • Rehearsal', sub: 'The Neon Riot • 7:30 PM', color: '#356BFF' },
                                { title: 'Sat • Studio Block', sub: 'Sunday Service • 3:30 PM', color: '#356BFF' },
                                { title: 'Tue • Video Shoot', sub: 'The Hive Studio • 11:00 AM', color: '#64748B' }
                            ].map((item, idx) => (
                                <Link 
                                    to="/calendar"
                                    key={idx} 
                                    className="border border-gray-100 p-4 transition-all  cursor-pointer flex items-center gap-4 relative overflow-hidden block"
                                >
                                    <div className="w-1 h-full absolute left-0 top-0" style={{ backgroundColor: item.color }}></div>
                                    <div>
                                        <h5 className="font-sans font-black text-[14px]">{item.title}</h5>
                                        <p className="text-[#64748B]  text-[12px] font-medium mt-0.5">{item.sub}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </aside>
            </main>

            {/* Create Band Modal */}
            <CreateBandModal 
                isOpen={isCreateModalOpen} 
                onClose={() => setIsCreateModalOpen(false)}
                onCreate={handleCreateBand}
            />

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
