function PigLatin(word) {
  const AY = "ay";
  const vowels = ["a", "e", "i", "o", "u"];
  const arrayWord = word.split("")
  
  const idx = arrayWord.indexOf(arrayWord.find(letter => vowels.indexOf(letter) > -1))
  
  const first = arrayWord.slice(idx)
  const second = arrayWord.slice(0,idx)
  
  return first.concat(second).join('') + AY
}
