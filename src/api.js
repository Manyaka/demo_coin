// https://jsonplaceholder.typicode.com/todos/1

const HOST = 'https://jsonplaceholder.typicode.com';

// eslint-disable-next-line import/prefer-default-export
export function getTicker(pair) {
  return fetch(`${ HOST }/todos/${ pair }`)
    .then((response) => response.json())
    .then(({ title }) => title);
}
