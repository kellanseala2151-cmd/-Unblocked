import { Gamepad2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[#161B33] border-b-4 border-[#302B63]">
      <div className="max-w-[1440px] mx-auto px-8 h-20 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3"
        >
          <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-violet-600 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(236,72,153,0.4)]">
            <Gamepad2 className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-black italic tracking-tighter uppercase text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-cyan-400">
            VORTEX GAMES
          </h1>
        </motion.div>

        <div className="hidden lg:flex items-center gap-4">
          <div className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/50 rounded-lg text-cyan-400 text-[10px] font-bold flex items-center gap-2 tracking-widest">
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span> SYSTEM ENCRYPTED
          </div>
          <button className="px-6 py-2 bg-pink-600 rounded-lg font-bold text-sm hover:bg-pink-500 shadow-lg shadow-pink-900/20 transition-colors uppercase tracking-tight italic">
            Priority Access
          </button>
        </div>
      </div>
    </header>
  );
}
