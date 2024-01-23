import React, { Suspense } from 'react'
import RepoList from './sectionRepos';

async function getDataUsers(param:string) {
  const res = await fetch(`https://api.github.com/users/${param}`);
  return res.json()
}

export default async function Detailcari({params}:{params:{slug:string}}) {
  const dataUser = await getDataUsers(params.slug)
  return (
    <div className="container bg-white mx-auto my-4 rounded-lg">
      <div className="container p-20">
        <p className="font-bold mt-2 text-xl">Detail user : {params.slug}</p>
        <ul className='list-disc'>
          <li>Nama : {dataUser.name}</li>
          <li>Login : {dataUser.login}</li>
          <li>Location : {dataUser.location}</li>
          <li>Email : {dataUser.email}</li>
          <li>Type : {dataUser.type}</li>
          <li>ID : {dataUser.id}</li>
          <li>Node ID : {dataUser.node_id}</li>
          <li>Avatar : {dataUser.avatar_url}</li>
          <li>Url : {dataUser.url}</li>
          <li>Html Url : {dataUser.html_url}</li>
          <li>Followers : {dataUser.followers}</li>
          <li>Following : {dataUser.following}</li>
          <li>Public Repos : {dataUser.public_repos}</li>
        </ul>

        <div style={{ marginTop: "10px" }}>
          <Suspense fallback={<div>Memuat.....</div>}>
            <RepoList slug={params.slug} />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
