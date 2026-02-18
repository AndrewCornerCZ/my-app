'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import 'leaflet/dist/leaflet.css'
import type { Map, Marker, Icon, TileLayer, LeafletMouseEvent } from 'leaflet'
import Geolocation from './Geolocation';

interface UserSport {
  userId: number;
  sportId: number;
  sport: { name: string };
}

interface AddActivityModalProps {
    userSports: UserSport[];
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
  const [isClient, setIsClient] = useState(false);

  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<Map | null>(null);
  const markerRef = useRef<Marker | null>(null);
  const markerIconRef = useRef<Icon | null>(null);
  const tileLayerRef = useRef<TileLayer | null>(null);
  const LRef = useRef<typeof import('leaflet') | null>(null);

  // Initialize map and Leaflet
  useEffect(() => {
    setIsClient(true);
    import('leaflet').then(L => {
      LRef.current = L;
      markerIconRef.current = new L.Icon({
        iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
      });
    });
  }, []);

  // Initialize map when modal opens
  useEffect(() => {
    if (!isOpen || !isClient || !mapContainerRef.current || !LRef.current) return;

    const L = LRef.current;

    // Only create map if it doesn't already exist
    if (!mapRef.current) {
      const map = L.map(mapContainerRef.current, {
        center: [51.505, -0.09],
        zoom: 6,
      });

      // Add tile layer
      const tileLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      }).addTo(map);

      // Add click listener to place marker
      map.on('click', (e: LeafletMouseEvent) => {
        setLocation({ lat: e.latlng.lat, lng: e.latlng.lng });
      });

      mapRef.current = map;
      tileLayerRef.current = tileLayer;
    } else {
      // Map already exists, just reset view
      mapRef.current.setView([51.505, -0.09], 6);
    }

    // Cleanup: remove map when modal closes
    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [isOpen, isClient]);

  // Update marker and view when location changes
  useEffect(() => {
    if (!mapRef.current || !location || !LRef.current) return;

    const L = LRef.current;

    // Remove old marker
    if (markerRef.current) {
      mapRef.current.removeLayer(markerRef.current);
    }

    // Add new marker
    if (markerIconRef.current) {
      markerRef.current = L.marker(
        [location.lat, location.lng],
        { icon: markerIconRef.current }
      ).addTo(mapRef.current);
    }

    // Center map on marker
    mapRef.current.setView([location.lat, location.lng], 13);
  }, [location]);

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
        setLocation(null); // Reset location when closing
        router.refresh();
      }
    } catch {
        setError('Failed to add activity. Please try again.');
        
    } finally {
        setLoading(false);
    }
  }

  const handleClose = () => {
    setIsOpen(false);
    setLocation(null); // Reset location when closing
  }

  if (!isOpen) {
    return (
        <button onClick={() => setIsOpen(true)} className="text-white px-3 py-1 rounded-md transition border-2 border-[#2E2E2E] text-base duration-200">
            Add Activity
        </button>
    );
  }

  return (
    
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
      <div className="bg-zinc-800 p-4 rounded-lg shadow-xl w-full max-w-lg md:max-w-2xl max-h-[80vh] overflow-auto">
        <h3 className="text-lg font-bold text-white mb-2">Log a New Activity</h3>
        {error && <p className="text-red-500 mb-2">{error}</p>}
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
            <div
              ref={mapContainerRef}
              className="rounded overflow-hidden border border-zinc-700"
              style={{ height: '220px', width: '100%', background: '#3f3f46' }}
            />
            {location && (
              <p className="text-xs text-gray-400 mt-1">
                📍 Selected: {location.lat.toFixed(4)}, {location.lng.toFixed(4)}
              </p>
            )}
          </div>

          <div className="col-span-1 md:col-span-2 flex justify-end gap-4 pt-2 sticky bottom-0 bg-gradient-to-t from-zinc-800/90">
            <button type="button" onClick={handleClose} className="px-4 py-2 bg-zinc-600 rounded-lg">Cancel</button>
            <button type="submit" disabled={loading} className="px-4 py-2 bg-indigo-600 rounded-lg">{loading ? 'Logging...' : 'Log'}</button>
          </div>
        </form>
      </div>
    </div>
  );
}

