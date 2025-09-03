const str = 'hello world'


    function maxOccuringCharInStr(str){
        const mapStr = {}
        let max = 1;
        let char;
        for(let c of str){
            // mapStr[c] = (mapStr[c] || 0)+1
            // mapStr[c] = mapStr[c]?mapStr[c]+1: 1
            if(c !== ' '){
                mapStr[c] = mapStr[c]?mapStr[c]+1: 1
            }
        }
        
        for(let k in mapStr){
            if(mapStr[k]> max){
                max = mapStr[k]
                char = k
            }
        }
        return char
    }

    console.log(maxOccuringCharInStr(str))