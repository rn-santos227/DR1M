"use client";

import { useRouter } from 'next/navigation';

import Image from 'next/image';

export default function Index() {
  const router = useRouter();
  return (
    <>
      <header className="fixed top-0 left-0 w-full text-white p-2 flex justify-between items-center bg-black shadow-light-green z-50">
        
      </header>
      <main className="background flex min-h-screen flex-col items-center justify-between p-24">
      </main>
    </>
  );
}