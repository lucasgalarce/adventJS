function daysToXmas(date) {
  const xMas = new Date("Dec 25, 2021 00:00:00");
  return Math.ceil((xMas - date) / (1000 * 60 * 60 * 24));
}
