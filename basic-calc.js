
const num1 = Number(prompt("1. Number :"));
const num2 = Number(prompt("2. Number :"));
const oprt = prompt("Please enter the operation (+,-,/,*):");

if (oprt === "+") {
  let result = num1 + num2;
  console.log(`${num1} ${oprt} ${num2} = ${result}`);
} else if (oprt === "/") {
  let result = num1 / num2;
  console.log(`${num1} ${oprt} ${num2} = ${result}`);
} else if (oprt === "-") {
  let result = num1 - num2;
  console.log(`${num1} ${oprt} ${num2} = ${result}`);
} else if (oprt === "*") {
  let result = num1 * num2;
  console.log(`${num1} ${oprt} ${num2} = ${result}`);
} else {
  console.log("Please enter valid operation");
}