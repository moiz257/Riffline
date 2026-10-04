import React, { useState, useRef } from 'react';
import rocketIcon from '../assets/rocketicon.png';
import arrowLeft from '../assets/arrowleft.png';

const GENRES = ['Indie', 'Rock', 'Alt-Pop', 'Punk', 'Jazz', 'Electronic'];

const MOCK_USERS = [
    { id: 1, name: 'Zayn', role: 'DRUMS', avatar: 'https://i.pravatar.cc/150?u=zayn' },
    { id: 2, name: 'Sana', role: 'BASS', avatar: 'https://i.pravatar.cc/150?u=sana' },
    { id: 3, name: 'Kabir', role: 'KEYS', avatar: 'https://i.pravatar.cc/150?u=kabir' },
];

export default function CreateBandModal({ isOpen, onClose, onCreate }) {
    const fileInputRef = useRef(null);
    const [selectedGenres, setSelectedGenres] = useState(['Indie', 'Rock']);
    const [bandName, setBandName] = useState('');
    const [bio, setBio] = useState('');
    const [location, setLocation] = useState('Mumbai');
    const [coverImage, setCoverImage] = useState(null);
    const [errors, setErrors] = useState({});
    const [lineup, setLineup] = useState([
        { id: 'admin', name: 'You', role: 'ADMIN', instrument: 'GUITAR', avatar: 'https://i.pravatar.cc/150?u=you' },
        { id: 'riya', name: 'Riya', role: 'MEMBER', instrument: 'VOCALS', avatar: 'https://i.pravatar.cc/150?u=riya' }
    ]);
    const [isSearching, setIsSearching] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    if (!isOpen) return null;

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setCoverImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const toggleGenre = (genre) => {
        setSelectedGenres(prev =>
            prev.includes(genre) ? prev.filter(g => g !== genre) : [...prev, genre]
        );
    };

    const removeMember = (id) => {
        if (id === 'admin') return;
        setLineup(prev => prev.filter(m => m.id !== id));
    };

    const addMember = (user) => {
        if (lineup.find(m => m.id === user.id)) return;
        setLineup(prev => [...prev, { ...user, instrument: user.role, role: 'MEMBER' }]);
        setIsSearching(false);
        setSearchQuery('');
    };

    const handleLaunch = () => {
        onCreate({
            name: bandName,
            bio,
            location,
            genres: selectedGenres,
            lineup,
            coverImage
        });

        // Reset state
        setBandName('');
        setBio('');
        setCoverImage(null);
        setErrors({});
        setSelectedGenres(['Indie', 'Rock']);
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div className="relative w-full max-w-[770px] bg-white shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300 rounded-sm">
                {/* Header */}
                <div className="p-7 pb-3">
                    <button
                        onClick={onClose}
                        className="flex items-center gap-3 group mb-2"
                    >
                        <img
                            src={arrowLeft}
                            alt="Back"
                            className="w-5 h-5 object-contain group-hover:-translate-x-1 transition-transform"
                        />
                        <h2 className="text-[26px] font-black tracking-tight uppercase leading-none">NEW PROJECT</h2>
                    </button>
                    <div className="h-[1px] bg-black w-full opacity-10"></div>
                </div>

                <div className="p-7 pt-3 overflow-y-auto max-h-[85vh] custom-scrollbar">
                    <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-9">
                        {/* Left: Cover Upload */}
                        <div className="space-y-4">
                            <input
                                type="file"
                                ref={fileInputRef}
                                onChange={handleImageUpload}
                                className="hidden"
                                accept="image/*"
                                required
                            />
                            <div
                                onClick={() => fileInputRef.current.click()}
                                className="aspect-square border-[1.5px] border-dashed border-gray-200 bg-[#64748B]/10 flex flex-col items-center justify-center gap-4 group cursor-pointer hover:border-black transition-colors relative overflow-hidden"
                            >
                                {coverImage ? (
                                    <>
                                        <img src={coverImage} alt="Cover Preview" className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                                        <div className="inset-0 absolute bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                                            <span className="text-white text-[10px] font-black uppercase tracking-widest">CHANGE COVER</span>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className="w-11 h-11 flex items-center justify-center">
                                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 group-hover:scale-110 group-hover:text-black transition-all">
                                                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" /><circle cx="12" cy="13" r="4" />
                                            </svg>
                                        </div>
                                        <span className="text-[9px] font-black uppercase tracking-widest text-gray-400 group-hover:text-black">ADD BAND COVER</span>
                                    </>
                                )}
                            </div>
                        </div>

                        {/* Right: Info */}
                        <div className="space-y-6">
                            {/* Band Name */}
                            <div className="group">
                                <label className="text-[16px] font-extrabold uppercase tracking-widest mb-1.5 block text-[#0F172A]">BAND NAME</label>
                                <input
                                    type="text"
                                    placeholder="e.g. The Midnight Echo"
                                    required
                                    value={bandName}
                                    onChange={(e) => {
                                        setBandName(e.target.value);
                                        if (errors.bandName) setErrors({});
                                    }}
                                    className="w-full bg-[#F3F5F9] border-b-2 p-3 pl-0 text-[18px] font-bold focus:ring-0 outline-none transition-colors border-black/20 focus:border-black placeholder:text-[#64748B]"
                                />
                            </div>

                            {/* Bio */}
                            <div className="group">
                                <label className="text-[16px] font-extrabold uppercase tracking-widest text-[#0F172A] mb-1.5 block">BIO / MANIFESTO</label>
                                <textarea
                                    placeholder="What's the sound? What's the mission?"
                                    required
                                    value={bio}
                                    onChange={(e) => setBio(e.target.value)}
                                    rows="2"
                                    className="w-full bg-[#F3F5F9] border-b-2 border-black/20 focus:border-black p-3 pl-0 text-[14px] font-medium focus:ring-0 outline-none placeholder:text-[#64748B] resize-none transition-colors"
                                />
                            </div>

                            {/* Location */}
                            <div className="group">
                                <label className="text-[16px] font-extrabold uppercase tracking-widest text-[#0F172A] mb-1.5 block">LOCATION</label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        value={location}
                                        required
                                        onChange={(e) => setLocation(e.target.value)}
                                        className="w-full bg-[#F3F5F9] border-b-2 border-black/20 focus:border-black p-3 pl-0 text-[17px] font-bold focus:ring-0 outline-none placeholder:text-[#64748B] transition-colors"
                                    />
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-300">
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                                    </svg>
                                </div>
                            </div>

                            {/* Genres */}
                            <div className="group">
                                <label className="text-[16px] font-extrabold uppercase tracking-widest text-[#0F172A] mb-4 block">GENRES</label>
                                <div className="flex flex-wrap gap-2">
                                    {GENRES.map(genre => (
                                        <button
                                            key={genre}
                                            onClick={() => toggleGenre(genre)}
                                            className={`px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-wider transition-all border ${selectedGenres.includes(genre)
                                                ? 'bg-black text-white border-black border-2'
                                                : 'bg-white text-black border-black border-2 hover:border-black'
                                                }`}
                                        >
                                            {genre}
                                        </button>
                                    ))}
                                    <button className="w-9 h-9 rounded-full border border-black/10 flex items-center justify-center hover:border-black transition-all">
                                        <span className="text-lg font-bold">+</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* The Lineup */}
                    <div className="mt-12 mb-10 relative isolate">
                        <div className="absolute inset-0 translate-x-[7px] translate-y-[7px] border-[1.5px] border-black bg-white -z-10"></div>
                        <div className="border-[1.5px] border-black p-6 bg-[#F3F5F9] relative">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-[16px] font-extrabold uppercase tracking-widest text-[#0F172A]">THE LINEUP</h3>
                                <span className="text-[10px] font-bold text-[#64748B] uppercase tracking-wider translate-y-1">You can manage open positions later</span>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
                                {lineup.map(member => (
                                    <div key={member.id} className="border border-black p-4 flex items-center gap-4 bg-white shadow-sm hover:shadow-md transition-shadow h-[84px] relative group/card">
                                        <img src={member.avatar} alt={member.name} className="w-12 h-12 rounded-full border-2 border-black object-cover" />
                                        <div className="flex-1 min-w-0">
                                            <p className="text-[15px] font-black uppercase tracking-tight leading-none mb-1">{member.name}</p>
                                            <p className="text-[10px] font-bold text-[#64748B] uppercase tracking-widest">{member.role}</p>
                                        </div>
                                        <div className="shrink-0 flex flex-col items-end gap-1 self-start">
                                            <span className="bg-black text-white text-[8px] font-black px-2 py-0.5 rounded-sm uppercase tracking-widest leading-none">{member.instrument}</span>
                                            {member.id !== 'admin' && (
                                                <button
                                                    onClick={() => removeMember(member.id)}
                                                    className="text-[#64748B] hover:text-red-500 transition-colors transform scale-90 mt-1 opacity-0 group-hover/card:opacity-100"
                                                >
                                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                ))}

                                {/* Add Bandmate / Search Input */}
                                <div className="relative">
                                    {isSearching ? (
                                        <div className="border border-black p-2 bg-white flex flex-col gap-2 shadow-lg animate-in slide-in-from-top-2 duration-200 z-10 min-w-[220px]">
                                            <div className="flex items-center gap-2">
                                                <input
                                                    autoFocus
                                                    type="text"
                                                    placeholder="Search..."
                                                    value={searchQuery}
                                                    onChange={(e) => setSearchQuery(e.target.value)}
                                                    className="w-full bg-gray-50 p-2 text-[12px] font-bold outline-none border-b border-black/10 focus:border-black transition-colors"
                                                />
                                                <button onClick={() => setIsSearching(false)} className="text-[10px] font-black uppercase">✕</button>
                                            </div>
                                            <div className="flex flex-col gap-1 max-h-[150px] overflow-y-auto custom-scrollbar">
                                                {MOCK_USERS.filter(u => u.name.toLowerCase().includes(searchQuery.toLowerCase())).map(user => (
                                                    <button
                                                        key={user.id}
                                                        onClick={() => addMember(user)}
                                                        className="flex items-center gap-3 p-2 hover:bg-[#356BFF]/10 transition-colors text-left group"
                                                    >
                                                        <img src={user.avatar} className="w-7 h-7 rounded-full border border-black grayscale group-hover:grayscale-0 transition-all" alt="" />
                                                        <div className="flex-1">
                                                            <p className="text-[11px] font-black uppercase leading-none">{user.name}</p>
                                                            <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">{user.role}</p>
                                                        </div>
                                                        <span className="text-[10px] font-black">+</span>
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    ) : (
                                        <div
                                            onClick={() => setIsSearching(true)}
                                            className="border-[1.5px] border-dashed border-[#64748B] p-4 flex items-center justify-center gap-3 bg-white/40 cursor-pointer hover:border-black group transition-all h-[84px]"
                                        >
                                            <span className="text-[20px] text-[#64748B] group-hover:text-black font-black transition-colors">+</span>
                                            <span className="text-[12px] font-black uppercase tracking-widest text-[#64748B] group-hover:text-black transition-colors">ADD BANDMATE</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Footer Button - Static Solid Shadow, No click effect */}
                    <div className="flex justify-end pt-4">
                        <button
                            onClick={handleLaunch}
                            className="relative px-12 py-5 bg-[#356BFF] text-white font-black text-[18px] uppercase tracking-widest border-[3px] border-black transition-all group shadow-[6px_6px_0px_0px_rgba(15,23,42,1)]"
                        >
                            <span className="inline-flex items-center gap-4">
                                LAUNCH BAND
                                <img
                                    src={rocketIcon}
                                    alt="Rocket"
                                    className="w-7 h-7 object-contain group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform invert"
                                />
                            </span>
                        </button>
                    </div>
                </div>
            </div>

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
