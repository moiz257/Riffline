import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import searchIcon from '../assets/searchicon.png';

const musicians = [
    { id: 1, name: 'Rishi Kumar', handle: '@Rishi_Drums', avatar: 'https://i.pravatar.cc/150?img=11' },
    { id: 2, name: 'Marcus T', handle: '@Bass_Man', avatar: 'https://i.pravatar.cc/150?img=12' },
    { id: 3, name: 'Sarah V', handle: '@Sarah_Vox', avatar: 'https://i.pravatar.cc/150?img=5' },
    { id: 4, name: 'Kenji Keys', handle: '@Kenji_Synth', avatar: 'https://i.pravatar.cc/150?img=14' },
    { id: 5, name: 'Elise P', handle: '@Elise_Violin', avatar: 'https://i.pravatar.cc/150?img=9' },
];

export default function TagPeople({ onClose }) {
    const navigate = useNavigate();
    const [search, setSearch] = useState('');
    const [selected, setSelected] = useState([1, 2]); // Initial selected IDs

    const handleClose = () => {
        if (onClose) {
            onClose();
        } else {
            navigate(-1);
        }
    };

    const toggleSelection = (id) => {
        setSelected(prev => 
            prev.includes(id) ? prev.filter(userId => userId !== id) : [...prev, id]
        );
    };

    return (
        <div className="h-[100dvh] w-full bg-[#F1F4F9]/50 flex items-center justify-center sm:p-4 font-sans relative overflow-hidden z-[100]">
            {/* Background Blur Overlay (to simulate modal over content if needed) */}
            <div className="absolute inset-0 bg-[#0F172A]/40 backdrop-blur-[4px]" onClick={handleClose}></div>

            <div className="relative bg-white w-full sm:max-w-[640px] h-full sm:h-auto sm:max-h-[95vh] rounded-none sm:rounded-[10px] shadow-none sm:shadow-[0px_20px_50px_0px_#0F172A4D] flex flex-col overflow-hidden">
                
                {/* Header */}
                <div className="flex justify-between items-center px-5 sm:px-[32px] py-[24px] h-[70px] sm:h-[90px] shrink-0 border-b-[2px] border-[#0F172A14] bg-[#FFFFFF]">
                    <h1 className="text-[22px] sm:text-[26px] font-black tracking-tight text-[#0F172A] uppercase leading-none mt-1 sm:mt-0">TAG PEOPLE</h1>
                    <button onClick={handleClose} className="text-black hover:text-gray-600 transition-colors">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                </div>

                {/* Search Area */}
                <div className="px-5 sm:px-8 pt-5 sm:pt-6 pb-4 shrink-0">
                    <div className="relative mb-5">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <img src={searchIcon} alt="search" className="w-[18px] h-[18px] object-contain opacity-50" />
                        </div>
                        <input 
                            type="text" 
                            placeholder="Search musicians by name or handle..." 
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full bg-[#F9FAFB] border border-[#E5E7EB] text-[#0F172A] text-[15px] font-medium rounded-[6px] pl-11 pr-4 py-3 focus:outline-none focus:border-gray-300 transition-colors placeholder:text-[#9CA3AF]"
                        />
                    </div>

                    {/* Selected Tags */}
                    <div className="flex flex-wrap gap-2.5 min-h-[36px]">
                        {selected.map(id => {
                            const user = musicians.find(m => m.id === id);
                            if (!user) return null;
                            return (
                                <div key={id} className="bg-[#0F172A] text-white rounded-full flex items-center p-1 pr-2 gap-2.5 shadow-sm">
                                    <img src={user.avatar} alt={user.name} className="w-[26px] h-[26px] rounded-full object-cover" />
                                    <span className="text-[14px] font-semibold tracking-wide leading-none pt-[1px]">{user.handle}</span>
                                    <button 
                                        onClick={() => toggleSelection(id)}
                                        className="w-[22px] h-[22px] flex items-center justify-center rounded-full bg-[#333333] hover:bg-[#444444] transition-colors ml-1"
                                    >
                                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <line x1="18" y1="6" x2="6" y2="18"></line>
                                            <line x1="6" y1="6" x2="18" y2="18"></line>
                                        </svg>
                                    </button>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="border-t border-gray-100 shrink-0"></div>

                {/* Suggestions List */}
                <div className="flex-1 overflow-y-auto min-h-0 pb-4">
                    <div className="px-5 sm:px-8 py-4 sm:py-5">
                        <h2 className="font-sans font-[800] text-[12px] sm:text-[13px] leading-none tracking-[0.5px] uppercase text-[#64748B]">RECENT & SUGGESTIONS</h2>
                    </div>

                    <div className="flex flex-col">
                        {musicians.filter(m => m.name.toLowerCase().includes(search.toLowerCase()) || m.handle.toLowerCase().includes(search.toLowerCase())).map((user, index) => {
                            const isSelected = selected.includes(user.id);
                            return (
                                <div 
                                    key={user.id} 
                                    onClick={() => toggleSelection(user.id)}
                                    className={`flex items-center justify-between px-5 sm:px-8 py-3 sm:py-3.5 cursor-pointer hover:bg-gray-50 transition-colors ${isSelected ? 'bg-[#FAFAFA]' : 'bg-white'}`}
                                >
                                    <div className="flex items-center gap-4 sm:gap-5">
                                        <img src={user.avatar} alt={user.name} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border border-gray-100 shrink-0" />
                                        <div className="flex flex-col gap-0.5">
                                            <span className="text-[16px] font-bold text-[#0F172A] leading-tight">{user.name}</span>
                                            <span className="text-[14px] font-medium text-[#64748B] leading-tight">{user.handle}</span>
                                        </div>
                                    </div>
                                    
                                    <div>
                                        {isSelected ? (
                                            <div className="w-[30px] h-[30px] bg-[#16A34A] rounded-full flex items-center justify-center shadow-sm">
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                                    <polyline points="20 6 9 17 4 12"></polyline>
                                                </svg>
                                            </div>
                                        ) : (
                                            <div className="w-[30px] h-[30px] bg-white border border-[#E5E7EB] rounded-full flex items-center justify-center shadow-sm hover:border-gray-300 transition-colors text-gray-500">
                                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                    <line x1="12" y1="5" x2="12" y2="19"></line>
                                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                                </svg>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Footer Actions */}
                <div className="px-5 sm:px-8 py-4 sm:py-6 border-t border-gray-100 flex items-center justify-end gap-4 sm:gap-6 bg-white shrink-0 mt-auto">
                    <button 
                        onClick={handleClose}
                        className="text-[15px] font-bold text-[#0F172A] hover:text-gray-600 transition-colors"
                    >
                        Cancel
                    </button>
                    <button 
                        onClick={handleClose}
                        className="bg-[#356BFF] hover:bg-[#244FC4] text-white px-8 py-3 rounded-[6px] font-bold text-[15px] transition-colors shadow-sm"
                    >
                        Done
                    </button>
                </div>

            </div>
        </div>
    );
}
