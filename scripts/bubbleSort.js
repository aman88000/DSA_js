const arr = [1,4,7,5,9,2,6,3,8]

function bubbleSort(arr){
    if(arr.length === 0){
        return false
    }
    for(let i = arr.length; i > 0 ; i--){
        for(let j = 0; j<i-1; j++){
            console.log('j-', j, 'j+1-', j+1)
            if(arr[j]> arr[j+1]){
                [arr[j], arr[j+1]]= [arr[j+1], arr[j]]
            }
        }
    }
    return arr
}

console.log(bubbleSort(arr))