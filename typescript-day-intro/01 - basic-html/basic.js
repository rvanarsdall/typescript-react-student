// create 3 variable  button, input1 , input2
const button = document.getElementById("btn");
const number1 = document.getElementById("num1");
const number2 = document.getElementById("num2");
// use getElementById method to store the "btn", "number1", "number2"

// Add eventlistner to button that will just do call a function handleClick.
button.click(() => {
  const total = handleClick(number1.value, number2.value);
  console.log(total);
});
// make a function called addNumbers that takes two parameters (num1, num2)
// the function addNumbers should return num1+num2
// inside function handleClick call the addNumbers function and console log the result comingback from addNumbers
function handleClick(num1, num2) {
  return num1 + num2;
}
