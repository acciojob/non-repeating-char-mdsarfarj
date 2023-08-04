function firstNonRepeatedCharacter(inputString) {
  const charCount = {};

  // Count occurrences of each character
  for (const char of inputString) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Find the first non-repeated character
  for (const char of inputString) {
    if (charCount[char] === 1) {
      return char; // Return the first non-repeated character found
    }
  }

  return null; // Return null if there is no non-repeated character
}

// Get user input using prompt
const userInput = prompt("Enter a string:");

if (userInput !== null) {
  const result = firstNonRepeatedCharacter(userInput);
  if (result !== null) {
    alert(result);
  } else {
    alert("No non-repeated character found");
  }
} else {
  alert("No input provided");
}
