export function sleep (ms) {
  const expiration = new Date().getTime() + ms
  while (new Date().getTime() < expiration) {}
}

export function asleep (ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}
