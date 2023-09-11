<template>
    <div>
        <h1 class="text-xl font-semibold">Список утвержденных заявок</h1>
        <DataTable :value="products" tableStyle="min-width: 50rem">
            <Column field="number" header="№"></Column>
            <Column field="position" header="Поз"></Column>
            <Column field="nameRequest" header="Наименование">
                <template #body="slotProps">
                    <div>
                        <a href="/broker/buliten/bulitenView" class="transition duration-200 hover:text-[--primary-color]">{{ slotProps.data.nameRequest }}</a>
                        <h1 class="text-red-500">{{ slotProps.data.detailRequest }}</h1>
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
                    <Button severity="info" icon="pi pi-info" v-if="prime.data.prim" @click="visible = true" />
                    
                    <Dialog v-model:visible="visible" modal header="Header" :style="{ width: '50vw' }">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </Dialog>
                </template>
            </Column>
        </DataTable>
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import { ProductService } from './buliten';

onMounted(() => {
    ProductService.getProductsMini().then((data) => (products.value = data));
});
const visible = ref(false)
const products = ref();
const getSeverity = (product) => {
    switch (product.inventoryStatus) {
        case 'Новый':
            return 'success';

        case 'Купленные':
            return 'success';

        case 'В торге':
            return 'warning';

        case 'OUTOFSTOCK':
            return 'danger';

        default:
            return null;
    }
};

</script>