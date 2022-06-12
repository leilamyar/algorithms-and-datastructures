function partition(arr, l, r) {

  console.log('ORIGINAL:', arr);

  function swap(val1, i1, val2, i2) {
    // closure
    if (i1 === i2) {
      return;
    }
    arr[i1] = val2;
    arr[i2] = val1;
    console.log('IN SWAP: new array:', arr);
  }

  let pivot = arr[r];
  let i = l - 1;
  for (let j = l; j < r; j++) {
    if (arr[j] < pivot) {
      i+=1;
      if (i === j) {
        continue;
      }
      swap(arr[i], i, arr[j], j);
    }
  }
  swap(arr[i+1], i+1, arr[r], r);
  // console.log('After swap 2 .....', arr);

  return i + 1;
}


function qs(arr, l, r) {
  if (l >= r) {
    return;
  }
  p = partition(arr, l, r);

  qs(arr, l, p - 1);
  qs(arr, p + 1, r);

  return arr;
}

const myArr = [ 4, 22, 100, -9, 2, -4, 10, -100];

console.log('Sorted result :', qs(myArr, 0, (myArr.length - 1)));