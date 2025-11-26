'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function SecretaryPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the new assistant page
    router.replace('/assistant');
  }, [router]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
      <div className="text-white text-center">
        <div className="w-12 h-12 border-4 border-blue-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-xl font-semibold">Redirigiendo...</p>
      </div>
    </div>
  );
}