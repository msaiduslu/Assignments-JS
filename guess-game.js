// ********************Guess Game*********************
let again = true;
while (again === true) {
  let trial = 5;
  const rand = Math.trunc(Math.random() * 100);

  while (trial > 0) {
    let guess = Number(
      prompt(`You have ${trial} trial. Please enter your guess:`));
    trial -= 1;
    if (guess === rand) {
      console.log(`The number is ${rand} Congrats, you win 🏆`);
    } else if (guess < rand) {
      console.log(`Your guess is ${guess} Please enter bigger number ⬆`);
    } else if (guess > rand) {
      console.log(`Your guess is ${guess} Please enter smaller number ⬇`);
    }
  }

  console.log(`The number was ${rand} Sorry, you lost 😔 `);
  again = confirm("Do you wanna try again?");
}
