<template>
    <div>
        <div class="rounded-md h-max p-10">
            <h1 class="title my-10">Договор поручение</h1>
            <DataTable :value="products" tableStyle="min-width: 50rem">
                <Column field="number" header="№"></Column>
                <Column field="client" header="Клиент"></Column>
                <Column field="date" header="Срок"></Column>
                <Column header="Статус">
                    <template #body="slotProps">
                        <Tag :value="slotProps.data.traderStatus" :severity="getSeverity(slotProps.data)" />
                    </template>
                </Column>
                <Column>
                    <template #body>
                        <a href="/trader/newrequest"><Button icon="pi pi-upload" severity="info" /></a>
                    </template>
                </Column>
            </DataTable>
        </div>
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import { ProductService } from './dogovorSale';

onMounted(() => {
    ProductService.getProductsMini().then((data) => (products.value = data));
});

const products = ref();
const formatCurrency = (value) => {
    return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
};
const getSeverity = (product) => {
    switch (product.traderStatus) {
        case 'Новый':
            return 'success';

        case 'Использован':
            return 'danger';

        default:
            return null;
    }
};

</script>