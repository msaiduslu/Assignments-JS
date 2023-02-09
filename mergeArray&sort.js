array1 = [12,14,15]
array2=[11,13,17]

const mergeArrays = (array1,array2) =>{

  if (array1 === []){
    return array2.sort((a,b) => (a+b))
  }else if(array2===[]){
    return array1.sort((a,b) => (a+b))
  }else if(array1 === [] && array2===[]){
    return "Arrays are empty"
  }else{
    let arrayMerge=[]
    array1.map((add) => arrayMerge.push(add))
    array2.map((add) => arrayMerge.push(add))
    return arrayMerge.sort((a,b)=>(a-b))
  }

}
console.log(mergeArrays(array1,array2));