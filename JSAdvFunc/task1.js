
function handleEven() {
  console.log("number is even");
}

function handleOdd() {
  console.log("number is odd");
}

function handleNum(num, evenNum, oddNum) {
  if (num % 2 === 0) {
    evenNum();
  } else {
    oddNum();
  }
}

handleNum(8, handleEven, handleOdd);
handleNum(5, handleEven, handleOdd);