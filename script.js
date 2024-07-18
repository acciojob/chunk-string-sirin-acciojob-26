function chunkString(str, chunkLength) {
    // If the input string is null, return an empty array
    if (str === null) {
        return [];
    }

    // Initialize an array to hold the chunks
    const chunks = [];

    // Loop through the string, slicing chunks of the specified length
    for (let i = 0; i < str.length; i += chunkLength) {
        chunks.push(str.substring(i, i + chunkLength));
    }

    // Return the array of chunks
    return chunks;
}

// Test cases
console.log(chunkString("Hello, world!", 5)); // Output: ["Hello", ", wor", "ld!"]
console.log(chunkString("12345", 2));         // Output: ["12", "34", "5"]
console.log(chunkString("abc", 5));           // Output: ["abc"]
console.log(chunkString(null, 3));            // Output: []

