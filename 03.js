function isValid(letter) {
  
 const invalidCaracters = ['{', '}', '[', ']'];
 let valid = true;
  
  for(let invalidCaracter of invalidCaracters) {
    const invalid = letter.includes(invalidCaracter)
    
    if(invalid) {
      valid = false;
      return valid;
    }
  }
  
  const words = letter.split(" ")
  console.log(words)
  for(let word of words) {
    console.log(word)
    if(word[0] === '(' || word[word.length-1] === ')') {
      console.log("aca")
      if(word[0] === '(' && word[word.length-1] === ')' && word.length > 2) {
        console.log("its ok")
        
        const sliced = word.slice(1, word.length-1)
        console.log("sliced", sliced)
        
        if(sliced.includes('(') || sliced.includes(')') ) {
            valid = false;
            return valid;
        }
        
        
      } else {
        valid = false
        return valid
      }
    } else {
        if(word.includes('(') || word.includes('(')) return false
    }
  }
  
  return valid
}

const string = ')bici( casa play'
console.log(isValid(string))