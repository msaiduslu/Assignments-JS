const totalNum = Number(prompt("how many number do you wanna add:"))
let result = 0
for(let i = 1 ; i<=totalNum ; i++){
    num = Number(prompt("add number:"))
    result += num
    console.log(`${i}. number is ${num} and total:${result}`);
 }
 console.log(`Average is : ${result} / ${totalNum} = ${result/totalNum}`);