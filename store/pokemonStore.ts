import { defineStore } from "pinia";
import { Pokemon } from "~~/models/Pokemon";
import { PokemonProvider } from "~~/provider/PokemonProvider";

const PokemonDataProvider: PokemonProvider = new PokemonProvider();

export const usePokemon = defineStore({
  id: "pokemons",

  state: () => ({
    pokemons: [] as Pokemon[],
  }),

  actions: {
    setPokemons(pokemons: Pokemon[]) {
      this.pokemons = pokemons;
    },

    async fetchPokemons(page: number = 1) {
      const pokemons: Pokemon[] = await PokemonDataProvider.getPokemons(page);
      this.setPokemons(pokemons);
    },
  },
});
