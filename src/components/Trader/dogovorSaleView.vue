<template>
    <div class="w-[90vw] mx-auto my-10">
        <div class="bg-[#1e1e1e] p-10">
            <div class="flex items-center">
                <h1 class="text-xl font-semibold">Ввод новой заявки</h1>
                <Button label="Вернуться в список" icon="pi pi-arrow-left" class="ml-auto" outlined />
            </div>
            <Message severity="warn">Заполните все поля!</Message>
            <div class="py-5">
                <div class="py-5 flex items-center">
                    <label class="w-1/2">Клиент: <span class="text-red-500">*</span></label>
                    <Dropdown v-model="selectedClient" :options="clients" optionLabel="name" placeholder="Не выбрано"
                        class="w-full md:w-14rem" />
                </div>
                <div class="py-5 flex items-center">
                    <label class="w-1/2">Договор поручениe: <span class="text-red-500">*</span></label>
                    <Dropdown v-model="selectedPorucenie" :options="porucenies" optionLabel="name" placeholder="Не выбрано"
                        class="w-full md:w-14rem" />
                </div>
                <!-- End 2 row -->
                <!-- 2 dropdowns -->
                <div class="flex items-center py-5 gap-12">
                    <div class="w-1/2">
                        <label>Тип торгов: <span class="text-red-500">*</span></label>
                        <Dropdown v-model="selectedType" :options="typesTorg" optionLabel="name" placeholder="Не выбрано"
                            class="w-full mt-5 md:w-14rem" />
                    </div>
                    <div class="w-1/2">
                        <label>Секция торгов: <span class="text-red-500">*</span></label>
                        <Dropdown v-model="selectedSection" :options="sectionTorg" optionLabel="name"
                            placeholder="Не выбрано" class="w-full mt-5 md:w-14rem" />
                    </div>
                </div>
                <!-- 2 dropdowns -->
                <h1 class="text-[--primary-color] text-xl font-semibold my-10">Сведения по товару</h1>
                <div class="flex items-center py-5 gap-12">
                    <div class="w-1/2">
                        <label>Тип торгов: <span class="text-red-500">*</span></label>
                        <Dropdown v-model="selectedType" :options="typesTorg" optionLabel="name" placeholder="Не выбрано"
                            class="w-full mt-5 md:w-14rem" />
                    </div>
                    <div class="w-1/2">
                        <label>Секция торгов: <span class="text-red-500">*</span></label>
                        <Dropdown v-model="selectedSection" :options="sectionTorg" optionLabel="name"
                            placeholder="Не выбрано" class="w-full mt-5 md:w-14rem" />
                    </div>
                </div>
                <div class="flex items-center py-5 gap-12">
                    <div class="w-1/2">
                        <label>Наимирование товара: <span class="text-red-500">*</span></label>
                        <Dropdown v-model="selectedNameTovar" :options="tovarNames" optionLabel="name"
                            placeholder="Не выбрано" class="w-full mt-5 md:w-14rem" />
                    </div>
                    <div class="w-1/2">
                        <label>Марка товара: <span class="text-red-500">*</span></label>
                        <Dropdown v-model="selectedMarka" :options="markas" optionLabel="name" placeholder="Не выбрано"
                            class="w-full mt-5 md:w-14rem" />
                    </div>
                </div>
                <div class="flex items-center py-5 gap-12">
                    <div class="w-1/2">
                        <label>Группа товара: <span class="text-red-500">*</span></label>
                        <Dropdown v-model="selectedGroupTovar" :options="groupsTovar" optionLabel="name"
                            placeholder="Не выбрано" class="w-full mt-5 md:w-14rem" />
                    </div>
                    <div class="w-1/2">
                        <label>ТВНЭД: <span class="text-red-500">*</span></label>
                        <Dropdown v-model="selectedTnved" :options="tnveds" optionLabel="name" placeholder="Не выбрано"
                            class="w-full mt-5 md:w-14rem" />
                    </div>
                </div>
                <div class="py-5">
                    <label class="w-1/2">Наименование <span class="text-red-500">*</span></label>
                    <InputText class="w-full my-5" />
                </div>
                <div class="flex items-center py-5 gap-12">
                    <div class="w-1/2">
                        <label>Тип упаковки: <span class="text-red-500">*</span></label>
                        <Dropdown v-model="selectedTypeBoxing" :options="typeBoxings" optionLabel="name"
                            placeholder="Не выбрано" class="w-full mt-5 md:w-14rem" />
                    </div>
                    <div class="w-1/2">
                        <label>Ед. изм. упаковки: <span class="text-red-500">*</span></label>
                        <Dropdown v-model="selectedTnved" :options="tnveds" optionLabel="name" placeholder="Не выбрано"
                            class="w-full mt-5 md:w-14rem" />
                    </div>
                </div>
                <Divider />

                <div>
                    <div class="flex items-center py-5 gap-5">
                        <div class="w-1/4">
                            <label>Количество <span class="text-red-500">*</span></label>
                            <InputText class="w-full mt-5"></InputText>
                        </div>
                        <div class="w-1/4">
                            <label>Ед изм. <span class="text-red-500">*</span></label>
                            <Dropdown v-model="selectedSizeCurrencyOne" :options="sizeCurrencyOne" optionLabel="name"
                                placeholder="Не выбрано" class="w-full mt-5 md:w-14rem" />
                        </div>
                        <div class="w-1/4">
                            <label>Размер лота <span class="text-red-500">*</span></label>
                            <div class="w-full mt-5">
                                <div class="p-inputgroup flex-1">
                                    <InputText />
                                    <span class="p-inputgroup-addon">шт</span>
                                </div>
                            </div>
                        </div>
                        <div class="w-1/4">
                            <label>Количество лотов <span class="text-red-500">*</span><span
                                    class="text-white text-opacity-50">Automated</span></label>
                            <div class="w-full mt-5">
                                <div class="p-inputgroup flex-1">
                                    <InputText disabled />
                                    <span class="p-inputgroup-addon">шт</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex items-center py-5 gap-5">
                        <div class="w-1/4">
                            <label>Базовая цена <span class="text-red-500">*</span></label>
                            <InputText class="w-full mt-5"></InputText>
                        </div>
                        <div class="w-1/4">
                            <label>Валюта <span class="text-red-500">*</span></label>
                            <Dropdown v-model="selectedCurrency" :options="currencies" optionLabel="name"
                                placeholder="Не выбрано" class="w-full mt-5 md:w-14rem" />
                        </div>
                        <div class="w-1/4">
                            <label>Сумма <span class="text-red-500">*</span><span
                                    class="text-white text-opacity-50">Automated</span></label>
                            <div class="w-full mt-5">
                                <div class="p-inputgroup flex-1">
                                    <InputText disabled />
                                    <span class="p-inputgroup-addon">сум</span>
                                </div>
                            </div>
                        </div>
                        <div class="w-1/4">
                            <label>Форма оплаты <span class="text-red-500">*</span></label>
                            <Dropdown v-model="selectedFormPayment" :options="formsPayment" optionLabel="name" placeholder="Не выбрано" class="mt-5 w-full md:w-14rem" />
                        </div>
                    </div>
                </div>

                <Divider />
                <h1 class="text-[--primary-color] text-xl font-semibold my-10">Базиз поставки</h1>
                <div class="flex items-center py-5 gap-12">
                    <div class="w-1/3">
                        <label>Страна происхождения <span class="text-red-500">*</span></label>
                        <Dropdown v-model="selectedCityHappens" :options="cities" optionLabel="name"
                            placeholder="Не выбрано" class="w-full mt-5 md:w-14rem" />
                    </div>
                    <div class="w-full">
                        <label>Местонахождения товара <span class="text-red-500">*</span></label>
                        <InputText class="w-full mt-5" />
                    </div>
                </div>
                <div class="flex items-center py-5 gap-12">
                    <div class="w-1/3">
                        <label>Базиз поставки</label>
                        <Dropdown v-model="selectedBasisOrdering" :options="orderingBasis" optionLabel="name"
                            placeholder="Не выбрано" class="w-full mt-5 md:w-14rem" />
                    </div>
                    <div class="w-1/3">
                        <label>Вид сделки</label>
                        <Dropdown v-model="selectedTypeTrade" :options="typeTrades" optionLabel="name"
                            placeholder="Не выбрано" class="w-full mt-5 md:w-14rem" />
                    </div>
                    <div class="w-1/3">
                        <label>Срок поставки <span class="text-red-500">*</span></label>
                        <div class="p-inputgroup mt-5 flex-1">
                            <InputNumber />
                            <span class="p-inputgroup-addon">
                                Банк. дней
                            </span>
                        </div>
                    </div>
                    <div class="w-1/3">
                        <label>Срок действия заявки <span class="text-red-500">*</span></label>
                        <div class="p-inputgroup mt-5 flex-1">
                            <InputMask mask="99-99-9999" id="basic" />
                            <Tag icon="pi pi-calendar" severity="info" class="p-3 text-xl" />
                        </div>
                    </div>
                </div>
                <Divider />
                <h1 class="text-[--primary-color] text-xl font-semibold my-10">Дополнительная информация</h1>
                <div class="flex items-center py-5 gap-12">
                    <div class="w-1/2">
                        <label class="">Особые условия (Примечания) <span class="text-red-500">*</span></label>
                        <Textarea v-model="usRus" class="block mt-5 w-full" rows="5" cols="30" />
                    </div>
                    <div class="w-1/2">
                        <label class="">Особые условия (Примечания) (узб) <span class="text-red-500">*</span></label>
                        <Textarea v-model="usUzb" class="block mt-5 w-full" rows="5" cols="30" />
                    </div>
                </div>
                <div class="flex items-center py-5 gap-12">
                    <div class="w-1/2">
                        <label>% залога с продавца</label>
                        <Dropdown v-model="selectedPercentFromSeller" :options="percentSeller" optionLabel="name"
                            placeholder="Не выбрано" class="w-full mt-5 md:w-14rem" />
                    </div>
                    <div class="w-1/2">
                        <label>% залога с покупателя</label>
                        <Dropdown v-model="selectedPercentFromBuyer" :options="percentBuyer" optionLabel="name"
                            placeholder="Не выбрано" class="w-full mt-5 md:w-14rem" />
                    </div>
                </div>
                <Divider />
                <div class="flex py-5 items-center">
                    <h1 classs="text-[--primary-color]">Фото товара</h1>
                    <Button class="ml-auto" icon="pi pi-plus" label="Добавить фото" severity="info" />
                </div>
                <h1 class="text-[--primary-color] italic mb-3">Формат фото jpg. Размер каждого фото - не более 2Мб</h1>
                <div class="flex items-center">
                    <label class="w-1/2">Файл фото</label>
                    <Toast />
                    <FileUpload mode="basic" name="demo[]" url="./upload.php" accept="image/*" class="w-full"
                        :maxFileSize="2000000" @upload="onUpload" chooseLabel="Выбрать" />
                </div>
                <Divider />
                <div class="flex py-5 items-center">
                    <h1 classs="text-[--primary-color]">Товарные позиции заявки</h1>
                    <Button class="ml-auto" icon="pi pi-plus" label="Добавить" severity="info" />
                </div>
                <div class="flex items-center py-5 gap-8">
                    <div>
                        <label>Наименование</label>
                        <InputText class="w-full mt-5" />
                    </div>
                    <div class="w-1/12">
                        <label>Кол-во</label>
                        <InputText class="w-full mt-5" />
                    </div>
                    <div>
                        <label>Ед.изм.</label>
                        <Dropdown v-model="selectedSizeCurrency" :options="sizeCurrency" optionLabel="name"
                            placeholder="Не выбрано" class="w-full mt-5" />
                    </div>
                    <div>
                        <label>Кол-во лотов</label>
                        <InputText class="w-full mt-5" />
                    </div>
                    <div>
                        <label>Цена</label>
                        <InputText class="w-full mt-5" />
                    </div>
                    <div>
                        <label>Сумма</label>
                        <InputText class="w-full mt-5" />
                    </div>
                </div>
                <div class="flex items-center py-5">
                    <label>Код подтверждения действия <span class="text-red-500">*</span></label>
                    <InputText class="w-full" />
                </div>

                <!-- Footer -->

                <div class="flex items-center gap-8 mt-8">
                    <Button label="Отмена" severity="info" />
                    <Button label="Сохранить" severity="success" />
                </div>

                <!-- Footer -->
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from "vue";
const usRus = ref('');
const usUzb = ref('');
import { useToast } from "primevue/usetoast";
const toast = useToast();

