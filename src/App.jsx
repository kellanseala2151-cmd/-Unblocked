/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Header from './components/Header';
import GameCard from './components/GameCard';
import GameModal from './components/GameModal';
import gamesData from './games.json';
import { Search } from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  const [selectedGame, setSelectedGame] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredGames = gamesData.filter((game) =>
    game.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    game.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#0F0C29] text-white selection:bg-pink-500 selection:text-white font-sans flex flex-col">
      <Header />

      <div className="flex flex-1 pt-20 overflow-hidden">
        {/* Sidebar Categories */}
        <aside className="hidden md:flex w-64 bg-[#161B33]/50 p-6 border-r border-[#302B63] flex-col gap-2 shrink-0">
          <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Categories</h3>
          {['All', 'Arcade', 'Puzzle', 'Strategy', 'Retro'].map((cat) => (
            <button
              key={cat}
              onClick={() => setSearchQuery(cat === 'All' ? '' : cat)}
              className={`flex items-center gap-3 w-full p-3 rounded-xl font-bold transition-all text-sm
                ${(searchQuery === cat || (cat === 'All' && searchQuery === '')) 
                  ? 'bg-pink-600/20 text-pink-400 border border-pink-500/30' 
                  : 'hover:bg-white/5 text-slate-300 border border-transparent'}`}
            >
              <span className="opacity-70">
                {cat === 'All' && '🔥'}
                {cat === 'Arcade' && '🚗'}
                {cat === 'Puzzle' && '🧩'}
                {cat === 'Strategy' && '⚽'}
                {cat === 'Retro' && '🕹️'}
              </span>
              {cat === 'All' ? 'Trending Now' : cat}
            </button>
          ))}
          
          <div className="mt-auto p-4 bg-gradient-to-br from-violet-900/40 to-blue-900/40 border border-white/10 rounded-2xl text-center">
            <p className="text-[10px] text-slate-400 uppercase font-bold mb-2 tracking-widest">Global Reach</p>
            <div className="w-full aspect-video bg-black/40 rounded-lg mb-3 flex items-center justify-center text-2xl">📡</div>
            <p className="text-xs font-bold uppercase italic tracking-tighter">Proxied Node Active</p>
            <p className="text-[10px] text-cyan-400 font-bold">STABLE CONNECTION</p>
          </div>
        </aside>

        <main className="flex-1 p-8 bg-gradient-to-b from-[#0F0C29] to-[#24243e] overflow-auto">
          {/* Main Title Area */}
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
            <div>
              <h2 className="text-3xl font-black italic uppercase tracking-tighter">
                Popular Unblocked <span className="text-cyan-400">Games</span>
              </h2>
            </div>

            {/* Search Input In Body */}
            <div className="relative w-full max-w-sm">
              <input
                type="text"
                placeholder="Search 1,200+ games..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#302B63] border-none rounded-full py-2.5 px-6 text-sm placeholder-slate-400 focus:ring-2 ring-cyan-500 text-white"
              />
              <div className="absolute right-4 top-2.5 text-slate-400">
                <Search className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Game Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pb-20">
            {filteredGames.length > 0 ? (
              filteredGames.map((game) => (
                <GameCard
                  key={game.id}
                  title={game.title}
                  thumbnail={game.thumbnail}
                  category={game.category}
                  onClick={() => setSelectedGame(game)}
                />
              ))
            ) : (
              <div className="col-span-full py-20 text-center text-slate-500 border-2 border-dashed border-[#302B63] rounded-3xl">
                <p className="text-xl font-bold uppercase italic italic tracking-tighter">No games found in the vortex.</p>
              </div>
            )}
          </div>
        </main>
      </div>

      <footer className="h-12 bg-[#0F0C29] border-t border-[#302B63] flex items-center justify-between px-8 text-[10px] text-slate-500 tracking-widest shrink-0 font-bold uppercase">
        <div className="flex gap-6">
          <span>Active Players: 4,521</span>
          <span>Node: NA-WEST-1</span>
        </div>
        <div className="hidden md:flex gap-4">
          <span className="text-cyan-500">PROXIED CONNECTION SECURE</span>
          <span className="text-pink-500">ENHANCED AD-BLOCK</span>
        </div>
      </footer>

      <GameModal
        isOpen={!!selectedGame}
        onClose={() => setSelectedGame(null)}
        gameUrl={selectedGame?.url || null}
        gameTitle={selectedGame?.title || null}
      />
    </div>
  );
}

