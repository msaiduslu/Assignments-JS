//------------------------- 2. Bir dizideki tüm elemanların ortalamasını hesaplayan bir JavaScript fonksiyonu yazın. -----------------------------//
//------------------------------------------Test Verisi: console.log(average([1,2,3,4,5])); ------------------------------------------------------//

function average(arr) {
  let result = arr.reduce((a, b) => a + b) / arr.length;
  return result;
}

console.log(average([1, 2, 3, 4, 5]));


