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

// filter out values containing mixed characters
function isAllowedFormat(val) {
    return NUMBERS_REGEX.test(val) ||  LETTERS_REGEX.test(val) || SPECIAL_CHARS_REGEX.test(val);
}

function compareMixedFormats(a = '', b = '') {

    if (SPECIAL_CHARS_REGEX.test(b)) {

        if (LETTERS_REGEX.test(a) || NUMBERS_REGEX.test(a)) return -1;

    } else if (LETTERS_REGEX.test(b)) {

        if (SPECIAL_CHARS_REGEX.test(a)) return 1;
        if (NUMBERS_REGEX.test(a)) return -1;

    } else if (NUMBERS_REGEX.test(b)) {

        if (SPECIAL_CHARS_REGEX.test(a) || LETTERS_REGEX.test(a)) return 1;
        // if both are numbers, they would be compared by their numeric values
        if (NUMBERS_REGEX.test(a)) return a - b;

    }
    // in JS, string values can be compared against each other by their ASCII values
    return a < b ? -1 : a > b;

}
