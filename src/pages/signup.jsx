import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import bandSinging from '../assets/band-singing.jpg';

export default function Signup() {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col lg:flex-row min-h-screen lg:h-screen lg:overflow-hidden bg-[#fcfcfc] selection:bg-black selection:text-white">
            {/* Left Panel Image with Text Overlay */}
            <div
                className="flex w-full lg:w-[45%] min-h-[40vh] lg:min-h-0 lg:h-full bg-cover bg-center relative p-8 lg:p-12 lg:pt-24 flex-col justify-between overflow-hidden"
                style={{ backgroundImage: `url(${bandSinging})` }}
            >
                <div className="absolute inset-0 bg-[#0F172A]/50 backdrop-grayscale pointer-events-none mix-blend-color"></div>
                <div className="absolute inset-0 bg-[#0F172A]/30 pointer-events-none mix-blend-overlay"></div>

                <Link to="/" className="relative z-10 w-full flex justify-center mt-40 lg:mt-40 font-Ibrand cursor-pointer">
                    <span className="text-white font-Ibrand font-bold text-[50px] lg:text-[80px] tracking-[-0.05em] lowercase select-none drop-shadow-lg">
                        Riffline.
                    </span>
                </Link>

                <div className="relative z-10 w-full mb-0 lg:mb-[-30px] pl-2 lg:pl-6">
                    <h2 className="font-Ibrand font-extrabold text-[50px] lg:text-[70px] leading-[0.85] tracking-tight uppercase select-none drop-shadow-xl mt-8">
                        <span className="text-white block">JOIN THE</span>
                        <span className="text-[#356BFF] block">SCENE.</span>
                    </h2>
                </div>
            </div>

            {/* Right Panel Form */}
            <div className="flex flex-col flex-1 relative bg-white py-12 lg:py-0 shadow-[inset_0_0_100px_rgba(255,255,255,0.8)]">
                {/* Back Button */}
                <button 
                    onClick={() => navigate(-1)}
                    className="absolute top-4 left-4 lg:top-6 lg:left-8 p-2 text-black hover:opacity-60 transition-opacity focus:outline-none z-20"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter">
                        <line x1="19" y1="12" x2="5" y2="12"></line>
                        <polyline points="12 19 5 12 12 5"></polyline>
                    </svg>
                </button>

                {/* Form Container */}
                <div className="flex flex-col justify-center flex-1 max-w-[360px] lg:max-w-[520px] w-full mx-auto px-6 lg:px-12 mt-10 lg:mt-0">
                    <div className="mb-0 text-left mt-2 lg:mt-0">
                        <h1 className="text-3xl lg:text-4xl font-Ibrand font-extrabold tracking-tight mb-0 text-black uppercase">
                            Sign Up
                        </h1>
                        <p className="text-gray-400 text-xs lg:text-base leading-tight lg:leading-relaxed w-full max-w-[280px] lg:max-w-none">
                            Create an account to connect, manage, and grow your band.
                        </p>
                    </div>

                    <form className="space-y-[4px] lg:space-y-2" onSubmit={(e) => { e.preventDefault(); navigate('/select-instrument'); }}>
                        <div className="flex flex-col text-left">
                            <label className="text-[10px] lg:text-xs font-Ibrand font-extrabold tracking-md text-[#111] uppercase leading-none">
                                Full Name
                            </label>
                            <input
                                type="text"
                                placeholder="e.g. Sid Vicious"
                                className="border-b border-gray-200 pb-[2px] lg:pb-2 text-xs lg:text-lg text-black font-Inter placeholder-gray-400 focus:outline-none focus:border-black transition-colors bg-transparent rounded-none required"
                            />
                        </div>

                        <div className="flex flex-col text-left">
                            <label className="text-[10px] lg:text-xs font-Ibrand font-extrabold tracking-md text-[#111] uppercase leading-none">
                                Stage Name
                            </label>
                            <input
                                type="text"
                                placeholder="What do they scream?"
                                className="border-b border-gray-200 pb-[2px] lg:pb-2 text-xs lg:text-lg text-black font-Inter placeholder-gray-400 focus:outline-none focus:border-black transition-colors bg-transparent rounded-none required"
                            />
                        </div>

                        <div className="flex flex-col text-left">
                            <label className="text-[10px] lg:text-xs font-Ibrand font-extrabold tracking-md text-[#111] uppercase leading-none">
                                Email Address
                            </label>
                            <input
                                type="email"
                                placeholder="you@noise.com"
                                className="border-b border-gray-200 pb-[2px] lg:pb-2 text-xs lg:text-lg text-black font-Inter placeholder-gray-400 focus:outline-none focus:border-black transition-colors bg-transparent rounded-none required"
                            />
                        </div>

                        <div className="flex flex-col text-left">
                            <label className="text-[10px] lg:text-xs font-Ibrand font-extrabold tracking-md text-[#111] uppercase leading-none">
                                Mobile Number
                            </label>
                            <input
                                type="tel"
                                placeholder="+91 00000 00000"
                                className="border-b border-gray-200 pb-[2px] lg:pb-2 text-xs lg:text-lg text-black font-Inter placeholder-gray-400 focus:outline-none focus:border-black transition-colors bg-transparent rounded-none required"
                            />
                        </div>

                        <div className="flex flex-col text-left">
                            <label className="text-[10px] font-Ibrand lg:text-xs font-extrabold tracking-md text-[#0F172A] uppercase leading-none">
                                Password
                            </label>
                            <input
                                type="password"
                                placeholder="••••••••"
                                className="border-b border-gray-200 pb-[2px] lg:pb-2 text-xs lg:text-lg text-black font-Inter placeholder-gray-400 focus:outline-none focus:border-black transition-colors bg-transparent rounded-none required"
                            />
                        </div>

                        <div className="flex flex-col text-left">
                            <label className="text-[10px] lg:text-xs font-Ibrand font-extrabold tracking-md text-[#111] uppercase leading-none">
                                Repeat Password
                            </label>
                            <input
                                type="password"
                                placeholder="••••••••"
                                className="border-b border-gray-200 pb-[2px] lg:pb-2 text-xs lg:text-lg text-black font-Inter placeholder-gray-400 focus:outline-none focus:border-black transition-colors bg-transparent rounded-none required"
                            />
                            <p className="text-[11px] text-gray-400 mt-0 font-Inter">
                                Must be at least 8 characters. Make it weird.
                            </p>
                        </div>

                        <div className="pt-0">
                            <button
                                type="submit"
                                className="w-full bg-[#111111] text-white font-Ibrand py-2 text-sm tracking-wide focus:outline-none hover:bg-black transition-colors relative"
                                style={{
                                    boxShadow: '4px 4px 0px rgba(0,0,0,0.9), 0px 0px 20px rgba(255,255,255,1)'
                                }}
                            >
                                MAKE IT OFFICIAL
                            </button>
                        </div>
                        <div className="pt-0 text-left w-[400px]">
                            <p className="text-[14px] text-gray-400 font-Inter">
                                By signing up, you agree to Riffline's <a href="#" className="underline text-black ">Terms</a> and <a href="#" className="underline text-black">Privacy Policy</a>.
                                <br />
                                Already part of the scene? <Link to="/login" className="underline text-black font-bold">Log In</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
