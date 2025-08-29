const arr = [1,2,3,4,3,5,4,6,7,8];
const num = 4

// length will be Array.length - num + 1   eg 10-4 + 1 = 7 loop will work upto 7 max outer log


function findlargestSum(arr, num){
   if(num > arr.length){
    throw new Error('num is not greater than array length')
   }else{
    let max = 0;
    for(let i =0; i <arr.length-num + 1; i++){
        let temp = 0;
        for(let j = 0; j < num; j++){
            temp+= arr[i+j]
        }
        if(temp > max){
            max = temp
        }
    }
    return max
   }
}

console.log(findlargestSum(arr, num))