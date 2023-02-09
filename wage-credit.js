let wage = Number(prompt("Please enter your wage:"))
const minWage = 5500
if (wage < minWage) {
    wage = wage*1.5

} else { wage = wage*1.1

}
console.log(`Your new wage is ${Math.trunc(wage)}`);

// const inCome = Number(prompt("Please enter your income:"))
// const expense = Number(prompt("Please enter your expense:"))
// const minWage = 5500

// inCome >= expense+minWage ? console.log("You can take credit.") :console.log("Sorry you cant't take credit.")