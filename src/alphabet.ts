const UpperAlphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const LowerAlphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

function getRandom_One_UpperAlphabet() {
  const randomIdx = Math.floor(Math.random() * UpperAlphabet.length);
  return UpperAlphabet[randomIdx];
}

function getRandom_One_LowerAlphabet() {
  const randomIdx = Math.floor(Math.random() * LowerAlphabet.length);
  return LowerAlphabet[randomIdx];
}

export { getRandom_One_LowerAlphabet, getRandom_One_UpperAlphabet };
