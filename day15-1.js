
// let arr = [0, 3, 6];
let arr = [16,12,1,0,15,7,11];

while (true) {
  let x = arr[arr.length - 1];
  let bool = true;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === x) {
      bool = false;
      break;
    }
  }
  if (bool) {
    arr.push(0);
  } else {
    let count = 0;
    for (let i = arr.length - 2; i >= 0; i--) {
      count++;
      if (arr[i] === x) {
        break;
      }
    }
    arr.push(count);
  }
  if (arr.length === 2020) {
    console.log(arr[arr.length - 1]);
    break;
  }
}
