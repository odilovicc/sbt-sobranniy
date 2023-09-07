<template>
    <div class="w-[90vw] rounded-md mx-auto my-10 bg-[#1e1e1e]">
        <div class="px-12 py-4 border-b-2 border-[#393939] bg-inherit">
            <div class="flex items-center">
                <Button label="Вернуться в список" severity="info" outlined icon="pi pi-arrow-left" />
                <h1 class="text-2xl font-semibold ml-auto">Хлопоковое волокно 1 сорт, олий, 4-тип урожай 2019 года</h1>
            </div>
        </div>
        <div v-for="item in items">
            <div class="mx-auto w-full px-12 py-8 flex items-center">
                <h1 class="w-1/2">№ заявки</h1>
                <h1 class="w-full ">{{ item.numberRequest }}</h1>

            </div>
            <div class="mx-auto w-full px-12 py-8 flex items-center">
                <h1 class="w-1/2">№ Поз</h1>
                <h1 class="w-full ">{{ item.numberPosition }}</h1>

            </div>
            <div class="mx-auto w-full px-12 py-8 flex items-center">
                <h1 class="w-1/2">Группа товаров</h1>
                <h1 class="w-full ">{{ item.groupItems }}</h1>

            </div>
            <div class="mx-auto w-full px-12 py-8 flex items-center">
                <h1 class="w-1/2">ТНВЭД</h1>
                <h1 class="w-full ">{{ item.tnved }}</h1>

            </div>
            <div class="mx-auto w-full px-12 py-8 flex items-center">
                <h1 class="w-1/2">Вид сделки</h1>
                <h1 class="w-full ">{{ item.tradeView }}</h1>
            </div>
            <div class="mx-auto w-full px-12 py-8 flex items-center">
                <h1 class="w-1/2">Тип упаковки:</h1>
                <h1 class="w-full ">{{ item.typeBoxing }}</h1>
            </div>
            <div class="mx-auto w-full px-12 py-8 flex items-center">
                <h1 class="w-1/2">Ед. изм. упаковки:</h1>
                <h1 class="w-full ">{{ item.boxingCurrency }}</h1>
            </div>
            <div class="mx-auto w-full px-12 py-8 flex items-center">
                <h1 class="w-1/2">Кол-во:</h1>
                <h1 class="w-full ">{{ item.size }}</h1>
            </div>
            <div class="mx-auto w-full px-12 py-8 flex items-center">
                <h1 class="w-1/2">Размер лота:</h1>
                <h1 class="w-full ">{{ item.lotSize }}</h1>
            </div>
            <div class="mx-auto w-full px-12 py-8 flex items-center">
                <h1 class="w-1/2">Количество лотов:</h1>
                <h1 class="w-full ">{{ item.sumLots }}</h1>
            </div>
            <div class="mx-auto w-full px-12 py-8 flex items-center">
                <h1 class="w-1/2">Базовая цена:</h1>
                <h1 class="w-full ">{{ item.basePrice }}</h1>
            </div>
            <div class="mx-auto w-full px-12 py-8 flex items-center">
                <h1 class="w-1/2">Сумма:</h1>
                <h1 class="w-full ">{{ item.allSum }}</h1>
            </div>
            <h1 class="text-[--primary-color] text-xl font-semibold text-center my-5">Базис поставки</h1>
            <div class="mx-auto w-full px-12 py-8 flex items-center">
                <h1 class="w-1/2">Страна происхождение</h1>
                <h1 class="w-full">{{ item.countryHappening }}</h1>
            </div>
            <div class="mx-auto w-full px-12 py-8 flex items-center">
                <h1 class="w-1/2">Место нахождения товара</h1>
                <h1 class="w-full">{{ item.itemAdress }}</h1>
            </div>
            <div class="mx-auto w-full px-12 py-8 flex items-center">
                <h1 class="w-1/2">Базиз поставки</h1>
                <h1 class="w-full">{{ item.basisOrdering }}</h1>
            </div>
            <div class="mx-auto w-full px-12 py-8 flex items-center">
                <h1 class="w-1/2">Срок поставки</h1>
                <h1 class="w-full">{{ item.srokOrdering }}</h1>
            </div>
            <div class="mx-auto w-full px-12 py-8 flex items-center">
                <h1 class="w-1/2">Вид сделки</h1>
                <h1 class="w-full">{{ item.viewSdelka }}</h1>
            </div>
            <h1 class="text-[--primary-color] text-xl font-semibold text-center my-5">Ограничения покупки</h1>
            <div class="mx-auto w-full px-12 py-8 flex items-center">
                <h1 class="w-1/2">Мин. цена</h1>
                <h1 class="w-full">{{ item.minPrice }}</h1>
            </div>
            <div class="mx-auto w-full px-12 py-8 flex items-center">
                <h1 class="w-1/2">Макс. цена</h1>
                <h1 class="w-full">{{ item.maxPrice }}</h1>
            </div>
            <h1 class="text-[--primary-color] text-xl font-semibold text-center my-5">Дополнительная информация</h1>
            <div class="mx-auto w-full px-12 py-8 flex items-center">
                <h1 class="w-1/2">% залога с продавца</h1>
                <h1 class="w-full">{{ item.percentFromSeller }}</h1>
            </div>
            <div class="mx-auto w-full px-12 py-8 flex items-center">
                <h1 class="w-1/2">% залога с покупателя</h1>
                <h1 class="w-full">{{ item.percentFromBuyer }}</h1>
            </div>
            <div class="mx-auto w-full px-12 py-8 flex items-center">
                <h1 class="w-1/2">Особые условие</h1>
                <h1 class="w-full">{{ item.uslovie }}</h1>
            </div>
            <h1 class="text-[--primary-color] text-xl font-semibold text-center my-5">Фото Товара</h1>
            <div class="flex items-center justify-center py-10 gap-10">
                <div class="p-10 bg-[#1b1b1b]">
                    <img :src="src" class="w-full" alt="">
                    <h1 class="text-2xl font-semibold text-center my-5">{{ name }}</h1>
                </div>
                <div class="p-10 bg-[#1b1b1b]">
                    <img :src="src" class="w-full" alt="">
                    <h1 class="text-2xl font-semibold text-center my-5">{{ name }}</h1>
                </div>
                <div class="p-10 bg-[#1b1b1b]">
                    <img :src="src" class="w-full" alt="">
                    <h1 class="text-2xl font-semibold text-center my-5">{{ name }}</h1>
                </div>
            </div>
        </div>
        <form action="" class="px-10">
            <h1 class="text-[--primary-color] text-xl font-semibold text-center my-5">Подать заявку на участие в торгах</h1>
            <div class="py-5 flex items-center">
                <label for="#" class="w-1/2">Тип сделки: <span class="text-red-500">*</span></label>
                <Dropdown v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Не выбрано"
                    class="w-full md:w-14rem" />
            </div>
            <div class="py-5 flex items-center">
                <label for="#" class="w-1/2">Брокер: <span class="text-red-500">*</span></label>
                <Dropdown v-model="selectedBroker" :options="brokers" optionLabel="name" placeholder="Не выбрано"
                    class="w-full md:w-14rem" />
            </div>
            <div class="py-5 flex items-center">
                <label class="w-1/2">Кол-во лотов: <span class="text-red-500">*</span></label>
                <InputText class="w-full"/>
            </div>
            <div class="py-5 flex items-center">
                <label class="w-1/2">Минимальная цена: <span class="text-red-500">*</span></label>
                <InputText class="w-full"/>
            </div>
            <div class="py-5 flex items-center">
                <label class="w-1/2">Максимальная цена: <span class="text-red-500">*</span></label>
                <InputText class="w-full"/>
            </div>
            <Button type="Submit" label="Отправить заявку" class="w-full my-10" outlined />
        </form>
    </div>
</template>
  
<script>
import { data } from '@/assets/js/Broker/builtenView';
import { imgSource } from '@/assets/js/Broker/builtenView';
import { imgName } from '@/assets/js/Broker/builtenView'
export default {
    data() {
        return {
            items: data,
            src: imgSource,
            name: imgName
        };
    },
};

</script>
<script setup>
import { ref } from "vue";

const selectedCity = ref();
const cities = ref([
    { name: 'Внутренный' },
    { name: 'Экспорт' },
    { name: 'Импорт' },
    { name: 'Транзит' },
    { name: 'Экспорт без вывоза' },
]);
const selectedBroker = ref();
const brokers = ref([
    { name: 'bk123 - AKUMSHIN SAVDO' },
    { name: 'bk444 - "DAVRON BOBO"' },
    { name: 'bk321 - "PLASTEKS"' },
]);
</script>