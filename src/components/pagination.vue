<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination" @click="pageCurrent">
      <li class="page-item">
        <a
          @click="back"
          :class="{ 'page-link': true, 'page-link': true, disabled: currentPage === 1 }"
          class="page-link"
          href="#"
          aria-label="Previous"
        >
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li class="page-item">
        <a @click="forward" class="page-link" href="#" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { ref, defineEmits } from "vue";

const currentPage = ref(1);
const emit = defineEmits(["currentPage"]);

function pageCurrent() {
  emit("currentPage", currentPage.value);
}

function back() {
  if (currentPage.value > 1) {
    currentPage.value = Number(currentPage.value) - 1;
  }
}

function forward() {
  currentPage.value = Number(currentPage.value) + 1;
}
</script>

<style lang="sass">
@import "../sass/styleGlobal.scss"
</style>
