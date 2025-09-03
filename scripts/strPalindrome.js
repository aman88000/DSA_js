const str = "aman";

//palindronm string
// dad
// noon
// level

function checkStrPalindrome(str) {
    let revStr = "";
    if (typeof str === "number") {
        str = str.toString();
    }

    for (let i = str.length - 1; i >= 0; i--) {
        revStr += str.charAt(i);
    }
    return str === revStr 
}

console.log(checkStrPalindrome(str));




const str2 = 'level';
function checkStrPal(str){
    let left = 0;
    let right = str.length-1

    while(left < right){
        if(str[left] !== str[right]){
            return false
        }
        left++
        right--

    }
    return true
}

console.log(checkStrPal(str2))
