<template>
  <div class="pokemon-card">
    <div class="pokemon-card__info">
      <img :src="pokemon.sprites.front_default" alt="" />
      <p>
        {{ pokemon.name }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Pokemon } from "~~/models/Pokemon";
import { PokemonProvider } from "~~/provider/PokemonProvider";
const PokemonDataProvider = new PokemonProvider();

interface props {
  pokemonName: string;
}

const props = defineProps<props>();

const pokemon = ref<Pokemon>(
  await PokemonDataProvider.getPokemon(props.pokemonName)
);
</script>

<style scoped lang="scss">
.pokemon-card {
  &__info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
      margin: 0;
    }
  }
}
</style>
