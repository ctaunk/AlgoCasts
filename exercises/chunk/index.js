// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    const result = [];
    var chunk = [];
    var chunkStartPos = 0;
    array.forEach( (element, index) => {
        chunk.push(element);
        if ((index - chunkStartPos + 1) === size) {
            result.push(chunk);
            chunk = [];
            chunkStartPos = index + 1; 
        }
    });
    if (chunk.length > 0) {
        result.push(chunk);
    }
    return result;
}

module.exports = chunk;
