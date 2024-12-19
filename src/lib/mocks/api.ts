import { data } from './data';

type DataKeys = 'diplomas' | 'projects' | 'sideProjects' | 'stacks' | 'tools';

export function fetchData(key: DataKeys) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(data[key]), 1000);
  });
}
