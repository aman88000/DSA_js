const arr = [1,2,3,4,5,6,7,8,9,10];
const oddArr = []

function oddNum(arr){
for(let i = 0; i <arr.length; i++){
    if(arr[i]%2 !==0){
        oddArr.push(arr[i])
    }
}
return oddArr
}

console.log(oddNum(arr))