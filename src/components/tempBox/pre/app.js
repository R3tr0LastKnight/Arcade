const buttons = document.querySelectorAll("input[type=button]");
const display = document.querySelector("input[type=text]");
const radios = document.querySelectorAll("input[type=radio]");
const convert = document.querySelector("#convert");

Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    let n = 0;
    if (button.value == "Convert") {
      display.value = converter(parseInt(display.value));
    } else if (button.value == "AC") {
      display.value = "";
    } else if (button.value == "DEL") {
      display.value = display.value.slice(0, n - 1);
    } else {
      display.value += button.value;
      n++;
    }
  });
});

function converter(a) {
  let xyz;
  for (let radio of radios) {
    if (radio.checked) {
      xyz = radio.value;
      break;
    }
  }
  if (xyz == "cel") {
    return `${(a = a * (9 / 5) + 32)} \u00B0F`;
  } else if (xyz == "far") {
    return `${(a = (a - 32) * (5 / 9))} \u00B0C`;
  } else if (xyz == "kel") {
    return `${(a = a + 273)} K`;
  } else if (xyz == "kc") {
    return `${(a = a - 273)} \u00B0C`;
  } else {
    return "select a conversion";
  }
}