const onUpload = () => {
    toast.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded', life: 3000 });
};
const selectedClient = ref();
const clients = ref([
    { name: 'AKUMSHIN SAVDO - 2000025487' },
    { name: 'ООО "DAVRON BOBO" - 2000025487' },
    { name: 'ООО "PLASTEKS" - 2000025487' },
]);
const selectedPorucenie = ref();
const porucenies = ref([
    { name: 'Договор поручениe от 12.12.2020' },
    { name: 'Договор поручениe от 12.04.2020' },
    { name: 'Договор поручениe от 12.01.2020' },
]);
const selectedType = ref();
const typesTorg = ref([
    { name: 'Биржевые торги' },
]);
const selectedSection = ref();
const sectionTorg = ref([
    { name: 'Секция реализации высоколиквидной продукции предприятий-монополистов' },
    { name: 'Секция реализации биржевых товаров, не входящих в перечень высоколиквидной продукции предприятий-монополистов' },
    { name: 'Секция фьючерсной торговли' },
    { name: 'Секция торгов опционами' },
]);
const selectedNameTovar = ref();
const tovarNames = ref([
    { name: 'Сталь прокат плоский нелегированная' },
]);
const selectedMarka = ref();
const markas = ref([
    { name: 'х/к марка стали-DC04EK,толщ 0,60мм, шир 1250мм' },
    { name: 'х/к марка стали-DC01,толщ 0,50мм' },
]);

