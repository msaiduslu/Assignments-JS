//---------The purpose of this coding challenge is to create a function that will take text in kebab case format or with spaces and output it in camel case format.-----------

const input1 = "JavaScript coding ChAlLenge";

//Output : javaScriptCodingChallenge

const input2 = "JavaScript-coding-challenge";

//Output : JavaScriptCodingChallenge

const input3 = "javaScriptCodingChallenge";

//Output : javaScriptCodingChallenge

function camelCase(str) {
  let newResult = [];
  if (str.includes("-") && !str.includes(" ")) {
    let result = str.toLowerCase().split("-");
    console.log(result);
    let strCap;
    let newResult = [result[0]];
    for (let i = 1; i < result.length; i++) {
      strCap = result[i].charAt(0).toUpperCase() + result[i].slice(1);
      newResult.push(strCap);
    }
    return newResult.join("");
  } else if (!str.includes("-") && str.includes(" ")) {
    let result = str.toLowerCase().split(" ");
    let strCap;
    let newResult = [result[0]];
    for (let i = 1; i < result.length; i++) {
      strCap = result[i].charAt(0).toUpperCase() + result[i].slice(1);
      newResult.push(strCap);
    }
    return newResult.join("");
  } else if (
    (str.includes("-") && str.includes(" ")) ||
    (!str.includes("-") && !str.includes(" "))
  ) {
    console.log("Please enter correct string");
    return str
  }
}
console.log(camelCase(input3));

// Other solution //

// const input1 = "JavaScript coding ChAlLenge";
// const input2 = "JavaScript-coding-challenge";
// const input3 = "javaScriptCodingChallenge";

// function camelCase(str) {
//   const string = str.replace(/[\s-]/g, "/").toLowerCase().split("/");
//   console.log(string);
//   const result = [string[0]]
//   for (let i = 1; i < string.length; i++) {
//     let newString = string[i].charAt(0).toUpperCase() + string[i].slice(1);
//     result.push(newString);
//   }
//   return result.join("")
// }
// console.log(camelCase(input3));