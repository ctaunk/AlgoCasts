// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    const strA = canonicalize(stringA);
    const strB = canonicalize(stringB);
    if (strA.length !== strB.length) {
        return false;
    }
    const chrMap = makeCharMap(strA);
    for (let ch of strB) {
        if (chrMap[ch]) {
            chrMap[ch]--;
            if (chrMap[ch] === 0) {
                chrMap.delete(ch);
            }
        } else {
            return false;
        }
    }
    return chrMap.size === 0;
}

function canonicalize(str) {
    const lowerStr = str.toLowerCase();
    var converted = '';
    for (let ch of str) {
        if (ch >= 'a' && ch <= 'z') {
            converted = converted + ch;
        }
    }
    return converted;
}

function makeCharMap(str) {
    const chrMap = new Map();
    for (let ch of str) {
        chrMap[ch] = chrMap[ch] + 1 || 1
    }
    return chrMap;
}

module.exports = anagrams;
