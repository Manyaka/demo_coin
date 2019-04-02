// https://yobit.net/api/3/ticker/btc_usd

const HOST = 'https://yobit.net';

// eslint-disable-next-line import/prefer-default-export
export function getTicker(pair) {
  return fetch(`${HOST}/api/3/ticker/${pair}`)
    .then((response) => response.json())
    .then(({ last }) => last);
}
