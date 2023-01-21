const input = document.querySelector("#input");
const button = document.querySelector("#button");
const p = document.querySelector(".p");
const pp=document.querySelector(".pp")

button.addEventListener("click", (e) => {
  e.preventDefault();
  let value = input.value;
  if (!value) {
    alert("Please enter a number");
  } else if (value < 0) {
    alert("Please enter a positive number");
    e.target.closest("form").reset();
  }
  //   console.log(value);
  //   console.log(convertToRoman(value));
  //   convertToRoman(value);
  pp.innerText=input.value
  p.innerText = convertToRoman(value);
  e.target.closest("form").reset();
  input.focus();
});

function convertToRoman(num) {
  let roman = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  let str = "";

  for (let i of Object.keys(roman)) {
    let q = Math.floor(num / roman[i]);
    num -= q * roman[i];
    str += i.repeat(q);
  }

  return str;
}
console.log(convertToRoman(1198));
console.log(convertToRoman(8));
console.log(convertToRoman(148));
console.log(convertToRoman(457));
console.log(convertToRoman(4457));

//? Second Solution

function convertToRomans(inp) {
  let roman = "";
  const romanNumeral = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];
  const numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

  for (let i = 0; i < numbers.length; i++) {
    while (inp >= numbers[i]) {
      roman += romanNumeral[i];
      inp -= numbers[i];
    }
  }
  return roman;
}

console.log(convertToRomans(1198));
console.log(convertToRomans(8));
console.log(convertToRomans(148));
console.log(convertToRomans(457));
console.log(convertToRomans(4457));
