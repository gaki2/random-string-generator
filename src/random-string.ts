import { getRandom_One_UpperAlphabet } from "./alphabet";

function generateRandomString(numOfCharacters: number) {
  if (numOfCharacters < 1) {
    throw new Error("parameter must be integer bigger than 0");
  }
  let ret = "";
  for (let i = 0; i < numOfCharacters; i += 1) {
    ret += getRandom_One_UpperAlphabet();
  }

  return ret;
}
