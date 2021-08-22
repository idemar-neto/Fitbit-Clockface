// Add zero in front of numbers < 10
export function zeroPadNumber(num) {
  let numText = num;
  if (num < 10)
    numText = "0" + numText;
  return numText;
}

//Converts numeric digits to monospace characters
export function convertToMonospaceDigits(toConvert) {
  let converted = "";
  
  const str = toConvert.toString();
  for (let index = 0; index < str.length; index++) {
    let char = str.charAt(index);
    if (char >= '0' && char <= '9')
      char = String.fromCharCode("0x1" + char);
    converted = converted + char;
  }
  
  return converted;
}

//Returns the day text for a gien day number (0-6)
export function getDayText(dayNum) {
  const dayArray = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Sunday"];
  
  if (dayNum >= 0 && dayNum < 7)
    return dayArray[dayNum];
  else
    throw new TypeError("Invalid day number");
}

//Returns the short month text for a given month number (0-11)
export function getShortMonthText(monthNum) {
  const monthArray = ["Jan", "Fev", "Mar", "Abr", "Maio", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
  
  if (monthNum >= 0 && monthNum < 12)
    return monthArray[monthNum];
  else
    throw new TypeError("Invalid month number");
}

export function isValidHexColor(value) {
  return (/\s*#[0-9A-F]{6}\s*/i).test(value);
}

export function hideElements(elements) {
  const count = elements.length;
  for (let i = 0; i < count; i++)
    elements[i].style.visibility = "hidden";
}
export function showElements(elements) {
  const count = elements.length;
  for (let i = 0; i < count; i++)
    elements[i].style.visibility = "visible";
}
export function colorizeElements(elements, color) {
  const count = elements.length;
  for (let i = 0; i < count; i++)
    elements[i].style.fill = color;
}