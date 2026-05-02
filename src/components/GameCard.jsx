import { Play } from 'lucide-react';
import { motion } from 'motion/react';

export default function GameCard({ title, thumbnail, category, onClick }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      viewport={{ once: true }}
      onClick={onClick}
      className="group relative cursor-pointer overflow-hidden rounded-2xl bg-[#161B33] border border-[#302B63] hover:border-cyan-500 shadow-2xl transition-all duration-300"
    >
      <div className="aspect-[4/3] overflow-hidden grayscale-[0.2] group-hover:grayscale-0 transition-all">
        <img
          src={thumbnail}
          alt={title}
          referrerPolicy="no-referrer"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F0C29] via-transparent to-transparent opacity-80" />
      </div>

      <div className="p-4 bg-[#161B33]">
        <div className="flex justify-between items-start mb-1">
          <h3 className="font-bold text-sm text-white group-hover:text-pink-400 transition-colors uppercase tracking-tight">
            {title}
          </h3>
          <span className="text-[10px] bg-yellow-500/20 text-yellow-500 px-1.5 py-0.5 rounded font-bold">★ 4.9</span>
        </div>
        <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">
          {category} • Unblocked
        </p>
      </div>

      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="p-2 bg-pink-600 rounded-lg shadow-[0_0_15px_rgba(236,72,153,0.4)]">
          <Play className="w-4 h-4 text-white fill-current" />
        </div>
      </div>
    </motion.div>
  );
}
