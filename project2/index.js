let input_el = document.getElementById("inp-number");
const btn_el = document.getElementById("btn-convert");
const info = document.getElementById("ul-li");

btn_el.addEventListener("click", function () {
  let number = Number(input_el.value);
  info.innerHTML="";
  const feet = (number * 1.233).toFixed(2);
  const meter = (number * 2.32).toFixed(2);
  const gallons = (0.032 * number).toFixed(2);
  const liters = (9.3 * number).toFixed(2);
  const pounds = (10.23 * number).toFixed(2);
  const kilos = (number * 4.32).toFixed(2);

  info.innerHTML += `
    <li>
      <h3>Length (Meter/Feet)</h3>
      <p>${number} meters = ${feet} feet | ${number} feet = ${meter} meters</p>
    </li>
    <li>
      <h3>Volume (Liters/Gallons)</h3>
      <p>${number} liters = ${gallons} gallons | ${number} gallons = ${liters} liters</p>
    </li>
    <li>
      <h3>Mass (Kilograms/Pounds)</h3>
      <p>${number} kilos = ${pounds} pounds | ${number} pounds = ${kilos} kilos</p>
    </li>
  `;
});