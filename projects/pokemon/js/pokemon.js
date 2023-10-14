const pokemonContainer = document.querySelector('.pokemon-container');
const guessInput = document.getElementById('pokemon-guess');
const checkButton = document.getElementById('check-button');
const resultParagraph = document.getElementById('result');

function createPokemon(pokemon) {
    const card = document.createElement('div');
    card.classList.add('pokemon-block');

    const sprite = document.createElement('img');
    sprite.src = pokemon.sprites.front_default;
    
    card.appendChild(sprite);
    pokemonContainer.innerHTML = '';
    pokemonContainer.appendChild(card);
}

function loadNewPokemon() {
    const pokemonId = Math.floor(Math.random() * 151) + 1;
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            createPokemon(data);

            checkButton.addEventListener('click', () => {
                const adivinanzaUsuario = guessInput.value.toLowerCase();
                const pokemonNombre = data.name.toLowerCase(); 
                if (adivinanzaUsuario === pokemonNombre) {
                    resultParagraph.textContent = '¡Correct! ¡You are a Pokémon Master!';
                } else {
                    resultParagraph.textContent = `Incorrect. The Pokémon is ${data.name}. ¡Try again!`;
                }
                guessInput.value= '';
                loadNewPokemon();
            });
        });
}

loadNewPokemon();

