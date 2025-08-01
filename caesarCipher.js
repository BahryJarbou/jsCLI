const args = process.argv.slice(2);

const alphabet = {
  a: 0,
  b: 1,
  c: 2,
  d: 3,
  e: 4,
  f: 5,
  g: 6,
  h: 7,
  i: 8,
  j: 9,
  k: 10,
  l: 11,
  m: 12,
  n: 13,
  o: 14,
  p: 15,
  q: 16,
  r: 17,
  s: 18,
  t: 19,
  u: 20,
  v: 21,
  w: 22,
  x: 23,
  y: 24,
  z: 25,
};

const alphabetIndex = {
  0: "a",
  1: "b",
  2: "c",
  3: "d",
  4: "e",
  5: "f",
  6: "g",
  7: "h",
  8: "i",
  9: "j",
  10: "k",
  11: "l",
  12: "m",
  13: "n",
  14: "o",
  15: "p",
  16: "q",
  17: "r",
  18: "s",
  19: "t",
  20: "u",
  21: "v",
  22: "w",
  23: "x",
  24: "y",
  25: "z",
};

if (args.length !== 2) {
  console.error("Please enter a text inside quotations followed by a number");
  return;
}

text = args[0];
shift = args[1];
words = text.trim().split(" ");
const cihperdWords = words.map((word) => {
  const capitalizedIndices = word
    .split("")
    .map((char) => char === char.toUpperCase());
  letters = word.toLowerCase().split("");
  const lettersCiphered = letters.map((letter) => {
    const index = (Number(alphabet[letter]) + Number(shift)) % 26;
    return alphabetIndex[index];
  });
  for (let i = 0; i < capitalizedIndices.length; i++) {
    if (capitalizedIndices[i]) {
      lettersCiphered[i] = lettersCiphered[i].toUpperCase();
    }
  }
  return lettersCiphered.join("");
});
console.log(cihperdWords.join(" "));
