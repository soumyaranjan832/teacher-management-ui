const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const times = Array.from({ length: 12 }, (_, i) => `${8 + i}:00`);

export default function Timetable() {
  return (
    <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition overflow-x-auto">
      <h2 className="text-lg font-semibold mb-4">Weekly Timetable</h2>
      <table className="min-w-full border text-sm">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2 text-left font-medium">Time</th>
            {days.map(day => <th key={day} className="border p-2 font-medium">{day}</th>)}
          </tr>
        </thead>
        <tbody>
          {times.map(time => (
            <tr key={time} className="hover:bg-gray-50">
              <td className="border p-2 font-medium">{time}</td>
              {days.map(day => (
                <td key={day} className="border p-2 h-12"></td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
