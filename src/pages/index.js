import { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function HomePage() {
  useEffect(() => {
    document.title = 'AceIt - Home';
  }, []);

  return (
    <>
      <Head>
        <title>AceIt - Home</title>
      </Head>

      <header className="text-center py-4">
        <h1 className="text-4xl font-bold text-pink-600 font-sans">AceIt</h1>
        <p className="text-xl text-pink-400 font-semibold">Your Monthly Productivity Tracker</p>
        <nav className="mt-6">
          <Link href="/" className="mx-4 text-rose-800 hover:underline">Home</Link>
          <Link href="/tracker" className="mx-4 text-rose-800 hover:underline">Tracker</Link>
          <Link href="/about" className="mx-4 text-rose-800 hover:underline">About Us</Link>
          <Link href="/contact" className="mx-4 text-rose-800 hover:underline">Contact Us</Link>
        </nav>
      </header>

      <section className="max-w-2xl mx-auto my-4 p-8 bg-pink-50 border border-pink-200 rounded-xl shadow-lg text-center">
        <h2 className="text-3xl text-pink-500 mb-4 font-serif">Welcome to AceIt</h2>
        <p className="text-lg text-rose-900 font-medium leading-relaxed">
          Stay on track and crush your monthly goals with ease! <br />
          Organize your tasks by category, check progress daily, and celebrate consistency.<br />
          Ready to get started?
        </p>
        <Link href="/services">
          <span className="inline-block mt-6 px-6 py-3 bg-pink-400 text-white text-lg font-bold rounded-xl shadow hover:bg-pink-500 transition">
            Go to Planner
          </span>
        </Link>
      </section>

      <footer className="text-center mt-10 py-4 text-gray-500 font-sans">
        &copy; 2025 AceIt &nbsp;|&nbsp; Stay productive!
      </footer>
    </>
  );
}
