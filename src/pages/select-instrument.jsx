import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const instrumentsData = {
  "POPULAR": [
    "ELECTRIC GUITAR",
    "BASS GUITAR",
    "DRUMS",
    "VOCALS",
    "SYNTHESIZER"
  ],
  "ORCHESTRAL & OTHER": [
    "PIANO",
    "SAXOPHONE",
    "VIOLIN",
    "TRUMPET"
  ]
};

export default function SelectInstrument() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(["ELECTRIC GUITAR"]);
  const [search, setSearch] = useState("");

  const toggleSelection = (instrument) => {
    setSelected(prev =>
      prev.includes(instrument)
        ? prev.filter(i => i !== instrument)
        : [...prev, instrument]
    );
  };

  return (
    <div className="h-screen bg-white font-sans flex flex-col overflow-hidden">
      {/* Header */}
      <header className="border-b-[3px] border-brand-dark px-6 py-6 md:px-12 flex items-center gap-6">
        <button
          onClick={() => navigate(-1)}
          className="border-[3px] border-brand-dark p-1.5 hover:bg-brand-gray transition-colors"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5" /><path d="m12 19-7-7 7-7" />
          </svg>
        </button>
        <h1 className="text-2xl md:text-[32px] font-heading font-black tracking-tight uppercase mt-1">
          Select Instruments
        </h1>
      </header>

      {/* Main Content */}
      <main className="max-w-[720px] w-full mx-auto px-6 py-6 md:py-8 flex flex-col flex-1 overflow-hidden">
        {/* Search */}
        <div className="relative mb-6 shrink-0">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search instruments..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-2.5 border-[3px] border-brand-dark bg-[#f8f8f8] focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-brand-orange transition-all font-medium placeholder:text-gray-400 placeholder:font-medium"
          />
        </div>

        {/* Categories */}
        <div className="space-y-6 overflow-y-auto flex-1 pr-2 pb-2 scrollbar-hide">
          {Object.entries(instrumentsData).map(([category, instruments]) => {
            const filteredInstruments = instruments.filter(i => i.toLowerCase().includes(search.toLowerCase()));

            if (filteredInstruments.length === 0) return null;

            return (
              <div key={category}>
                <h2 className="text-sm font-bold text-gray-400 tracking-[0.1em] uppercase mb-3">
                  {category}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {filteredInstruments.map(instrument => {
                    const isSelected = selected.includes(instrument);
                    return (
                      <button
                        key={instrument}
                        onClick={() => toggleSelection(instrument)}
                        className={`flex items-center justify-between px-6 py-3 border-[3px] border-brand-dark text-left font-bold transition-colors text-[15px] ${isSelected
                          ? 'bg-brand-dark text-white'
                          : 'bg-white text-brand-dark hover:bg-brand-gray'
                          }`}
                      >
                        <span className="tracking-wide uppercase">{instrument}</span>
                        {isSelected ? (
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20 6 9 17l-5-5" />
                          </svg>
                        ) : (
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14" /><path d="M12 5v14" />
                          </svg>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Add Selected Button */}
        <div className="mt-0 mb-10 shrink-0">
          <button 
            onClick={() => navigate('/home')}
            className="flex items-center justify-center w-[219px] h-[72px] bg-[#356BFF] text-white font-black text-[20px] leading-none tracking-normal text-center uppercase border-[3px] border-[#0F172A] shadow-[8px_8px_0_0_#0F172A] hover:shadow-[4px_4px_0_0_#0F172A] hover:translate-y-[4px] hover:translate-x-[4px] transition-all active:shadow-none active:translate-y-[8px] active:translate-x-[8px]"
          >
            Add Selected
          </button>
        </div>
      </main>
    </div>
  );
}
