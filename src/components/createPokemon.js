import createAbilities from "./createAbilities.js";

const createPokemon = (pokemonData) => {
    //Create container
    const container = document.createElement('div');
    container.classList.add('container');
    container.id = 'container';

    // Create media wrapper
    const mediaWrapper = document.createElement('div');
    mediaWrapper.classList.add('media-wrapper');

    // Create Image
    const img = document.createElement('img');
    img.classList.add('image');
    img.src = pokemonData.sprites.front_default;

    mediaWrapper.append(img);

    // Create content wrapper
    const contentWrapper = document.createElement('div');
    contentWrapper.classList.add('content-wrapper');

    // Create title
    const name = document.createElement('h2');
    name.classList.add('name');
    name.id = 'name';
    name.innerText = pokemonData.name;

    // Create Abilities
    const abilities = document.createElement('h3');
    abilities.classList.add('abilities-title');
    abilities.innerText = 'Abilities';

    // Abilities list
    const abilitiesList = createAbilities(pokemonData.abilities);

    contentWrapper.append(name, abilities, abilitiesList)
    
    container.append(mediaWrapper, contentWrapper);
    return container;
}

export default createPokemon;