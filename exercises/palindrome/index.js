// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    const strArr = str.split('');
    const length = str.length;
    var i = 0;
    var j = length - 1;
    while (i < j) {
        if (strArr[i] === strArr[j]) {
            ++i;
            --j;
            continue;
        } else {
            return false;
        }
    }
    return true;
}

module.exports = palindrome;
