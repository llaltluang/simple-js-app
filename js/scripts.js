
//Creating IIFE 
let pokemonRepository = (function(){
    //Pokemon array
      let repository = [
        { name:'Bulbasaur', type:['Grass','Poison'], species:'Seed',  height:0.7},
           
        {  name:'Pikachu',type:['Eledtric'],species:'Mouse',height: 0.4},
        
        { name:'Wigglytuff', type:['Balloon'], species:'Fairy',height: 1}
      ];
      //add() function for adding pokemonlist
      function add(pokemon){
        //validation of proper data input
        if (
          typeof pokemon === 'object' &&
          'name' in pokemon &&
          'height' in pokemon &&
          'types' in pokemon 
          
        ){
          repository.push(pokemon);
        } else {
          console.log('pokemon is not correct');
        }
      }
      //getAll() function to get pokemonList
      function getAll(){
        return repository;
      }
      
      function addListItem(pokemo){
        let pokemonList = document.querySelector('.pokemon-list');
        let listpokemon = document.createElement('li');
        let button = document.createElement('button');
        button.innerText = pokemo.name;
        button.classList.add('button-class');
        listpokemon.appendChild(button);
        pokemonList.appendChild(listpokemon);
        button.addEventListener('click',() => showDetails(pokemo));
      };
    
      return{
        getAll : getAll,
        add : add,
        addListItem : addListItem
      };
    
    function showDetails(pokemo){
      console.log(pokemo);
    }
    
    })();
    // Adding more pokemon objects
    
      console.log(pokemonRepository.getAll());
      pokemonRepository.add({ name: "Squirtle", height: 1.08, types:["water"], species:'Tiny Turtle'});
    
    //forEach loop to iterate through PokeDex
    
    pokemonRepository.getAll().forEach(function(pokemon) {
    
      pokemonRepository.addListItem(pokemon);   
    });
    