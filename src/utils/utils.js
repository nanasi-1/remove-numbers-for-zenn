export function sleep(sec) {
  return new Promise(resolve => {
    setTimeout(() => { resolve(); }, sec);
  })
}