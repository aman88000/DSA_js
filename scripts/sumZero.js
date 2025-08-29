const arr = [-5,-4,-3,2,0,2,4,6,8];
// arr should be sorted



function sumPairZero(arr){
    for(let i = 0; i <arr.length; i++){

        for(let j = i+1; j <arr.length; j++){
            if(arr[i]+arr[j] === 0){
                return [arr[i], arr[j]]
            }
        }
    }
}
console.log(sumPairZero(arr));
// time complexity = quardratic o(n^2)



function sumPairZero1(arr){
    let leftPointer = 0
    let rightPointer = arr.length-1

    for(let i = leftPointer; i <= rightPointer; i++){
        if(arr[leftPointer] + arr[rightPointer] > 0){
            rightPointer -= 1
        }else if(arr[leftPointer]+ arr[rightPointer] < 0){
            leftPointer += 1
        }else{
            return [arr[leftPointer], arr[rightPointer]]
        }
        
    }
    return 'no pair found'

}

console.log(sumPairZero1(arr))
// time complexity = Liner o(n)




//using while loop
function sumPairZero3(arr){
    let leftPointer = 0
    let rightPointer = arr.length-1

    while(leftPointer < rightPointer){
      let  sum = arr[leftPointer]+ arr[rightPointer]
      if(sum === 0){
        return [arr[leftPointer], arr[rightPointer]]
      }else if(sum > 0){
        rightPointer--
      }else{
        leftPointer++
      }
    }
    return 'no pair found'

}

console.log(sumPairZero3(arr))
// time complexity = Liner o(n)

