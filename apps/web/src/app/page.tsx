import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 bg-slate-900 text-white">
        <div className="text-2xl font-bold font-serif">University of Nairobi (Mock)</div>
        <nav className="flex space-x-4">
          <Link href="/faculties" className="hover:text-amber-400">Academics</Link>
          <Link href="/admissions" className="hover:text-amber-400">Admissions</Link>
          <Link href="/student-life" className="hover:text-amber-400">Student Life</Link>
          <Link href="http://localhost:3002" className="px-4 py-2 bg-amber-500 text-slate-900 rounded font-semibold">Apply Now</Link>
          <Link href="http://localhost:3003" className="px-4 py-2 border border-amber-500 text-amber-500 rounded font-semibold">Student Portal</Link>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="flex-grow">
        <section className="bg-slate-100 py-20 px-6 text-center">
          <h1 className="text-5xl font-serif font-bold mb-4 text-slate-900">Shape Your Future</h1>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Join thousands of students across the region pursuing excellence in research, innovation, and leadership.
          </p>
          <div className="flex justify-center space-x-4">
            <Link href="/admissions" className="px-6 py-3 bg-slate-900 text-white rounded-lg font-semibold text-lg hover:bg-slate-800">
              Explore Programmes
            </Link>
          </div>
        </section>

        {/* Stats Section */}
        <section className="grid grid-cols-1 md:grid-cols-4 gap-6 px-6 py-12 bg-white">
          <div className="text-center p-6 border rounded-lg shadow-sm">
            <div className="text-4xl font-bold text-amber-500 mb-2">10,000+</div>
            <div className="text-slate-600 font-medium">Students Enrolled</div>
          </div>
          <div className="text-center p-6 border rounded-lg shadow-sm">
            <div className="text-4xl font-bold text-amber-500 mb-2">800+</div>
            <div className="text-slate-600 font-medium">Expert Faculty</div>
          </div>
          <div className="text-center p-6 border rounded-lg shadow-sm">
            <div className="text-4xl font-bold text-amber-500 mb-2">40+</div>
            <div className="text-slate-600 font-medium">Degree Programmes</div>
          </div>
          <div className="text-center p-6 border rounded-lg shadow-sm">
            <div className="text-4xl font-bold text-amber-500 mb-2">95%</div>
            <div className="text-slate-600 font-medium">Graduate Employment</div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8 text-center">
        <p>&copy; {new Date().getFullYear()} University Name. All rights reserved.</p>
      </footer>
    </div>
  );
}
