<template>
  <div class="search">
    <input type="text" v-model="searchQuery" placeholder="Buscar..." />
    <button id="search" @click="searchClick">Buscar</button>
  </div>
</template>

<script setup>
import { ref, defineEmits } from "vue";

const emit = defineEmits(["searchClick"]);

const searchQuery = ref("");

function searchClick() {
  emit("searchClick", searchQuery.value);
}
</script>

<style lang="sass">
@import "../sass/styleGlobal.scss"
</style>
