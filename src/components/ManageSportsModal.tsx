'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

// Definice typů
interface SportRank {
  id: number;
  name: string;
  description?: string; // Přidáno pro případ, že ranky mají popis
}

interface UserSport {
  userId: number;
  sportId: number;
  sport: { name: string };
  sportRankId: number;
  startedAt: Date;
}

interface ManageSportsModalProps {
  userSports: UserSport[];
}

export default function ManageSportsModal({ userSports }: ManageSportsModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [view, setView] = useState<'list' | 'edit'>('list');
  const [selectedSport, setSelectedSport] = useState<UserSport | null>(null);

  // Stavy pro editační formulář
  const [sportRanks, setSportRanks] = useState<SportRank[]>([]);
  const [selectedRankId, setSelectedRankId] = useState('');
  const [startedAt, setStartedAt] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  // Funkce pro otevření editačního pohledu
  const handleSelectSport = (sport: UserSport) => {
    setSelectedSport(sport);
    setSelectedRankId(String(sport.sportRankId));
    setStartedAt(new Date(sport.startedAt).toISOString().split('T')[0]);
    setView('edit');
  };

  // Funkce pro návrat na seznam
  const handleBackToList = () => {
    setSelectedSport(null);
    setError('');
    setView('list');
  };

  // Načtení ranků, když se otevře editační pohled
  useEffect(() => {
    if (view === 'edit') {
      const fetchRanks = async () => {
        const res = await fetch('/api/ranks');
        if (res.ok) setSportRanks(await res.json());
      };
      fetchRanks();
    }
  }, [view]);

  const handleUpdate = async () => {
    if (!selectedSport) return;
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/user-sport', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: selectedSport.userId,
          sportId: selectedSport.sportId,
          sportRankId: Number(selectedRankId),
          startedAt: new Date(startedAt),
        }),
      });
      if (!res.ok) throw new Error('Failed to update sport.');
      setIsOpen(false); // Zavřít celý modál po úspěšné úpravě
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred.');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!selectedSport || !window.confirm(`Are you sure you want to delete ${selectedSport.sport.name}?`)) return;
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/user-sport', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: selectedSport.userId, sportId: selectedSport.sportId }),
      });
      if (!res.ok) throw new Error('Failed to delete sport.');
      setIsOpen(false); // Zavřít celý modál po úspěšném smazání
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred.');
    } finally {
      setLoading(false);
    }
  };

  const openModal = () => {
    setView('list'); // Vždy začít na seznamu
    setIsOpen(true);
  };

  if (!isOpen) {
    return (
      <button onClick={openModal} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
        Manage Sports
      </button>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-zinc-800 p-6 rounded-lg shadow-xl w-full max-w-md">
        {view === 'list' && (
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Your Sports</h3>
            <div className="space-y-2">
              {userSports.map((us) => (
                <button key={us.sportId} onClick={() => handleSelectSport(us)} className="w-full text-left p-3 bg-zinc-700 rounded-lg hover:bg-zinc-600">
                  {us.sport.name}
                </button>
              ))}
            </div>
            <div className="flex justify-end mt-6">
              <button onClick={() => setIsOpen(false)} className="px-4 py-2 bg-zinc-600 text-white rounded-lg hover:bg-zinc-700">
                Close
              </button>
            </div>
          </div>
        )}

        {view === 'edit' && selectedSport && (
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Edit {selectedSport.sport.name}</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Rank</label>
                <select value={selectedRankId} onChange={(e) => setSelectedRankId(e.target.value)} className="w-full p-2 rounded bg-zinc-700 text-white border border-zinc-600">
                  {sportRanks.map((rank) => <option key={rank.id} value={rank.id} title={rank.description}>{rank.name}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Started At</label>
                <input type="date" value={startedAt} onChange={(e) => setStartedAt(e.target.value)} className="w-full p-2 rounded bg-zinc-700 text-white border border-zinc-600" />
              </div>
              {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
              <div className="flex justify-between items-center pt-4">
                <button onClick={handleDelete} disabled={loading} className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:bg-red-400">
                  {loading ? 'Deleting...' : 'Delete'}
                </button>
                <div className="flex gap-4">
                  <button onClick={handleBackToList} className="px-4 py-2 bg-zinc-600 text-white rounded-lg hover:bg-zinc-700">
                    Back
                  </button>
                  <button onClick={handleUpdate} disabled={loading} className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:bg-indigo-400">
                    {loading ? 'Saving...' : 'Save'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}