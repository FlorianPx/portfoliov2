import { data } from './data';

type DataKeys = 'diplomas' | 'projects' | 'sideProjects' | 'stacks' | 'tools';

export function fetchData(key: DataKeys) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(data[key]), 1000);
  });
}

// import { fetchData } from '@lib/mocks/api';

// const query: CreateQueryResult<Stacks, Error> = createQuery({
  //   queryKey: ['fetch_stacks'],
  //   queryFn: () =>
  //     fetchData('stacks').then((values) =>
  //       (values as Stacks).filter((value) => value.is_mastered),
  //     ),
  //   enabled: true,
  // });