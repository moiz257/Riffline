import React, { useState, useRef, useEffect } from 'react';
import EmojiPicker from 'emoji-picker-react';
import Sidebar from '../components/Sidebar';
import editIcon from '../assets/edit.png';
import searchIcon from '../assets/searchicon.png';
import infoIcon from '../assets/iicon.png';
import dotsIcon from '../assets/3dots2.png';
import plusIcon from '../assets/plus.png';
import emojiIcon from '../assets/emoji.png';
import micIcon from '../assets/mic.png';
import sendIcon from '../assets/sendicon.png';
import CreateGroupModal from '../components/create-group';

const CONTACTS = [
    { id: 1, name: "PRIYA_VIBES", message: "Yo! Did you check out that venue yet? ...", time: "2m", unread: true, online: true, avatar: "https://i.pravatar.cc/150?u=priya" },
    { id: 2, name: "Te E NEON COLLECTIVE", message: "Rishi: We need a synth player for Friday...", time: "1h", unread: true, online: false, avatar: "https://i.pravatar.cc/150?u=neon" },
    { id: 3, name: "SYNTe_SULTAN", message: "Sent you the stems. Let me know what you...", time: "3h", unread: false, online: false, avatar: "https://i.pravatar.cc/150?u=sultan" },
    { id: 4, name: "ARJUNBEATS", message: "Cool, let's link up next week then.", time: "Yesterday", unread: false, online: false, avatar: "https://i.pravatar.cc/150?u=arjun" },
    { id: 5, name: "GARAGE NOISE", message: "Thanks for the invite! We'll be there.", time: "2d", unread: false, online: false, avatar: "https://i.pravatar.cc/150?u=garage" },
    { id: 6, name: "MIA_BASS", message: "Sounds like a plan!", time: "1w", unread: false, online: false, avatar: "https://i.pravatar.cc/150?u=mia" },
];

const INITIAL_MESSAGES = {
    1: [
        { id: 1, type: 'text', outgoing: false, text: 'Yo, did anyone lock the time for Saturday yet?', time: '5:02 PM' },
        { id: 2, type: 'text', outgoing: false, text: 'Drop your slot above so I can confirm with The Hive.', time: '5:03 PM' },
        { id: 3, type: 'video', outgoing: false, src: 'https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=1000&auto=format', caption: "Clip from yesterday's chorus take.", time: '5:09 PM' },
        { id: 4, type: 'song', outgoing: true, title: 'Neon Rats - Hive Demo', time: '5:11 PM', progress: 40 },
        { id: 5, type: 'voice', outgoing: true, duration: '0:46', progress: 65, time: '5:13 PM' },
    ],
};



function getTime() {
    const now = new Date();
    let h = now.getHours(), m = now.getMinutes();
    const ampm = h >= 12 ? 'PM' : 'AM';
    h = h % 12 || 12;
    return `${h}:${String(m).padStart(2, '0')} ${ampm}`;
}

