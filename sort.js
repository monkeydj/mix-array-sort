const LETTERS_REGEX = /^[A-Za-z]+$/; // any string contains only letters
const SPECIAL_CHARS_REGEX = /^[^\w]+$/; // any string contains only non-alphanumeric characters
const NUMBERS_REGEX = /^\d+$/;

if (require.main === module) {

    console.log(sortMixedArray([5, 3, 2, 4]));
    console.log(sortMixedArray([1, 2, 3, 'a', 'B']));
    console.log(sortMixedArray(["ax", "mof", "4", "63", "42", "3", "10", "[", "23", "adidas", "ba", ")", "ABC"]));

    return; // end of module direct run

}

module.exports = sortMixedArray;

function sortMixedArray(arr = []) {
    return arr.filter(isAllowedFormat).sort(compareMixedFormats);
}

// check if a value is in "allowed" format
function isAllowedFormat(val) {
    return NUMBERS_REGEX.test(val) || LETTERS_REGEX.test(val) || SPECIAL_CHARS_REGEX.test(val);
}

function compareMixedFormats(a = '', b = '') {

    var bIsNumber = NUMBERS_REGEX.test(b);
    // if both are numbers then compare by their numeric values
    // otherwise, 'a' is always placed before 'b'
    if (NUMBERS_REGEX.test(a)) return bIsNumber ? a - b : -1;
    // value of only special chars must be placed last
    if (SPECIAL_CHARS_REGEX.test(a) && (LETTERS_REGEX.test(b) || bIsNumber)) return 1;

    if (LETTERS_REGEX.test(a)) {
        if (bIsNumber) return 1;
        if (SPECIAL_CHARS_REGEX.test(b)) return -1;
    }
    // else, both 'a' & 'b' are either letters-only or special chars-only
    return a < b ? -1 : a > b; // in JS, strings are compared by their ASCII values

}
