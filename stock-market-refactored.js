var data = createArray(50, 50);

function createArray (length, maxNum) {
  var arr = [];
  for (i = 0; i < length; i++) {
    var num = Math.floor(Math.random() * maxNum);
    arr.push(num);
  }
  return arr;
}


function generateArrayOfArrays (prices) {
  var newArray = [];
  var subArray = [];

  for (i = 0; i < prices.length; i++) {
    subArray.push(prices[i]);
    if (i == prices.length -1 || prices[i] > prices[i + 1]){
      if (subArray.length < 2) {
        subArray = [];
      } else {
        newArray.push(subArray);
        subArray = [];
      }
    }
  }
  return newArray;
}

function compareArrays (arr) {
  var result = -1;
  for (var i = 0; i < arr.length; i++){
    for (var j = i; j < arr.length; j++) {
      var buy = arr[i][0];
      var sell = arr[j][arr[j].length - 1];
      if (buy < sell) {
        var diff = sell - buy;
        if (diff > result) {
          result = diff;
        }
      }
    }
  }
  return result;
}

console.log(compareArrays(generateArrayOfArrays(data)));

