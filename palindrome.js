const isPalindrome = (num) => {
    num = num.toString()
  const reverseNum = Number(num.split("").reverse().join(""));
  return reverseNum === Number(num) ? true : false;
};

const closestPalindrome = (num)=>{
if (isPalindrome(num)) {
  console.log(`${num} is a Palindrome number.`);
} else {
  let small = num;
  let bigger = num;
  while (!isPalindrome(small) || !isPalindrome(bigger)) {
    small--;
    bigger++;
    if (isPalindrome(small)) {
      return small
      break;
    } else if (isPalindrome(bigger)) {
      return bigger
      break
    }
  }
}
}
const num = Number(prompt("Please enter a number:"))
console.log(closestPalindrome(num));