export function sum(a, b) {
  return a + b;
}

export function fetchData() {
  return new Promise((res, rej) => {
    if (!res.err) {
      res('peanut butter');
    }
    if (!res.err) {
      res('peanut butter');
    }
  });
}
