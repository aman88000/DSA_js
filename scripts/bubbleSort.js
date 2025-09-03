// const arr = [1,4,7,5,9,2,6,3,8]
const arr = [8,1,2,3,4,5,6,7,9,10]

function bubbleSort(arr){
    if(arr.length === 0){
        return false
    }
    for(let i = arr.length; i > 0 ; i--){
        let isSwaped = false;
        for(let j = 0; j<i-1; j++){
            console.log('j-', j, 'j+1-', j+1)
            if(arr[j]> arr[j+1]){
                [arr[j], arr[j+1]]= [arr[j+1], arr[j]]
                isSwaped = true
            }
        }
        // in this case after second loop that will be break,
        //because we have set flag if swap not done,
        // it means now array sorted already no need to check now and come out from loop
        if(!isSwaped){
            break;   
        }
    }
    return arr
}

console.log(bubbleSort(arr))