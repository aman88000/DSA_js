const arr = [1,1,2,2,3,4,4,5,6,7,8,8, 9, 9]

// first way
// console.log((new Set(arr)).size)


//Note: Array should be sorted
function countUniqueNum(arr){
   if(arr.length){
        let i = 0;
        for(let j = 1; j<arr.length; j++){
            if(arr[i] !== arr[j]){
                i++ 
                arr[i] = arr[j]
            }
        }
        return i+1  // because we start i from 0
   }else{
    throw new Error('Array is Empty')
   }

}

console.log(countUniqueNum(arr))
// time complexity = Liner o(n)