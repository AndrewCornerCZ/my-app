'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

// Definice typů
interface Sport {
  id: number;
  name: string;
}

interface SportRank {
  id: number;
  name: string;
  description?: string; // přidáno, aby ESLint/TS věděly, že může být description
}

interface AddSportModalProps {
  userId: number;
  userSports: { sportId: number }[];
}

export default function AddSportModal({ userId, userSports }: AddSportModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [sports, setSports] = useState<Sport[]>([]);
  const [sportRanks, setSportRanks] = useState<SportRank[]>([]); // Nový stav pro úrovně
  const [selectedSportId, setSelectedSportId] = useState('');
  const [selectedRankId, setSelectedRankId] = useState(''); // Nový stav pro vybranou úroveň
  const [startedAt, setStartedAt] = useState(new Date().toISOString().split('T')[0]); // Nový stav pro datum, výchozí je dnes
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  // Načtení dat při otevření modálu
  useEffect(() => {
    if (isOpen) {
      const fetchData = async () => {
        // Načtení sportů
        const sportsRes = await fetch('/api/sports');
        if (sportsRes.ok) {
          const sportsData: Sport[] = await sportsRes.json();
          const userSportIds = userSports.map(us => us.sportId);
          const availableSports = sportsData.filter(sport => !userSportIds.includes(sport.id));
          setSports(availableSports);
          if (availableSports.length > 0) {
            setSelectedSportId(String(availableSports[0].id));
          }
        }

        // Načtení úrovní (ranků)
        const ranksRes = await fetch('/api/ranks');
        if (ranksRes.ok) {
          const ranksData: SportRank[] = await ranksRes.json();
          setSportRanks(ranksData);
          if (ranksData.length > 0) {
            setSelectedRankId(String(ranksData[0].id));
          }
        }
      };
      fetchData();
    }
  }, [isOpen, userSports]);

  const handleAddSport = async () => {
    if (!selectedSportId || !selectedRankId || !startedAt) {
      setError('Please fill in all fields.');
      return;
    }
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/add-sport', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId,
          sportId: Number(selectedSportId),
          sportRankId: Number(selectedRankId), // OPRAVA: Změněno z 'sportrankId' na 'sportRankId'
          startedAt: new Date(startedAt),
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Failed to add sport.');
      }

      setIsOpen(false);
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred.');
    } finally {
      setLoading(false);
    }
  };
  
  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="text-white px-3 py-1 rounded-md transition border-2 border-[#2E2E2E] text-base duration-200"
      >
        Add Sport
      </button>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-zinc-800 p-6 rounded-lg shadow-xl w-full max-w-md">
        <h3 className="text-lg font-bold text-white mb-4">Add a new sport</h3>
        {sports.length > 0 ? (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Sport</label>
              <select
                value={selectedSportId}
                onChange={(e) => setSelectedSportId(e.target.value)}
                className="w-full p-2 rounded bg-zinc-700 text-white border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                {sports.map((sport) => (
                  <option key={sport.id} value={sport.id}>
                    {sport.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Rank</label>
              <select
                value={selectedRankId}
                onChange={(e) => setSelectedRankId(e.target.value)}
                className="w-full p-2 rounded bg-zinc-700 text-white border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                {sportRanks.map((rank) => ( 
                  <option key={rank.id} value={rank.id} title={rank.description ?? ''}>
                    {rank.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Started At</label>
              <input
                type="date"
                value={startedAt}
                onChange={(e) => setStartedAt(e.target.value)}
                className="w-full p-2 rounded bg-zinc-700 text-white border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            <div className="flex justify-end gap-4 pt-4">
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 bg-zinc-600 text-white rounded-lg hover:bg-zinc-700"
              >
                Cancel
              </button>
              <button
                onClick={handleAddSport}
                disabled={loading}
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:bg-indigo-400"
              >
                {loading ? 'Adding...' : 'Add'}
              </button>
            </div>
          </div>
        ) : (
          <p className="text-gray-400">You have added all available sports.</p>
        )}
      </div>
    </div>
  );
}
