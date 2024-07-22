export default function conncatArrays(array1, array2, string) {
  const newArray = [...array1, ...array2, ...string];
  return newArray;
}
