const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const makeCaps = tutorials.map((tutorial) => {
  let counter = 0
  let newString = ""
  for(let letter in tutorial){
    if(letter == 0){
      newString += tutorial[letter].toUpperCase()
      counter++
    }
    else if(counter == 0){
      newString += tutorial[letter].toUpperCase()
      counter++
    }
    else if(tutorial[letter] == " "){
      newString += tutorial[letter]
      counter = 0
    }
    else{
      newString += tutorial[letter]
      counter++
    }
  }

  return newString
})


function titleCased(){
  return makeCaps
}