<template>
    <div >
        <div class="defaultBg">
            <h1 class="headerOfSection mb-5">Реестр оплаченных сделок</h1>
            <DataTable :value="products" scrollable class="">
                <Column field="numberAgreement" header="№ Договора"></Column>
                <Column field="client" header="Покупатель">
                    <template #body="slotProps">
                        <h1>{{ slotProps.data.client }}</h1>
                        <h1 class="requestFromJS w-max">{{ slotProps.data.bkNumber }}</h1>
                    </template>
                </Column>
                <Column field="item" header="Товар">
                    <template #body="slotProps">
                        <a href="#">{{ slotProps.data.item }}</a>
                        <h1 class="requestFromJS w-max">{{ slotProps.data.datePutting }}</h1>
                    </template>
                </Column>
                <Column field="sum" header="Сумма">
                    <template #body="slotProps">
                        <h1>{{ slotProps.data.sum }}</h1>
                        <h1 class="requestFromJS w-max">{{ slotProps.data.currency }}</h1>

                    </template>
                </Column>
                <Column field="summa" header="Сумма">
                    <template #body="slotProps">
                        <h1>{{ slotProps.data.summa }}</h1>
                        <h1 class="requestFromJS w-max">{{ slotProps.data.currency }}</h1>

                    </template>
                </Column>
                <Column field="percent" header="%"></Column>
                <Column field="freeBudget" header="Свобод. ср-ства">
                    <template #body="slotProps">
                        <h1>{{ slotProps.data.freeBudget }}</h1>
                        <h1 class="requestFromJS w-max">{{ slotProps.data.currency }}</h1>

                    </template>
                </Column>
                <Column field="summ" header="Сумма">
                    <template #body="slotProps">
                        <h1>{{ slotProps.data.summ }}</h1>
                        <h1 class="requestFromJS w-max">{{ slotProps.data.currency }}</h1>

                    </template>
                </Column>
                <Column field="price" header="Цена">
                    <template #body="slotProps">
                        <h1>{{ slotProps.data.price }}</h1>
                        <h1 class="requestFromJS w-max">{{ slotProps.data.currency }}</h1>

                    </template>
                </Column>
                <Column field="realise" header="Релиз">
                    <template #body="slotProps">
                        <h1>{{ slotProps.data.realise }}</h1>
                        <h1 class="requestFromJS w-max">{{ slotProps.data.currency }}</h1>

                    </template>
                </Column>
                <Column field="ostatok" header="Остаток">
                    <template #body="slotProps">
                        <h1>{{ slotProps.data.ostatok }}</h1>
                        <h1 class="requestFromJS w-max">{{ slotProps.data.currency }}</h1>

                    </template>
                </Column>

                <Column header="Статус">
                    <template #body="slotProps">
                        <Tag :value="slotProps.data.status" :severity="getSeverity(slotProps.data)" />
                    </template>
                </Column>
            </DataTable>
        </div>
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import { ProductService } from './registerTrades';

onMounted(() => {
    ProductService.getProductsMini().then((data) => (products.value = data));
});

const products = ref();
const formatCurrency = (value) => {
    return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
};
const getSeverity = (product) => {
    switch (product.status) {
        case 'Закрытый':
            return 'success';

        case 'действующий':
            return 'warning';
        default:
            return null;
    }
};

</script>
<style scoped>
@import url('registerTrades.css');
</style>