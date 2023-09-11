<template>
    <div class="w-[90vw] mx-auto my-10">
        <div class="flex gap-12">
            <div class="bg-[#1E1E1E] py-5 rounded-md shadow-xl">
                <header class="px-10 py-3 flex items-center">
                    <h1 class="font-medium text-xl">Просмотр биржевого контракта</h1>
                    <Button label="Вернуться в список" icon="pi pi-arrow-left" text class="ml-auto" />
                </header>
                <div class="px-10 py-5 ">
                    <table class="table w-full">
                        <tbody>
                            <tr>
                                <td class="py-2 pr-5 pl-2  bg-[#CE93D8]">Контракт</td>
                                <td class=" pl-2 ">№ 359/3 от 12.03.2020 г.</td>
                                <td class="py-2 pr-5 pl-2  bg-[#CE93D8]">Статус</td>
                                <td class=" pl-2 ">на бирже</td>
                            </tr>
                            <tr>
                                <td class="py-2 pr-5 pl-2  bg-[#CE93D8]">Место регистрации</td>
                                <td class=" pl-2">AJ "Respublika ko'p tarmoqli agrosanoat birjasi"</td>
                                <td class="py-2 pr-5 pl-2  bg-[#CE93D8]">Тип торгов</td>
                                <td class=" pl-2 ">Биржевые торги</td>
                            </tr>
                            <tr>
                                <td class="py-2 pr-5 pl-2  bg-[#CE93D8]">№ протокола торгов</td>
                                <td class=" pl-2 ">12</td>
                                <td class="py-2 pr-5 pl-2  bg-[#CE93D8]">Дата торгов</td>
                                <td class=" pl-2 ">17.01.2020 г.</td>
                            </tr>
                            <tr>
                                <td class="py-2 pr-5 pl-2  bg-[#CE93D8]">Вид сделок</td>
                                <td class=" pl-2 ">Спот</td>
                                <td class="py-2 pr-5 pl-2  bg-[#CE93D8]">Тип сделок</td>
                                <td class=" pl-2 ">Внутренний</td>
                            </tr>
                            <tr>
                                <td class="py-2 pr-5 pl-2  bg-[#CE93D8]">БК продавца</td>
                                <td class=" pl-2 ">214 - MChJ "YOG`-MOY SAVDO"</td>
                                <td class="py-2 pr-5 pl-2  bg-[#CE93D8]">БК покупателя</td>
                                <td class=" pl-2 ">471 - XK "SAIDMUROD INVEST"</td>
                            </tr>
                            <tr>
                                <td class="py-2 pr-5 pl-2  bg-[#CE93D8]">Трейдер-продавец</td>
                                <td class=" pl-2 ">Исмаилов Азиз Яхъяевич</td>
                                <td class="py-2 pr-5 pl-2  bg-[#CE93D8]">Трейдер-покупатель</td>
                                <td class=" pl-2 ">Kabulov Saidmurod Ergashovich</td>
                            </tr>
                            <tr>
                                <td class="py-2 pr-5 pl-2  bg-[#CE93D8]">Сумма</td>
                                <td class=" pl-2 " colspan="3">17 500 000,00 сум</td>
                            </tr>
                            <tr>
                                <td class="py-2 pr-5 pl-2  bg-[#CE93D8]">Товар</td>
                                <td class=" pl-2 " colspan="3">Шрот хлопковый</td>
                            </tr>
                            <tr>
                                <td class="py-2 pr-5 pl-2  bg-[#CE93D8]">Внешняя ссылка</td>
                                <td class=" pl-2 " colspan="3">
                                    https://agrobirja.uz/sebt/public/contract.php?contract=a8aece0882371f438c829bccb995a927
                                </td>
                            </tr>
                            <tr>
                                <th colspan="4">Стороны биржевого контракта</th>
                            </tr>
                            <tr>
                                <td class="py-2 pr-5 pl-2  bg-[#CE93D8]">Продавец</td>
                                <td class=" pl-2 ">Paxtakor Sifat Yog MCHJ</td>
                                <td class="py-2 pr-5 pl-2  bg-[#CE93D8]">Покупатель</td>
                                <td class=" pl-2 ">"QAYIRMA AGRO LYUKS" fermer xo`jaligi</td>
                            </tr>
                            <tr>
                                <td class="py-2 pr-5 pl-2  bg-[#CE93D8]">Биржевой сбор</td>
                                <td class=" pl-2 ">52 500,00 сум (0.3%)</td>
                                <td class="py-2 pr-5 pl-2  bg-[#CE93D8]">Биржевой сбор</td>
                                <td class=" pl-2 ">0,00</td>
                            </tr>
                            <tr>
                                <td class="py-2 pr-5 pl-2  bg-[#CE93D8]">Статус</td>
                                <td class="pl-2">
                                    <Tag value="действующий" severity="warning" />
                                </td>
                                <td class="py-2 pr-5 pl-2  bg-[#CE93D8]">Статус</td>
                                <td class="pl-2">
                                    <Tag value="закрытый" severity="success" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="rounded-md shadow-xl mt-14">
            <header class="px-10 py-3 flex items-center">
                <h1 class="font-medium text-xl">Начисления по контракту</h1>
                <Toast />
                <ConfirmDialog></ConfirmDialog>
                <Button label="Вывод средств" text class="ml-auto" @click="confirm1()" />
            </header>
            <hr>
            <DataTable :value="products" class="mt-14" tableStyle="min-width: 50rem">
                <Column field="number" header="№"></Column>
                <Column field="typePayment" header="Вид начисления"></Column>
                <Column field="for" header="Кому">
                    <template #body="payMent">
                        <h1>{{ payMent.data.for }}</h1>
                        <Tag :value="payMent.data.forWho"></Tag>
                    </template>
                </Column>
                <Column field="forPayment" header="К оплате">
                    <template #body="payMent">
                        <h1>{{ payMent.data.forPayment }}</h1>
                        <Tag :value="payMent.data.numberAccount" />
                    </template>
                </Column>
                <Column field="paid" header="Оплачено"></Column>
                <Column field="percent" header="%"></Column>
                <Column>
                    <template #body>

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
            nodes: null
        };
    },
    mounted() {
        NodeService.getTreeNodes().then((data) => (this.nodes = data));
    }
}
</script>
<script setup>
import { ref, onMounted } from 'vue';
import { ProductService } from './paymentsContact';
import { useToast } from "primevue/usetoast";
import { useConfirm } from "primevue/useconfirm";

const confirm = useConfirm();

const confirm1 = () => {
    confirm.require({
        message: 'Are you sure you want to proceed?',
        header: 'Confirmation',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            toast.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
        },
        reject: () => {
            toast.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
        }
    });
};
onMounted(() => {
    ProductService.getProductsMini().then((data) => (products.value = data));
});

const products = ref();
const getSeverity = (product) => {
    switch (product.paymentStatus) {
        case 'Оплачен':
            return 'success';

        case 'В процессе':
            return 'warning';

        case 'OUTOFSTOCK':
            return 'danger';

        default:
            return null;
    }
};
// Dialog
const visible = ref(false);

// Dropdown
const selectedCity = ref();
const paymentFor = ref();
const cities = ref([
    { name: 'MChJ "YOG`-MOY SAVDO" (продавец)' },
    { name: 'OOO "PRESTIJ RILT" (покупатель)', }
]);
const paymentForOptions = ref([
    { name: 'Товары' },
    { name: 'Биржевой сбор РКП' },
    { name: 'Биржевой сбор' },
    { name: 'Штраф' },
    { name: 'Прочее' },
]);

// Radio Button
// Не забудь импортировать { ref }
const ingredient = ref('');

// Toast
const toast = useToast();

const show = () => {
    toast.add({ severity: 'success', summary: 'Успешно сохранено', detail: 'Счёт успешно сохранено', life: 3000 });
};
</script>