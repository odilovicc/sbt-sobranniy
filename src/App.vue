<template>
  <Menubar :model="items" />
  <div class="p-10">
    <RouterView />
  </div>
</template>
<script setup lang="ts">
import { RouterView } from 'vue-router'
import { ref } from "vue";

const items = ref([
  {
    label: 'Брокер',
    icon: 'pi pi-flag',
    items: [
      { label: 'Договор поручение на продажу', to: '/broker/auctions' },
      { label: 'Трейдеры', to: '/broker/traders/' },
      { label: 'Клиенты (резиденты)', to: '/broker/clientr' },
      { label: 'Список заявок', to: '/broker/requests' },
      { label: 'Бюллетень', to: '/broker/buliten' },
      { label: 'Аукционы', to: '/broker/auctions' },
    ]
  },
  {
    label: 'Трейдер',
    icon: 'pi pi-user',
    items: [
      { label: 'Договор поручение на продажу', to: '/trader/sales' },

    ]
  },
]);
</script>

<style scoped>
@import url('./assets/main.css');
@tailwind components;
@tailwind base;

@layer components {
  .p-menubar {
    @apply bg-white flex items-center justify-center my-5 py-3 border-none px-10;
  }
}
</style>
