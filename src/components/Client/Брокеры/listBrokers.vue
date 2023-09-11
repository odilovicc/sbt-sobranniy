<template>
  <div>
    <div class="p-10">
      <!-- Top section -->
      <div class="flex py-5 items-center">
        <h1 class="text-xl font-semibold">Список брокеров</h1>
        <Button
          icon="pi pi-user"
          @click="visible = true"
          class="ml-auto"
          label="Новый брокер"
          severity="info"
        />
      </div>
      <!-- Top section -->
      <!-- List of brokers in present section -->
      <DataTable :value="products" tableStyle="min-width: 50rem">
        <Column field="number" header="№"></Column>
        <Column field="nameBroker" header="Наименование"></Column>
        <Column field="deadline" header="Срок"></Column>
        <Column header="Статус">
          <template #body="slotProps">
            <Tag
              :value="slotProps.data.brokerStatus"
              :severity="getSeverity(slotProps.data)"
            />
          </template>
        </Column>
        <Column class="w-14">
          <template #body>
            <Button severity="danger" icon="pi pi-trash" />
          </template>
        </Column>
      </DataTable>
      <!-- List of brokers in present section -->
      <!-- Dialog New Broker -->
      <Dialog
        v-model:visible="visible"
        modal
        header="Добавление брокера"
        :style="{ width: '50vw' }"
      >
        <Message severity="error" icon="pi pi-danger">
          Заполните все поля
        </Message>
        <div class="px-10">
          <div class="flex items-center py-5">
            <label class="w-1/2">
              Брокер
              <span class="text-red-500">*</span>
            </label>
            <Dropdown
              v-model="selectedBroker"
              :options="brokerList"
              optionLabel="name"
              placeholder="Не выбрано"
              class="w-full md:w-14rem"
            />
          </div>
          <div class="flex items-center py-5">
            <label class="w-1/2">
              Срок договора
              <span class="text-red-500">*</span>
            </label>
            <InputText class="w-full" />
          </div>
          <div class="flex items-center py-5">
            <label class="w-1/2">
              Договор на брокерское обслуживание
              <span class="text-red-500">*</span>
            </label>
            <FileUpload mode="basic" />
          </div>
        </div>
        <template #footer>
          <Button label="Отмена" severity="info" />
          <Button label="Сохранить" severity="success" @click="show()" />
          <Toast />
        </template>
      </Dialog>
      <!-- Dialog New Broker -->
    </div>
  </div>
</template>
<script setup>
import { useToast } from 'primevue/usetoast'
const toast = useToast()

const show = () => {
  toast.add({
    severity: 'success',
    summary: 'Успешно!',
    detail: 'Новый брокер успешно добавлен!',
    life: 3000,
  })
}
import { ref, onMounted } from 'vue'
import { ProductService } from './listBrokers.js'

const visible = ref(false)

onMounted(() => {
  ProductService.getProductsMini().then((data) => (products.value = data))
})

const products = ref()
const getSeverity = (product) => {
  switch (product.brokerStatus) {
    case 'Активен':
      return 'success'

    case 'На модерации':
      return 'warning'

    case 'Истек срок':
      return 'danger'

    default:
      return null
  }
}

const selectedBroker = ref()
const brokerList = ref([
  { name: 'БК-123 MCHJ "oltin savdo"' },
  { name: 'БК-11 MCHJ "changalidan uzadiganlar"' },
  { name: 'БК-461 MCHJ "brokeri zori"' },
])
</script>
<style scoped>
.p-fileupload {
  width: 100%;
}

</style>
