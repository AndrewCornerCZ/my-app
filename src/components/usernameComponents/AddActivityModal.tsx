'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import * as L from "leaflet";
import Geolocation from './Geolocation';

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
  const [selectedSportId, setSelectedSportId] = useState(() => 
  userSports && userSports.length > 0 ? String(userSports[0].sportId) : ''
);
  const [starttime, setStartTime] = useState('');
  const [endtime, setEndTime] = useState('');  
  const [description, setDescription] = useState('');
  const [privacy, setPrivacy] = useState('');
  if (!privacy) setPrivacy('public');
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
      if (privacy != ""){
        await fetch('/api/activities', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                sportId: Number(selectedSportId),
                starttime,
                endtime,
                description,
                date: new Date(date),
                latitude: location?.lat,
                longitude: location?.lng,
                publicity: privacy
            }),
        });
        setIsOpen(false);
        router.refresh();
      }
    } catch {
        setError('Failed to add activity. Please try again.');
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
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
      <div className="bg-zinc-800 p-4 rounded-lg shadow-xl w-full max-w-lg md:max-w-2xl max-h-[80vh] overflow-auto">
        <h3 className="text-lg font-bold text-white mb-2">Log a New Activity</h3>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
            <label className="block text-sm text-gray-300 mb-1">Start time</label>
            <input type="time" value={starttime} onChange={(e) => setStartTime(e.target.value)} className="w-full p-2 rounded bg-zinc-700 text-white" />
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-1">End time</label>
            <input type="time" value={endtime} onChange={(e) => setEndTime(e.target.value)} className="w-full p-2 rounded bg-zinc-700 text-white" />
          </div>

          <div className="col-span-1 md:col-span-2">
            <label className="block text-sm text-gray-300 mb-1">Notes (optional)</label>
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="w-full p-2 rounded bg-zinc-700 text-white h-24" />
          </div>

          {/* nově: výběr soukromí aktivity */}
          <div className="col-span-1 md:col-span-2">
            <label className="block text-sm text-gray-300 mb-1">Privacy</label>
            <select value={privacy} onChange={(e) => setPrivacy(e.target.value)} className="w-full p-2 rounded bg-zinc-700 text-white">
              <option value="public">Public</option>
              <option value="friends">Friends-only</option>
              <option value="private">Private</option>
            </select>
          </div>
          
          {/* Map Picker spans full width */}
          <div className="col-span-1 md:col-span-2">
            <Geolocation onLocate={(lat, lng) => setLocation({ lat, lng })} />
            <label className="block text-sm text-gray-300 mb-1">Select Location</label>
            <div className="rounded overflow-hidden border border-zinc-700">
              <MapContainer
                 center={location ? [location.lat, location.lng] : [51.505, -0.09]} // <--- fixed
                 zoom={location ? 13 : 6}
                 style={{ height: '220px', width: '100%' }}
                 key={`map-${location?.lat ?? 'n'}-${location?.lng ?? 'n'}`}
               >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <LocationPicker onSelect={(lat, lng) => setLocation({ lat, lng })} />
                {location && <Marker position={[location.lat, location.lng]} icon={markerIcon} />}
              </MapContainer>
            </div>
            {location && (
              <p className="text-xs text-gray-400 mt-1">
                📍 Selected: {location.lat.toFixed(4)}, {location.lng.toFixed(4)}
              </p>
            )}
          </div>

          <div className="col-span-1 md:col-span-2 flex justify-end gap-4 pt-2 sticky bottom-0 bg-gradient-to-t from-zinc-800/90">
            <button type="button" onClick={() => setIsOpen(false)} className="px-4 py-2 bg-zinc-600 rounded-lg">Cancel</button>
            <button type="submit" disabled={loading} className="px-4 py-2 bg-indigo-600 rounded-lg">{loading ? 'Logging...' : 'Log'}</button>
          </div>
        </form>
      </div>
    </div>
  );
}

