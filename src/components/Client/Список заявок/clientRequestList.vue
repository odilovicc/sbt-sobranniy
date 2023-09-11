<template>
    <div>
        <div class="flex items-center mb-10">
            <h1 class="text-xl font-semibold">Список заявок</h1>
            <Button label="Новая заявка" severity="info" @click="visible = true" icon="pi pi-plus" class="ml-auto" />

            <Dialog v-model:visible="visible" modal :style="{ width: '50vw' }">
                <div class="flex flex-col gap-5">
                    <Button severity="info" label="Биржевые торги" class="w-full" />
                    <Button severity="info" label="Аукционные торги" class="w-full" />
                    <Button severity="info" label="Выставочно-ярмарочные торги" class="w-full" />
                </div>
            </Dialog>
        </div>
        <DataTable :value="products" tableStyle="min-width: 50rem">
            <Column field="number" header="№"></Column>
            <Column field="traderNumber" header="Трейдер"></Column>
            <Column field="nameTrader" header="Наименование">
                <template #body="slotProps">
                    <div>
                        <h1>{{ slotProps.data.nameTrader }}</h1>
                        <h1 class="text-red-500">{{ slotProps.data.nameProducer }}</h1>
                    </div>
                </template>
            </Column>
            <Column field="size" header="Кол-во">
                <template #body="slotProps">
                    <div>
                        <h1>{{ slotProps.data.size }}</h1>
                        <h1 class="text-red-500">{{ slotProps.data.sizeCurrency }}</h1>
                    </div>
                </template>
            </Column>
            <Column field="priceTrader" header="Цена">
                <template #body="slotProps">
                    <div>
                        <h1>{{ slotProps.data.priceTrader }}</h1>
                        <h1 class="text-red-500">{{ slotProps.data.priceTraderCurrency }}</h1>
                    </div>
                </template>
            </Column>
            <Column field="allSum" header="Сумма">
                <template #body="slotProps">
                    <div>
                        <h1>{{ slotProps.data.allSum }}</h1>
                        <h1 class="text-red-500">{{ slotProps.data.allSumCurrency }}</h1>
                    </div>
                </template>
            </Column>
            <Column field="basis" header="Базиз">
                <template #body="slotProps">
                    <div>
                        <h1>{{ slotProps.data.basis }}</h1>
                        <h1 class="text-red-500">{{ slotProps.data.basisSrok }}</h1>
                    </div>
                </template>
            </Column>
            <Column field="countryHappens" header="Страна происхождения"></Column>
            <Column header="Status">
                <template #body="slotProps">
                    <Tag :value="slotProps.data.inventoryStatus" :severity="getSeverity(slotProps.data)" />
                </template>
            </Column>
            <Column header="Прим.">
                <template #body="prime">
                    <Button severity="info" icon="pi pi-info" v-if="prime.data.prim" />
                </template>
            </Column>
            <Column class="w-14">
                <template #body>
                    <div class="flex items-center gap-5">
                        <Button severity="info" icon="pi pi-pencil" />
                        <Button @click="confirm2($event)" severity="danger" icon="pi pi-trash" />
                        <Toast />
                        <ConfirmPopup></ConfirmPopup>
                    </div>
                </template>
            </Column>
        </DataTable>
    </div>
</template>
  
<script setup>
import { ref, onMounted } from 'vue';
import { ProductService } from './requests';
import { useConfirm } from "primevue/useconfirm";
import { useToast } from "primevue/usetoast";

const visible = ref(false)
const confirm = useConfirm();
const toast = useToast();

const confirm2 = (event) => {
    confirm.require({
        target: event.currentTarget,
        message: 'Вы точно хотите удалить?',
        icon: 'pi pi-info-circle',
        acceptClass: 'p-button-danger',
        accept: () => {
            toast.add({ severity: 'success', summary: 'Удалено', detail: 'Успешно удалено!', life: 3000 });
        },
        reject: () => {
            toast.add({ severity: 'error', summary: 'Отменено', detail: 'Процесс оборван', life: 3000 });
        }
    });
};

onMounted(() => {
    ProductService.getProductsMini().then((data) => (products.value = data));
});

const products = ref();
const formatCurrency = (value) => {
    return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
};
const getSeverity = (product) => {
    switch (product.inventoryStatus) {
        case 'Утвержденный':
            return 'success';

        case 'Новый':
            return 'warning';

        case 'Отказанный':
            return 'danger';

        case 'Просроченный':
            return 'danger';

        default:
            return null;
    }
};
</script>