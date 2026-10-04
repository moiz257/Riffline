import React, { useState } from 'react';

const SUGGESTED_USERS = [
    { id: 1, name: "Priya_Vibes", role: "Vocalist", avatar: "https://i.pravatar.cc/150?u=priya" },
    { id: 3, name: "Synth_Sultan", role: "Producer", avatar: "https://i.pravatar.cc/150?u=sultan" },
    { id: 4, name: "ArjunBeats", role: "Drummer", avatar: "https://i.pravatar.cc/150?u=arjun" }
];

const ALL_CONNECTIONS = [
    { id: 6, name: "Mia_Bass", role: "Bassist", avatar: "https://i.pravatar.cc/150?u=mia" },
    { id: 7, name: "Dave_G", role: "Guitarist", avatar: "https://i.pravatar.cc/150?u=dave" },
    { id: 8, name: "Riya_Keys", role: "Pianist", avatar: "https://i.pravatar.cc/150?u=riya" }
];

const CreateGroupModal = ({ 
    show, 
    onClose, 
    modalStep, 
    setModalStep, 
    selectedMembers = [],
    onToggleMember
}) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [groupName, setGroupName] = useState('The Jam Session');

    if (!show) return null;

    const filterUsers = (users) => {
        if (!searchTerm) return users;
        return users.filter(u => 
            u.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
            u.role.toLowerCase().includes(searchTerm.toLowerCase())
        );
    };

    const suggested = filterUsers(SUGGESTED_USERS);
    const connections = filterUsers(ALL_CONNECTIONS);

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 pl-[100px]">
            {/* Backdrop */}
            <div 
                className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            />
            
            {/* Modal Content */}
            <div className={`relative w-full ${modalStep === 'GROUP' ? 'max-w-[700px]' : 'max-w-[420px]'} bg-white rounded-[24px] shadow-2xl overflow-hidden transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1) animate-in fade-in zoom-in`}>
                {modalStep === 'INIT' ? (
                    <>
                        {/* Header */}
                        <div className="flex justify-between items-center p-5 border-b border-gray-100">
                            <h2 className="text-[18px] font-black tracking-tight text-brand-dark uppercase">New Message</h2>
                            <button 
                                onClick={onClose}
                                className="text-gray-400 hover:text-brand-dark transition-colors"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                                </svg>
                            </button>
                        </div>

                        {/* Search */}
                        <div className="p-4 border-b border-gray-100 bg-gray-50/30">
                            <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
                                    </svg>
                                </span>
                                <input 
                                    type="text" 
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    placeholder="Search people or bands..." 
                                    className="w-full bg-white border-2 border-gray-100 rounded-xl py-2.5 pl-10 pr-4 text-[13px] font-semibold text-brand-dark placeholder:text-gray-400 focus:border-brand-orange/40 outline-none transition-all"
                                />
                            </div>
                        </div>

                        {/* Content Area */}
                        <div className="max-h-[420px] overflow-y-auto no-scrollbar">
                            {/* Create Group Action */}
                            <button 
                                onClick={() => setModalStep('GROUP')}
                                className="w-full p-4 flex items-center gap-3 hover:bg-gray-50 transition-colors border-b border-gray-50 group"
                            >
                                <div className="w-10 h-10 rounded-full border-2 border-brand-orange/30 flex items-center justify-center text-brand-orange bg-brand-orange/5 group-hover:bg-brand-orange group-hover:text-white transition-all">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                                    </svg>
                                </div>
                                <span className="font-heading font-black text-brand-orange uppercase tracking-tight text-[14px]">Create New Group</span>
                            </button>

                            {/* Suggested */}
                            <div className="p-4 px-5">
                                <h3 className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-4">Suggested</h3>
                                <div className="flex flex-col gap-4">
                                    {suggested.map((user) => (
                                        <button key={user.id} className="flex items-center gap-3 w-full text-left group">
                                            <img src={user.avatar} className="w-10 h-10 rounded-full border-2 border-gray-100 object-cover" alt="" />
                                            <div className="flex-1 min-w-0">
                                                <p className="font-black text-brand-dark uppercase tracking-tight text-[14px] leading-tight">{user.name}</p>
                                                <p className="text-[10px] font-bold text-gray-400 leading-tight">{user.role}</p>
                                            </div>
                                        </button>
                                    ))}
                                    {suggested.length === 0 && <p className="text-center text-[11px] text-gray-400 font-bold uppercase py-4 tracking-widest">No matching members</p>}
                                </div>
                            </div>

                            {/* All Connections */}
                            <div className="p-4 px-5 pt-2">
                                <h3 className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-4">All Connections</h3>
                                <div className="flex flex-col gap-4">
                                    {connections.map((user) => (
                                        <button key={user.id} className="flex items-center gap-3 w-full text-left group">
                                            <img src={user.avatar} className="w-10 h-10 rounded-full border-2 border-gray-100 object-cover" alt="" />
                                            <div className="flex-1 min-w-0">
                                                <p className="font-black text-brand-dark uppercase tracking-tight text-[14px] leading-tight">{user.name}</p>
                                                <p className="text-[10px] font-bold text-gray-400 leading-tight">{user.role}</p>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        {/* New Group Header */}
                        <div className="flex justify-between items-center p-5 border-b border-gray-50">
                            <div className="flex items-center gap-4">
                                <button 
                                    onClick={() => setModalStep('INIT')}
                                    className="text-brand-dark hover:scale-110 transition-transform"
                                >
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" />
                                    </svg>
                                </button>
                                <h2 className="text-[20px] font-black tracking-tighter text-brand-dark uppercase">New Group</h2>
                            </div>
                            <button 
                                onClick={onClose}
                                className="bg-brand-dark text-white px-5 py-2 rounded-full text-[11px] font-black uppercase tracking-wider hover:scale-105 transition-transform active:scale-95 shadow-lg shadow-gray-200"
                            >
                                Create Group
                            </button>
                        </div>

                        {/* Group Info Section Card */}
                        <div className="p-3">
                            <div className="p-6 bg-[#F1F4F9] rounded-[24px] flex items-center gap-6">
                                {/* Upload Circle */}
                                <div className="relative group/upload cursor-pointer shrink-0">
                                    <div className="w-[80px] h-[80px] rounded-full border-[2px] border-dashed border-[#94A3B8] flex flex-col items-center justify-center bg-transparent transition-all group-hover/upload:border-brand-orange/40">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" strokeWidth="2.5" className="group-hover/upload:stroke-brand-orange">
                                            <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" /><circle cx="12" cy="13" r="4" />
                                        </svg>
                                        <span className="text-[9px] font-black uppercase text-[#94A3B8] mt-1 group-hover/upload:text-brand-orange">Upload</span>
                                    </div>
                                    <div className="absolute right-0 bottom-0 w-7 h-7 bg-brand-orange rounded-full flex items-center justify-center text-white border-[3px] border-[#F1F4F9] shadow-sm hover:scale-110 transition-transform">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4.5"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
                                    </div>
                                </div>

                                {/* Name Input Area */}
                                <div className="flex-1">
                                    <p className="text-[10px] font-black text-[#94A3B8] uppercase tracking-widest mb-2">Group Name</p>
                                    <input 
                                        type="text" 
                                        value={groupName}
                                        onChange={(e) => setGroupName(e.target.value)}
                                        className="w-full bg-transparent border-none p-0 text-[24px] font-black text-brand-dark focus:ring-0 outline-none leading-none placeholder:text-gray-300"
                                    />
                                    <div className="h-[2px] bg-gray-200 mt-2 w-full opacity-50" />
                                    <p className="text-[10px] font-medium text-[#94A3B8] mt-3 leading-tight">This is the name everyone will see in their chat list.</p>
                                </div>
                            </div>
                        </div>

                        {/* Search To Add */}
                        <div className="p-4 border-b border-gray-50">
                            <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                        <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
                                    </svg>
                                </span>
                                <input 
                                    type="text" 
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    placeholder="Search people to add..." 
                                    className="w-full bg-gray-50 border-none rounded-xl py-2.5 pl-10 pr-4 text-[13px] font-semibold focus:ring-0 outline-none"
                                />
                            </div>
                        </div>

                        {/* Members List */}
                        <div className="max-h-[280px] overflow-y-auto no-scrollbar p-5 space-y-6">
                            {/* Selected Section */}
                            {selectedMembers.length > 0 && (
                                <div>
                                    <h3 className="text-[10px] font-black text-[#94A3B8] uppercase tracking-[0.15em] mb-4">
                                        Selected ({selectedMembers.length})
                                    </h3>
                                    <div className="grid grid-cols-2 gap-3">
                                        {[...SUGGESTED_USERS, ...ALL_CONNECTIONS]
                                            .filter(u => selectedMembers.includes(u.id))
                                            .map((user) => (
                                            <div 
                                                key={user.id} 
                                                onClick={() => onToggleMember(user.id)}
                                                className="flex items-center gap-3 p-3 rounded-[16px] bg-[#EEF3FF] border-[1.5px] border-brand-orange relative cursor-pointer hover:bg-[#E7EEFF] transition-colors"
                                            >
                                                <img src={user.avatar} className="w-[44px] h-[44px] rounded-full object-cover shadow-sm" alt="" />
                                                <div className="flex-1 min-w-0">
                                                    <p className="font-black text-brand-dark uppercase tracking-tight text-[13px] truncate leading-tight">{user.name}</p>
                                                    <p className="text-[10px] font-bold text-[#94A3B8] truncate mt-0.5">{user.role}</p>
                                                </div>
                                                <div className="shrink-0 w-6 h-6 bg-brand-orange rounded-full flex items-center justify-center text-white shadow-sm">
                                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4.5"><polyline points="20 6 9 17 4 12"/></svg>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Suggested Section */}
                            <div>
                                <h3 className="text-[10px] font-black text-[#94A3B8] uppercase tracking-[0.15em] mb-4">Suggested</h3>
                                <div className="grid grid-cols-2 gap-3">
                                    {[...SUGGESTED_USERS, ...ALL_CONNECTIONS]
                                        .filter(u => !selectedMembers.includes(u.id))
                                        .filter(u => u.name.toLowerCase().includes(searchTerm.toLowerCase()))
                                        .map((user) => (
                                        <div 
                                            key={user.id} 
                                            onClick={() => onToggleMember(user.id)}
                                            className="flex items-center gap-3 p-3 rounded-[16px] bg-white border-[1.5px] border-gray-100 hover:border-brand-orange/30 transition-all cursor-pointer group"
                                        >
                                            <img src={user.avatar} className="w-[44px] h-[44px] rounded-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all" alt="" />
                                            <div className="flex-1 min-w-0">
                                                <p className="font-black text-brand-dark uppercase tracking-tight text-[13px] truncate leading-tight">{user.name}</p>
                                                <p className="text-[10px] font-bold text-[#94A3B8] truncate mt-0.5">{user.role}</p>
                                            </div>
                                            <div className="shrink-0 w-6 h-6 rounded-full border-[2.5px] border-gray-100 group-hover:border-brand-orange transition-colors" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default CreateGroupModal;
