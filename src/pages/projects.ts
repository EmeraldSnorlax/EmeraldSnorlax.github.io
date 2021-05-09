import type Repository from './repository';

function getProjects(user: string) {
  return new Promise<Repository[]>(async (resolve, reject) => {
    let res = await fetch(`https://api.github.com/users/${user}/repos`)
    let repos = await res.json();
    let i = 2; // When the API starts counting pages from 1 :flushed:
    while ( repos.length === 30 ) {
      repos = [...repos, (await (await fetch(`https://api.github.com/users/${user}/repos?page=${i}`)).json())].flat(1)
      i++;
    }
    if (!res.ok) reject(res.statusText)
    repos = repos.filter((repo: Repository) => !repo.fork && !repo.archived && repo.name !== user)
    resolve(repos);
  })
}

export default getProjects;
