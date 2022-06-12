console.log('Hello Binary Search');

function search(arr = [], target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    middle = (left + right) / 2;
    if (arr[middle] == target) {
      return middle;
    } else if (target < arr[middle]){
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }
  return -1;
}

const myArr = [-2, -1, 1, 5, 8, 11, 16];
const tgt = 8;

console.log(search(myArr, tgt));