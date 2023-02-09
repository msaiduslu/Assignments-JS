const num = Number(prompt("Please enter the number:"))
let count = 1
let numb = num
if (num >= 0) {

while (numb>=10) {
    numb /=10
    count ++

}
console.log(`${num} is ${count} digits.` );
} else {
    console.log("Please enter positive number");
}
