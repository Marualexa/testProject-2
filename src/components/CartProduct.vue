<template>
  <div @click="itemsDetail" class="product--card">
    <img src="../assets/userphone.jpg" alt="" class="" />
    <div class="product-info">
      <div>
        <div>
          <p>{{ name }}</p>
          <p>{{ height }}</p>
        </div>
        <div>
          <p>{{ birth_year }}</p>
          <p>{{ gender }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const contain = defineProps({
  name: {
    type: String,
  },
  height: {
    type: String,
  },
  birth_year: {
    type: String,
  },
  gender: {
    type: String,
  },
  url: {
    type: String,
  },
});

function itemsDetail() {
  const parts = contain.url.split("/");
  const id = parts[parts.length - 2];
  router.push({ name: "detalleItem", params: { id: id } });
}
</script>
