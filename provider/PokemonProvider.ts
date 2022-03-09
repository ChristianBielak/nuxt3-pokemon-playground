import { PokemonMapper } from "~~/mapper/PokemonMapper";
import { Pokemon } from "~~/models/Pokemon";

export class PokemonProvider {
  pokemonMapper = new PokemonMapper();
  baseUrl = "https://pokeapi.co/api/v2/pokemon";
  public async getPokemons(page: number = 1): Promise<Pokemon[]> {
    let pokemons: Pokemon[] = [];
    let offset: number = (page - 1) * 20;
    await fetch(`${this.baseUrl}?offset=${offset}`).then(async (response) => {
      let results = await response.json();
      pokemons = results.results;
    });

    pokemons.map((pokemon) => {
      return this.pokemonMapper.setPokemon(pokemon);
    });

    return pokemons;
  }

  public async getPokemon(name: string) {
    let pokemon = {};
    await fetch(`${this.baseUrl}/${name}`).then(async (response) => {
      pokemon = await response.json();
    });
    return this.pokemonMapper.setPokemon(pokemon);
  }
}
