// first check length of both string otherwise return false 
// 




const str1 = 'hello'
const str2 = 'llheo'

// const arr1 = str1.split('')
// const mapStr1 =  arr1.reduce((acc, curr)=>{
//         if(acc[curr]){
//             acc[curr] = acc[curr]+ 1
//         }else{
//             acc[curr] = 1
//         }
//         return acc
// }, {})
// console.log(mapStr1)


function checkStringAnagram(str1, str2){
    if(str1.length !== str2.length){
        return false
    }
    let counter = {}
    for(let itm of str1){
        counter[itm] = ( counter[itm] || 0 ) + 1
    }
   console.log(counter)

   for(let val of str2){
    if(!counter[val]){
        return false
    }
    counter[val] -= 1
   }
   return true
}

console.log(checkStringAnagram(str1, str2))

// time complexity = Liner o(n)