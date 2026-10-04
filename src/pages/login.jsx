import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import concert from '../assets/concert.jpg';

export default function Login() {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col lg:flex-row min-h-screen bg-[#fcfcfc] selection:bg-black selection:text-white">
            {/* Left Panel Image with Text Overlay */}
            <div
                className="flex w-full lg:w-[45%] min-h-[40vh] lg:min-h-0 bg-cover bg-center relative p-8 lg:p-12 lg:pt-24 flex-col justify-between overflow-hidden"
                style={{ backgroundImage: `url(${concert})` }}
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
                        <span className="text-white block">JUMP</span>
                        <span className="text-white block">BACK</span>
                        <span className="text-[#356BFF] block">IN.</span>
                    </h2>
                </div>
            </div>

            {/* Right Panel Form */}
            <div className="flex flex-col flex-1 relative bg-white py-12 lg:py-0 shadow-[inset_0_0_100px_rgba(255,255,255,0.8)]">
                {/* Back Button */}
                <button
                    onClick={() => navigate(-1)}
                    className="absolute top-4 left-4 lg:top-8 lg:left-8 p-2 text-black hover:opacity-60 transition-opacity focus:outline-none z-20"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter">
                        <line x1="19" y1="12" x2="5" y2="12"></line>
                        <polyline points="12 19 5 12 12 5"></polyline>
                    </svg>
                </button>

                {/* Form Container */}
                <div className="flex flex-col justify-center flex-1 max-w-[360px] lg:max-w-[620px] w-full mx-auto px-6 lg:px-16">
                    <div className="mb-10 text-left">
                        <h1 className="text-4xl lg:text-4xl font-Ibrand font-extrabold mb-0 tracking-tight text-black uppercase">
                            Log In
                        </h1>
                        <p className="text-gray-400 text-sm lg:text-base leading-relaxed w-[180px]">
                            Sign in and get back to the music.
                        </p>
                    </div>

                    <form className="space-y-2 lg:space-y-4" onSubmit={(e) => { e.preventDefault(); navigate('/home'); }}>
                        <div className="flex flex-col text-left">
                            <label className="text-[10px] lg:text-xs font-Ibrand font-extrabold tracking-widest text-black uppercase leading-none">
                                Email Address
                            </label>
                            <input
                                type="email"
                                placeholder="you@noise.com"
                                required
                                className="border-b border-gray-200 pb-1 lg:pb-2 text-sm lg:text-lg text-black font-Inter placeholder-gray-400 focus:outline-none focus:border-black transition-colors bg-transparent rounded-none required"
                            />
                        </div>

                        <div className="flex flex-col text-left">
                            <label className="text-[10px] lg:text-xs font-Inter font-extrabold tracking-widest text-black uppercase leading-none">
                                Password
                            </label>
                            <input
                                type="password"
                                placeholder="••••••••"
                                required
                                className="border-b border-gray-200 pb-1 lg:pb-2 text-sm lg:text-lg text-black font-Inter placeholder-gray-400 focus:outline-none focus:border-black transition-colors bg-transparent rounded-none required"
                            />
                            <div className="flex justify-end mt-3">
                                <a href="#" className="text-sm text-gray-500 underline hover:text-black transition-colors decoration-gray-300 underline-offset-4">
                                    Forgot the keys?
                                </a>
                            </div>
                        </div>

                        <div className="pt-4">
                            <button
                                type="submit"
                                className="w-full bg-[#111111] text-white font-Ibrand py-4 text-sm tracking-wide focus:outline-none hover:bg-black transition-colors relative"
                                style={{
                                    boxShadow: '4px 4px 0px rgba(0,0,0,0.9), 0px 0px 20px rgba(255,255,255,1)'
                                }}
                            >
                                ENTER
                            </button>
                        </div>
                        <div className="pt-4 text-left">
                            <p className="text-[15px] text-gray-400 font-Inter">
                                New here? <Link to="/signup" className="underline text-black font-bold">Create an account</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
