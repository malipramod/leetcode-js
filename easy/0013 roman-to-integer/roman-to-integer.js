/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    let result = 0;
    //Slower Approach -- 136ms
    // let romanIntMap = new Map();
    // romanIntMap.set('I',1);
    // romanIntMap.set('V',5);
    // romanIntMap.set('X',10);
    // romanIntMap.set('L',50);
    // romanIntMap.set('C',100);
    // romanIntMap.set('D',500);
    // romanIntMap.set('M',1000);

    //Fastest - 116ms
    let romanIntMap = {
       'I':1,
       'V':5,
       'X':10,
       'L':50,
       'C':100,
       'D':500,
       'M':1000,        
    }

    for (let i = 0; i < s.length; i++) {
        let s1 = romanIntMap[s[i]];
        if (i + 1 < s.length) {
            let s2 = romanIntMap[s[i + 1]];
            if (s1 >= s2) {
                result += s1;
            } else {
                result = result + s2 - s1;
                i++;
            }
        } else {
            result += s1;
            i++;
        }
    }
    return result;
};

//Slower Approach -- 132ms
var getRomalValues = function (char) {
    switch (char) {
        case 'I':
            return 1;
        case 'V':
            return 5;
        case 'X':
            return 10;
        case 'L':
            return 50;
        case 'C':
            return 100;
        case 'D':
            return 500;
        case 'M':
            return 1000;
        default:
            return -1;
    }
}

console.log(romanToInt('MCMXCIV'))