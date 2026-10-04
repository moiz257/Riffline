import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

// Assets
import pfp from '../assets/maya.png';
import studioSession from '../assets/studio-session.png';
import concertImg from '../assets/concert.jpg';
import staticVoid from '../assets/static-void.png';
import arrowLeft from '../assets/arrowleft.png';
import dotsIcon from '../assets/3dots.svg';

const DROPS = [
  {
    id: 1,
    type: 'VOCAL DEMO',
    user: 'Priya',
    subtext: 'Now • Studio demo',
    media: studioSession,
    playColor: 'orange',
    time: '2:01',
    progress: '1:20',
    stats: { likes: 343, shares: 12 },
    caption: 'First pass of a new chorus with @RichieOnDrums and guitar ideas from @amanskips. Looking for a bassist to turn this into a live set closer. #Indie',
    tags: ['@RichieOnDrums', '@amanskips', '#Indie']
  },
  {
    id: 2,
    type: 'LIVE CLIP',
    user: 'Priya',
    subtext: 'Last weekend • Bandra',
    media: concertImg,
    isVideo: true,
    stats: { likes: 664, shares: 45 },
    caption: 'Tiny stage, big noise. Shoutout to @lowend_leez for that bass tone and @Ritvik79 holding down the groove. @Live',
    tags: ['@lowend_leez', '@Ritvik79', '@Live']
  },
  {
    id: 3,
    type: 'IDEA 88631024',
    user: 'Priya',
    subtext: 'Demo vault',
    media: staticVoid,
    playColor: 'green',
    time: '0:58',
    progress: '0:42',
    stats: { likes: 128, shares: 8 },
    caption: 'Late-night hook lab with @beatkitchen. No rules, just weird choices and half-sleep ideas. #FRP',
    tags: ['@beatkitchen', '#FRP']
  }
];

