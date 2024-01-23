'use client'
import React, { useState } from 'react'
import SectionResult from './sectionResult'

export default function page() {
  const [query,setQuery] = useState('')
  const onSearch=(e:any)=>{
    e.preventDefault()
    const inputQuery = e.target[0].value;
    setQuery(inputQuery)
  }
  return (
    <main className="flex min-h-screen">
      <div className="my-auto mx-auto">
        <div>
          <form onSubmit={onSearch}>
            <input
              className="border border-transparent rounded-lg m-2 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
              placeholder="Cari user github"
            />
            <button className="p-2 bg-blue-900 rounded-lg text-white">
              cari
            </button>
          </form>
          {query && <SectionResult query={query} />}
        </div>
      </div>
    </main>
  );
}
