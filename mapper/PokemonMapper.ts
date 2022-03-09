import { Pokemon } from "~~/models/Pokemon";

export class PokemonMapper {
  setPokemon(apiPokemon): Pokemon {
    const pokemon = new Pokemon();
    pokemon.name = apiPokemon.name;
    pokemon.sprites = apiPokemon.sprites;
    return pokemon;
  }
}
