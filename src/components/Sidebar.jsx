import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import discoverImg from '../assets/discover.png';
import profileImg from '../assets/pfp.png';
import mayaImg from '../assets/maya.png';
import discoverIcon from '../assets/discover-sidebar-icon.svg';
import calendarIcon from '../assets/calender.svg';

export default function Sidebar() {
  const location = useLocation();

  const navItems = [
    {
      name: 'Home',
      path: '/home',
      icon: 'M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z',
      innerIcon: 'M9 22V12h6v10'
    },
    {
      name: 'Manage',
      path: '/manage',
      icon: 'M20 7H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z',
      innerIcon: 'M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16'
    },
    {
      name: 'Calendar',
      path: '/calendar',
      isCalendar: true
    },
    {
      name: 'Discover',
      path: '/discover',
      isDiscover: true
    },
    {
      name: 'Messages',
      path: '/messages',
      icon: 'M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z'
    },
    {
      name: 'Profile',
      path: '/profile',
      icon: 'M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2',
      innerIcon: 'M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z'
    },
    {
      name: 'Create',
      path: '/create',
      icon: 'M12 22c5.5228 0 10-4.4772 10-10S17.5228 2 12 2 2 6.4772 2 12s4.4772 10 10 10z',
      innerIcon: 'M12 8v8M8 12h8'
    }
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Top Bar */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-16 bg-white border-b-2 border-brand-dark z-40 flex items-center justify-between px-4">
        <Link to="/home">
          <h1 className="text-2xl font-heading font-black tracking-tighter text-brand-dark uppercase">RIFFLINE.</h1>
        </Link>
        <button onClick={() => setIsOpen(true)} className="p-2">
          <svg className="w-8 h-8 text-brand-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </button>
      </div>

      {/* Overlay */}
      {isOpen && <div className="md:hidden fixed inset-0 bg-black/50 z-40" onClick={() => setIsOpen(false)} />}

      <aside className={`w-64 h-screen fixed md:sticky top-0 left-0 z-50 border-r-[3px] border-brand-dark bg-white flex flex-col justify-between py-8 px-6 transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 shrink-0`}>
        <div>
          <div className="flex justify-between items-center mb-10 pl-2">
            <Link to="/home" className="block">
              <h1 className="text-3xl font-heading font-black tracking-tighter text-brand-dark uppercase">RIFFLINE.</h1>
            </Link>
            <button onClick={() => setIsOpen(false)} className="md:hidden p-1">
              <svg className="w-6 h-6 text-brand-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
          </div>
          <nav className="space-y-2">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path || (item.name === 'Home' && location.pathname === '/');
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`group flex items-center gap-4 px-4 py-3 font-bold transition-colors border-2 ${isActive
                    ? 'bg-brand-dark text-white border-brand-dark'
                    : 'text-[#64748B] border-transparent hover:text-brand-dark hover:bg-gray-100 hover:border-gray-200'
                    }`}
                >
                  {item.isDiscover ? (
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                      <path d="M13.5335 6.4668L12.0301 10.976C11.8642 11.4737 11.4737 11.8642 10.976 12.0301L6.4668 13.5335L7.97013 9.0243C8.13602 8.52658 8.52658 8.13602 9.0243 7.97013L13.5335 6.4668" />
                      <path d="M1.66699 10.0003C1.66699 14.5996 5.40103 18.3337 10.0003 18.3337C14.5996 18.3337 18.3337 14.5996 18.3337 10.0003C18.3337 5.40103 14.5996 1.66699 10.0003 1.66699C5.40103 1.66699 1.66699 5.40103 1.66699 10.0003V10.0003" />
                    </svg>
                  ) : item.isCalendar ? (
                    <svg width="20" height="20" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                      <path d="M5.33301 1.33301V3.99967M10.6663 1.33301V3.99967" />
                      <path d="M3.33333 2.66699H12.6667C13.4026 2.66699 14 3.26444 14 4.00033V13.3337C14 14.0695 13.4026 14.667 12.6667 14.667H3.33333C2.59745 14.667 2 14.0695 2 13.3337V4.00033C2 3.26444 2.59745 2.66699 3.33333 2.66699V2.66699" />
                      <path d="M2 6.66699H14" />
                    </svg>
                  ) : item.isCustomImg ? (
                    <img src={item.customIcon} alt={item.name} className={`w-5 h-5 object-contain shrink-0 transition-all ${isActive ? 'invert brightness-0' : 'opacity-60 group-hover:opacity-100 group-hover:brightness-0'}`} />
                  ) : (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                      <path d={item.icon} />
                      {item.innerIcon && <path d={item.innerIcon} />}
                    </svg>
                  )}
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>
  
        <Link to="/edit-profile" onClick={() => setIsOpen(false)}>
          <div className="w-[210px] h-[60px] border-2 border-[#0F172A] rounded-[6px] p-[12px] flex items-center gap-[12px] bg-white mt-8 cursor-pointer">
            <img src={mayaImg} alt="Maya R." className="w-9 h-9 rounded-full object-cover" />
            <div className="flex flex-col justify-center">
              <p className="font-bold text-[15px] text-[#0F172A] leading-tight">Maya R.</p>
              <p className="text-[13px] text-gray-500 font-medium leading-tight">@maya.keys</p>
            </div>
          </div>
        </Link>
      </aside>
    </>
  );
}
