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
    <div>
      <form onSubmit={onSearch}>
        <input placeholder="Cari user github" />
        <button>cari</button>
      </form>
      {query && <SectionResult query={query} />}
    </div>
  );
}
