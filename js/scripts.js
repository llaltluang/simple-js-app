let pokemonList = [
    { name:'Bulbasaur', type:['Grass','Poison'], species:'Seed',  height:0.7},
       
    {  name:'Pikachu',type:['Eledtric'],species:'Mouse',height: 0.4},
    
    { name:'Wigglytuff', type:['Balloon'], species:'Fairy',height: 1},
]
//creating a loop to display each item in the pokemonList above
for (var i = 0; i < pokemonList.length; i++) {
document.write(`${pokemonList[i].name} (height: ${pokemonList[i].height}) `)
if (pokemonList[i].height > 0.5) {
    document.write(' Wow that\'s big!<br>');
}
  else {
    document.write('<br>')
  }
}

