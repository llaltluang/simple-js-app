let pokemonRepository = (function() {
    let pokemonList = [
        {
          name: "Bulbasaur",
          types: ["Grass", "Poison"],
          species: "Seed",
          height: 0.7
        },
        { 
          name: "Pikachu", 
          types: ["Eledtric"], 
          species: "Mouse", 
          height: 0.4 
        },
        { name: "Wigglytuff", 
          types: ["Balloon"], 
          species: "Fairy", 
          height: 1 
        }
    ];

    function getAll() {
        return pokemonList;
    }

    function add() {
        pokemonList.push(pokemon);
    }

    return{
        getAll : getAll,
        add : add,
    }

})();

// creating forEach loops

pokemonRepository.getAll().forEach(function(pokemon){

     if (pokemon.height > 1.5) {
        // if the pokemon height is over 1,5 then call out special large size
        document.write(pokemon.name);
        document.write("(height: " + pokemon.height + ") - Wow, that's big!");
        document.write("<br>");
     } else {
        document.write(pokemon.name + "(height " + ")" + "<br>");
     }


});
