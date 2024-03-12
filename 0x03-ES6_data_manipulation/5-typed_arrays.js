export default function createInt8TypedArray(length, position, value) {
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  const arrBuff = new ArrayBuffer(length);
  const typedArray = new Int8Array(arrBuff);
  const dataView = new DataView(arrBuff);

  typedArray[position] = value;

  return dataView;
}
