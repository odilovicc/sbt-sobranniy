<template>
    <div class="defaultScreenView">
        <div class="defaultBg">
            <h1 class="headerOfSection">Счета на оплату биржевого сбора</h1>
            <!-- Table start -->
            <div class="py-5">
                <DataTable :value="products" tableStyle="min-width: 50rem">
                    <Column field="number" header="№"></Column>
                    <Column field="group" header="Группа"></Column>
                    <Column field="Number" header="Номер"></Column>
                    <Column field="contract" header="Контракт">
                        <template #body="slotProps">
                            <a href="#" class="text-[--primary-color] block">{{ slotProps.data.contract }}</a>
                            <Tag :value="slotProps.data.contractStatus" :severity="getSeverity(slotProps.data)" />
                        </template>
                    </Column>
                    <Column field="summ" header="Сумма"></Column>
                    <Column field="paymentDeadline" header="Срок оплаты"></Column>
                    <Column>
                        <template #body>
                            <Button icon="pi pi-print" severity="info" />
                        </template>
                    </Column>
                </DataTable>
            </div>
            <!-- Table end -->
        </div>
    </div>
</template>
<style scoped>
@import url('accounts.css');
</style>
<script setup>
import { ref, onMounted } from 'vue';
import { ProductService } from './accounts';

onMounted(() => {
    ProductService.getProductsMini().then((data) => (products.value = data));
});

const products = ref();
const getSeverity = (product) => {
    switch (product.contractStatus) {
        case 'Новый':
            return 'success';

        case 'Просрочен':
            return 'danger';

        default:
            return null;
    }
};

</script>