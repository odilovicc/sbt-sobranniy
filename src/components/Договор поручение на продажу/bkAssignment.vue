<template>
    <div class="w-[90vw] mx-auto my-10">
        <h1 class="text-2xl font-semibold my-10">Договор поручение</h1>
        <div class="flex justify-center gap-12">
            <div class="request">
                <Card @click="tableVisible = true" :value="products" class="aboutCompanyCard">
                <template #content>
                    <h1 class="text-2xl">"Some Company"</h1>
                    <div class="animationDiv">
                    </div>
                </template>
            </Card>
            <Dialog v-model:visible="tableVisible" modal header="Header" :style="{ width: '50vw' }">
                <DataTable :value="products" tableStyle="min-width: 50rem" header="Договор поручение">
                    <Column field="number" header="№"></Column>
                    <Column field="client" header="Клиент"></Column>
                    <Column field="date" header="Срок"></Column>
                    <Column header="Status">
                        <template #body="slotProps">
                            <Tag :value="slotProps.data.assignmentStatus" :severity="getSeverity(slotProps.data)" />
                        </template>
                    </Column>
                    <Column class="w-14">
                        <template #body>
                            <Button icon="pi pi-trash" severity="info" @click="visible = true" />
                            <Dialog v-model:visible="visible" modal :style="{ width: '50vw' }">
                                <div class="flex items-center justify-center px-5 gap-12">
                                    <div class="w-1/2 bg-[rgb(23,23,23)] rounded-md py-10">
                                        <img src="http://213.230.99.183:444/sebt/img/pdf.svg" class="w-1/3 mx-auto" alt="">
                                        <h1 class="text-2xl font-medium text-center mt-12">Складская справка</h1>
                                    </div>
                                    <div class="w-1/2 bg-[rgb(23,23,23)] rounded-md py-10">
                                        <img src="http://213.230.99.183:444/sebt/img/doc.svg" class="w-1/3 mx-auto" alt="">
                                        <h1 class="text-2xl font-medium text-center mt-12">Гарантийное письмо</h1>
                                    </div>
                                </div>
                                <div class="px-6">
                                    <div class="py-5 flex items-center">
                                        <label for="client" class="w-1/2">Клиент <span class="text-red-500">*</span></label>
                                        <InputText class="w-1/2 mr-auto" />
                                    </div>
                                    <div class="py-5 flex items-center">
                                        <label for="client" class="w-full">Трейдер <span
                                                class="text-red-500">*</span></label>
                                        <Dropdown v-model="selectedCity" :options="cities" optionLabel="name"
                                            placeholder="Выберите" class="w-full md:w-14rem" />
                                    </div>
                                </div>
                                <template #footer>
                                    <Button label="Отмена" severity="info" />
                                    <Button label="Сохранить" severity="success" @click="show()" />
                                    <Toast />
                                </template>
                            </Dialog>
                        </template>
                    </Column>
                </DataTable>
            </Dialog>
            </div>
            <div class="request">
                <Card @click="yourTable = true" :value="products" class="aboutCompanyCard">
                    <template #content>
                        <h1 class="text-2xl">"Some Company"</h1>
                        <div class="animationDiv">
                        </div>
                    </template>
                </Card>
                <Dialog modal v-model:visible="yourTable">
                    <DataTable :value="products" tableStyle="min-width: 50rem" header="Договор поручение">
                        <Column field="number" header="№"></Column>
                        <Column field="client" header="Клиент"></Column>
                        <Column field="date" header="Срок"></Column>
                        <Column header="Status">
                            <template #body="slotProps">
                                <Tag :value="slotProps.data.assignmentStatus" :severity="getSeverity(slotProps.data)" />
                            </template>
                        </Column>
                        <Column class="w-14">
                            <template #body>
                                <Button icon="pi pi-trash" severity="info" @click="visible = true" />
                                <Dialog v-model:visible="visible" modal :style="{ width: '50vw' }">
                                    <div class="flex items-center justify-center px-5 gap-12">
                                        <div class="w-1/2 bg-[rgb(23,23,23)] rounded-md py-10">
                                            <img src="http://213.230.99.183:444/sebt/img/pdf.svg" class="w-1/3 mx-auto"
                                                alt="">
                                            <h1 class="text-2xl font-medium text-center mt-12">Складская справка</h1>
                                        </div>
                                        <div class="w-1/2 bg-[rgb(23,23,23)] rounded-md py-10">
                                            <img src="http://213.230.99.183:444/sebt/img/doc.svg" class="w-1/3 mx-auto"
                                                alt="">
                                            <h1 class="text-2xl font-medium text-center mt-12">Гарантийное письмо</h1>
                                        </div>
                                    </div>
                                    <div class="px-6">
                                        <div class="py-5 flex items-center">
                                            <label for="client" class="w-1/2">Клиент <span
                                                    class="text-red-500">*</span></label>
                                            <InputText class="w-1/2 mr-auto" />
                                        </div>
                                        <div class="py-5 flex items-center">
                                            <label for="client" class="w-full">Трейдер <span
                                                    class="text-red-500">*</span></label>
                                            <Dropdown v-model="selectedCity" :options="cities" optionLabel="name"
                                                placeholder="Выберите" class="w-full md:w-14rem" />
                                        </div>
                                    </div>
                                    <template #footer>
                                        <Button label="Отмена" severity="info" />
                                        <Button label="Сохранить" severity="success" @click="show()" />
                                        <Toast />
                                    </template>
                                </Dialog>
                            </template>
                        </Column>
                    </DataTable>
                </Dialog>
            </div>
        </div>

    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import { ProductService } from './bkAssignment';

const tableVisible = ref(false);
const yourTable = ref(false)
onMounted(() => {
    ProductService.getProductsMini().then((data) => (products.value = data));
});

const products = ref();
const visible = ref(false)
const getSeverity = (product) => {
    switch (product.assignmentStatus) {
        case 'Новый':
            return 'success';

        case 'LOWSTOCK':
            return 'warning';

        case 'Использован':
            return 'danger';

        default:
            return null;
    }
};
const selectedCity = ref();
const cities = ref([
    { name: '123', },
    { name: '321', },
    { name: '213', },
]);
import { useToast } from "primevue/usetoast";
const toast = useToast();

const show = () => {
    toast.add({ severity: 'info', summary: 'Сохранено', detail: 'Успешно сохранено!', life: 3000 });
}; 
</script>
<style>@import url('./bkAssignment.css');</style>