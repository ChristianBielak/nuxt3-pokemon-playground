<template>
  <div class="pagination">
    <button @click="prevPage()">prev</button>
    <span class="pagination__page">
      {{ page }}
    </span>
    <button @click="nextPage()">next</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

let page = ref<number>(1);

const emit = defineEmits(["pageChanged"]);

function nextPage() {
  page.value = page.value + 1;
  emit("pageChanged", page.value);
}

function prevPage() {
  if (page.value > 1) page.value = page.value - 1;
  emit("pageChanged", page.value);
}
</script>

<style scoped lang="scss">
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;

  &__page {
    margin: 0 15px;
  }
}
</style>