export default function UserDrops() {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('All drops');
  const filters = ['All drops', 'Audio', 'Images', 'Video'];

  const renderCaption = (text, tags) => {
    let parts = text.split(/(@\w+|#\w+)/g);
    return parts.map((part, i) => {
      if (tags.includes(part)) {
        return <span key={i} className="text-brand-orange font-bold cursor-pointer hover:underline">{part}</span>;
      }
      return part;
    });
  };

  return (
    <div className="flex min-h-screen bg-white font-sans text-brand-dark">
      <Sidebar />

      <main className="flex-1 flex flex-col pt-16 md:pt-0">
        {/* Top Header */}
        <header className="sticky top-0 bg-white z-20 px-8 py-4 border-b border-gray-50 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <button onClick={() => navigate(-1)} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <img src={arrowLeft} alt="Back" className="w-5 h-5" />
            </button>
            <div className="cursor-pointer" onClick={() => navigate('/profile')}>
              <h1 className="text-[20px] font-black font-extrabold font-sans uppercase">@Priya_Vibes</h1>
              <p className="text-[14px] text-[#64748B] font-sans font-regular tracking-wide">Vocalist • Mumbai • Indie / Alt</p>
            </div>
          </div>
          <button className="p-2 bg-gray-100 rounded-full transition-colors">
            <img src={dotsIcon} alt="Options" className="w-6 h-6 opacity-40" />
          </button>
        </header>

        {/* Filters */}
        <div className="px-8 py-6 flex gap-3 flex-wrap">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2.5 rounded-full text-[13px] font-bold transition-all border ${activeFilter === filter
                ? 'bg-brand-dark text-white border-brand-dark'
                : 'bg-white text-gray-500 border-gray-100 hover:border-gray-300'
                }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Drops Grid */}
        <div className="px-8 pb-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {DROPS.map((drop) => (
            <div key={drop.id} className="bg-white rounded-[24px] border border-gray-100 p-5 shadow-[0px_4px_24px_rgba(0,0,0,0.02)] flex flex-col gap-4">
              {/* Card Header */}
              <div className="flex justify-between items-start">
                <div className="flex gap-3 items-center font-sans cursor-pointer group" onClick={() => navigate('/profile')}>
                  <div className="w-12 h-12 rounded-full overflow-hidden border-[1.5px] border-gray-100 bg-[#F8F8F8]">
                    <img src={pfp} alt={drop.user} className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="font-bold text-[16px] text-brand-dark group-hover:underline">{drop.user}</h3>
                    <p className="text-[12px] text-gray-400 font-medium">{drop.subtext}</p>
                  </div>
                </div>
                <span className="text-[11px] font-black text-[#0F172A] font-bold font-sans uppercase tracking-widest bg-gray-50 px-2.5 py-1 rounded-[4px]">
                  {drop.type}
                </span>
              </div>

              {/* Media Area */}
              <div className="relative w-full aspect-[16/11] rounded-[16px] overflow-hidden bg-gray-50 group">
                <img src={drop.media} alt="Drop content" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />

                {/* Play Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/60 to-transparent">
                  <div className="flex items-center gap-4 text-white">
                    <button className={`w-11 h-11 rounded-full flex items-center justify-center transition-transform hover:scale-110 ${drop.playColor === 'orange' ? 'bg-brand-orange shadow-[0_0_20px_rgba(53,107,255,0.4)]' :
                      drop.playColor === 'green' ? 'bg-[#22C55E]' : 'bg-white/20 backdrop-blur-md'
                      }`}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className={drop.playColor ? 'text-white' : 'text-white'}><path d="M8 5v14l11-7z" /></svg>
                    </button>
                    {!drop.isVideo && (
                      <div className="flex-1 flex items-center gap-2">
                        <div className="flex gap-[2px]">
                          {[1, 2, 3, 4, 5, 6, 1, 2, 3].map((_, i) => (
                            <div key={i} className={`w-[2px] rounded-full bg-white/60 ${i % 2 === 0 ? 'h-3' : 'h-1.5'}`} />
                          ))}
                        </div>
                        <span className="text-[11px] font-bold ml-auto">{drop.time}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Controls & Stats */}
              <div className="flex flex-col gap-3">
                {drop.playColor && (
                  <div className="flex items-center gap-3">
                    <button className="text-gray-400 hover:text-brand-dark transition-colors">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11 5L6 9H2v6h4l5 4V5zM15.54 8.46a5 5 0 0 1 0 7.07M19.07 4.93a10 10 0 0 1 0 14.14" /></svg>
                    </button>
                    <div className="flex-1 h-[3px] bg-gray-100 rounded-full overflow-hidden relative">
                      <div
                        className="absolute h-full left-0 top-0 bg-[#22C55E] rounded-full"
                        style={{ width: `${(parseFloat(drop.progress) / parseFloat(drop.time)) * 100}%` }}
                      />
                    </div>
                    <span className="text-[12px] font-bold text-gray-400">{drop.progress}</span>
                  </div>
                )}

                <div className="flex justify-between items-center text-[13px] font-bold text-gray-400">
                  <div className="flex items-center gap-2 px-3 py-1 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors group">
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:text-brand-dark"><path d="M13 3l3.293 3.293L11 11.586 13.414 14 18.707 8.707 22 12V3h-9zM11 12.414L8.707 14.707 5.414 11.414 2 14.828V22h9v-3.293L16.293 13.414 11 12.414z" /></svg>
                    <span className="group-hover:text-brand-dark">{drop.stats.likes}</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors group">
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:text-brand-dark"><path d="M4 12V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16l-7-3.5L4 20v-8zM15 12h-6M12 9v6" /></svg>
                    <span className="group-hover:text-brand-dark">Share</span>
                  </div>
                </div>
              </div>

              {/* Caption */}
              <p className="text-[15px] font-regular font-sans leading-[1.6] text-gray-700 font-medium">
                {renderCaption(drop.caption, drop.tags)}
              </p>
            </div>
          ))}

          {/* Loading Indicator */}
          <div className="col-span-full py-12 flex flex-col items-center gap-4">
            <div className="flex gap-1.5 text-gray-300">
              {[1, 2, 3].map(i => <div key={i} className="w-2 h-2 rounded-full bg-current animate-bounce" style={{ animationDelay: `${i * 0.2}s` }} />)}
            </div>
            <p className="text-[14px] font-bold text-gray-300">More drops loading...</p>
          </div>
        </div>
      </main>
    </div>
  );
}
