const CHARS_REGEX = /^[A-Za-z]+$/; // any string starts with a letter
const SPECIAL_CHARS_REGEX = /^[^\w]+$/; // any string starts with a non-alphanumeric characters
const NUMBERS_REGEX = /^\d+$/;

function sortMixedArray(arr = []) {

    var strArr = arr.filter((value) => CHARS_REGEX.test(value));
    var scArr = arr.filter((value) => SPECIAL_CHARS_REGEX.test(value));
    var numArr = arr.filter((value) => NUMBERS_REGEX.test(value))

    return [
        ...numArr.sort((a, b) => a - b),
        ...strArr.sort(compareByASCII),
        ...scArr.sort(compareByASCII)
    ];

}

function compareByASCII(str1 = '', str2 = '') {
    
    for (let i = 0, len = str1.length; i < len; i++) { 

        let c1 = str1.charCodeAt(i), c2 = str2.charCodeAt(i);
        
        if (c1 !== c2) return c1 - c2;

    }

    return 0;

}


if (require.main === module) {

    console.log(sortMixedArray([5, 3, 2, 4]));
    console.log(sortMixedArray([1, 2, 3, 'a', 'B']));
    console.log(sortMixedArray(["ax", "mof", "4", "63", "42", "3", "10", "[", "23", "adidas", "ba", ")", "ABC"]));

} else module.exports = sortMixedArray;