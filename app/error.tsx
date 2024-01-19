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
    <div>
      <p>error bro</p>
      <button onClick={() => reset()}>ulang</button>
      <Link href="/dashboard">balik ah</Link>
    </div>
  );
}
