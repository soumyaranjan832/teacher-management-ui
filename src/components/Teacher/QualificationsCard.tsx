import { Qualification } from '@/types/teacher';

export default function QualificationsCard({ title, qualifications }: { title: string; qualifications: Qualification[] }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition mb-4">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <ul className="space-y-2">
        {qualifications.map((q, idx) => (
          <li key={idx} className="flex justify-between">
            <span>{q.name}</span>
            <span className="font-medium">{q.rate}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}