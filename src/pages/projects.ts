import type Repository from './repository';

function getProjects(user: string) {
  return new Promise<Repository[]>(async (resolve, reject) => {
    let res = await fetch(`https://api.github.com/users/${user}/repos`)
    if (!res.ok) reject(res.statusText)
    let repos = await res.json();
    repos = repos.filter((repo: Repository) => !repo.fork && !repo.archived && repo.name !== user)
    resolve(repos);
  })
}

export default getProjects;
