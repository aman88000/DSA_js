const arrNum = [1,3,4,5,6,7,9]

console.log(arrNum.indexOf(5))
console.log(arrNum.indexOf(5))   // return index or -1

console.log(arrNum.includes(5))   // return true or false

const users = [
    { name: "Alice", age: 28, city: "New York", email: "alice@example.com" },
    { name: "Bob", age: 34, city: "Los Angeles", email: "bob@example.com" },
    { name: "Charlie", age: 22, city: "Chicago", email: "charlie@example.com" },
    { name: "David", age: 30, city: "Houston", email: "david@example.com" },
    { name: "Eva", age: 26, city: "Phoenix", email: "eva@example.com" },
    { name: "Frank", age: 40, city: "Philadelphia", email: "frank@example.com" },
    { name: "Grace", age: 29, city: "San Antonio", email: "grace@example.com" },
    { name: "Hank", age: 35, city: "San Diego", email: "hank@example.com" },
    { name: "Ivy", age: 27, city: "Dallas", email: "ivy@example.com" },
    { name: "Jack", age: 31, city: "San Jose", email: "jack@example.com" }
];

console.log(users.findIndex((itm)=>itm.name==='Eva'))  // return index, its using callback function
console.log(users.find((itm)=>itm.name === 'Eva'))    // return that object 
console.log((users.filter((itm)=> itm.name === 'Eva'))[0]) // return array of match result



function findUser(arr, user){
    if(arr.length === 0){
        return false
    }
    for(let i =0; i<arr.length; i++){
        if(arr[i].name === user){
            // return arr[i]  /// full object return
            // return i // only index return

            return true 
        }
    }
}
console.log(findUser(users, 'Eva'))