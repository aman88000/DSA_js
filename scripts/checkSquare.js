const arr1 = [1,2,3,4];
const arr2 = [1,9,4,16]


// function checkSquare(arr1, arr2){
//     for(let i =0; i < arr1.length; i++){
//         let isSquare = false 

//         for(let j =0; j < arr2.length; j++){
//             if(arr1[i] * arr1[i] === arr2[j]){
//                 isSquare = true
//             } 
//             if(j === arr2.length-1){
//                 if(!isSquare){
//                     return false
//                 }
//             }

//         }
//     }
//     return true
// }

// console.log(checkSquare(arr1, arr2))
// time complexity = quardratic o(n^2)


function checkSquare(arr1, arr2){
    let map1 = {}
    let map2 = {}

    for(let itm1 of arr1){
        map1[itm1] =  (map1[itm1] || 0) + 1
    }

    for(let itm2 of arr2){
        map2[itm2] = (map2[itm2] || 0) + 1
    }

    for(let key in map1){
        if(!map2[key * key]){
            return false
        }
        if(map1[key] !== map2[key * key]){
            return false
        }
    }
    return true

}


console.log(checkSquare(arr1, arr2))
// time complexity = Liner o(n)



