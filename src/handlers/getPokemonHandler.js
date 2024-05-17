import getPokemon from "../../apis/getpokemon.js";
import dom from "../dom.js";
import createPokemon from "../components/createPokemon.js";
import data from "../data.js";
import updatePokemonDom from "../components/updatePokemonDom.js";

const getPokemonHandler = async() => {
    const value = Number(dom.input.value);
    const pokemonDomExists = dom.root.querySelector('.container');

    //Check if value exists
    if(data.oldId === value){
        dom.input.value = '';
        return;
    }

    //Validate ID and show Error message if wrong input
    const isValidId = value > 0 && value < 1280;
    if(!isValidId){
        if(pokemonDomExists){
            pokemonDomExists.remove();
        }
        data.oldId = null;
        dom.message.innerText = 'The input needs to be a positive number between 0 and 1280';
        dom.message.classList.add('message');
        dom.input.value = '';
        dom.root.append(dom.message);
        return;
    }

    //Remove message if input is correct
    const errorExists = dom.root.querySelector('.message');
    if(errorExists){
        dom.message.remove();
    }
    
    const pokemonData = await getPokemon(value);

    // Check if Pokemon exists
    if(pokemonDomExists){
        updatePokemonDom(pokemonDomExists, pokemonData);
    } else {
        const pokemonDom = createPokemon(pokemonData);
        dom.root.append(pokemonDom);
    }

    // Clear Input
    dom.input.value = '';
    data.oldId = value;
}

export default getPokemonHandler;