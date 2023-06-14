<template>
  <div class="container-product">
    <div class="product-container">
      <aside class="product-detail">
        <div class="close">
          <img @click="close" class="close-leth" src="../assets/cerrar.png" alt="atras" />
        </div>
        <div class="product-info-detall">
          <img class="imagen-detail" src="../assets/userphone.jpg" alt="" />

          <div class="grid">
            <div class="price">
              <p class="info-price">{{ results ? results.name : "-" }}</p>
            </div>
          </div>
          <div class="items-inform">
            <p class="info-title">Height: {{ results ? results.height : "-" }}</p>
            <p class="info-descrition">
              Birth Year: {{ results ? results.birth_year : "-" }}
            </p>
            <p class="info-descrition">
              Hair color: {{ results ? results.hair_color : "-" }}
            </p>
            <p class="info-descrition">
              Skin color: {{ results ? results.skin_color : "-" }}
            </p>
            <p class="info-descrition">
              Eye color: {{ results ? results.eye_color : "-" }}
            </p>
          </div>
        </div>
      </aside>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useAsync } from "../hooks/useAsync";

const { results, makeRequest } = useAsync();
const router = useRouter();
const route = useRoute();

const { id } = route.params;

function close() {
  router.push({ name: "home" });
}

onMounted(async () => {
  await makeRequest(`people/${id}`);
});
</script>

<style lang="sass">
@import "../sass/styleGlobal.scss"
</style>
