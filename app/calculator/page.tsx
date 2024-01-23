'use client'
import React, { useState } from 'react'

export default function Calculator() {
  const [angka1, setAngka1]=useState(0)
  const [angka2, setAngka2]=useState(0)
  const [hasil, setHasil]=useState(0)
  return (
    <main className="flex min-h-screen">
      <div className="my-auto mx-auto">
        <form>
          <input
            className="border border-transparent rounded-lg m-2 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
            placeholder="angka 1"
            onChange={(e) => setAngka1(Number(e.target.value))}
          />
          <input
            className="border border-transparent rounded-lg m-2 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
            placeholder="angka 2"
            onChange={(e) => setAngka2(Number(e.target.value))}
          />
          <button className='p-2 bg-blue-900 rounded-lg text-white' type="button" onClick={() => setHasil(angka1 + angka2)}>
            Hitung
          </button>
          <p className='text-center'>hasil : {hasil}</p>
        </form>
      </div>
    </main>
  );
}
