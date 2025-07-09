const args = process.argv.slice(2);

const vowels = ["a", "e", "i", "o", "u"];

if (args.length !== 1) {
  console.error("Please enter a text inside quotations");
  return;
}

const inputText = args[0].trim();
words = inputText.split(" ");
vowels.push;
const newWords = words.map((word) => {
  const letters = word.split("");
  let capitalized = false;
  if (letters[0] === letters[0].toUpperCase()) {
    capitalized = true;
  }
  switch (true) {
    case vowels.includes(letters[0]):
      return word + "way";
    case !vowels.includes(letters[0]) && vowels.includes(letters[1]):
      let slice1 = letters.slice(1);
      if (capitalized) {
        slice1[0] = slice1[0].toUpperCase();
      }
      slice1.push(letters[0].toLowerCase());
      return slice1.join("") + "ay";
    case !vowels.includes(letters[0]) && !vowels.includes(letters[1]):
      let slice2 = letters.slice(2);
      if (capitalized) {
        slice2[0] = slice2[0].toUpperCase();
      }
      slice2.push(letters[0].toLowerCase(), letters[1]);
      return slice2.join("") + "ay";
    default:
      throw new Error("some words can not be converted");
  }
});
console.log(newWords.join(" "));
