import axios from 'axios';

const pokemonApi = axios.create({
    baseURL:import.meta.env.VITE_BASE_URL
})

export const getPokemonsByPage = async (page: number) => {
    const { data } = await pokemonApi.get(`/pokemon?limit=50&offset=${page * 50}`);
    const pokemons = data.results.map(async (pokemon: any) => {
        const { data } = await pokemonApi.get(`/pokemon/${pokemon.name}`);
        
        return {name: data.name, url: data.sprites.front_default};
    });
    return await Promise.all(pokemons);
}