import { expect } from 'chai'
import type Repository from '../pages/repository';
import getProjects from '../pages/projects';

let res: Repository[];
const user = 'EmeraldSnorlax';

before(async () => {
  res = await getProjects(user);
});

describe('getProjects()', () => {
  it('should fetch repositories for a given user', () => {
    expect(res).to.haveOwnProperty('length');
    expect(res[0]).to.haveOwnProperty('full_name');
    expect(res[0]).to.haveOwnProperty('default_branch');
  });

  it('should ignore archived repos', () => {
    res.forEach((repo) => {
      expect(repo.archived).equal(false);
    });
  });

  it('should ignore forked repos', () => {
    res.forEach((repo) => {
      expect(repo.fork).to.equal(false);
    });
  });

  it('should ignore the user readme', () => {
    res.forEach((repo) => {
      expect(repo.name).to.not.equal(user);
    });
  });
});

