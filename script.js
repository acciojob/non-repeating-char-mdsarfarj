//your JS code here. If required.
function findFirstNonRepeatedCharacter(str) {
  // Create an object to store the frequency of each character
  const charFrequency = {};

  // Loop through each character in the string and count its frequency
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    charFrequency[char] = charFrequency[char] ? charFrequency[char] + 1 : 1;
  }

  // Find the first non-repeated character in the string
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (charFrequency[char] === 1) {
      return char; // Return the first non-repeated character found
    }
  }

  return null; // Return null if there is no non-repeated character
}

// Take input using prompt
const inputString = prompt("Enter a string:");
const firstNonRepeatedChar = findFirstNonRepeatedCharacter(inputString);

if (firstNonRepeatedChar) {
  alert("First non-repeated character: " + firstNonRepeatedChar);
} else {
  alert("No non-repeated character found.");
}
