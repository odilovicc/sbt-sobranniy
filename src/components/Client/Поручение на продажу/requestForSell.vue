<template>
    <div>
        <div class="defaultBg">
            <div class="defaultFlex my-5 px-5">
                <h1 class="headerOfSection">Договор поручение</h1>
                <Button label="Новый поручение" icon="pi pi-plus" class="ml-auto" @click="visible = true" />
                <Dialog v-model:visible="visible" modal header="Новый поручение" :style="{ width: '50vw' }">
                    <div class="dialogBody">
                        <div class="defaultFlex gap-12">
                            <div class="forms w-1/2">
                                <h1 class="label">Брокер <span class="text-red-500">*</span></h1>
                                <Dropdown v-model="selectedBroker" :options="brokers" optionLabel="name"
                                    placeholder="Не выбрано" class="w-full md:w-14rem" />
                            </div>
                            <div class="forms w-1/2 ml-auto">
                                <h1 class="label">Срок <span class="text-red-500">*</span></h1>
                                <InputText class="w-full" />
                            </div>
                            <div class="forms"></div>
                        </div>
                        <!-- Radio buttons -->
                        <h1>Документ <span class="text-red-500">*</span></h1>
                        <div class="px-5 py-5 flex flex-col gap-5">
                          <div>
                            <RadioButton v-model="ingredient" inputId="ingredient1" name="pizza" value="Cheese" />
                            <label for="ingredient1" class="ml-2">Складская справка</label>
                          </div>
                          <div>
                            <RadioButton v-model="ingredient" inputId="ingredient2" name="pizza" value="Mushroom" />
                            <label for="ingredient2" class="ml-2">Документ качества (сертификат, паспорт, ТУ)</label>
                          </div>
                        </div>
                        <!-- Radio buttons -->
                        <!-- File uploads -->
                        <h1 class="mb-4">Документ товара <span class="text-red-500">*</span></h1>
                        <FileUpload mode="basic" class="full-upload mb-4" chooseLabel="Выбрать" :maxFileSize="1000000" />
                        <h1 class="mb-4">Гарантийное письмо <span class="text-red-500">*</span></h1>
                        <FileUpload mode="basic" class="full-upload" chooseLabel="Выбрать" :maxFileSize="1000000" />
                        <!-- File uploads -->
                    </div>
                  <template #footer>
                    <Button label="Отмена"/>
                    <Button severity="success" label="Сохранить" @click="toastShow()"/>
                  </template>
                </Dialog>
            </div>
            <DataTable :value="products" tableStyle="min-width: 50rem">
                <Column field="number" header="№"></Column>
                <Column field="broker" header="Брокер"></Column>
                <Column field="date" header="Срок"></Column>
                <Column header="Status">
                    <template #body="slotProps">
                        <Tag :value="slotProps.data.brokerStatus" :severity="getSeverity(slotProps.data)" />
                    </template>
                </Column>
                <Column>
                    <template #body>
                        <Button severity="danger" @click="confirm2()" icon="pi pi-trash" />
                        <Toast />
                        <ConfirmDialog></ConfirmDialog>
                    </template>
                </Column>
            </DataTable>
        </div>
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import { ProductService } from './requestForSell';
const choosen = ref('')
const visible = ref(false)
onMounted(() => {
    ProductService.getProductsMini().then((data) => (products.value = data));
});

const toastShow = () => {
  toast.add({ severity: 'success', summary: 'Успешно', detail: 'Успешно сохранено', life: 3000 });
}
const ingredient = ref('')
const products = ref();
const getSeverity = (product) => {
    switch (product.brokerStatus) {
        case 'Новый':
            return 'success';
        case 'Использован':
            return 'danger';

        default:
            return null;
    }
};

const selectedBroker = ref();
const brokers = ref([
    { name: '123', },
    { name: '123', },
    { name: '123', },
    { name: '123', },
]);
import { useConfirm } from "primevue/useconfirm";
import { useToast } from "primevue/usetoast";

const confirm = useConfirm();
const toast = useToast();
const confirm2 = () => {
    confirm.require({
        message: 'Do you want to delete this record?',
        header: 'Delete Confirmation',
        icon: 'pi pi-info-circle',
        acceptClass: 'p-button-danger',
        accept: () => {
          toast.add({ severity: 'info', summary: 'Confirmed', detail: 'Record deleted', life: 3000 });
        },
        reject: () => {
            toast.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
        }
    });
};
</script>
<style>
@import url('./requestForSell.css');
</style>