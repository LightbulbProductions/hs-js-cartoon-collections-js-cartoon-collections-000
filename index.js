/*function dwarfRollCall(dwarves) {
  var dwarfnames = [];
  dwarves.forEach(function(names, i) {
    dwarfnames += ([i+1]+'. '+ names + " ");
  });
  return dwarfnames;
}
*/
function dwarves(1, 2, 3, 4 ) {
  
}
const dwarfRollCall = ["Doc", "Dopey", "Bashful", "Grumpy"];
dwarfRollCall.forEach(function(item, index, array) {
console.log(index, ".", item);
})
/*function summonCaptainPlanet(planeteerCalls) {
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
} */