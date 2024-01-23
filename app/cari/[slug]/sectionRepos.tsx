async function getDataRepos(param: string) {
  const res = await fetch(`https://api.github.com/users/${param}/repos`);
  return res.json();
}

const RepoList = async ({ slug }: any) => {
  const dataRepos = await getDataRepos(slug);
  return (
    <>
      <p className="font-bold mt-2 text-xl">List Repository</p>
      <div className="text-sm">{JSON.stringify(dataRepos)}</div>
    </>
  );
};
export default RepoList;