const selectedGroupTovar = ref();
const groupsTovar = ref([
    { name: 'Технические культуры и продукция их переработки' },
    { name: 'Сельхозпродукция и продукция её переработки' },
    { name: 'Сельхозхимия, химическая продукция' },
    { name: 'Энергоносители' },
    { name: 'Технологические комплексы и мини технологии' },
    { name: 'Сельхозтехника, с/х оборудование, транспорт зап.части' },
    { name: 'Оборудование и продукция произв.технического назначения' },
    { name: 'Металлы, металлопрокат' },
    { name: 'Строительные материалы' },
    { name: 'Целлюлозно-бумажная продукция' },
    { name: 'Текстильная продукция' },
    { name: 'Кабельная продукция и провода' },
    { name: 'Напитки и табачные изделия' },
    { name: 'Компьютеры и оргтехника' },
    { name: 'Товары народного потребления' },
    { name: 'Рабочая спец.одежда' },
    { name: 'Мед.оборудование и лекарственные препараты' },
    { name: 'Недвижимость' },
    { name: 'Ценные бумаги' },
    { name: 'Прочее' },
    { name: 'Работы строительно-монтажные' },
    { name: 'Работы по ремонту оборудования, транспортных средств' },
    { name: 'Переработка сырья' },
    { name: 'Услуги туристические' },
    { name: 'Услуги коммунальные' },
    { name: 'Толинг' },
    { name: 'Услуги транспортные' },
    { name: 'Уральская торговая площадка' },
    { name: 'Челябинская торговая площадка' },
    { name: 'Уфимская торговая площадка' },
]);
const selectedTnved = ref();
const tnveds = ref([
    { name: '0207119000 - Куриное мясо' },
    { name: '040300000  - Молоко' },
    { name: '0407001900 - Куриное яйцо' },
    { name: '071300000  - Горох (ядрица)' },
    { name: '100100000  - Кормовые смеси' },
    { name: '1003900000 - Ячмень' },
    { name: '1206009900 - Семена подсолнечника, дробленые или недробленые' },
    { name: '151800000  - Животные жиры и масла' },
    { name: '230600000  - Шелуха хлопковая' },
    { name: '2309904100 - Комбикорма' },
    { name: '2517410000 - порошок из мрамора' },
]);
const selectedTypeBoxing = ref();
const typeBoxings = ref([
    { name: 'paket' },
    { name: 'автоцистерна' },
    { name: 'баллон' },
    { name: 'банка' },
    { name: 'бочки' },
    { name: 'ж/д цистерны' },
    { name: 'канистра' },
]);

