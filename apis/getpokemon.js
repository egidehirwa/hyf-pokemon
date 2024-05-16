const getPokemon = async(id) => {
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

        if(res.ok){
            const data = await res.json();
            return data;
        }else {
            throw new Error(`Pokemon not found`)
        }
    } catch (err) {
        console.error(`Fetch failed for id:${id}`);
    }
}

export default getPokemon;