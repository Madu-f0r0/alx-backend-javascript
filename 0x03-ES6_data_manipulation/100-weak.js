export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  let number = 0;

  if (weakMap.get(endpoint)) {
    number = weakMap.get(endpoint);
  }
  weakMap.set(endpoint, number + 1);
  if (number + 1 >= 5) {
    throw Error('Endpoint load is high');
  }
}
