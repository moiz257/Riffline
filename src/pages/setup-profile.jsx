import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import musicianPortrait from '../assets/musical_potrait.jpg';

export default function Profile() {
    const navigate = useNavigate();
    const [profileImage, setProfileImage] = useState(null);
    const [instruments, setInstruments] = useState(['Electric Guitar', 'Bass']);
    const [genres, setGenres] = useState(['Indie Rock', 'Punk']);
    const [gear, setGear] = useState(['Gibson Les Paul Standard', 'Squier Jazzmaster', 'Pedals']);

    const fileInputRef = useRef(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setProfileImage(imageUrl);
        }
    };

    const triggerFileInput = () => {
        fileInputRef.current?.click();
    };

    const removeItem = (setFn, list, itemToRemove) => {
        setFn(list.filter(item => item !== itemToRemove));
    };

    const addItem = (setFn, list, category) => {
        const newItem = prompt(`Enter new ${category}:`);
        if (newItem && newItem.trim() && !list.includes(newItem)) {
            setFn([...list, newItem.trim()]);
        }
    };

    return (
        <div className="flex flex-col lg:flex-row min-h-screen lg:h-screen lg:overflow-hidden bg-[#fcfcfc] selection:bg-black selection:text-white">
            <input
                type="file"
                ref={fileInputRef}
                onChange={handleImageChange}
                className="hidden"
                accept="image/*"
            />
            {/* Left Panel - Set the Stage */}
            <div
                className="flex w-full lg:w-[45%] min-h-[40vh] lg:min-h-0 lg:h-full bg-cover bg-center relative p-8 lg:p-14 lg:pt-16 flex-col justify-start overflow-hidden"
                style={{
                    backgroundImage: `url(${musicianPortrait})`,
                    backgroundPosition: 'center -200px'
                }}
            >
                <div className="absolute inset-0 bg-black/40 pointer-events-none mix-blend-multiply"></div>

                <div className="relative z-10 lg:left-[-20px] lg:top-[-20px] w-fit">
                    <p className="font-Ibrand font-black text-[20px] lg:text-[62px] leading-[0.8] tracking-tighter uppercase select-none drop-shadow-2xl">
                        <span className="text-white block">SET THE</span>
                        <span className="text-[#356BFF] block">STAGE.</span>
                    </p>
                </div>
            </div>

            {/* Right Panel - Finish Your Profile */}
            <div className="flex flex-col flex-1 relative bg-white lg:overflow-hidden overflow-y-auto custom-scrollbar">
                <div className="flex flex-col justify-center max-w-[500px] lg:max-w-[650px] w-full mx-auto px-6 lg:px-12 py-2 my-6 h-full min-h-fit">
                    <div className="mb-2 text-center">
                        <h1 className="text-xl lg:text-[26px] font-Ibrand font-black tracking-tight mb-1 text-black uppercase leading-none">
                            FINISH YOUR PROFILE.
                        </h1>
                        <p className="text-gray-500 text-[10px] lg:text-[12px] leading-relaxed max-w-[400px] mx-auto font-Inter font-medium">
                            Give Riffline the basics so other musicians know who they're about to meet.
                        </p>
                    </div>

                    {/* Profile Picture Upload */}
                    <div className="flex flex-col items-center mb-2">
                        <div className="relative">
                            <div
                                className="w-20 h-20 lg:w-24 lg:h-24 rounded-full border-[5px] border-black overflow-hidden bg-gray-50 flex items-center justify-center grayscale transition-all shadow-sm cursor-pointer hover:grayscale-0 relative"
                                onClick={triggerFileInput}
                            >
                                <img
                                    src={profileImage || musicianPortrait}
                                    alt="Profile"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div
                                className="absolute -bottom-1 -right-1 w-8 h-8 lg:w-9 lg:h-9 bg-[#356BFF] rounded-full flex items-center justify-center border-4 border-white shadow-md cursor-pointer hover:bg-black transition-colors"
                                onClick={triggerFileInput}
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                                    <circle cx="12" cy="13" r="4"></circle>
                                </svg>
                            </div>
                        </div>
                        <button
                            type="button"
                            onClick={triggerFileInput}
                            className="mt-1 text-[10px] font-['Liberation_Sans'] text-[#64748B] underline hover:text-black transition-colors"
                        >
                            Add a face to the name
                        </button>
                    </div>

                    <form className="space-y-1.5" onSubmit={(e) => {
                        e.preventDefault();
                        if (instruments.length === 0 || genres.length === 0 || gear.length === 0) {
                            alert('Please add at least one Instrument, Genre, and Gear item.');
                            return;
                        }
                        navigate('/select-instrument');
                    }}>
                        {/* Display Name & DOB Row */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-1.5">
                            <div className="flex flex-col text-left">
                                <label className="text-[12px] lg:text-[12px] font-sans font-extrabold tracking-widest text-black uppercase mb-0.5">
                                    Display Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="Ariya"
                                    required
                                    className="border-b border-gray-200 text-[14px] text-black font-Inter placeholder-gray-300 focus:outline-none focus:border-black transition-colors bg-transparent rounded-none"
                                />
                            </div>
                            <div className="flex flex-col text-left">
                                <label className="text-[9px] lg:text-[12px] font-Ibrand font-extrabold tracking-widest text-black uppercase mb-0.5">
                                    Date of Birth
                                </label>
                                <input
                                    type="text"
                                    placeholder="24 Aug 2000"
                                    required
                                    className="border-b border-gray-200 text-[14px] text-black font-Inter placeholder-gray-300 focus:outline-none focus:border-black transition-colors bg-transparent rounded-none"
                                />
                            </div>
                        </div>

                        {/* Location */}
                        <div className="flex flex-col text-left cursor-pointer" onClick={() => navigate('/tag-location')}>
                            <label className="text-[9px] lg:text-[12px] font-Ibrand font-extrabold tracking-widest text-black uppercase mb-0.5 pointer-events-none">
                                Location
                            </label>
                            <div className="border-b border-gray-200 py-1.5 lg:py-2 text-[14px] text-black font-Inter bg-transparent flex justify-between items-center group">
                                <span className="text-black font-semibold">Mumbai</span>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D1D5DB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-black transition-colors">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                    <circle cx="12" cy="10" r="3" />
                                </svg>
                            </div>
                        </div>

                        {/* Bio */}
                        <div className="flex flex-col text-left">
                            <label className="text-[9px] lg:text-[12px] font-Ibrand font-extrabold tracking-widest text-black uppercase mb-0.5">
                                Bio
                            </label>
                            <textarea
                                placeholder="Self-taught riff machine obsessed with 90s shoegaze and modern noise rock."
                                rows="2"
                                required
                                className="border border-gray-100 text-[12px] text-gray-600 font-Inter placeholder-gray-300 focus:outline-none focus:border-[#356BFF] transition-colors bg-transparent rounded-md resize-none leading-tight"
                            ></textarea>
                        </div>

                        {/* Instruments Tags */}
                        <div className="flex flex-col text-left space-y-0.5">
                            <label className="text-[9px] lg:text-[12px] font-Ibrand font-extrabold tracking-widest text-black uppercase">
                                Instruments
                            </label>
                            <div className="flex flex-wrap gap-1.5 items-center">
                                {instruments.map(item => (
                                    <div key={item} className="bg-[#0F172A] text-white text-[10px] font-Inter font-semibold px-3 py-1.5 flex items-center gap-2 cursor-default active:scale-95 transition-transform">
                                        {item}
                                        <span
                                            className="text-gray-500 hover:text-white cursor-pointer text-xs"
                                            onClick={() => removeItem(setInstruments, instruments, item)}
                                        >×</span>
                                    </div>
                                ))}
                                <button
                                    type="button"
                                    onClick={() => addItem(setInstruments, instruments, 'instrument')}
                                    className="text-[10px] font-Inter font-semibold border border-dashed border-gray-200 px-3 py-1.5 text-gray-400 hover:border-black hover:text-black transition-colors flex items-center gap-1.5"
                                >
                                    <span>+</span> Add instrument
                                </button>
                            </div>
                        </div>

                        {/* Genres Tags */}
                        <div className="flex flex-col text-left space-y-0.5">
                            <label className="text-[9px] lg:text-[12px] font-Ibrand font-extrabold tracking-widest text-black uppercase">
                                Genres
                            </label>
                            <div className="flex flex-wrap gap-1.5 items-center">
                                {genres.map(item => (
                                    <div key={item} className="bg-[#0F172A] text-white text-[10px] font-Inter font-semibold px-3 py-1.5 flex items-center gap-2 cursor-default active:scale-95 transition-transform">
                                        {item}
                                        <span
                                            className="text-gray-500 hover:text-white cursor-pointer text-xs"
                                            onClick={() => removeItem(setGenres, genres, item)}
                                        >×</span>
                                    </div>
                                ))}
                                <button
                                    type="button"
                                    onClick={() => addItem(setGenres, genres, 'genre')}
                                    className="text-[10px] font-Inter font-semibold border border-dashed border-gray-200 px-3 py-1.5 text-gray-400 hover:border-black hover:text-black transition-colors flex items-center gap-1.5"
                                >
                                    <span>+</span> Add genre
                                </button>
                            </div>
                        </div>

                        {/* Gear & Setup Tags */}
                        <div className="flex flex-col text-left space-y-0">
                            <label className="text-[9px] lg:text-[12px] font-Ibrand font-extrabold tracking-widest text-black uppercase">
                                Gear & Setup
                            </label>
                            <div className="flex flex-wrap gap-1.5 items-center">
                                {gear.map(item => (
                                    <div key={item} className="bg-[#0F172A] text-white text-[10px] font-Inter font-semibold px-3 py-1.5 flex items-center gap-2 cursor-default active:scale-95 transition-transform">
                                        {item}
                                        <span
                                            className="text-gray-500 hover:text-white cursor-pointer text-xs ml-1"
                                            onClick={() => removeItem(setGear, gear, item)}
                                        >×</span>
                                    </div>
                                ))}
                                <button
                                    type="button"
                                    onClick={() => addItem(setGear, gear, 'gear')}
                                    className="text-[10px] font-Inter font-semibold border border-dashed border-gray-200 px-3 py-1.5 text-gray-400 hover:border-black hover:text-black transition-colors flex items-center gap-1.5"
                                >
                                    <span>+</span> Add gear
                                </button>
                            </div>
                        </div>

                        {/* Continue Button */}
                        <div className="pt-1 pb-2 mb-10">
                            <button
                                type="submit"
                                className="w-full bg-[#356BFF] text-black font-Ibrand py-3 text-[12px] font-black tracking-widest focus:outline-none hover:text-white transition-all relative flex items-center justify-center group"
                                style={{
                                    boxShadow: '4px 4px 0px rgba(15,23,42,1)',
                                    border: '1.5px solid black'
                                }}
                            >
                                CONTINUE TO RIFFLINE
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="absolute right-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                                    <line x1="22" y1="2" x2="11" y2="13"></line>
                                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                                </svg>
                            </button>
                        </div>
                    </form>
                </div>

                <style dangerouslySetInnerHTML={{
                    __html: `
                    .custom-scrollbar::-webkit-scrollbar {
                        width: 5px;
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
        </div>
    );
}
