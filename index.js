// f  declaration + f name (identifier) and params in() defines 
function dwarfRollCall(dwarves) {
  var dwarfnames = [];
  //f expression IIFE  forEach arr method executes on each el   + concats var statements
  dwarves.forEach(function(names, i) {
    dwarfnames += ([i+1]+'. '+ names + " ");
  });
  // returns value
  return dwarfnames;
}


function summonCaptainPlanet(planeteerCalls) {
  var veggies = [];
  // looping starting index count is 0 ...<array.length add!
   for (var i = 0; i < planeteerCalls.length; i++){
 veggies.push(planeteerCalls[i].toUpperCase() + '!')
}
  return veggies;
}
function longPlaneteerCalls(words) {
  if (words.length < 4) {
    return false
  } else {
    return true
  }
}

function findTheCheese(foods) {
  for (var i = 0; i < foods.length; i++) {
      if (foods[i] === 'cheddar') {
      return foods[i]
    }
    else  if (foods[i] === 'gouda') {
      return foods[i]
      
    }
  }
  return 'no cheese!'
} 
let others = ['sun', 'swiss', 'brie']
console.log(findTheCheese(others))

const words = ['boo', 'hello', 'blue']
function wordsWithB(words) {
  for (var i = 0; i < words.length; i++) {
    if (wordsWithB.startsWith('b') === 'b') {
      return words[i]
    }
  }wordsWithB(words)
  
}
console.log(words[i]);

