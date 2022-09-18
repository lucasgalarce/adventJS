const ovejas = [
  { name: "Noa", color: "azul" },
  { name: "Euge", color: "rojo" },
  { name: "Navidad", color: "rojo" },
  { name: "Ki Na Ma", color: "rojo" },
  { name: "AAAAAaaaaa", color: "rojo" },
  { name: "Nnnnnnnn", color: "rojo" },
];

function contarOvejas(ovejas) {
  const filteredSheep = ovejas.filter((oveja) => {
    return (
      oveja.color === "rojo" &&
      oveja.name.toLowerCase().includes("n") &&
      oveja.name.toLowerCase().includes("a")
    );
  });
  return filteredSheep;
}

const res = contarOvejas(ovejas);
console.log(res);
