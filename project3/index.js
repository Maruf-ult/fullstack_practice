import getStockData from "./fakeApi.js";

console.log("Script loaded");

setInterval(function () {
  const stockData = getStockData();
  console.log("Stock data:", stockData);
  renderStockTicker(stockData);
}, 1500);


function renderStockTicker(stockData) {
  const stockDisplayName = document.getElementById("name");
  const stockDisplaySymbol = document.getElementById("symbol");
  const stockDisplayPrice = document.getElementById("price");
  const stockDisplayTime = document.getElementById("time");

  const { name, sym, price, time } = stockData;

  stockDisplayName.textContent = name;
  stockDisplaySymbol.textContent = sym;
  stockDisplayPrice.textContent = price;
  stockDisplayTime.textContent = time;
}