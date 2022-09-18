const pricesBtc = [39, 18, 29, 25, 34, 32, 5];

function maxProfit(prices) {
  let flag = true;
  let res = 0;
  while (flag) {
    if (prices.length === 0) return -1;
    const min = Math.min(...prices);
    const index = prices.findIndex((number) => number === min);
    if (index + 1 === prices.length) {
      prices.splice(index);
    } else {
      prices.splice(0, index);
      const max = Math.max(...prices);
      res = max - min;
      flag = false;
    }
  }

  return res > 0 ? res : -1;
}

const res = maxProfit(pricesBtc);
console.log(res); // -> 16 (compra a 18, vende a 34)
