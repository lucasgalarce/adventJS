// Vamos a escribir una función que reciba la lista de precios de una criptomoneda en un día y
// debemos devolver la ganancia máxima que podríamos sacar si compramos y vendemos la inversión el mismo día.
// La lista de precios es un array de números y representa el tiempo de izquierda a derecha.
// Por lo que ten en cuenta que no puedes comprar a un precio que esté a la derecha de la venta y
// no puedes vender a un precio que esté a la izquierda de la compra.

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

const res = maxProfit([39, 18, 29, 25, 34, 32, 5]);
console.log(res); // -> 16 (compra a 18, vende a 34)
