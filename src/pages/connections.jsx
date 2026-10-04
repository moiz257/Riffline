import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import searchIcon from '../assets/searchicon.png';

const initialConnections = [
    { id: 1, name: "Sarah 'Saz' Jenkins", role: 'Drummer • The Riot', avatar: 'https://i.pravatar.cc/150?img=47' },
    { id: 2, name: 'Marco Diaz', role: 'Bass Guitar • Session', avatar: 'https://i.pravatar.cc/150?img=11' },
    { id: 3, name: 'Yuki Tanaka', role: 'Synth / Keys • Neon Void', avatar: 'https://i.pravatar.cc/150?img=32' },
    { id: 4, name: 'Raj Patel', role: 'Producer • Freelance', avatar: 'https://i.pravatar.cc/150?img=68' },
    { id: 5, name: 'Mikey Throttle', role: 'Vocals • Dead End', avatar: 'https://i.pravatar.cc/150?img=52' },
    { id: 6, name: 'Elena Cruz', role: 'Guitar • Solstice', avatar: 'https://i.pravatar.cc/150?img=41' },
    { id: 7, name: 'David King', role: 'Saxophone • Jazz Trio', avatar: 'https://i.pravatar.cc/150?img=33' },
    { id: 8, name: 'Alice Cooper', role: 'Manager • The Vipers', avatar: 'https://i.pravatar.cc/150?img=43' },
    { id: 9, name: 'Carlos Santana', role: 'Guitar • Legend', avatar: 'https://i.pravatar.cc/150?img=60' }
];

export default function Connections() {
    const navigate = useNavigate();
    const [search, setSearch] = useState('');
    const [connections, setConnections] = useState(initialConnections);

    const handleRemove = (id) => {
        setConnections(connections.filter(c => c.id !== id));
    };

    const filteredConnections = connections.filter(c => 
        c.name.toLowerCase().includes(search.toLowerCase()) || 
        c.role.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="flex h-[100dvh] bg-white font-sans text-[#0F172A] overflow-hidden">
            <Sidebar />

            <main className="flex-1 overflow-y-auto pt-24 md:pt-12 px-6 md:px-12 pb-24">
                <div className="max-w-[1280px] w-full mx-auto">
                    
                    {/* Header */}
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end border-b-[2px] border-[#0F172A14] pb-[24px] lg:h-[74px] gap-6 lg:gap-0 w-full">
                        <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
                            <button 
                                onClick={() => navigate(-1)} 
                                className="flex items-center gap-2 font-bold text-[14px] uppercase tracking-wider text-[#0F172A] hover:text-gray-600 transition-colors"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="19" y1="12" x2="5" y2="12"></line>
                                    <polyline points="12 19 5 12 12 5"></polyline>
                                </svg>
                                BACK
                            </button>
                            <h1 className="text-[26px] sm:text-[32px] md:text-[36px] font-black uppercase tracking-tighter text-[#0F172A] leading-none">CONNECTIONS</h1>
                        </div>
                        
                        <div className="relative w-full lg:w-[400px] mt-2 lg:mt-0">
                            <img src={searchIcon} alt="search" className="absolute left-0 top-1/2 -translate-y-1/2 w-[18px] h-[18px] opacity-40 object-contain" />
                            <input 
                                type="text" 
                                placeholder="Search connections..." 
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="w-full h-[48px] bg-transparent border-b-[2px] border-[#0F172A14] pt-[12px] pb-[12px] pl-[36px] pr-4 text-[15px] focus:outline-none focus:border-black transition-colors placeholder:text-[#64748B] font-medium" 
                            />
                        </div>
                    </div>

                    <div className="mt-8 mb-6">
                        <h2 className="font-sans font-[800] text-[14px] leading-none tracking-[1px] uppercase text-[#64748B]">
                            YOUR NETWORK ({connections.length})
                        </h2>
                    </div>

                    {/* Connections Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
                        {filteredConnections.map((user) => (
                            <div key={user.id} className="flex items-center p-4 sm:p-5 border border-[#F0F0F0] bg-white hover:border-gray-300 transition-colors shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                                <img src={user.avatar} alt={user.name} className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] rounded-full object-cover shrink-0" />
                                <div className="ml-4 sm:ml-5 flex-1 min-w-0">
                                    <h3 className="font-[800] text-[15px] sm:text-[17px] tracking-tight text-[#0F172A] truncate leading-tight mb-0.5">{user.name}</h3>
                                    <p className="font-medium text-[12px] sm:text-[13px] text-[#64748B] truncate leading-tight">{user.role}</p>
                                </div>
                                <button 
                                    onClick={() => handleRemove(user.id)}
                                    className="ml-3 sm:ml-4 shrink-0 border-[1.5px] border-[#E5E7EB] px-3 sm:px-4 py-1.5 text-[10px] sm:text-[11px] font-bold text-[#0F172A] hover:bg-gray-50 hover:border-gray-300 transition-colors uppercase tracking-[0.05em]"
                                >
                                    REMOVE
                                </button>
                            </div>
                        ))}
                    </div>

                    {filteredConnections.length === 0 && (
                        <div className="text-center py-20">
                            <p className="text-gray-400 font-medium">No connections found.</p>
                        </div>
                    )}

                </div>
            </main>
        </div>
    );
}
