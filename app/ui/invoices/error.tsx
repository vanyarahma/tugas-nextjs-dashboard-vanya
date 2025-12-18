'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  // Optional: log error ke console atau service external
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex h-full flex-col items-center justify-center">
      <h2 className="text-center text-lg font-semibold text-red-600">
        Something went wrong!
      </h2>
      <p className="mt-2 text-sm text-gray-700 text-center">
        {error.message}
      </p>
      <button
        className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
        onClick={() => reset()} // memanggil reset untuk mencoba render ulang route
      >
        Try again
      </button>
    </main>
  );
}
