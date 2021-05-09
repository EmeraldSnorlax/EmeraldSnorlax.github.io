import type Repository from './repository';

function getProjects(user: string) {
  return new Promise<Repository[]>(async (resolve, reject) => {
    let repos: Repository[] = [];
    let page: Repository[] = [];
    let i = 1; // When the API starts counting pages from 1 :flushed:
    while ( page.length === 30 || repos.length === 0 ) {
      let res = await fetch(`https://api.github.com/users/${user}/repos?page=${i}`);
      page = await res.json();
      if (!res.ok) reject(res.statusText);
      repos = [...repos, page].flat(1);
      i++;
    }
    repos = repos.filter((repo: Repository) => !repo.fork && !repo.archived && repo.name !== user);
    resolve(repos);
  });
}

export default getProjects;
