import createAbilities from "./createAbilities";

const updatePokemonDom = (pokemonDom, pokemonData) => {
    // Update name
    pokemonDom.querySelector('#name').innerText = pokemonData.name;

    // Update image
    pokemonDom.querySelector('.image').src = pokemonData.sprites.front_default;
    pokemonDom.querySelector('.image').alt = pokemonData.name;

    const oldList = pokemonDom.querySelector('#abilities-list');
    const newList = createAbilities(pokemonData.abilities);

    oldList.replaceWith(newList);
}

export default updatePokemonDom;