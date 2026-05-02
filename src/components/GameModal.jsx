import { X, Maximize2, RotateCcw } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function GameModal({ isOpen, onClose, gameUrl, gameTitle }) {
  if (!isOpen || !gameUrl) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/95 backdrop-blur-sm"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="relative w-full max-w-5xl h-[80vh] bg-[#161B33] rounded-2xl border border-[#302B63] shadow-2xl flex flex-col overflow-hidden"
        >
          {/* Toolbar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-[#302B63] bg-[#0F0C29]/50">
            <h2 className="text-xl font-black italic text-white uppercase tracking-tighter">
              {gameTitle?.replace('Google ', '')} <span className="text-cyan-400 text-xs normal-case italic font-bold ml-2">Unblocked Session</span>
            </h2>
            <div className="flex items-center gap-2">
              <button 
                onClick={() => window.location.reload()}
                className="p-2 hover:bg-zinc-800 rounded-lg text-slate-400 hover:text-white transition-colors"
                title="Reset Frame"
              >
                <RotateCcw className="w-5 h-5" />
              </button>
              <button 
                className="p-2 hover:bg-zinc-800 rounded-lg text-slate-400 hover:text-white transition-colors"
                title="Fullscreen"
              >
                <Maximize2 className="w-5 h-5" />
              </button>
              <button
                onClick={onClose}
                className="p-2 hover:bg-pink-600 rounded-lg text-slate-400 hover:text-white transition-colors group"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Iframe Container */}
          <div className="flex-1 w-full bg-black relative">
            <iframe
              src={gameUrl}
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen
              allow="autoplay; encrypted-media"
            />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
