import { TeacherInfo } from '@/types/teacher';

export default function ContactCard({ teacher }: { teacher: TeacherInfo }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition mb-4">
      <h2 className="text-xl font-semibold mb-2">Contact Information</h2>
      <p className="mb-1"><strong>Email:</strong> {teacher.email}</p>
      <p className="mb-1"><strong>Phone:</strong> {teacher.phone}</p>
      <p className="mb-1"><strong>Address:</strong> {teacher.address}</p>
    </div>
  );
}