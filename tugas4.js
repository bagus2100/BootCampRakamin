let array = []
let arrGanjil = []
let maxGanjil = []
let minGanjil = []
let avgGanjil = 0
let totGanjil = 0

let arrGenap = []
let maxGenap = []
let minGenap = []
let avgGenap = 0
let totGenap = 0

for(let i= 0; i<100; i++){
    array.push(Math.floor(Math.random()*50));
}
console.log(array)

for(let i = 0; i< array.length; i++){
    if(i % 2 == 0){
        arrGenap.push(array[i])
    }else{
        arrGanjil.push(array[i])
    }
}
console.log("Array Ganjil")
console.log(arrGanjil)
console.log("Array Genap")
console.log(arrGenap)

// Max dan Min

function cariMax(arr){
    max = arr[0]
    for(let i = 0; i < arr.length; i++){
        if(max < arr[i]){
            max = arr[i]
        }
    }
    return max
}

function cariMin(arr){
    min = arr[0]
    for(let i = 0; i < arr.length; i++){
        if(min > arr[i]){
            min = arr[i]
        }
    }
    return min
}

function cariTotal(arr){
    total = 0
    for (let i =0; i < arr.length; i++){
        total += arr[i]
    }
    return total
}

function cariAVG(arr){
    avg = 0
    total = 0
    for (let i =0; i < arr.length; i++){
        total += arr[i]
    }
    avg = total / arr.length
    return avg
}

function cariSemuaHasil(arr){
    result =[]
    max = arr[0]
    min = arr[0]
    total = 0
    avg = 0
    for(let i =0; i < arr.length; i++){
        if(max < arr[i]){
            max = arr[i]
        }
        if(min > arr[i]){
            min = arr[i]
        }
        total += arr[i]
    }
    avg = total / arr.length
    result.push(min)
    result.push(max)
    result.push(total)
    result.push(avg)
    return result
}
console.log("Max")
console.log(cariMax(arrGanjil))
console.log(cariMax(arrGenap))
console.log("Min")
console.log(cariMin(arrGanjil))
console.log(cariMin(arrGenap))
console.log("Total")
console.log(cariTotal(arrGanjil))
console.log(cariTotal(arrGenap))
console.log("AVG")
console.log(cariAVG(arrGanjil))
console.log(cariAVG(arrGenap))
console.log("Semua Hasil Analisi")
console.log(cariSemuaHasil(arrGanjil))
console.log(cariSemuaHasil(arrGenap))

// for (let i = 0; i <50; i++){
//      maxGanjil = arrGanjil [0]
//      minGanjil = arrGanjil [0]
//      maxGenap = arrGenap [0]
//      minGenap = arrGenap [0]

//      if(minGanjil > arrGanjil[i]){
//         minGanjil = arrGanjil[i]
//      }
//      if(minGenap > arrGenap[i]){
//         minGenap = arrGenap[i]
//      }
//      if(maxGanjil < arrGanjil[i]){
//         maxGanjil = arrGanjil[i]
//      }
//      if(maxGenap < arrGenap[i]){
//         maxGenap = arrGenap[i]
//      }
//      totGanjil += arrGanjil[i]
//      totGenap += arrGenap[i]
// }
// avgGanjil = totGanjil / arrGanjil.length
// avgGenap = totGenap / arrGenap.length

// console.log("Hasil Data Ganjil")
// console.log("Min " + minGanjil)
// console.log("Max " + maxGanjil)
// console.log("Total " + totGanjil)
// console.log("AVG " + avgGanjil)

// console.log("Hasil Data Genap")
// console.log("Min " + minGenap)
// console.log("Max " + maxGenap)
// console.log("Total " + totGenap)
// console.log("AVG " + avgGenap)

if(cariMax(arrGanjil) > cariMax(arrGenap)){
    console.log("Max Ganjil lebih besar dari Max Genap")
}else if(cariMax(arrGanjil) < cariMax(arrGenap)){
    console.log("Max Genap lebih besar dari Max Ganjil")
}else{
    console.log("Max Pada Kedua Array sama")
}

if(cariMin(arrGanjil) > cariMin(arrGenap)){
    console.log("Min Ganjil lebih besar dari Min Genap")
}else if(cariMin(arrGanjil) < cariMin(arrGenap)){
    console.log("Min Genap lebih besar dari Min Ganjil")
}else{
    console.log("Min Pada Kedua Array sama")
}

if(cariTotal(arrGanjil) > cariTotal(arrGenap)){
    console.log("Total Ganjil lebih besar dari Total Genap")
}else if(cariTotal(arrGanjil) < cariTotal(arrGenap)){
    console.log("Total Genap lebih besar dari Total Ganjil")
}else{
    console.log("Total Pada Kedua Array sama")
}

if(cariAVG(arrGanjil) > cariAVG(arrGenap)){
    console.log("AVG Ganjil lebih besar dari AVG Genap")
}else if(cariAVG(arrGanjil) < cariAVG(arrGenap)){
    console.log("AVG Genap lebih besar dari AVG Ganjil")
}else{
    console.log("AVG Pada Kedua Array sama")
}