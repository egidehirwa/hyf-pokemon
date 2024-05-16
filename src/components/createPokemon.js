import createAbilities from "./createAbilities.js";

const createPokemon = (pokemonData) => {
    //Create container
    const container = document.createElement('div');
    container.classList.add('container');
    container.id = 'container';

    // Create title
    const name = document.createElement('h2');
    name.classList.add('name');
    name.id = 'name';
    name.innerText = pokemonData.name;

    // Create Image
    const img = document.createElement('img');
    img.classList.add('image');
    img.src = pokemonData.sprites.front_default;

    // Create Abilities
    const abilities = document.createElement('h3');
    abilities.classList.add('abilities-title');
    abilities.innerText = 'Abilities';

    // Abilities list
    const abilitiesList = createAbilities(pokemonData.abilities);

    container.append(name, img, abilities, abilitiesList);
    return container;
}

export default createPokemon;