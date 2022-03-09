<template>
  <div>
    <section class="section">
      <div class="columns">
        <div class="column is-12">
          <h1>Pokemon Finder</h1>
        </div>
        <div class="column is-12">
          <input type="text" v-model="query" />
        </div>
      </div>
    </section>

    <div class="container">
      <section class="section">
        <div class="columns">
          <div
            class="column is-3 align-center no-gutters"
            v-for="pokemon in pokemons"
            :key="pokemon.name"
          >
            <PokemonCard :pokemon-name="pokemon.name" />
          </div>
        </div>
      </section>
    </div>

    <section class="section">
      <Pagination @page-changed="onPageChange($event)" />
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { usePokemon } from "@/store/pokemonStore";
import { Pokemon } from "~~/models/Pokemon";
const pokemonStore = usePokemon();

let query = ref<string>("");
let page = ref<number>(1);
let pokemons = computed((): Pokemon[] => pokemonStore.pokemons);

await useAsyncData("fetch-pokemons", () => pokemonStore.fetchPokemons());

const fetchPokemons = async () => {
  await pokemonStore.fetchPokemons(page.value);
};

function onPageChange($event: number): void {
  page.value = $event;
  this.fetchPokemons();
}

watch(query, search);
function search(newVal, oldVal) {
  console.log(newVal, oldVal);
}
</script>

<style scoped lang="scss"></style>
