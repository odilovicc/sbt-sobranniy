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
    label: 'Вход и Регистрация',
    icon: 'pi pi-sign-in',
    items: [
      { label: 'Вход', to: '/login' },
      { label: 'Регистрация клиент', to: '/regclient' }
      // Other menu items
    ]
  },
  {
    label: 'Клиент',
    icon: 'pi pi-user',
    items: [
      { label: 'Брокеры', url: '/client/listBrokers' },
      { label: 'Поручение на продажу', url: '/client/request' },
      { label: 'Счета на оплату', url: '/client/accounts' },
      { label: 'Cписок оплат', url: '/client/payments' },
      { label: 'Реестер сделок', url: '/client/reestr' },
      { label: 'Список заявок', url: '/client/requestlist' },
      { label: 'Бюллетень', url: '/client/buliten' }
      // Other menu items
    ]
  },
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
    @apply bg-white flex items-center justify-center w-max mx-auto my-2 py-3 border-none px-10;
  }
}
</style>
