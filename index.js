// f  declaration + f name (identifier) and params in() defines 
function dwarfRollCall(dwarves) {
  var dwarfnames = [];
  //f expression IIFE   
  dwarves.forEach(function(names, i) {
    dwarfnames += ([i+1]+'. '+ names + " ");
  });
  return dwarfnames;
}


function summonCaptainPlanet(planeteerCalls) {
  var veggies = [];
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

function findTheCheese (foods) {
  for (var i = 0; i < foods.length; i++) {
      if (foods[i] === 'cheddar') {
      return foods[i]
    }
  }
  return 'no cheese!'
} 