//IIFE: Pokemon Repository Listing

let pokemonRepository = (function() {

  let pokemonList =[];

// Link to access the POKEAPI database
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon';

  function add(item) {
      if (
          typeof item=== "object" &&
          "name" in item&&
          "detailsUrl" in item
      ) {
          pokemonList.push(item);
      } else {
          console.log("Pokemon is not correct");
      }
  }

  function getAll() {
      return pokemonList;
  }

  //Creates the list of Pokemon buttons
  function addListItem(pokemon) {
    let pokemonList = document.querySelector(".pokemon-list");
    let listItem = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("button-class");
    listItem.appendChild(button);
    pokemonList.appendChild(listItem);
    button.addEventListener("click", () => showDetails(pokemon));

  }

  function showDetails (pokemon) {
      loadDetails(pokemon);
  }

  function loadList() {
      return fetch(apiUrl).then(function (response) {
        return response.json();
      }).then(function (json) {
        json.results.forEach(function (item) {
          let pokemon = {
            name: item.name,
            detailsUrl: item.url
          };
          add(pokemon);
        });
      }).catch(function (e) {
        console.error(e);
      })
  }

  function loadDetails(item) {
      let url = item.detailsUrl;
      return fetch(url).then(function (response) {
          return response.json();
      }).then(function (details) {
          //Item details
          item.imageUrl = details.sprites.front_default;
          item.height = details.height;
          item.types = details.types;
          showModal(item);
      }).catch(function (e) {
          console.error(e)
      });
      }

      //Displays the Modal with Pokemon
      function showModal (pokemon) {
          let modalContainer = document.querySelector ('#modal-container');
        
          //Clear all existing modal content
          modalContainer.innerHTML = '';
          let modal = document.createElement('div');
          modal.classList.add('modal');
        
          //Add new modal content
          let closeButtonElement = document.createElement('button');
          closeButtonElement.classList.add('modal-close');
          closeButtonElement.innerText = 'X';
          closeButtonElement.addEventListener('click', hideModal);
        
          let titleElement = document.createElement('h1');
          titleElement.innerText = pokemon.name;

          let imageElement = document.createElement('img');
          imageElement.classList.add('modal-img');
          imageElement.src = pokemon.imageUrl
        
          let contentElement = document.createElement('p');
          contentElement.innerText = 'HEIGHT:  ' + pokemon.height;

          let typesElement = document.createElement('p');
          typesElement.innerText = 'TYPES: ' + pokemon.types;
        
          modal.appendChild(closeButtonElement);
          modal.appendChild(imageElement);
          modal.appendChild(titleElement);
          modal.appendChild(contentElement);
          /* modal.appendChild(typesElement); */
          modalContainer.appendChild(modal);
          
          modalContainer.classList.add ('is-visible');
        
          modalContainer.addEventListener('click', (e) => {
            // this's clicking INSIDE the modal
          
            let target = e.target;
            if (target === modalContainer) {
              hideModal();
            }
          });
          
        }
  
  
    return {
      add: add,
      getAll: getAll,
      loadList: loadList,
      loadDetails: loadDetails,
      addListItem: addListItem,
      showDetails: showDetails
    };
})();


let dialogPromiseReject; 

function hideModal () {
let modalContainer = document.querySelector ('#modal-container');
modalContainer.classList.remove('is-visible');

if (dialogPromiseReject) {
dialogPromiseReject();
dialogPromiseReject = null;
}

}



window.addEventListener('keydown', (e) => {
let modalContainer = document.querySelector('#modal-container');
if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
hideModal();
}
});



// LOADS THE DATA:

pokemonRepository.loadList().then(function() {
pokemonRepository.getAll().forEach(function(pokemon) {
  pokemonRepository.addListItem(pokemon);
});
});
