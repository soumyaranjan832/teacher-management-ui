import { TeacherInfo } from '@/types/teacher';

export default function TeacherCard({ teacher }: { teacher: TeacherInfo }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition mb-4">
      <h2 className="text-xl font-semibold mb-2">Teacher Details</h2>
      <p className="mb-1"><strong>Name:</strong> {teacher.name}</p>
      <p className="mb-1"><strong>Role:</strong> {teacher.role}</p>
      <p className="mb-1"><strong>Birth Date:</strong> {teacher.birthDate}</p>
    </div>
  );
}