<template>
    <div>
        <h1 class="text-2xl font-semibold">Список моих аукционов</h1>
        <p class="text-xl">{{ time }} <span class="text-red-500">2-ая торговая сессия</span></p>
        <div class="my-10">
            <DataTable :value="products" tableStyle="min-width: 50rem">
                <Column field="number" header="№"></Column>
                <Column field="position" header="Поз."></Column>
                <Column field="production" header="Товар">
                    <template #body="slotProps">
                        <a href="/broker/auctions/auctionsView">{{ slotProps.data.production }}</a>
                        <span class="text-red-500">{{ slotProps.data.productionType }}</span>
                    </template>
                </Column>
                <Column field="uki" header="У-ки"></Column>
                <Column field="client" header="Клиент"></Column>
                <Column field="yourPrice" header="Ваша цена"></Column>
                <Column field="normPrice" header="Нынешная цена товара">
                    <template #body="slotProps">
                        <h1 :class="goodPriceClass(slotProps.data.goodPrice)">{{ slotProps.data.normPrice }}</h1>
                    </template>
                </Column>
                <Column header="Купить" class="w-max">
                    <template #body>
                        <div class="p-inputgroup">
                            <InputText />
                            <Button class="p-inputgroup-addon" label="Подтверждение" severity="info" />
                        </div>
                    </template>
                </Column>
                <Column class="w-14">
                    <template #body>
                        <a href="/broker/auctions/view"><Button severity="warning" icon="pi pi-eye" /></a>
                    </template>
                </Column>
            </DataTable>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            time: ''
        }
    },
    methods: {
        goodPriceClass(goodPrice) {
            return goodPrice ? 'text-green-500' : 'text-red-500'
        }
    },
    mounted() {
        setInterval(() => {
            this.time = new Date().toLocaleTimeString()
        }, 1000)
    }
}
</script>
<script setup>
import { ref, onMounted } from 'vue';
import { ProductService } from './auctions';

onMounted(() => {
    ProductService.getProductsMini().then((data) => (products.value = data));
});

const products = ref();
</script>