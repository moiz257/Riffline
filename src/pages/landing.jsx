import React from 'react';
import { Link } from 'react-router-dom';
import pfp from '../assets/pfp.png';
import studioSession from '../assets/studio-session.png';
import sara from '../assets/sara.png';
import marcus from '../assets/marcus.png';
import profileScreen from '../assets/profile.png';
import discoverScreen from '../assets/discover.png';
import appleIcon from '../assets/apple-icon.svg';
import playstoreIcon from '../assets/playstore-icon.svg';
import blackappleIcon from '../assets/black-apple-icon.svg';
import blackplaystoreIcon from '../assets/black-playstore-icon.svg';
function Landing() {
  return (
    <div className="min-h-screen bg-brand-dark text-white font-sans w-full overflow-x-hidden">
      {/* Navigation */}
      <header className="w-full border-b border-white/10">
        <nav className="w-full px-4 md:px-16 py-4 md:py-6 flex flex-wrap sm:flex-nowrap justify-between items-center gap-4">
          <div className="text-xl md:text-2xl font-heading tracking-tighter shrink-0">Riffline</div>
          <div className="flex gap-2 sm:gap-4 items-center shrink-0">
            <Link
              to="/login"
              className="w-[80px] sm:w-[110.11px] h-[38px] sm:h-[46px] flex items-center justify-center px-2 sm:pt-[12px] sm:pr-[24px] sm:pb-[13px] sm:pl-[24px] bg-[#FFFFFF01] border-2 border-white shadow-[2px_2px_0_0_#FFFFFF] sm:shadow-[4px_4px_0_0_#FFFFFF] text-xs sm:text-sm font-semibold tracking-wide uppercase hover:bg-white/10 transition-colors shrink-0"
            >
              LOG IN
            </Link>
            <Link 
              to="/signup" 
              className="w-[120px] sm:w-[170.63px] h-[38px] sm:h-[46px] flex items-center justify-center px-2 sm:pt-[12px] sm:pr-[24px] sm:pb-[13px] sm:pl-[24px] bg-[#356BFF] border-2 border-[#0F172A] shadow-[2px_2px_0_0_#0F172A] sm:shadow-[4px_4px_0_0_#0F172A] text-[#0F172A] text-xs sm:text-sm font-bold tracking-wide uppercase transition-transform hover:scale-105 shrink-0"
            >
              SIGN UP FREE
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="w-full px-4 md:px-16 pt-16 pb-24 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h1 className="text-5xl md:text-7xl font-heading leading-[1.1] uppercase tracking-tight">
            Find Your <br />Band<span className="inline-block w-[14px] h-[14px] md:w-[18px] md:h-[18px] rounded-full bg-white align-middle mb-2 ml-1"></span><br />Build Your <br />Sound<span className="inline-block w-[14px] h-[14px] md:w-[18px] md:h-[18px] rounded-full bg-white align-middle mb-2 ml-1"></span>
          </h1>
          <p className="text-gray-400 text-lg max-w-md leading-relaxed">
            The anti-corporate network for the underground.
            Connect with musicians, collaborate on projects,
            and get discovered.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-4">
            <Link 
              to="/signup"
              className="w-full sm:w-[254.69px] h-[57px] px-8 bg-[#356BFF] border-2 border-[#0F172A] shadow-[4px_4px_0_0_#0F172A] text-[#0F172A] text-sm font-bold uppercase tracking-wide flex items-center justify-center shrink-0 transition-transform hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_#0F172A] active:translate-y-1 active:shadow-none"
            >
              GET STARTED FREE
            </Link>
            <button className="w-full sm:w-[256px] h-[57px] px-8 bg-[#FFFFFF01] border-2 border-white shadow-[4px_4px_0_0_#FFFFFF] text-white text-sm font-bold uppercase tracking-wide flex items-center justify-center hover:bg-white/10 transition-colors">
              See How It Works
            </button>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="flex items-center justify-center gap-3 w-full sm:w-[151.92px] h-[50px] px-4 bg-[#FFFFFF01] border-2 border-white rounded-lg hover:bg-white/10 transition-colors text-white">
              <img src={appleIcon} alt="Apple App Store" className="w-6 h-6 object-contain" />
              <div className="text-left">
                <div className="text-[10px] leading-none text-gray-300">Download on the</div>
                <div className="text-sm font-semibold leading-tight">App Store</div>
              </div>
            </button>
            <button className="flex items-center justify-center gap-3 w-full sm:w-[151.92px] h-[50px] px-4 bg-[#FFFFFF01] border-2 border-white rounded-lg hover:bg-white/10 transition-colors text-white">
              <img src={playstoreIcon} alt="Google Play Store" className="w-6 h-6 object-contain" />
              <div className="text-left">
                <div className="text-[10px] leading-none text-gray-300">GET IT ON</div>
                <div className="text-sm font-semibold leading-tight">Google Play</div>
              </div>
            </button>
          </div>
        </div>

        {/* Polaroids Illustration */}
        <div className="relative h-[500px] hidden lg:block">
          {/* Card 1 */}
          <div
            className="absolute z-30 flex flex-col text-black"
            style={{
              width: '280px',
              height: 'auto',
              top: '-10.89px',
              left: '240.64px',
              gap: '16px',
              transform: 'rotate(8deg)',
              opacity: 1,
              padding: '16px',
              background: '#FFFFFF',
              border: '3px solid #0F172A',
              boxShadow: '12px 12px 0px 0px #356BFF'
            }}
          >
            <div className="flex items-center gap-4">
              <img src={pfp} alt="Jake Styles" className="w-16 h-16 rounded-full object-cover" />
              <div>
                <h3 className="font-heading text-lg uppercase leading-none mb-1 text-black font-black whitespace-nowrap">Jake Styles</h3>
                <div className="text-sm text-gray-600 font-bold">Drummer • London</div>
              </div>
            </div>
            <div className="flex gap-2">
              <span className="border-[1.3px] border-black px-3 py-1 text-xs font-bold text-black uppercase">Rock</span>
              <span className="border-[1.3px] border-black px-3 py-1 text-xs font-bold text-black uppercase">Punk</span>
            </div>
            <Link to="/login" className="bg-[#0F172A] text-white font-bold uppercase text-xs py-3 w-full mt-auto tracking-widest hover:bg-black transition-colors text-center">Connect</Link>
          </div>
          {/* Card 2 */}
          <div className="absolute z-10 flex flex-col justify-between"
            style={{
              width: '330px',
              height: 'auto',
              top: '170.8px',
              left: '60px',
              gap: '12px',
              transform: 'rotate(-5deg)',
              opacity: 1,
              border: '3px solid #FFFFFF',
              padding: '24px',
              backgroundColor: '#0F172A',
              color: '#FFFFFF',
              boxShadow: '-12px 12px 0px 0px #FFFFFF'
            }}>
            <div>
              <div className="inline-block bg-brand-orange text-[#0F172A] text-xs font-bold uppercase px-3 py-1 mb-4">Position Open</div>
              <h3 className="font-heading text-[30px] uppercase leading-[1.1] mb-4 text-white font-black tracking-tight">LEAD GUITARIST<br />NEEDED</h3>
              <p className="text-sm text-gray-300 leading-relaxed">The Velvet Undergrounds &bull;<br />Manchester, UK &bull; Studio & Tour</p>
            </div>
            <Link to="/signup" className="w-[290px] h-[56px] pt-[16px] pr-[16px] pb-[17px] pl-[16px] bg-[#356BFF] border-[3px] border-[#0F172A] rotate-3 text-[#0F172A] font-bold uppercase text-sm flex items-center justify-center shrink-0 hover:bg-[#244FC4] transition-colors">
              Apply Now
            </Link>
          </div>
          {/* Card 3 */}
          <div className="absolute z-20 bg-white p-3 text-black"
            style={{
              width: '260px',
              top: '260px',
              left: '280px',
              transform: 'rotate(6deg)',
              border: '3px solid #0F172A',
              boxShadow: '12px 12px 0px 0px #0F172A'
            }}>
            <div className="mb-3 overflow-hidden border-[2px] border-[#0F172A]" style={{ height: '160px' }}>
              <img src={studioSession} alt="Studio Session" className="w-full h-full object-cover block scale-125" />
            </div>
            <div className="font-sans font-black uppercase text-sm leading-[1.1] whitespace-nowrap">STUDIO SESSION VOL. 2</div>
            <div className="text-xs text-gray-600 font-bold mt-1">Added 2 hours ago</div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-brand-light text-black py-16 border-y border-gray-200">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-gray-300">
          <div className="pt-8 md:pt-0 flex flex-col items-center">
            <div className="font-sans font-black text-[64px] leading-none tracking-[-2px] text-center text-[#356BFF] [text-shadow:3px_3px_0px_#0F172A] mb-3">12,000+</div>
            <div className="font-bold tracking-widest uppercase text-sm">Musicians</div>
          </div>
          <div className="pt-8 md:pt-0 flex flex-col items-center">
            <div className="font-sans font-black text-[64px] leading-none tracking-[-2px] text-center text-[#356BFF] [text-shadow:3px_3px_0px_#0F172A] mb-3">4,200+</div>
            <div className="font-bold tracking-widest uppercase text-sm">Bands</div>
          </div>
          <div className="pt-8 md:pt-0 flex flex-col items-center">
            <div className="font-sans font-black text-[64px] leading-none tracking-[-2px] text-center text-[#356BFF] [text-shadow:3px_3px_0px_#0F172A] mb-3">500+</div>
            <div className="font-bold tracking-widest uppercase text-sm">Venues</div>
          </div>
        </div>
      </section>

      {/* Features List Section */}
      <section className="max-w-7xl mx-auto px-6 py-32 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="font-sans font-black text-[64px] leading-[60.8px] tracking-[-3px] uppercase align-middle">
            The Platform <br />Built For<br /> Musicians
          </h2>
        </div>
        <div className="space-y-12">
          <div className="flex gap-6 items-start">
            <div className="w-16 h-16 bg-[#356BFF] flex-shrink-0 flex items-center justify-center border-[2px] border-white shadow-[6px_6px_0px_0px_#FFFFFF]">
              <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
            <div>
              <h3 className="text-xl font-heading uppercase mb-2">Find Band Openings</h3>
              <p className="text-gray-400">Apply for open positions in bands near you and start<br></br> gigging immediately.</p>
            </div>
          </div>
          <div className="flex gap-6 items-start">
            <div className="w-16 h-16 bg-[#356BFF] flex-shrink-0 flex items-center justify-center border-[2px] border-white shadow-[6px_6px_0px_0px_#FFFFFF]">
              <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
            </div>
            <div>
              <h3 className="text-xl font-heading uppercase mb-2">Collaborate on Projects</h3>
              <p className="text-gray-400">Connect for studio sessions, live gigs, and co-writing opportunities.</p>
            </div>
          </div>
          <div className="flex gap-6 items-start">
            <div className="w-16 h-16 bg-[#356BFF] flex-shrink-0 flex items-center justify-center border-[2px] border-white shadow-[6px_6px_0px_0px_#FFFFFF]">
              <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
            </div>
            <div>
              <h3 className="text-xl font-heading uppercase mb-2">Build Your Profile</h3>
              <p className="text-gray-400">Showcase your instruments, genre, availability, and best media drops.</p>
            </div>
          </div>
        </div>
      </section>

      {/* "Everything in one place" Section */}
      <section className="bg-brand-light text-black py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-heading uppercase text-center mb-16">
            Everything In One Place
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Mockup 1 — Discover */}
            <div
              className="flex flex-col overflow-hidden mx-auto w-full"
              style={{
                width: '100%',
                maxWidth: '380px',
                height: '481px',
                background: '#FBF8F1',
                border: '3px solid #0F172A',
                boxShadow: '16px 16px 0px 0px #0F172A',
              }}
            >
              <div
                className="flex items-center gap-2 flex-shrink-0"
                style={{
                  width: '100%',
                  height: '32px',
                  paddingLeft: '16px',
                  paddingRight: '16px',
                  gap: '8px',
                  background: '#FFFFFF',
                  borderBottom: '3px solid #0F172A',
                }}
              >
                <div className="w-3 h-3 rounded-full border-2 border-black"></div>
                <div className="w-3 h-3 rounded-full border-2 border-black"></div>
                <div className="w-3 h-3 rounded-full border-2 border-black"></div>
              </div>
              <div className="font-sans font-black uppercase mb-4 text-xl px-4 pt-4">Discover</div>
              <div className="space-y-4 flex-1 px-4 pb-4">
                <div
                  className="bg-white p-3"
                  style={{ border: '2px solid #0F172A' }}
                >
                  <div className="flex gap-3 items-center mb-3">
                    <div className="w-12 h-12 bg-gray-200 flex-shrink-0 overflow-hidden">
                      <img src={sara} alt="Sarah Jenkins" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <div className="font-sans font-black text-sm uppercase">Sarah Jenkins</div>
                      <div className="text-[11px] text-gray-500">Bassist • Bristol</div>
                    </div>
                  </div>
                  <button
                    className="w-full font-bold text-[10px] uppercase py-1.5 hover:bg-black hover:text-white transition-colors"
                    style={{ border: '2px solid #0F172A', boxShadow: '4px 4px 0px 0px #0F172A' }}
                  >Connect</button>
                </div>
                <div
                  className="bg-white p-3"
                  style={{ border: '2px solid #0F172A' }}
                >
                  <div className="flex gap-3 items-center mb-3">
                    <div className="w-12 h-12 bg-gray-200 flex-shrink-0 overflow-hidden">
                      <img src={marcus} alt="Marcus T." className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <div className="font-sans font-black text-sm uppercase">Marcus T.</div>
                      <div className="text-[11px] text-gray-500">Vocalist • London</div>
                    </div>
                  </div>
                  <button
                    className="w-full font-bold text-[10px] uppercase py-1.5 hover:bg-black hover:text-white transition-colors"
                    style={{ border: '2px solid #0F172A', boxShadow: '4px 4px 0px 0px #0F172A' }}
                  >Connect</button>
                </div>
              </div>
            </div>

            {/* Mockup 2 — Band Listing */}
            <div
              className="flex flex-col overflow-hidden text-white mx-auto w-full"
              style={{
                width: '100%',
                maxWidth: '380px',
                height: '481px',
                background: '#0F172A',
                border: '3px solid #0F172A',
                boxShadow: '16px 16px 0px 0px #356BFF',
              }}
            >
              <div
                className="flex items-center gap-2 flex-shrink-0"
                style={{
                  width: '100%',
                  height: '32px',
                  paddingLeft: '16px',
                  paddingRight: '16px',
                  gap: '8px',
                  background: '#FFFFFF',
                  borderBottom: '3px solid #0F172A',
                }}
              >
                <div className="w-3 h-3 rounded-full border-2 border-black"></div>
                <div className="w-3 h-3 rounded-full border-2 border-black"></div>
                <div className="w-3 h-3 rounded-full border-2 border-black"></div>
              </div>
              <div className="font-sans font-black uppercase mb-1 text-2xl text-white px-4 pt-4">Neon Tigers</div>
              <div className="text-xs text-gray-400 mb-5 px-4">Synth Pop • Manchester</div>
              <div
                className="relative mx-4"
                style={{
                  width: '100%',
                  maxWidth: '310px',
                  height: '220px',
                  paddingTop: '40px',
                  paddingRight: '24px',
                  paddingBottom: '24px',
                  paddingLeft: '24px',
                  border: '2px solid #FFFFFF',
                  gap: '8px',
                }}
              >
                <div className="absolute -top-3 left-4 bg-brand-orange text-black text-[10px] font-bold px-2 py-0.5 uppercase">Position Open</div>
                <div className="font-sans font-black uppercase text-lg mt-2 mb-2">Drummer Needed</div>
                <p className="text-xs text-gray-400 mb-6">Touring & Studio availability required.</p>
                <button
                  className="font-bold text-black text-xs uppercase tracking-widest hover:opacity-90 transition-opacity"
                  style={{
                    width: '100%',
                    maxWidth: '258px',
                    height: '43px',
                    padding: '12px',
                    background: '#356BFF',
                    border: '2px solid #0F172A',
                    boxShadow: '4px 4px 0px 0px #FFFFFF',
                  }}
                >
                  Apply Now
                </button>
              </div>
            </div>

            {/* Mockup 3 — Inbox */}
            <div
              className="flex flex-col overflow-hidden mx-auto w-full"
              style={{
                width: '100%',
                maxWidth: '380px',
                height: '481px',
                background: '#FBF8F1',
                border: '3px solid #0F172A',
                boxShadow: '16px 16px 0px 0px #0F172A',
              }}
            >
              <div
                className="flex items-center gap-2 flex-shrink-0"
                style={{
                  width: '100%',
                  height: '32px',
                  paddingLeft: '16px',
                  paddingRight: '16px',
                  gap: '8px',
                  background: '#FFFFFF',
                  borderBottom: '3px solid #0F172A',
                }}
              >
                <div className="w-3 h-3 rounded-full border-2 border-black"></div>
                <div className="w-3 h-3 rounded-full border-2 border-black"></div>
                <div className="w-3 h-3 rounded-full border-2 border-black"></div>
              </div>
              <div className="font-sans font-black uppercase mb-4 text-xl px-4 pt-4">Inbox</div>
              <div className="space-y-4 flex-1 px-4 pb-4">
                <div className="bg-white p-3 flex gap-4 items-center" style={{ border: '2px solid #0F172A' }}>
                  <div className="w-10 h-10 bg-[#356BFF] border-2 border-black flex items-center justify-center flex-shrink-0 text-black">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  </div>
                  <div>
                    <div className="font-sans font-black text-xs uppercase">Band Invite</div>
                    <div className="text-[10px] text-gray-500">Neon Tigers invited you to audition.</div>
                  </div>
                </div>
                <div className="bg-white p-3 flex gap-4 items-center" style={{ border: '2px solid #0F172A' }}>
                  <div className="w-10 h-10 bg-[#0F172A] border-2 border-black flex items-center justify-center flex-shrink-0 text-white">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
                  </div>
                  <div>
                    <div className="font-sans font-black text-xs uppercase">Jake Styles</div>
                    <div className="text-[10px] text-gray-500">Hey! Saw your profile and...</div>
                  </div>
                </div>
                <div className="bg-white p-3 flex gap-4 items-center" style={{ border: '2px solid #0F172A' }}>
                  <div className="w-10 h-10 bg-white border-2 border-black flex items-center justify-center flex-shrink-0 text-black">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                  </div>
                  <div>
                    <div className="font-sans font-black text-xs uppercase">Riffline Update</div>
                    <div className="text-[10px] text-gray-500">Local gigs map feature is live!</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Take it anywhere Section */}
      <section className="flex flex-col lg:flex-row min-h-[600px]">
        <div className="lg:w-1/2 bg-brand-dark flex items-center justify-center relative overflow-hidden min-h-[500px]">
          {/* Profile image — background, right */}
          <img
            src={profileScreen}
            alt="Profile screen"
            className="absolute w-[220px] md:w-[280px] object-contain z-0 right-[5%] md:right-[2%]"
            style={{ top: '50%', transform: 'translateY(-50%) rotate(3deg)' }}
          />
          {/* Discover image — foreground, left */}
          <img
            src={discoverScreen}
            alt="Discover screen"
            className="relative w-[220px] md:w-[280px] object-contain z-10 mr-[40px] md:mr-[80px]"
            style={{ transform: 'rotate(-3deg)' }}
          />
        </div>
        <div className="lg:w-1/2 bg-white text-black p-6 md:p-12 lg:p-24 flex flex-col justify-center">
          <div className="max-w-md mx-auto lg:mx-0">
            <h2 className="text-5xl md:text-6xl font-heading uppercase leading-tight mb-6">
              Take It <br />Anywhere
            </h2>
            <p className="text-gray-600 mb-10 text-lg">
              Get the Riffline app on iOS and Android. Manage your band, reply to messages, and discover new musicians wherever you are.
            </p>
            <div className="space-y-4 w-full">
              <button className="flex items-center justify-center sm:justify-start gap-4 sm:gap-8 w-full sm:max-w-[320px] h-[72px] px-4 sm:pl-4 sm:pr-8 bg-[#FFFFFF01] border-2 border-[#0F172A] shadow-[4px_4px_0_0_#0F172A] uppercase font-bold text-sm hover:opacity-80 transition-opacity">
                <img src={blackappleIcon} alt="Apple App Store" className="w-6 h-6 flex-shrink-0 object-contain" />
                <span>Download on the App Store</span>
              </button>
              <button className="flex items-center justify-center sm:justify-start gap-4 sm:gap-8 w-full sm:max-w-[320px] h-[72px] px-4 sm:pl-4 sm:pr-8 bg-[#FFFFFF01] border-2 border-[#0F172A] shadow-[4px_4px_0_0_#0F172A] uppercase font-bold text-sm hover:opacity-80 transition-opacity">
                <img src={blackplaystoreIcon} alt="Google Play Store" className="w-6 h-6 flex-shrink-0 object-contain" />
                <span>Get It On Google Play</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* How it works Section */}
      <section className="bg-brand-light text-black py-24 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-heading uppercase text-center mb-16">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-white border-2 border-black p-8 shadow-[8px_8px_0px_0px_#0F172A] hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_#0F172A] transition-all">
              <div className="font-sans font-black text-[88px] leading-[88px] tracking-normal text-[#356BFF] [text-shadow:3px_3px_0px_#0F172A] mb-6">1</div>
              <h3 className="font-sans font-black text-[28px] leading-none tracking-normal uppercase mb-4">Create Profile</h3>
              <p className="text-gray-600">List your instruments, genre, and
                availability. Drop your best media to
                show your true sound.</p>
            </div>
            {/* Step 2 */}
            <div className="bg-white border-2 border-black p-8 shadow-[8px_8px_0px_0px_#0F172A] hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_#0F172A] transition-all">
              <div className="font-sans font-black text-[88px] leading-[88px] tracking-normal text-[#356BFF] [text-shadow:3px_3px_0px_#0F172A] mb-6">2</div>
              <h3 className="font-sans font-black text-[28px] leading-none tracking-normal uppercase mb-4">Discover & Connect</h3>
              <p className="text-gray-600">Browse musicians, bands, and open
                positions near you. Filter by
                instrument and genre.</p>
            </div>
            {/* Step 3 */}
            <div className="bg-white border-2 border-black p-8 shadow-[8px_8px_0px_0px_#0F172A] hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_#0F172A] transition-all">
              <div className="font-sans font-black text-[88px] leading-[88px] tracking-normal text-[#356BFF] [text-shadow:3px_3px_0px_#0F172A] mb-6">3</div>
              <h3 className="font-sans font-black text-[28px] leading-none tracking-normal uppercase mb-4">Collaborate</h3>
              <p className="text-gray-600">Apply for gigs, message artists
                directly, and build something
                together in the real world.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-[#356BFF] text-center px-6 border-t-[3px] border-b-[3px] border-[#0F172A]" style={{ paddingTop: '119.19px', paddingBottom: '120px' }}>
        <h2 className="font-sans font-black text-4xl md:text-[64px] leading-tight md:leading-[70.4px] tracking-[-2px] text-center uppercase text-white align-middle max-w-3xl mx-auto">
          Your Next Bandmate Is Already Here.
        </h2>
        <p className="font-sans font-extrabold text-xl md:text-[24px] leading-none tracking-normal text-center text-[#0F172A] align-middle mt-6 mb-10">
          Join thousands of musicians already on Riffline.
        </p>
        <Link 
          to="/signup"
          className="inline-flex w-full max-w-[405.42px] h-[69px] px-4 sm:px-10 bg-[#0F172A] border-[3px] border-[#0F172A] shadow-[8px_8px_0_0_#FFFFFF] text-white font-bold uppercase text-sm tracking-widest hover:opacity-90 transition-opacity items-center justify-center"
        >
          Create Your Free Account
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-brand-dark text-white pt-16 pb-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <div className="text-2xl font-heading tracking-tighter mb-4">Riffline</div>
            <p className="text-[#98A2B3] text-sm">Add your instruments, genres, and availability. Build a portfolio that lets your talent stand out.
              The collaborative network for the undergrowth. Find your sound.
            </p>
          </div>
          <div>
            <h4 className="font-heading uppercase text-sm mb-4">Product</h4>
            <ul className="space-y-2 text-[#98A2B3] text-sm">
              <li><a href="#" className="hover:text-white">Features</a></li>
              <li><a href="#" className="hover:text-white">Pricing</a></li>
              <li><a href="#" className="hover:text-white">For Venues</a></li>
              <li><a href="#" className="hover:text-white">For Bands</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading uppercase text-sm mb-4">Company</h4>
            <ul className="space-y-2 text-[#98A2B3] text-sm">
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Press</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading uppercase text-sm mb-4">Legal</h4>
            <ul className="space-y-2 text-[#98A2B3] text-sm">
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white">Contact Us</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#98A2B3]">
          <div>&copy; 2026 Riffline. All rights reserved.</div>
          <div className="flex gap-5 items-center">
            {/* Instagram */}
            <svg className="w-6 h-6 text-[#98A2B3] hover:text-white cursor-pointer" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4.5" />
              <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
            </svg>
            {/* Twitter / X */}
            <svg className="w-6 h-6 text-[#98A2B3] hover:text-white cursor-pointer" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
            </svg>
            {/* YouTube */}
            <svg className="w-6 h-6 text-[#98A2B3] hover:text-white cursor-pointer" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <rect x="2" y="5" width="20" height="14" rx="4" ry="4" />
              <polygon points="10,9 10,15 16,12" fill="currentColor" stroke="none" />
            </svg>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Landing;

