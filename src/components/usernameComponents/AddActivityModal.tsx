'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import * as L from "leaflet";

interface UserSport {
  userId: number;
  sportId: number;
  sport: { name: string };
}

interface AddActivityModalProps {
    userSports: UserSport[];
}

const markerIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

function LocationPicker({ onSelect }: { onSelect: (lat: number, lng: number) => void }) {
  useMapEvents({
    click(e) {
      onSelect(e.latlng.lat, e.latlng.lng);
    },
  });
  return null;
}


export default function AddActivityModal({ userSports }: AddActivityModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSportId, setSelectedSportId] = useState(userSports[0]?.sportId.toString() || '');
  const [duration, setDuration] = useState('');  
  const [description, setDescription] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    setLoading(true);
    e.preventDefault();
    setError('');
    try {
        await fetch('/api/activities', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                sportId: Number(selectedSportId),
                duration: Number(duration),
                description,
                date: new Date(date),
                latidute: location?.lat,
                longitude: location?.lng,
            }),
        });
        setIsOpen(false);
        router.refresh();
    } catch {
        setError('Failed to add activity. Please try again.');
        console.log(error);
    } finally {
        setLoading(false);
    }
    }
      if (!isOpen) {
    return (
        <button onClick={() => setIsOpen(true)} className="px-4 py-2 bg-purple-600 text-white rounded">
            Add Activity
        </button>
    );
    }

     return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-zinc-800 p-6 rounded-lg shadow-xl w-full max-w-md space-y-4">
        <h3 className="text-lg font-bold text-white">Log a New Activity</h3>
        <div>
          <label className="block text-sm text-gray-300 mb-1">Sport</label>
          <select value={selectedSportId} onChange={(e) => setSelectedSportId(e.target.value)} className="w-full p-2 rounded bg-zinc-700 text-white">
            {userSports.map(us => <option key={us.sportId} value={us.sportId}>{us.sport.name}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-sm text-gray-300 mb-1">Date</label>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="w-full p-2 rounded bg-zinc-700 text-white" />
        </div>
        <div>
          <label className="block text-sm text-gray-300 mb-1">Duration (minutes)</label>
          <input type="number" value={duration} onChange={(e) => setDuration((e.target.value))} className="w-full p-2 rounded bg-zinc-700 text-white" />
        </div>
        <div>
          <label className="block text-sm text-gray-300 mb-1">Notes (optional)</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="w-full p-2 rounded bg-zinc-700 text-white" />
        </div>
        {/* Map Picker */}
        <div className="h-64 rounded overflow-hidden">
          <label className="block text-sm text-gray-300 mb-1">Select Location</label>
          <MapContainer
            center={[49.9258, 15.4819]} // třeba střed Česka
            zoom={6}
            style={{ height: '200px', width: '100%' }}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <LocationPicker onSelect={(lat, lng) => setLocation({ lat, lng })} />
            {location && <Marker position={[location.lat, location.lng]} icon={markerIcon} />}
          </MapContainer>
          {location && (
            <p className="text-xs text-gray-400 mt-1">
              📍 Selected: {location.lat.toFixed(4)}, {location.lng.toFixed(4)}
            </p>
          )}
        </div>
        <div className="flex justify-end gap-4 pt-4">
          <button onClick={() => setIsOpen(false)} className="px-4 py-2 bg-zinc-600 rounded-lg">Cancel</button>
          <button onClick={handleSubmit} disabled={loading} className="px-4 py-2 bg-indigo-600 rounded-lg">{loading ? 'Logging...' : 'Log'}</button>
        </div>
      </div>
    </div>
  );
  }

