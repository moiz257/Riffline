import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// SVG Icons
const SearchIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
);

const NavigationIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>
    </svg>
);

const PinIcon = ({ color = "currentColor" }) => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
        <circle cx="12" cy="10" r="3"></circle>
    </svg>
);

const MusicIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18V5l12-2v13"></path>
        <circle cx="6" cy="18" r="3"></circle>
        <circle cx="18" cy="16" r="3"></circle>
    </svg>
);

const CoffeeIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
        <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
        <line x1="6" y1="1" x2="6" y2="4"></line>
        <line x1="10" y1="1" x2="10" y2="4"></line>
        <line x1="14" y1="1" x2="14" y2="4"></line>
    </svg>
);

const CheckIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#356BFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
);

export default function TagLocation({ onClose }) {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('The Hive');
    const [isLocating, setIsLocating] = useState(false);
    const [currentLocationText, setCurrentLocationText] = useState('Khar West, Mumbai');

    const handleClose = () => {
        if (onClose) {
            onClose();
        } else {
            navigate(-1);
        }
    };

    const handleCurrentLocation = () => {
        if (!navigator.geolocation) {
            alert("Geolocation is not supported by your browser");
            return;
        }

        setIsLocating(true);
        setCurrentLocationText('Locating...');

        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                setSearchQuery(`${latitude},${longitude}`);
                setCurrentLocationText('Current Location Found');
                setIsLocating(false);
            },
            (error) => {
                console.error("Error getting location:", error);
                alert("Please allow location permissions to use this feature.");
                setCurrentLocationText('Location access denied');
                setIsLocating(false);
            }
        );
    };

    return (
        <div className="flex flex-col-reverse md:flex-row h-[100dvh] overflow-hidden bg-white font-sans text-[#0F172A] z-[110]">
            
            {/* Left Sidebar Panel (Bottom Sheet on Mobile) */}
            <div className="w-full md:w-[420px] h-[55dvh] md:h-auto flex-shrink-0 flex flex-col md:border-r border-[#E4E8F0] bg-white z-10 relative shadow-[0_-8px_30px_rgba(0,0,0,0.08)] md:shadow-sm rounded-t-[24px] md:rounded-none -mt-5 md:mt-0">
                
                {/* Header */}
                <div className="flex items-center gap-4 md:gap-6 p-5 md:p-6 border-b border-[#E4E8F0]">
                    <button 
                        onClick={handleClose} 
                        className="px-4 py-2 border border-[#E4E8F0] text-[12px] font-bold uppercase tracking-wide hover:bg-gray-50 transition-colors"
                    >
                        BACK
                    </button>
                    <h1 className="text-[22px] font-black uppercase tracking-tight">TAG LOCATION</h1>
                </div>

                {/* Search Bar */}
                <div className="p-6 border-b border-[#E4E8F0]">
                    <div className="flex items-center gap-3 bg-[#F3F5F9] px-4 py-3 border border-[#E4E8F0]">
                        <SearchIcon />
                        <input 
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search location..."
                            className="bg-transparent w-full font-semibold text-[15px] focus:outline-none placeholder-[#64748B]"
                        />
                    </div>
                </div>

                {/* Location List */}
                <div className="flex-1 overflow-y-auto">
                    
                    {/* Current Location Item */}
                    <div 
                        onClick={handleCurrentLocation}
                        className={`flex items-center p-6 border-b border-[#E4E8F0] cursor-pointer transition-colors ${isLocating ? 'bg-gray-100 opacity-70 pointer-events-none' : 'hover:bg-gray-50'}`}
                    >
                        <div className="w-[42px] h-[42px] border border-[#E4E8F0] bg-white flex items-center justify-center flex-shrink-0 mr-4">
                            {isLocating ? (
                                <div className="animate-spin w-4 h-4 border-2 border-[#356BFF] border-t-transparent rounded-full"></div>
                            ) : (
                                <NavigationIcon />
                            )}
                        </div>
                        <div>
                            <div className="font-black text-[#356BFF] text-[13px] uppercase tracking-wide mb-1">
                                {isLocating ? 'FINDING LOCATION...' : 'USE CURRENT LOCATION'}
                            </div>
                            <div className="text-[13px] text-[#64748B] font-medium">{currentLocationText}</div>
                        </div>
                    </div>

                    {/* Selected Item */}
                    <div 
                        onClick={handleClose}
                        className="flex items-center justify-between p-6 border-b border-[#E4E8F0] border-l-[3px] border-l-[#356BFF] bg-[#EEF3FF] cursor-pointer"
                    >
                        <div className="flex items-center">
                            <div className="w-[42px] h-[42px] bg-[#0F172A] flex items-center justify-center flex-shrink-0 mr-4">
                                <PinIcon color="white" />
                            </div>
                            <div>
                                <div className="font-black text-[15px] uppercase tracking-tight mb-0.5">THE HIVE STUDIO</div>
                                <div className="text-[13px] text-[#52525B] font-medium">52, Chuim Village Rd, Khar West</div>
                            </div>
                        </div>
                        <CheckIcon />
                    </div>

                    {/* Item 3 */}
                    <div 
                        onClick={handleClose}
                        className="flex items-center p-6 border-b border-[#E4E8F0] cursor-pointer hover:bg-gray-50 transition-colors"
                    >
                        <div className="w-[42px] h-[42px] border border-[#E4E8F0] bg-white flex items-center justify-center flex-shrink-0 mr-4 text-[#0F172A]">
                            <MusicIcon />
                        </div>
                        <div>
                            <div className="font-black text-[15px] uppercase tracking-tight mb-0.5">HIVE PAD JAM ROOM</div>
                            <div className="text-[13px] text-[#64748B] font-medium">Bandra West, near Lucky Biryani</div>
                        </div>
                    </div>

                    {/* Item 4 */}
                    <div 
                        onClick={handleClose}
                        className="flex items-center p-6 border-b border-[#E4E8F0] cursor-pointer hover:bg-gray-50 transition-colors"
                    >
                        <div className="w-[42px] h-[42px] border border-[#E4E8F0] bg-white flex items-center justify-center flex-shrink-0 mr-4 text-[#0F172A]">
                            <MusicIcon />
                        </div>
                        <div>
                            <div className="font-black text-[15px] uppercase tracking-tight mb-0.5">THE HABITAT</div>
                            <div className="text-[13px] text-[#64748B] font-medium">Hotel Unicontinental, Khar</div>
                        </div>
                    </div>

                    {/* Item 5 */}
                    <div 
                        onClick={handleClose}
                        className="flex items-center p-6 border-b border-[#E4E8F0] cursor-pointer hover:bg-gray-50 transition-colors"
                    >
                        <div className="w-[42px] h-[42px] border border-[#E4E8F0] bg-white flex items-center justify-center flex-shrink-0 mr-4 text-[#0F172A]">
                            <CoffeeIcon />
                        </div>
                        <div>
                            <div className="font-black text-[15px] uppercase tracking-tight mb-0.5">BLUE TOKAI COFFEE ROASTERS</div>
                            <div className="text-[13px] text-[#64748B] font-medium">Khar West, Off Linking Rd</div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Right Map Panel (Top Half on Mobile) */}
            <div className="w-full h-[45dvh] md:h-auto flex-1 relative bg-[#F8F9FA]">
                {/* Embed Google Map centered on Khar West */}
                <iframe 
                    src={`https://maps.google.com/maps?q=${encodeURIComponent(searchQuery || 'World')}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Interactive World Map"
                    className="w-full h-full"
                ></iframe>

                {/* Simulated Custom Map Controls for Design Match */}
                <div className="absolute bottom-10 right-8 hidden md:flex flex-col gap-3 pointer-events-none">
                    <button className="w-[40px] h-[40px] bg-white border-2 border-black flex items-center justify-center pointer-events-auto hover:bg-gray-100 transition-colors">
                        <span className="text-[24px] font-medium leading-none -mt-1">+</span>
                    </button>
                    <button className="w-[40px] h-[40px] bg-white border-2 border-black flex items-center justify-center pointer-events-auto hover:bg-gray-100 transition-colors">
                        <span className="text-[24px] font-medium leading-none -mt-1">-</span>
                    </button>
                </div>
            </div>
            
        </div>
    );
}
