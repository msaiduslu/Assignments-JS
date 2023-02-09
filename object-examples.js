const personel = {
  name : "can",
  surname : "Canan",
  dob: "1990",
  salary : 10000,
  job : "developer",
  drivingLicence : false,
  calculateAge: function () {
    return new Date().getFullYear() - this.dob

  }
}

console.log(personel.dob);
console.log(personel.calculateAge());

let fullStack = {
  languages: ["JavaScript", "React", "HTML"],
  jira: true,
  gitHub: true,
  difficulty: 8,
}

fullStack.languages.forEach((i)=> console.log(i))

for(let i=0; i<fullStack.languages.length;i++){
  console.log(fullStack.languages[i]);
}

Object.keys(fullStack).forEach((i)=>console.log(i))

for(let keys in fullStack){
  console.log(keys);
}

const myCar = {
  make : 'ford',
  model : 'Mustang',
  year : 1965,
  color : 'Black',
  age : function(current){
    console.log(current - this.year)
  }
}

function carAge(age){

console.log(age-this.year);

}

carAge(2023)


// const data = ['C1234 - John Doe, London, Full-Stack',
// 'C2345 - Jane Doe, London, Data-Science',
// 'C2346 - Mary Ann, Paris, AWS-Devops',
// 'C2347 - Adam Smith, Texas, AWS-Devops',
// 'C2444 - Michael Great, Arizona, Full-Stack',
// 'C2555 - William Cash, Manchester, Data-Science',
// 'C2455 - Patrick Jane, Madrid, Full-Stack']

// const row = data.map((a)=> a.split(","))
// const newRow = row.map((i)=>{
//   let names = i[0].split("-")
//   let names1 = [names[0].trim(),names[1].trim()]
//   let names2 = names1[1].split(" ")
//   let result = [names1[0],...names2,i[1].trim(),i[2].trim()]
//   return result
// })

// const newObj = newRow.map((i)=>{
//      let innerObj = { "St Nr":i[0],
//      "First Name": i[1],
//      "Last Name":i[2],
//      "Location":i[3],
//      "Path":i[4],}
//      return innerObj
// })

// console.log(typeof(newObj));