function formatDuration(seconds) {
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m}:${String(s).padStart(2, '0')}`;
}

// ── Custom Voice Note Player 
function VoiceNotePlayer({ src, duration, outgoing, msgTime }) {
    const audioRef = useRef(null);
    const rafRef = useRef(null);
    const barRef = useRef(null);
    const thumbRef = useRef(null);
    const labelRef = useRef(null);

    const [playing, setPlaying] = useState(false);
    const [total, setTotal] = useState(0);

    // ── rAF loop for pixel-smooth bar 
    const startRAF = () => {
        const tick = () => {
            const audio = audioRef.current;
            if (!audio) return;
            const pct = audio.duration > 0 ? (audio.currentTime / audio.duration) * 100 : 0;
            if (barRef.current) barRef.current.style.width = `${pct}%`;
            if (thumbRef.current) thumbRef.current.style.left = `calc(${pct}% - 6px)`;
            if (labelRef.current) labelRef.current.textContent = formatDuration(audio.currentTime);
            rafRef.current = requestAnimationFrame(tick);
        };
        rafRef.current = requestAnimationFrame(tick);
    };
    const stopRAF = () => {
        if (rafRef.current) { cancelAnimationFrame(rafRef.current); rafRef.current = null; }
    };

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;
        const onLoaded = () => setTotal(audio.duration || 0);
        const onEnded = () => {
            stopRAF();
            setPlaying(false);
            if (barRef.current) barRef.current.style.width = '0%';
            if (thumbRef.current) thumbRef.current.style.left = 'calc(0% - 6px)';
            if (labelRef.current) labelRef.current.textContent = duration || formatDuration(audio.duration || 0);
        };
        audio.addEventListener('loadedmetadata', onLoaded);
        audio.addEventListener('ended', onEnded);
        return () => {
            stopRAF();
            audio.removeEventListener('loadedmetadata', onLoaded);
            audio.removeEventListener('ended', onEnded);
        };
    }, [src]);

    function togglePlay() {
        const audio = audioRef.current;
        if (!audio) return;
        if (playing) {
            audio.pause();
            stopRAF();
            setPlaying(false);
        } else {
            audio.play();
            startRAF();
            setPlaying(true);
        }
    }

    function handleSeek(e) {
        const audio = audioRef.current;
        if (!audio || !audio.duration) return;
        const rect = e.currentTarget.getBoundingClientRect();
        const pct = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
        audio.currentTime = pct * audio.duration;
        // immediately update bar
        if (barRef.current) barRef.current.style.width = `${pct * 100}%`;
        if (thumbRef.current) thumbRef.current.style.left = `calc(${pct * 100}% - 6px)`;
        if (labelRef.current) labelRef.current.textContent = formatDuration(audio.currentTime);
    }

    const displayedDuration = duration || (total > 0 ? formatDuration(total) : '0:00');

    return (
        <div className={`w-[260px] md:w-[300px] rounded-[20px] p-4 flex flex-col gap-3 shadow-2xl ${outgoing ? 'bg-brand-dark' : 'bg-[#1e1e2e]'
            }`}>
            {/* Hidden audio */}
            <audio ref={audioRef} src={src} preload="metadata" />

            {/* Top row: icon + title */}
            <div className="flex items-center gap-3">
                {/* Mic avatar square */}
                <div className="w-11 h-11 bg-amber-400/20 rounded-xl flex items-center justify-center shrink-0 border border-amber-400/30">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                        stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
                        <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                        <line x1="12" y1="19" x2="12" y2="23" />
                        <line x1="8" y1="23" x2="16" y2="23" />
                    </svg>
                </div>
                <div className="flex-1 min-w-0">
                    <h4 className="text-white text-[13px] font-black uppercase tracking-tight">Voice Note</h4>
                    {/* Play row */}
                    <div className="flex items-center gap-3 mt-1.5">
                        {/* Play / Pause button */}
                        <button onClick={togglePlay}
                            className="text-white hover:scale-110 transition-transform shrink-0">
                            {playing ? (
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                                    <rect x="6" y="4" width="4" height="16" rx="1" />
                                    <rect x="14" y="4" width="4" height="16" rx="1" />
                                </svg>
                            ) : (
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="white" className="translate-x-[1px]">
                                    <path d="m7 4 12 8-12 8V4z" />
                                </svg>
                            )}
                        </button>

                        {/* Scrub track */}
                        <div
                            onClick={handleSeek}
                            className="flex-1 h-[5px] rounded-full cursor-pointer relative"
                            style={{ background: 'rgba(255,255,255,0.12)' }}>
                            {/* Fill bar — updated by rAF, no CSS transition */}
                            <div ref={barRef}
                                style={{ width: '0%', background: 'white', position: 'absolute', top: 0, bottom: 0, left: 0, borderRadius: '9999px' }} />
                            {/* Thumb dot */}
                            <div ref={thumbRef}
                                style={{
                                    left: 'calc(0% - 6px)', position: 'absolute', top: '50%', transform: 'translateY(-50%)',
                                    width: 12, height: 12, borderRadius: '50%', background: 'white',
                                    boxShadow: '0 0 6px rgba(255,255,255,0.5)'
                                }} />
                        </div>

                        {/* Duration */}
                        <span ref={labelRef}
                            className="text-white/40 text-[10px] font-bold shrink-0">
                            {displayedDuration}
                        </span>
                    </div>
                </div>
            </div>

            {/* Message timestamp */}
            <span className="text-white/30 text-[9px] font-black uppercase self-end tracking-widest">
                {msgTime}
            </span>
        </div>
    );
}

export default function Inbox() {
    const [activeFilter, setActiveFilter] = useState('ALL');
    const [selectedChat, setSelectedChat] = useState(null);
    const [chatMessages, setChatMessages] = useState(INITIAL_MESSAGES);
    const [inputText, setInputText] = useState('');
    const [showEmoji, setShowEmoji] = useState(false);
    const [isRecording, setIsRecording] = useState(false);
    const [recordSecs, setRecordSecs] = useState(0);
    const [showNewMessage, setShowNewMessage] = useState(false);
    const [modalStep, setModalStep] = useState('INIT'); // 'INIT' or 'GROUP'
    const [selectedMembers, setSelectedMembers] = useState([1, 3]); // Mock selected IDs

    const messagesEndRef = useRef(null);
    const fileInputRef = useRef(null);
    const mediaRecRef = useRef(null);
    const recordTimer = useRef(null);
    const emojiPanelRef = useRef(null);
    const inputRef = useRef(null);

    // Auto-scroll to bottom when messages change
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [chatMessages, selectedChat]);

    // Close emoji panel on outside click
    useEffect(() => {
        function handleOutside(e) {
            if (emojiPanelRef.current && !emojiPanelRef.current.contains(e.target)) {
                setShowEmoji(false);
            }
        }
        document.addEventListener('mousedown', handleOutside);
        return () => document.removeEventListener('mousedown', handleOutside);
    }, []);

    // ── Send text message 
    function handleSend() {
        const trimmed = inputText.trim();
        if (!trimmed) return;
        const msg = { id: Date.now(), type: 'text', outgoing: true, text: trimmed, time: getTime() };
        setChatMessages(prev => ({
            ...prev,
            [selectedChat]: [...(prev[selectedChat] || []), msg],
        }));
        setInputText('');
        setShowEmoji(false);
        inputRef.current?.focus();
    }

    function handleKeyDown(e) {
        if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSend(); }
    }

    // ── Emoji insert 
    function insertEmoji(emoji) {
        setInputText(prev => prev + emoji);
        inputRef.current?.focus();
    }

    // ── File / image attachment 
    function handleFileChange(e) {
        const file = e.target.files?.[0];
        if (!file) return;
        const url = URL.createObjectURL(file);
        const isImage = file.type.startsWith('image/');
        const msg = isImage
            ? { id: Date.now(), type: 'image', outgoing: true, src: url, name: file.name, time: getTime() }
            : { id: Date.now(), type: 'file', outgoing: true, name: file.name, size: (file.size / 1024).toFixed(1) + ' KB', time: getTime() };
        setChatMessages(prev => ({
            ...prev,
            [selectedChat]: [...(prev[selectedChat] || []), msg],
        }));
        // reset input so same file can be picked again
        e.target.value = '';
    }

    // ── Voice recording 
    async function toggleRecording() {
        if (isRecording) {
            // Stop
            mediaRecRef.current?.stop();
            clearInterval(recordTimer.current);
            setIsRecording(false);
            setRecordSecs(0);
        } else {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
                const recorder = new MediaRecorder(stream);
                const chunks = [];
                mediaRecRef.current = recorder;

                recorder.ondataavailable = e => chunks.push(e.data);
                recorder.onstop = () => {
                    stream.getTracks().forEach(t => t.stop());
                    const blob = new Blob(chunks, { type: 'audio/webm' });
                    const url = URL.createObjectURL(blob);
                    const dur = formatDuration(recordSecs);
                    const msg = { id: Date.now(), type: 'audio', outgoing: true, src: url, duration: dur, time: getTime() };
                    setChatMessages(prev => ({
                        ...prev,
                        [selectedChat]: [...(prev[selectedChat] || []), msg],
                    }));
                    setRecordSecs(0);
                };

                recorder.start();
                setIsRecording(true);
                let secs = 0;
                recordTimer.current = setInterval(() => { secs++; setRecordSecs(secs); }, 1000);
            } catch {
                alert('Microphone access denied.');
            }
        }
    }

    const currentMessages = chatMessages[selectedChat] || [];
    const currentContact = CONTACTS.find(c => c.id === selectedChat);

    // ── Render a single message bubble 
    function renderMessage(msg) {
        if (msg.type === 'text') {
            return msg.outgoing ? (
                <div key={msg.id} className="flex justify-end pr-0 md:pr-2">
                    <div className="max-w-[85%] md:max-w-[75%] bg-[#F6F7F9] px-4 md:px-6 py-2 rounded-[24px] md:rounded-[32px] rounded-br-none shadow-sm flex flex-col gap-1">
                        <p className="text-[14px] md:text-[15px] font-medium text-brand-dark leading-normal">{msg.text}</p>
                        <span className="text-[10px] font-bold text-gray-300 uppercase self-end">{msg.time}</span>
                    </div>
                </div>
            ) : (
                <div key={msg.id} className="flex gap-3 items-end">
                    <div className="mb-1 shrink-0 hidden sm:block">
                        <img src={currentContact?.avatar} className="w-9 h-9 rounded-full border-2 border-gray-100 object-cover shadow-sm" alt="" />
                    </div>
                    <div className="max-w-[85%] md:max-w-[75%] bg-[#F6F7F9] px-4 md:px-6 py-2 rounded-[24px] md:rounded-[32px] rounded-bl-none shadow-sm flex flex-col gap-1">
                        <p className="text-[14px] md:text-[15px] font-medium text-brand-dark leading-normal">{msg.text}</p>
                        <span className="text-[10px] font-bold text-gray-300 uppercase">{msg.time}</span>
                    </div>
                </div>
            );
        }

        if (msg.type === 'image') {
            const bubble = (
                <div className="flex flex-col gap-1">
                    <img src={msg.src} alt={msg.name} className="max-w-[260px] rounded-[20px] object-cover shadow-sm" />
                    <span className={`text-[10px] font-bold uppercase ${msg.outgoing ? 'text-white/30 self-end' : 'text-gray-300'}`}>{msg.time}</span>
                </div>
            );
            return msg.outgoing ? (
                <div key={msg.id} className="flex justify-end pr-2">{bubble}</div>
            ) : (
                <div key={msg.id} className="flex gap-3 items-end">
                    <img src={currentContact?.avatar} className="w-9 h-9 rounded-full border-2 border-gray-100 object-cover shadow-sm mb-1 shrink-0" alt="" />
                    {bubble}
                </div>
            );
        }

        if (msg.type === 'file') {
            const bubble = (
                <div className={`flex items-center gap-3 px-4 py-3 rounded-[20px] ${msg.outgoing ? 'bg-brand-dark' : 'bg-[#F6F7F9]'}`}>
                    <div className={`w-9 h-9 rounded-full flex items-center justify-center ${msg.outgoing ? 'bg-white/10' : 'bg-gray-200'}`}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={msg.outgoing ? 'white' : '#374151'} strokeWidth="2.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /></svg>
                    </div>
                    <div>
                        <p className={`text-[13px] font-bold truncate max-w-[160px] ${msg.outgoing ? 'text-white' : 'text-brand-dark'}`}>{msg.name}</p>
                        <p className={`text-[10px] font-medium ${msg.outgoing ? 'text-white/40' : 'text-gray-400'}`}>{msg.size}</p>
                    </div>
                </div>
            );
            return msg.outgoing ? (
                <div key={msg.id} className="flex justify-end pr-2">{bubble}</div>
            ) : (
                <div key={msg.id} className="flex gap-3 items-end">
                    <img src={currentContact?.avatar} className="w-9 h-9 rounded-full border-2 border-gray-100 object-cover shadow-sm mb-1 shrink-0" alt="" />
                    {bubble}
                </div>
            );
        }

        if (msg.type === 'audio') {
            return (
                <div key={msg.id} className={`flex ${msg.outgoing ? 'justify-end pr-2' : 'gap-3 items-end'}`}>
                    {!msg.outgoing && (
                        <img src={currentContact?.avatar}
                            className="w-9 h-9 rounded-full border-2 border-gray-100 object-cover shadow-sm mb-1 shrink-0" alt="" />
                    )}
                    <VoiceNotePlayer
                        src={msg.src}
                        duration={msg.duration}
                        outgoing={msg.outgoing}
                        msgTime={msg.time}
                    />
                </div>
            );
        }

        if (msg.type === 'video') {
            return (
                <div key={msg.id} className="flex gap-3 items-end">
                    <img src={currentContact?.avatar} className="w-9 h-9 rounded-full border-2 border-gray-100 object-cover shadow-sm mb-1 shrink-0 hidden sm:block" alt="" />
                    <div className="w-[260px] md:w-[300px] bg-[#F6F7F9] p-2.5 rounded-[24px] md:rounded-[32px] rounded-bl-none shadow-sm overflow-hidden flex flex-col group/video relative">
                        <div className="relative cursor-pointer">
                            <img src={msg.src} className="w-full aspect-video object-cover rounded-[24px] mb-2" alt="" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-12 h-12 bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/30 group-hover/video:scale-110 transition-transform">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="white" className="translate-x-0.5"><path d="m7 4 12 8-12 8V4z" /></svg>
                                </div>
                            </div>
                        </div>
                        <div className="px-3 pb-2 pt-1">
                            <p className="text-[14px] font-bold text-brand-dark mb-0.5">{msg.caption}</p>
                            <span className="text-[10px] font-bold text-gray-300 uppercase">{msg.time}</span>
                        </div>
                    </div>
                </div>
            );
        }

        if (msg.type === 'song') {
            return (
                <div key={msg.id} className="flex justify-end pr-0 md:pr-2">
                    <div className="w-[260px] md:w-[320px] bg-brand-dark rounded-[20px] md:rounded-[24px] p-4 shadow-2xl flex flex-col gap-3">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-amber-400 rounded-xl overflow-hidden shadow-orange-500/20 shadow-lg shrink-0">
                                <img src="https://api.dicebear.com/7.x/shapes/svg?seed=Neon" className="w-full h-full p-2" alt="" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <h4 className="text-white text-[14px] font-black uppercase tracking-tight truncate">{msg.title}</h4>
                                <div className="flex items-center gap-3 mt-1.5">
                                    <button className="text-white hover:scale-110 transition-transform">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="m7 4 12 8-12 8V4z" /></svg>
                                    </button>
                                    <div className="flex-1 h-1.5 bg-white/10 rounded-full relative overflow-hidden">
                                        <div className="absolute left-0 top-0 bottom-0 bg-white rounded-full" style={{ width: `${msg.progress}%` }} />
                                    </div>
                                    <span className="text-white/40 text-[10px] font-bold">1:12</span>
                                </div>
                            </div>
                        </div>
                        <span className="text-white/30 text-[9px] font-black uppercase self-end tracking-widest">{msg.time}</span>
                    </div>
                </div>
            );
        }

        return null;
    }

    const handleToggleMember = (userId) => {
        setSelectedMembers(prev =>
            prev.includes(userId)
                ? prev.filter(id => id !== userId)
                : [...prev, userId]
        );
    };

    return (
        <div className="flex h-[100dvh] bg-white flex-col md:flex-row pt-[64px] md:pt-0">
            <Sidebar />

            {/* ── Inbox List ── */}
            <div className={`w-full md:w-[380px] border-r-[3px] border-gray-50 flex-col h-full bg-white shrink-0 ${selectedChat ? 'hidden md:flex' : 'flex'}`}>
                <div className="p-4 pb-4">
                    <div className="flex justify-between items-center mb-4 px-6">
                        <h1 className="text-[48px] leading-[43.2px] font-heading font-black tracking-tighter text-brand-dark">INBOX</h1>
                        <button
                            onClick={() => setShowNewMessage(true)}
                            className="text-brand-dark hover:scale-110 transition-transform">
                            <img src={editIcon} alt="Compose" className="w-[18px] h-[18px] object-contain" />
                        </button>
                    </div>

                    <div className="relative mb-6">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
                            </svg>
                        </span>
                        <input type="text" placeholder="Search chats, bands, anything..." className="w-full bg-[#F1F4F9] border-none rounded-full py-3 pl-12 pr-4 text-sm font-medium focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all" />
                    </div>

                    <div className="flex gap-2 mb-2 overflow-x-auto no-scrollbar font-sans">
                        {['ALL', 'UNREAD', 'BANDS', 'REQUESTS'].map(filter => (
                            <button key={filter} onClick={() => setActiveFilter(filter)}
                                className={`px-5 py-2 rounded-full text-[11px] font-black tracking-wider transition-all border-[2.5px] ${activeFilter === filter ? 'bg-brand-dark text-white border-brand-dark'
                                    : filter === 'UNREAD' ? 'text-brand-orange border-brand-orange bg-white'
                                        : 'text-brand-dark border-gray-100 bg-white hover:border-gray-200'}`}>
                                {filter}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto no-scrollbar">
                    {CONTACTS.map(chat => (
                        <div key={chat.id} onClick={() => setSelectedChat(chat.id)}
                            className={`relative flex items-center gap-4 px-4 py-2 cursor-pointer transition-all border-b-2 border-gray-50 hover:bg-gray-50 ${selectedChat === chat.id ? 'bg-gray-50' : ''}`}>
                            {selectedChat === chat.id && <div className="absolute right-0 top-0 bottom-0 w-[6px] bg-brand-orange" />}
                            <div className="relative shrink-0">
                                <img src={chat.avatar} alt={chat.name} className="w-14 h-14 rounded-full border-[3px] border-[#909CA4] object-cover" />
                                {chat.online && <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full" />}
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex justify-between items-start mb-0.5">
                                    <h3 className="font-black text-[16px] text-brand-dark truncate uppercase tracking-tight">{chat.name}</h3>
                                    <span className={`text-[11px] font-bold ${chat.unread ? 'text-brand-orange' : 'text-gray-400'}`}>{chat.time}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <p className={`text-[13px] truncate ${chat.unread ? 'text-brand-dark font-semibold' : 'text-gray-500 font-medium'}`}>{chat.message}</p>
                                    {chat.unread && <div className="w-2.5 h-2.5 bg-brand-orange rounded-full shrink-0 ml-2 shadow-[0_0_8px_rgba(53,107,255,0.4)]" />}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* ── Chat Area ── */}
            <div className={`flex-1 flex-col bg-white overflow-hidden ${selectedChat ? 'flex' : 'hidden md:flex'}`}>
                {selectedChat ? (
                    <>
                        {/* Header */}
                        <div className="h-[64px] shrink-0 border-b-[2px] border-gray-50 flex items-center justify-between px-4 md:px-8 bg-white/80 backdrop-blur-md sticky top-0 z-10">
                            <div className="flex items-center gap-2 md:gap-4">
                                <button className="md:hidden p-2 -ml-2 text-brand-dark" onClick={() => setSelectedChat(null)}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                                </button>
                                <div className="relative">
                                    <img src={currentContact?.avatar} className="w-10 h-10 md:w-12 md:h-12 rounded-full border-[2.5px] object-cover shrink-0" alt="" />
                                    {currentContact?.online && <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full" />}
                                </div>
                                <div className="min-w-0">
                                    <h2 className="font-black text-[14px] md:text-[16px] text-brand-dark uppercase tracking-tight leading-none mb-1 truncate">{currentContact?.name}</h2>
                                    <p className="text-[10px] text-gray-400 font-medium flex items-center gap-1.5 uppercase tracking-wide truncate">
                                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                                        Jamming tonight - 5 people
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <button className="hover:scale-110 transition-transform"><img src={searchIcon} className="w-[18px] h-[18px] object-contain" alt="Search" /></button>
                                <button className="hover:scale-110 transition-transform"><img src={infoIcon} className="w-[20px] h-[20px] object-contain" alt="Info" /></button>
                                <button className="hover:scale-110 transition-transform"><img src={dotsIcon} className="w-[18px] h-[18px] object-contain" alt="More" /></button>
                            </div>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto px-4 md:px-8 py-4 md:py-6 space-y-4 md:space-y-5 no-scrollbar bg-white">
                            <div className="flex flex-col items-center mb-4">
                                <span className="text-[11px] font-black text-gray-400 uppercase tracking-[0.2em]">TODAY, 5:02 PM</span>
                            </div>
                            {currentMessages.map(msg => renderMessage(msg))}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Bar */}
                        <div className="px-4 md:px-8 py-3 md:py-5 bg-white border-t-2 border-gray-50 relative shrink-0">

                            {/* Emoji Panel */}
                            {showEmoji && (
                                <div ref={emojiPanelRef}
                                    className="absolute bottom-full mb-3 right-8 z-50 rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
                                    style={{ boxShadow: '0 8px 40px rgba(0,0,0,0.12)' }}>
                                    <EmojiPicker 
                                        onEmojiClick={(emojiData) => insertEmoji(emojiData.emoji)} 
                                        theme="light"
                                        searchDisabled={false}
                                        skinTonesDisabled={true}
                                    />
                                </div>
                            )}

                            {/* Recording indicator */}
                            {isRecording && (
                                <div className="flex items-center gap-3 mb-3 px-4 py-2 bg-red-50 rounded-full border border-red-100 w-fit">
                                    <span className="w-2.5 h-2.5 bg-red-500 rounded-full animate-pulse" />
                                    <span className="text-[13px] font-black text-red-500 uppercase tracking-wide">
                                        Recording · {formatDuration(recordSecs)}
                                    </span>
                                    <span className="text-[11px] text-red-400 font-medium">Tap mic to stop</span>
                                </div>
                            )}

                            <div className="flex items-center gap-2 md:gap-3 bg-[#F1F4F9] rounded-full px-3 md:px-4 py-2 md:py-3">
                                {/* Plus → file picker */}
                                <input ref={fileInputRef} type="file" accept="image/*,audio/*,.pdf,.doc,.docx,.zip"
                                    className="hidden" onChange={handleFileChange} />
                                <button onClick={() => fileInputRef.current?.click()}
                                    className="w-7 h-7 md:w-8 md:h-8 flex items-center justify-center rounded-full border-[2px] border-gray-300 hover:border-brand-dark transition-colors shrink-0">
                                    <img src={plusIcon} alt="Attach" className="w-[12px] h-[12px] md:w-[14px] md:h-[14px] object-contain" />
                                </button>

                                {/* Text input */}
                                <input
                                    ref={inputRef}
                                    type="text"
                                    value={inputText}
                                    onChange={e => setInputText(e.target.value)}
                                    onKeyDown={handleKeyDown}
                                    placeholder="Drop a message..."
                                    className="flex-1 bg-transparent border-none outline-none text-[14px] font-medium text-brand-dark placeholder:text-gray-400 placeholder:font-normal"
                                />

                                {/* Right icons */}
                                <div className="flex items-center gap-2 md:gap-3 shrink-0">
                                    <button onClick={() => setShowEmoji(v => !v)}
                                        className={`hover:opacity-70 transition-opacity ${showEmoji ? 'opacity-100' : 'opacity-60'}`}>
                                        <img src={emojiIcon} alt="Emoji" className="w-[20px] h-[20px] md:w-[22px] md:h-[22px] object-contain" />
                                    </button>
                                    <button onClick={toggleRecording}
                                        className={`hover:opacity-70 transition-opacity ${isRecording ? 'opacity-100 drop-shadow-[0_0_6px_rgba(239,68,68,0.8)]' : 'opacity-60'}`}>
                                        <img src={micIcon} alt="Voice" className="w-[18px] h-[18px] md:w-[20px] md:h-[20px] object-contain" />
                                    </button>
                                    <button onClick={handleSend}
                                        disabled={!inputText.trim() && !isRecording}
                                        className="w-8 h-8 md:w-10 md:h-10 bg-brand-orange rounded-full flex items-center justify-center hover:scale-105 hover:shadow-lg hover:shadow-orange-300/40 transition-all shrink-0 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100">
                                        <img src={sendIcon} alt="Send" className="w-[14px] h-[14px] md:w-[18px] md:h-[18px] object-contain" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="flex-1 flex flex-col items-center justify-center">
                        <div className="text-center group">
                            <div className="w-20 h-20 bg-gray-50 rounded-3xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-500">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-300">
                                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                                </svg>
                            </div>
                            <h2 className="text-2xl font-heading font-black text-gray-200 uppercase tracking-widest">SELECT A CONVERSATION</h2>
                        </div>
                    </div>
                )}
            </div>

            {/* New Message/Group Modal Component */}
            <CreateGroupModal
                show={showNewMessage}
                onClose={() => {
                    setShowNewMessage(false);
                    setModalStep('INIT');
                    setSelectedMembers([]);
                }}
                modalStep={modalStep}
                setModalStep={setModalStep}
                selectedMembers={selectedMembers}
                onToggleMember={handleToggleMember}
            />
        </div>
    );
};



