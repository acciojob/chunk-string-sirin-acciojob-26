function chunkString(str, chunkLength) {
    // If the input string is null, return an empty array
    if (str === null) {
        return [];
    }

    // Initialize an array to hold the chunks
    const chunks = [];

    // Loop through the string, slicing chunks of the specified length
    for (let i = 0; i < str.length; i += chunkLength) {
        chunks.push(str.slice(i, i + chunkLength));
    }

    // Return the array of chunks
    return chunks;
}
// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
