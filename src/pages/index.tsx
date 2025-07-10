import Navbar from '@/components/Layout/Navbar';
import Sidebar from '@/components/Layout/Sidebar';
import TeacherCard from '@/components/Teacher/TeacherCard';
import ContactCard from '@/components/Teacher/ContactCard';
import QualificationsCard from '@/components/Teacher/QualificationsCard';
import Tabs from '@/components/Teacher/Tabs';
import Timetable from '@/components/Timetable/Timetable';
import SimpleForm from '@/components/Teacher/SimpleForm';

export default function Home() {
  const teacher = {
    name: 'Alynia Allan',
    role: 'Teacher',
    birthDate: '01-01-1990',
    email: 'alyniaallan@example.com',
    phone: '416-848-9057',
    address: '56 Osbourne De Santos Cr, North York, Ontario'
  };

  const privateQualifications = [
    { name: 'Vocal Contemporary', rate: '$28.00' },
    { name: 'Vocal Core', rate: '$28.00' },
    { name: 'Vocal Plus', rate: '$28.00' },
    { name: 'Instruments', rate: '$28.00' },
  ];

  const groupQualifications = [
    { name: 'None', rate: '$0.00' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6 bg-gray-100 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <TeacherCard teacher={teacher} />
            <ContactCard teacher={teacher} />
          </div>
          <QualificationsCard title="Private Qualifications" qualifications={privateQualifications} />
          <QualificationsCard title="Group Qualifications" qualifications={groupQualifications} />
          <Tabs />
          <Timetable />
          <SimpleForm />
        </main>
      </div>
    </div>
  );
}
