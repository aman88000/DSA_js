const arr = [1,4,7,5,9,2,6,3,8]

// function insertionSort(arr){
//     if(arr.length === 0){
//         return false
//     }
//     for(let i=0; i<arr.length; i++){
//         let min = i
//         // let temp;

//         for(let j=i+1; j<arr.length; j++){
//             if(arr[j] < arr[i]){
//                 min = j
//             }
//         }
//         // temp = arr[i]
//         // arr[i] = arr[min]
//         // arr[min] = temp
//         [arr[i], arr[min]]= [arr[min], arr[i]]
//     }
//     return arr
// }

// console.log(insertionSort(arr))




function insertionSort2ndElement(arr){
    if(arr.length === 0){
        return false
    }
    for(let i =1; i<arr.length; i++){
        let curr = arr[i]
        let j = i-1
        while(j>=0 && arr[j]>curr){
            arr[j+1] = arr[j]
            j--
        }
        arr[j+1] = curr
    }
    return arr
}

console.log(insertionSort2ndElement(arr))