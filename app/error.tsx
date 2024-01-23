'use client'
import Link from "next/link";
import React, { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);
  return (
    <main className="flex min-h-screen">
      <div className="my-auto mx-auto">
        <p className="text-center text-3xl font-bold">error!</p>
        <button
          className="p-2 m-2 bg-blue-900 rounded-lg text-white"
          onClick={() => reset()}
        >
          ulang
        </button>
        <Link
          className="p-2 m-2 bg-blue-900 rounded-lg text-white"
          href="/dashboard"
        >
          Kembali
        </Link>
      </div>
    </main>
  );
}
