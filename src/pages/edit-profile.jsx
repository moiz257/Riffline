import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import defaultPortrait from '../assets/musical_potrait.jpg';
import cameraIcon from '../assets/camera.svg';

export default function EditProfile() {
    const navigate = useNavigate();
    const [profileImage, setProfileImage] = useState(defaultPortrait);
    const fileInputRef = useRef(null);

    const [instruments, setInstruments] = useState(['Electric Guitar', 'Bass']);
    const [genres, setGenres] = useState(['Indie Rock', 'Punk']);
    const [gear, setGear] = useState(['Gibson Les Paul Standard', 'Squier Jazzmaster', 'Pedals: Overdrive, Fuzz, Delay, Reverb']);

    const [newInstrument, setNewInstrument] = useState('');
    const [newGenre, setNewGenre] = useState('');
    const [newGear, setNewGear] = useState('');

    const [activeInput, setActiveInput] = useState(null); // 'instrument', 'genre', 'gear'

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfileImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const triggerFilePicker = () => {
        fileInputRef.current.click();
    };

    const addTag = (type) => {
        if (type === 'instrument' && newInstrument.trim()) {
            setInstruments([...instruments, newInstrument.trim()]);
            setNewInstrument('');
            setActiveInput(null);
        } else if (type === 'genre' && newGenre.trim()) {
            setGenres([...genres, newGenre.trim()]);
            setNewGenre('');
            setActiveInput(null);
        } else if (type === 'gear' && newGear.trim()) {
            setGear([...gear, newGear.trim()]);
            setNewGear('');
            setActiveInput(null);
        }
    };

    const removeTag = (type, index) => {
        if (type === 'instrument') setInstruments(instruments.filter((_, i) => i !== index));
        if (type === 'genre') setGenres(genres.filter((_, i) => i !== index));
        if (type === 'gear') setGear(gear.filter((_, i) => i !== index));
    };

    return (
        <div className="flex h-screen overflow-hidden font-sans bg-[#0F172A]">
            {/* Sidebar */}
            <Sidebar />

            <input 
                type="file" 
                ref={fileInputRef} 
                onChange={handleFileChange} 
                className="hidden" 
                accept="image/*" 
            />

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto custom-scrollbar bg-[#f5f5f7] p-4 pt-20 md:pt-4">
                <div className="max-w-[800px] mx-auto bg-white border border-gray-200 shadow-sm min-h-screen p-4 sm:p-6 md:p-8">

                    {/* Header */}
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 border-b border-gray-200 pb-4 gap-4 sm:gap-0">
                        <h1 className="text-[20px] sm:text-[24px] font-black tracking-tight uppercase text-[#0F172A]">EDIT PROFILE</h1>
                        <div className="flex items-center gap-4 sm:gap-8 w-full sm:w-auto">
                            <Link to="/profile" className="text-[11px] sm:text-[12px] font-bold text-gray-500 hover:text-black uppercase tracking-widest transition-colors flex-1 sm:flex-none text-center">CANCEL</Link>
                            <button className="bg-[#0F172A] text-white text-[11px] sm:text-[12px] font-black px-6 sm:px-8 py-3 uppercase tracking-widest hover:bg-black transition-all flex-1 sm:flex-none">SAVE CHANGES</button>
                        </div>
                    </div>

                    {/* Profile Photo Section */}
                    <div className="flex flex-col items-center mb-10">
                        <div className="relative group cursor-pointer mb-4" onClick={triggerFilePicker}>
                            <div className="w-32 h-32 rounded-full overflow-hidden border-[3px] border-[#0F172A]">
                                <img src={profileImage} alt="Profile" className="w-full h-full object-cover grayscale" />
                            </div>
                            <div className="absolute bottom-1 right-1 w-10 h-10 bg-[#356BFF] border-[3.5px] border-white rounded-full flex items-center justify-center shadow-sm">
                                <img src={cameraIcon} alt="Camera" className="w-5 h-5 object-contain brightness-0 invert" />
                            </div>
                            <div className="absolute inset-0 bg-black/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <span className="text-white text-[10px] font-bold uppercase tracking-tighter">CHANGE</span>
                            </div>
                        </div>
                        <button onClick={triggerFilePicker} className="text-[11px] font-black uppercase tracking-tight text-[#0F172A] border-2 border-[#0F172A] px-4 py-1.5 hover:bg-gray-100 hover:text-black transition-all">
                            <span className="underline decoration-2 underline-offset-4">Change Profile Photo</span>
                        </button>
                    </div>

                    {/* Form Sections */}
                    <div className="space-y-6">

                        {/* Names Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-12">
                            <div className="space-y-3">
                                <label className="text-[12px] font-black font-sans tracking-[0.2em] text-[#64748B] uppercase block">DISPLAY NAME</label>
                                <input
                                    type="text"
                                    defaultValue="Ariya"
                                    className="w-full border-b-2 border-gray-100 font-bold text-[18px] pb-2 focus:border-black transition-colors outline-none"
                                />
                            </div>
                            <div className="space-y-3">
                                <label className="text-[12px] font-black font-sans tracking-[0.2em] text-[#64748B] uppercase block">STAGE NAME</label>
                                <input
                                    type="text"
                                    defaultValue="Ariya Singh"
                                    className="w-full border-b-2 border-gray-100 font-bold text-[18px] pb-2 focus:border-black transition-colors outline-none"
                                />
                            </div>
                        </div>

                        {/* Bio */}
                        <div className="space-y-3">
                            <label className="text-[12px] font-black font-sans tracking-[0.2em] text-[#888888] uppercase block">BIO</label>
                            <textarea
                                className="w-full bg-[#F3F5F9] border border-gray-200 p-6 font-medium text-[15px] leading-relaxed text-[#0F172A] min-h-[120px] focus:border-black transition-colors outline-none resize-none"
                                defaultValue="Self-taught riff machine obsessed with 90s shoegaze and modern noise rock. Looking for a drummer who hits hard."
                            />
                        </div>

                        {/* Location & University */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-12">
                            <div className="space-y-3 cursor-pointer group" onClick={() => navigate('/tag-location')}>
                                <label className="text-[12px] font-sans font-black tracking-[0.2em] text-[#64748B] uppercase block cursor-pointer group-hover:text-[#0F172A] transition-colors">LOCATION</label>
                                <input
                                    type="text"
                                    readOnly
                                    value="Mumbai, Bandra"
                                    className="w-full border-b-2 border-gray-100 pb-2 font-bold text-[18px] group-hover:border-black transition-colors outline-none cursor-pointer text-[#0F172A]"
                                />
                            </div>
                            <div className="space-y-3">
                                <label className="text-[12px] font-sans font-black tracking-[0.2em] text-[#64748B] uppercase block">UNIVERSITY (OPTIONAL)</label>
                                <button className="w-full border border-dashed border-gray-200 py-3 text-[12px] font-bold text-gray-400 flex items-center justify-center gap-2 hover:border-black hover:text-black transition-all">
                                    <span>➕</span> Add university & verify email
                                </button>
                            </div>
                        </div>

                        {/* Instruments Section */}
                        <div className="space-y-4">
                            <label className="text-[12px] font-sans font-black tracking-[0.2em] text-[#64748B] uppercase block">INSTRUMENTS</label>
                            <div className="flex flex-wrap gap-3">
                                {instruments.map((item, idx) => (
                                    <div key={idx} className="bg-[#0F172A] text-white text-[11px] font-black px-4 py-2 flex items-center gap-2 uppercase tracking-widest group">
                                        {item}
                                        <button onClick={() => removeTag('instrument', idx)} className="opacity-40 hover:opacity-100 transition-opacity">×</button>
                                    </div>
                                ))}

                                {activeInput === 'instrument' ? (
                                    <div className="flex items-center border-[1.5px] border-black">
                                        <input
                                            autoFocus
                                            type="text"
                                            value={newInstrument}
                                            onChange={(e) => setNewInstrument(e.target.value)}
                                            onKeyPress={(e) => e.key === 'Enter' && addTag('instrument')}
                                            className="px-3 py-1.5 text-[11px] font-bold uppercase outline-none w-32"
                                            placeholder="Write here..."
                                        />
                                        <button onClick={() => addTag('instrument')} className="bg-black text-white h-full px-2 flex items-center justify-center hover:bg-[#0f6c06] transition-colors">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                                        </button>
                                    </div>
                                ) : (
                                    <button onClick={() => setActiveInput('instrument')} className="border border-dashed border-gray-200 px-4 py-2 text-[11px] font-bold text-gray-400 hover:border-black hover:text-black transition-all uppercase tracking-widest">
                                        ➕ Add instrument
                                    </button>
                                )}
                            </div>
                        </div>

                        {/* Genres Section */}
                        <div className="space-y-4">
                            <label className="text-[12px] font-sans font-black tracking-[0.2em] text-[#64748B] uppercase block">GENRES</label>
                            <div className="flex flex-wrap gap-3">
                                {genres.map((item, idx) => (
                                    <div key={idx} className="bg-[#0F172A] text-white text-[11px] font-black px-4 py-2 flex items-center gap-2 uppercase tracking-widest group">
                                        {item}
                                        <button onClick={() => removeTag('genre', idx)} className="opacity-40 hover:opacity-100 transition-opacity">×</button>
                                    </div>
                                ))}

                                {activeInput === 'genre' ? (
                                    <div className="flex items-center border-[1.5px] border-black">
                                        <input
                                            autoFocus
                                            type="text"
                                            value={newGenre}
                                            onChange={(e) => setNewGenre(e.target.value)}
                                            onKeyPress={(e) => e.key === 'Enter' && addTag('genre')}
                                            className="px-3 py-1.5 text-[11px] font-bold uppercase outline-none w-32"
                                            placeholder="Write here..."
                                        />
                                        <button onClick={() => addTag('genre')} className="bg-black text-white h-full px-2 flex items-center justify-center hover:bg-[#0f6c06] transition-colors">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                                        </button>
                                    </div>
                                ) : (
                                    <button onClick={() => setActiveInput('genre')} className="border border-dashed border-gray-200 px-4 py-2 text-[11px] font-bold text-gray-400 hover:border-black hover:text-black transition-all uppercase tracking-widest">
                                        ➕ Add Genre
                                    </button>
                                )}
                            </div>
                        </div>

                        {/* Gear & Setup Section */}
                        <div className="space-y-4">
                            <label className="text-[12px] font-sans font-black tracking-[0.2em] text-[#64748B] uppercase block">GEAR & SETUP</label>
                            <div className="flex flex-wrap gap-3">
                                {gear.map((item, idx) => (
                                    <div key={idx} className="bg-[#0F172A] text-white text-[11px] font-black px-4 py-2 flex items-center gap-2 uppercase tracking-widest group max-w-full">
                                        <span className="truncate">{item}</span>
                                        <button onClick={() => removeTag('gear', idx)} className="opacity-40 hover:opacity-100 transition-opacity shrink-0">×</button>
                                    </div>
                                ))}

                                {activeInput === 'gear' ? (
                                    <div className="flex items-center border-[1.5px] border-black">
                                        <input
                                            autoFocus
                                            type="text"
                                            value={newGear}
                                            onChange={(e) => setNewGear(e.target.value)}
                                            onKeyPress={(e) => e.key === 'Enter' && addTag('gear')}
                                            className="px-3 py-1.5 text-[11px] font-bold uppercase outline-none w-48"
                                            placeholder="Write gear detail..."
                                        />
                                        <button onClick={() => addTag('gear')} className="bg-black text-white h-full px-2 flex items-center justify-center hover:bg-[#0f6c06] transition-colors">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                                        </button>
                                    </div>
                                ) : (
                                    <button onClick={() => setActiveInput('gear')} className="border border-dashed border-gray-200 px-4 py-2 text-[11px] font-bold text-gray-400 hover:border-black hover:text-black transition-all uppercase tracking-widest">
                                        ➕ Add Gear
                                    </button>
                                )}
                            </div>
                        </div>

                        {/* Final Action */}
                        <div className="pt-8 flex justify-end">
                            <button className="bg-[#356BFF] w-full sm:w-auto text-white font-black text-[13px] tracking-[0.2em] px-8 sm:px-12 py-4 sm:py-5 uppercase border-2 border-black shadow-[4px_4px_0px_rgba(15,23,42,1)] sm:shadow-[6px_6px_0px_rgba(15,23,42,1)] hover:bg-[#244FC4] transition-all">
                                UPDATE PROFILE
                            </button>
                        </div>

                    </div>
                </div>
            </main>

            <style>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 6px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #e5e5e5;
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: #d1d1d1;
                }
            `}</style>
        </div>
    );
}
