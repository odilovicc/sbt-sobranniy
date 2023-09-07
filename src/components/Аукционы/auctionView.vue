<template>
    <div class="flex gap-14 p-10">
        <div class="w-[70vw] mx-auto ">
            <div class="px-10 py-4 flex items-center">
                <a href="/broker/auctions"><Button icon="pi pi-arrow-left" label="Вернуться в список" href="/broker/auctions" /></a>
                <h1 class="ml-auto font-semibold text-xl">Хлопоковое волокно 1 сорт, олий, 4-тип урожай 2019 года</h1>
            </div>
            <Divider/>
            <div v-for="item in items" class="px-12">
                <div class="mx-auto w-full  py-8 flex items-center">
                    <h1 class="w-1/2">№ заявки</h1>
                    <h1 class="w-full ">{{ item.numberRequest }}</h1>
                </div>
                <div class="mx-auto w-full  py-8 flex items-center">
                    <h1 class="w-1/2">№ Поз</h1>
                    <h1 class="w-full ">{{ item.numberPosition }}</h1>

                </div>
                <div class="mx-auto w-full  py-8 flex items-center">
                    <h1 class="w-1/2">Группа товаров</h1>
                    <h1 class="w-full ">{{ item.groupItems }}</h1>

                </div>
                <div class="mx-auto w-full  py-8 flex items-center">
                    <h1 class="w-1/2">ТНВЭД</h1>
                    <h1 class="w-full ">{{ item.tnved }}</h1>

                </div>
                <div class="mx-auto w-full  py-8 flex items-center">
                    <h1 class="w-1/2">Вид сделки</h1>
                    <h1 class="w-full ">{{ item.tradeView }}</h1>
                </div>
                <div class="mx-auto w-full  py-8 flex items-center">
                    <h1 class="w-1/2">Тип упаковки:</h1>
                    <h1 class="w-full ">{{ item.typeBoxing }}</h1>
                </div>
                <div class="mx-auto w-full  py-8 flex items-center">
                    <h1 class="w-1/2">Ед. изм. упаковки:</h1>
                    <h1 class="w-full ">{{ item.boxingCurrency }}</h1>
                </div>
                <div class="mx-auto w-full  py-8 flex items-center">
                    <h1 class="w-1/2">Кол-во:</h1>
                    <h1 class="w-full ">{{ item.size }}</h1>
                </div>
                <div class="mx-auto w-full  py-8 flex items-center">
                    <h1 class="w-1/2">Размер лота:</h1>
                    <h1 class="w-full ">{{ item.lotSize }}</h1>
                </div>
                <div class="mx-auto w-full  py-8 flex items-center">
                    <h1 class="w-1/2">Количество лотов:</h1>
                    <h1 class="w-full ">{{ item.sumLots }}</h1>
                </div>
                <h1 class="text-[--primary-color] text-xl font-semibold text-center my-5">Ограничения покупки</h1>
                <div class="mx-auto w-full  py-8 flex items-center">
                    <h1 class="w-1/2">Мин. цена</h1>
                    <h1 class="w-full">{{ item.minPrice }}</h1>
                </div>
                <div class="mx-auto w-full  py-8 flex items-center">
                    <h1 class="w-1/2">Макс. цена</h1>
                    <h1 class="w-full">{{ item.maxPrice }}</h1>
                </div>
                <h1 class="text-[--primary-color] text-xl font-semibold text-center my-5">Укажите своё предложение</h1>
                <div class="mx-auto w-full  py-8 flex items-center">
                    <h1 class="w-1/2">Тип сделки:</h1>
                    <h1>{{ item.vidTrade }}</h1>
                </div>
                <div class="mx-auto w-full  py-8 flex items-center">
                    <h1 class="w-1/2">Клиент:</h1>
                    <h1>{{ item.client }}</h1>
                </div>
                <div class="mx-auto w-full  py-8 flex items-center">
                    <h1 class="w-1/2">Кол-во лотов:</h1>
                    <h1>{{ item.lotSize }}</h1>
                </div>
                <div class="mx-auto w-full  py-8 flex items-center">
                    <h1 class="w-1/2">Кол-во:</h1>
                    <h1>{{ item.size }}</h1>
                </div>
                <div class="mx-auto w-full  py-8 flex items-center">
                    <h1 class="w-1/2">Указание по цене:</h1>
                    <h1>{{ item.usloviePrice }}</h1>
                </div>
                <div class="mx-auto w-full  py-8 flex items-center">
                    <h1 class="w-1/2">Цена:</h1>
                    <InputText class="w-full" :value="item.priceValue" />
                </div>
                <div class="mx-auto w-full  py-8 flex items-center">
                    <h1 class="w-1/2">Сумма:</h1>
                    <h1>{{ item.sum }}</h1>
                </div>
                <Button class="w-full my-10" label="Купить" />
            </div>
        </div>
        <div class="w-[30vw] p-10 h-max">
            <h1 class="text-xl font-semibold mb-5">Список предложений</h1>
            <DataTable :value="products" striped-rows>
                <Column field="time" header="Время"></Column>
                <Column field="sizeRequests" header="Кол-во"></Column>
                <Column field="priceRequest" header="Цена"></Column>
            </DataTable>
        </div>
    </div>
</template>
<script>
import { data } from './auctionView';
export default {
    data() {
        return {
            items: data,
        };
    },
};
</script>
<script setup>
import { ref, onMounted } from 'vue';
import { ProductService } from './offerToBuy';

onMounted(() => {
    ProductService.getProductsMini().then((data) => (products.value = data));
});

const products = ref();
</script>
<style>
@import url('../../assets/tailwind.css');
</style>