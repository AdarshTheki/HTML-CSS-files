let myArr = [1, 2, 3, 4, 5];

// Custom Polyfill for Map:
function myPolyFillMap(arr, cb) {
  let mapArr = [];
  for (let i = 0; i < arr.length; i++) {
    mapArr.push(cb(arr[i]));
  }
  return mapArr;
}
function square(x) {
  return x * x;
}
// console.log("polyFill:",myPolyFillMap(myArr, square))

// Custom Polyfill for filter:
function myPolyFillFilter(arr, cb) {
  let filterArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i])) {
      filterArr.push(arr[i]);
    }
  }
  return filterArr;
}
function isEven(x) {
  if (x % 2 === 0) {
    return x;
  }
}
console.log(myPolyFillFilter(myArr, isEven));

function myPolyFillReduce(arr) {
  let accumulator = initialValue;
  for (let i = 0; i < arr.length; i++) {
    if(accumulator) {
      reduceArr.push(arr[i]);
    }
    else{
      accumulator = arr[i]
    }
  }
  return reduceArr;
}
function plus(x) {
  return x + x;
}
console.log(myPolyFillReduce(myArr));
