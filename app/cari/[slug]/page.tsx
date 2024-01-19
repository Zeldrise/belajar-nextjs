import React from 'react'

async function getData(param:string) {
  const res = await fetch(`https://api.github.com/users/${param}`);
  return res.json()
}

export default async function Detailcari({params}:{params:{slug:string}}) {
  const data = await getData(params.slug)
  return (
    <div>
      <p>Detail user : {params.slug}</p>
      <div>{JSON.stringify(data)}</div>
    </div>
  );
}
