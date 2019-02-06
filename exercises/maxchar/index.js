// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const charMap = new Map();
    str.split('').forEach(element => {
        if (charMap.has(element)) {
            charMap.set(element, charMap.get(element) + 1);
        } else {
            charMap.set(element, 1);
        }
    });
    var maxChar;
    var maxOccurence = 0;
    charMap.forEach( (value, key) => {
        if (value > maxOccurence) {
            maxOccurence = value;
            maxChar = key;
        }
    });
    return maxChar;
}

module.exports = maxChar;
