import { useEffect, useState } from 'react';

export default function ProgressTracker() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    
    const element = document.getElementById('something');
    console.log(element);
  }, []);

  if (!mounted) return null;

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <p className="text-pink-800">Track your progress here!</p>
      {/* Your component UI */}
    </div>
  );
}
