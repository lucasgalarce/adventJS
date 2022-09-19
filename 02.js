const carta = "bici coche balón  _playstation bici coche peluche";

function listGifts(letter) {
  const array = letter.split(" ");
  const filteredArray = array.filter(
    (item) => !item.includes("_") && item !== ""
  );
  const obj = {};
  for (let gift of filteredArray) {
    if (!obj.hasOwnProperty(gift)) {
      obj[gift] = 1;
    } else {
      obj[gift]++;
    }
  }

  return obj;
}

const res = listGifts(carta);
console.log(res);
