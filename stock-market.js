var stocks = [65, 52, 52, 68, 90, 60, 2, 58];

function maxProfit (arr) {
  var result = -1;
  for (var i = 0; i < arr.length-1; i++) {
    for (var j = Number(i) + 1; j < arr.length; j++) {
      var buy = arr[i];
      var sell = arr[j];
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

console.log(maxProfit(stocks));