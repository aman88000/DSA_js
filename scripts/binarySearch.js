const arr = [1,2,4,6,7,8,10,11,13,14];

// divide and conquerer rule 
const num = 7

function binarySearch(arr, num){
    let min = 0;
    let max = arr.length-1;
    while(min <=max){
        let midIndex = Math.floor((min+max)/2);
        if(arr[midIndex] < num){
            min = midIndex+1
        }else if(arr[midIndex] > num){
            max = midIndex -1
        }else{
            return midIndex
        }
    }
    return 'num not found or -1'
}


console.log(binarySearch(arr, num))
// time complexity = binary o(log(n))