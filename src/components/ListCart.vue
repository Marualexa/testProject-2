<template>
  <HeaderSearch @search-click="eventSearch" />
  <section class="main--container">
    <div class="cards--container">
      <CartProduct
        v-for="{ name, height, birth_year, gender, url } in results?.results"
        :key="{ name }"
        :name="name"
        :height="height"
        :birth_year="birth_year"
        :gender="gender"
        :url="url"
      />
    </div>
  </section>
</template>

<script setup>
import HeaderSearch from "./headerSearch.vue";
import CartProduct from "./CartProduct.vue";
import { useAsync } from "../hooks/useAsync";
import { onMounted } from "vue";

const { results, makeRequest } = useAsync();

const items = async () => {
  await makeRequest("people");
  console.log("resultado", results.value);
  return results.value;
};

onMounted(() => {
  items();
});

const eventSearch = async (args) => {
  await makeRequest("people/", {
    search: args,
  });
  console.log("emit", args);
};
</script>

<style lang="sass">
@import "../sass/styleGlobal.scss"
</style>
