<template>
    <header class="headerClientR">
        <h1 class="title">Список Клиентов</h1>
        <div class="flex gap-5 items-center">
            <Button label="Новый клиент РКП" icon="pi pi-user" @click="visible = true" outlined />
            <!-- Dialog client -->
            <Dialog v-model:visible="visible" modal header="Ввод нового клиента РКП (резидента)" :style="{ width: '50vw' }">
                <div class="px-5 flex items-center flex-col">
                    <div class="formContainerR">
                        <label class="w-1/2">Реквизиты клиента <span class="text-red-500">*</span></label>
                        <Dropdown v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Не выбрано"
                            class="w-full md:w-14rem" />
                    </div>
                    <div class="formContainerR">
                        <label class="w-1/2">Свидительство о регистрации <span class="text-red-500">*</span></label>
                        <FileUpload mode="basic" chooseLabel="Прикрепить" />
                    </div>
                    <div class="formContainerR">
                        <label class="w-1/2">Разрешение на оптовую торговлю <span class="text-red-500">*</span></label>
                        <FileUpload mode="basic" chooseLabel="Прикрепить" />
                    </div>
                </div>
                <template #footer>
                    <Button label="Отмена" severity="info" @click="visible = false" />
                    <Button label="Сохранить" severity="success" @click="sho" />
                </template>
            </Dialog>
            <!-- Dialog client -->
            <SplitButton label="Новый клиент" icon="pi pi-plus" :model="items" severity="info"></SplitButton>
        </div>
    </header>
    <div class="clientContainer">
        <DataTable :value="products" tableStyle="min-width: 50rem">
            <Column field="number" header="№"></Column>
            <Column field="name" header="Наименование"></Column>
            <Column field="type" header="Тип"></Column>
            <Column field="inn" header="ИНН"></Column>
            <Column header="Status">
                <template #body="slotProps">
                    <Tag :value="slotProps.data.clientStatus" :severity="getSeverity(slotProps.data)" />
                </template>
            </Column>
            <Column>
                <template #body>
                    <div class="flex items-center gap-5">
                        <Button severity="info" icon="pi pi-pencil" />
                        <Button severity="danger" @click="confirm2()" icon="pi pi-trash" />
                    </div>
                    <Toast />
                    <ConfirmDialog></ConfirmDialog>

                </template>
            </Column>
        </DataTable>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { ProductService } from './clientR';
import { useConfirm } from "primevue/useconfirm";
import { useToast } from "primevue/usetoast";

const confirm = useConfirm();
const visible = ref(false)
const toast = useToast();

const sho = () => {
    toast.add({ severity: 'success', summary: 'Успешно', detail: 'Успешно добавлено!', life: 3000 })
}
const selectedCity = ref();
const cities = ref([
    { name: 'MCHJ NMADUR SAVDO' }
]);

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
const items = ref([
    {
        label: 'Юридическое лицо',
        to: '/broker/clientr/yurl'
    },
    {
        label: 'Физическое лицо',
        to: '/broker/clientr/fizl'
    },
])

onMounted(() => {
    ProductService.getProductsMini().then((data) => (products.value = data));
});

const products = ref();

const getSeverity = (product) => {
    switch (product.clientStatus) {
        case 'Активен':
            return 'success';

        case 'Новый':
            return 'warning';

        case 'Заблокирован сотрудником РКП':
            return 'danger';
        case 'Заблокирован руководителем БК':
            return 'danger';

        default:
            return null;
    }
};

</script>

<style>
@import url('./clientR.css');
</style>