'use client'

import { useState, useEffect } from 'react';


interface UserSport {
  sportId: number;
  color?: string | null;
}

interface ActivityWithSport { // nový typ pro aktivitu s informacemi o sportu
  id: number;
  date: string | Date;
  duration: number;
  description: string | null;
  sportId: number;
  sport: {
    name: string;
  };
}

interface ActivityCalendarProps { //interface pro props komponenty ke kalendáři
  initialActivities: ActivityWithSport[];
  userSports: UserSport[];
}

// Nový typ pro buňku v kalendáři
interface CalendarDay {
  date: Date;
  activityColor: string | null;
  isCurrentMonth: boolean;
}

export default function ActivityCalendar({ initialActivities, userSports }: ActivityCalendarProps) {
  // Stav pro aktivity uživatele
  const [activities] = useState(initialActivities);
  // Nový stav pro sledování aktuálně zobrazeného měsíce
  const [currentDate, setCurrentDate] = useState(new Date());
  // Stav pro dny v kalendáři
  const [days, setDays] = useState<CalendarDay[]>([]);
  // Stav pro vybranou aktivitu (pro modální okno)
  const [selectedActivity, setSelectedActivity] = useState<ActivityWithSport | null>(null);

  // Tento useEffect se spustí při změně měsíce nebo aktivit
  useEffect(() => {
    // Funkce pro generování mřížky kalendáře
    const generateCalendarGrid = () => {
      //získáme data pro aktuální měsíc a rok
      const year = currentDate.getFullYear();
      const month = currentDate.getMonth();
      //získá data pro první den v měsíci
      const firstDayOfMonth = new Date(year, month, 1);

       // Začátek mřížky (může být v předchozím měsíci)
      const startDate = new Date(firstDayOfMonth);
      // Posuneme zpět na neděli (nebo zůstaneme, pokud už je to neděli)
      startDate.setDate(startDate.getDate() - firstDayOfMonth.getDay());

      // Vytvoříme pole pro dny v kalendáři
      const dayArray: CalendarDay[] = [];

      for (let i = 0; i < 42; i++) { // 6 řádků po 7 dnech
        //vytvoříme si kopii abych se nehrabal v původním datu
        const date = new Date(startDate);
        //přičtem i dní
        date.setDate(startDate.getDate() + i);

        // Najdeme aktivitu pro tento den (pokud existuje)
        const activityForDay = activities.find(act => {
        const actDate = new Date(act.date);
        return (
          actDate.getFullYear() === date.getFullYear() &&
          actDate.getMonth() === date.getMonth() &&
          actDate.getDate() === date.getDate()
        );
});

        // Získáme barvu sportu, pokud je aktivita nalezena
        let color = null;
        if (activityForDay) {
          const sportInfo = userSports.find(us => us.sportId === activityForDay.sportId);
          color = sportInfo?.color || '#3b82f6';
        }

        dayArray.push({
          date,
          activityColor: color,
          isCurrentMonth: date.getMonth() === month,
        });
      }
      setDays(dayArray);
    };

    generateCalendarGrid();
  }, [currentDate, activities, userSports]);

  // Funkce pro přepínání měsíců
  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const handleDayClick = (date: Date) => {
    const activityForDay = activities.find(
      (act) => new Date(act.date).toDateString() === date.toDateString()
      
    );
    setSelectedActivity(activityForDay || null);
  };
  return (
    <div>
      {/* Hlavička s přepínáním měsíců */}
      <div className="flex justify-between items-center mb-4">
        <button onClick={handlePrevMonth} className="px-3 py-1 bg-zinc-700 rounded hover:bg-zinc-600">&lt;</button>
        <h3 className="text-xl font-semibold text-white">
          {currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
        </h3>
        <button onClick={handleNextMonth} className="px-3 py-1 bg-zinc-700 rounded hover:bg-zinc-600">&gt;</button>
      </div>

      {/* Dny v týdnu */}
      <div className="grid grid-cols-7 gap-2 text-center text-xs text-gray-400 mb-2">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => <div key={day}>{day}</div>)}
      </div>

      {/* Mřížka kalendáře */}
      <div className="grid grid-cols-7 gap-2">
        
        {days.map(({ date, activityColor, isCurrentMonth }, index) => (
          <div
            key={index}
            onClick={() => handleDayClick(date)}
            className={`w-full aspect-square rounded-md cursor-pointer flex items-center justify-center transition-colors ${!isCurrentMonth ? 'text-gray-600' : 'text-white'}`}
            style={{ 
              backgroundColor: activityColor ? activityColor : (isCurrentMonth ? '#4a4a52' : '#3a3a40')
            }}
            title={date.toLocaleDateString()}
          >
            <span className="text-xs">{date.getDate()}</span>
          </div>
        ))}
      </div>

      {/* Modální okno pro detail aktivity (zůstává stejné) */}
      {selectedActivity && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50" onClick={() => setSelectedActivity(null)}>
          <div className="bg-zinc-800 p-6 rounded-lg shadow-xl" onClick={(e) => e.stopPropagation()}>
            <h4 className="font-bold text-white">{new Date(selectedActivity.date).toLocaleDateString()}</h4>
            <p className="text-gray-300">Sport: {selectedActivity.sport.name}</p>
            <p className="text-gray-300">Duration: {selectedActivity.duration} minutes</p>
            {selectedActivity.description && <p className="text-gray-400 mt-2">Notes: {selectedActivity.description}</p>}
          </div>
        </div>
      )}
    </div>
  );
}