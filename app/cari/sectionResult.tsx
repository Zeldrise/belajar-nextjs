import Link from 'next/link';
import React from 'react'
import useSWR from 'swr';

const fetcher = (url:string) => fetch(url).then((res) => res.json());

interface Props{
  query:String
}

export default function SectionResult({query}:Props) {
  const {data, error}= useSWR(`https://api.github.com/search/users?q=${query}`,fetcher)
  var loading = !data && !error
  return (
    <div style={{marginTop:"10px"}}>
      <p>Hasil pencarian : {query}</p>
      <div>
        {loading && "Sebentar"}
        {data && data.items.map((user:any,index:number)=>{
          return (
            <ul key={index} className="flex space-x-2 my-2">
              <li className="p-2 bg-blue-400 rounded-lg text-black list-disc">
                <Link href={`/cari/${user.login}`}>{user.login}</Link>
              </li>
              <li className="p-2 bg-blue-900 rounded-lg  text-white">
                <Link href={user.repos_url}>repo</Link>
              </li>
            </ul>
          );
        })}
      </div>
    </div>
  )
}
