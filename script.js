const numberInput = document.getElementById('number');
const convertBtn = document.getElementById('convert-btn');
const output = document.getElementById('output');

const romanNumeralsMap = [
  { value: 1000, symbol: 'M' },
  { value: 900,  symbol: 'CM' },
  { value: 500,  symbol: 'D' },
  { value: 400,  symbol: 'CD' },
  { value: 100,  symbol: 'C' },
  { value: 90,   symbol: 'XC' },
  { value: 50,   symbol: 'L' },
  { value: 40,   symbol: 'XL' },
  { value: 10,   symbol: 'X' },
  { value: 9,    symbol: 'IX' },
  { value: 5,    symbol: 'V' },
  { value: 4,    symbol: 'IV' },
  { value: 1,    symbol: 'I' },
];

function convertToRoman(num) {
  let result = '';
  for (let i = 0; i < romanNumeralsMap.length; i++) {
    while (num >= romanNumeralsMap[i].value) {
      result += romanNumeralsMap[i].symbol;
      num -= romanNumeralsMap[i].value;
    }
  }
  return result;
}

convertBtn.addEventListener('click', () => {
  const inputVal = numberInput.value.trim();

  if (inputVal === '') {
    output.textContent = 'Please enter a valid number';
    return;
  }

  const num = Number(inputVal);

  if (isNaN(num) || !Number.isInteger(num)) {
    output.textContent = 'Please enter a valid number';
    return;
  }

  if (num < 1) {
    output.textContent = 'Please enter a number greater than or equal to 1';
    return;
  }

  if (num > 3999) {
    output.textContent = 'Please enter a number less than or equal to 3999';
    return;
  }

  const romanNumeral = convertToRoman(num);
  output.textContent = romanNumeral;
});
