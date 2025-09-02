const arr = [1,4,5,6,9,0,2,10,-1,7,3, 8, 0];


function isSort(arr){
for(let i = 0; i <arr.length; i++){
    if(arr[i] > arr[i+1]){
    console.log(i)
     return false
    }
}
return true
}
//console.log(isSort(arr))

let i = 0;
let j = 1;
function sorting(arr){
    if(isSort(arr)){
        return arr
    } else if(arr[i] < arr[j]){
        i++
        j++
        sorting(arr)
        isSort(arr)
    }else{
        [arr[i], arr[j]] = [arr[j], arr[i]]
        i = 0;
        j = 1
        sorting(arr)
        isSort(arr)
    }
    return arr
}
// sorting(arr)
console.log(sorting(arr))

