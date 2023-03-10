//-----------------------------------------------------Object Practices-------------------------------------------------------//

const carData = [
  {
    id: 1,
    make: "Toyota",
    model: "Camry",
    year: 2020,
    color: "Silver",
    mileage: 25000,
    engine: {
      type: "V6",
      horsepower: 300,
      cylinders: 6,
    },
  },
  {
    id: 2,
    make: "Honda",
    model: "Accord",
    year: 2019,
    color: "White",
    mileage: 20000,
    engine: {
      type: "V4",
      horsepower: 140,
      cylinders: 4,
    },
  },
  {
    id: 3,
    make: "Ford",
    model: "Mustang",
    year: 2018,
    color: "Red",
    mileage: 15000,
    engine: {
      type: "V8",
      horsepower: 400,
      cylinders: 8,
    },
  },
  {
    id: 4,
    make: "Chevrolet",
    model: "Camaro",
    year: 2017,
    color: "Black",
    mileage: 10000,
    engine: {
      type: "V4",
      horsepower: 200,
      cylinders: 4,
    },
  },
  {
    id: 5,
    make: "Dodge",
    model: "Challenger",
    year: 2016,
    color: "Blue",
    mileage: 5000,
    engine: {
      type: "V6",
      horsepower: 250,
      cylinders: 6,
    },
  },
  {
    id: 6,
    make: "BMW",
    model: "3 Series",
    year: 2015,
    color: "Silver",
    mileage: 35000,
    engine: {
      type: "V8",
      horsepower: 400,
      cylinders: 8,
    },
  },
  {
    id: 7,
    make: "Audi",
    model: "A4",
    year: 2014,
    color: "Black",
    mileage: 30000,
    engine: {
      type: "V4",
      horsepower: 220,
      cylinders: 4,
    },
  },
  {
    id: 8,
    make: "Mercedes-Benz",
    model: "C-Class",
    year: 2013,
    color: "White",
    mileage: 25000,
    engine: {
      type: "V6",
      horsepower: 280,
      cylinders: 6,
    },
  },
  {
    id: 9,
    make: "Volkswagen",
    model: "Golf",
    year: 2012,
    color: "Red",
    mileage: 20000,
    engine: {
      type: "V4",
      horsepower: 180,
      cylinders: 4,
    },
  },
  {
    id: 10,
    make: "Tesla",
    model: "Model S",
    year: 2011,
    color: "Silver",
    mileage: 15000,
    engine: {
      type: "V4",
      horsepower: 260,
      cylinders: 4,
    },
  },
];
//--------------------------------------------------- 1- Rengi g??m???? olan arabalar?? bir listeye ata.--------------------------------------------------------//

// const silverCars = carData.filter((cars)=> cars.color == "Silver")
// console.log(silverCars);

//---------------------------------------------- 2- 2015 y??l??ndan sonra ??retilmi?? arabalar?? bir listeye ata.------------------------------------------------//

// const newerCars = carData.filter((cars)=> cars.year > 2015)
// console.log(newerCars);

//--------------------------------------------------- 3- Arabalar??n ortalama kilometre de??erini hesapla.----------------------------------------------------//

// const averageKm = carData.reduce((acc,km)=> acc += km.mileage, 0)/carData.length
// console.log(averageKm);

//--------------------------------------------------------- 4- 8 silindirli ara??lar?? listele------------------------------------------------------------//

// const cylinders = carData.filter((cars)=> {
// return cars.engine.cylinders == 4 || cars.engine.cylinders == 8
// })
// console.log(cylinders);

//----------------------------5- Farkl?? uzunlukta olmas?? muhtemel iki listeden ??lki key'lerden, ikincisi ise Value'lardan olu??maktad??r.-------------------------------//
//----------------------------Yine key ve value'lardan olu??an bir obje d??nd??ren bir fonksiyon yaz??n??z. Yeterli value yoksa, kalan keylerin de??eri null olmal??d??r. ----//
//----------------------------Yeterli anahtar yoksa, de??erlerin geri kalan??n?? yok say??n.------------------------------------------------------------------------------//
// keys = ['a', 'b', 'c', 'd']
// values = [1, 2, 3]
// createDict(keys, values) // returns {'a': 1, 'b': 2, 'c': 3, 'd': null}

// keys = ['a', 'b', 'c', 'd']
// values = [1, 2, 3]

// function createDict(){
//   let result ={}
// keys.map((key,i)=> result[key] = values[i] || null)
// return result
// }
// console.log(createDict(keys));

// --------------------------6- Bir obje i??erisindeki key ve value'lar?? de??i??tirin. Yani key'ler value'lar olmal?? ve value'lar key'ler olmal??d??r.------------------------//
// ??rnek: {a: 1, b: 2, c: 3}  -->  {1: 'a', 2: 'b', 3: 'c'}
// Not: E??er bir value birden fazla key'e sahipse, son key'i kullan??n.

// const obj = {a: 1, b: 2, c: 3}
// function reverseDict(obj) {
//   let newObj = {}
//   for (let key in obj){
//     newObj[obj[key]] = key
//   }
//   return newObj
// }
// console.log(reverseDict(obj));

//----------------------------- Size baz?? dilleri ve verilen dillerdeki test sonu??lar??n??z?? i??eren bir dictionarj obj verilir.-------------------------------------//
// ------------------------------Test puan??n??z??n en az 60 oldu??u dillerin listesini sonu??lar??n azalan s??ras??na g??re d??nd??r??n.-------------------------------------//
// --------------------------------Not: puanlar her zaman benzersiz olacakt??r (bu nedenle yinelenen de??erler olmayacakt??r)----------------------------------------//
// ??rnekler
// {"Java": 10, "Ruby": 80, "Python": 65}    -->  ["Ruby", "Python"]
// {"Hindi": 60, "Dutch" : 93, "Greek": 71}  -->  ["Dutch", "Greek", "Hindi"]
// {"C++": 50, "ASM": 10, "Haskell": 20}     -->  []
//

// let lang = { Java: 10, Ruby: 80, Python: 65 };

// function myLanguages() {
//   return Object.entries(lang)
//     .filter(([k, v]) => v >= 60)
//     .sort(([k1, v1], [k2, v2]) => v2 - v1)
//     .map(([k, v]) => k);
// }

// console.log(myLanguages(lang));