const selectedCityHappens = ref();
const cities = ref([
    { name: 'Узбекистан' },
    { name: 'США' },
    { name: 'Великобритания' },
]);
const selectedBasisOrdering = ref();
const orderingBasis = ref([
    { name: 'EXW - самовывоз' },
    { name: 'FCA' },
    { name: 'FAS' },
    { name: 'FOB' },
    { name: 'CFR' },
    { name: 'CPT' },
]);

const selectedTypeTrade = ref();
const typeTrades = ref([
    { name: 'Спот' },
    { name: 'Фьючерс' },
    { name: 'Форвард' },
    { name: 'Опцион' },
]);
const selectedPercentFromSeller = ref();
const percentSeller = ref([
    { name: '1' },
    { name: '2' },
    { name: '3' },
    { name: '4' },
    { name: '5' },
    { name: '6' },
    { name: '7' },
    { name: '8' },
    { name: '9' },
    { name: '10' },
]);
const selectedPercentFromBuyer = ref();
const percentBuyer = ref([
    { name: '1' },
    { name: '2' },
    { name: '3' },
    { name: '4' },
    { name: '5' },
    { name: '6' },
    { name: '7' },
    { name: '8' },
    { name: '9' },
    { name: '10' },
]);
const selectedSizeCurrency = ref();
const sizeCurrency = ref([
    { name: 'шт' },
    { name: 'грамм' },
    { name: 'кв.метр' },
    { name: 'килограмм' },
    { name: 'куб.метр' },
    { name: 'литр' },
    { name: 'тонна' },
])
const selectedSizeCurrencyOne = ref();
const sizeCurrencyOne = ref([
    { name: 'шт' },
    { name: 'грамм' },
    { name: 'кв.метр' },
    { name: 'килограмм' },
    { name: 'куб.метр' },
    { name: 'литр' },
    { name: 'тонна' },
])
const selectedCurrency = ref();
const currencies = ref([
    { name: 'доллар' },
    { name: 'сум' },
    { name: 'евро' },
])
const selectedFormPayment = ref();
const formsPayment = ref([
    { name: 'б/н' },
    { name: 'аккредетив' },
    { name: 'Банковская гарантия' },
    { name: 'Страховой полис' },
    { name: 'Гарантия доверителя' },
])
</script>
<style scoped>
.p-fileupload {
    width: 100%;
}
</style>