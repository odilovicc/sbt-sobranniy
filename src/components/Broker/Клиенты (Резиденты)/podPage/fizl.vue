<template>
    <header class="headerfizl">
        <h1 class="title">Ввод нового клиента (резидента)</h1>
        <a href="/broker/clientr"><Button icon="pi pi-arrow-left" label="Вернуться в список" /></a>
    </header>
    <Message severity="error">Заполните все поля.</Message>
    <!-- Form start -->

        <div class="formContainerfizl">
            <h1 class="w-1/2">Ф.И.О. клиента<span class="text-red-500">*</span></h1>
            <InputText class="w-full" />
        </div>
        <div class="formContainerfizl">
            <h1 class="w-1/2">Адрес<span class="text-red-500">*</span></h1>
            <InputText class="w-full" />
        </div>
        <div class="formContainerfizl">
            <h1 class="w-1/2">Серия и номер паспорта<span class="text-red-500">*</span></h1>
            <InputText class="w-full" />
        </div>
        <div class="formContainerfizl">
            <h1 class="w-1/2">Когда и кем выдан<span class="text-red-500">*</span></h1>
            <InputText class="w-full" />
        </div>
        <div class="formContainerfizl">
            <h1 class="w-1/2">Телефон<span class="text-red-500">*</span></h1>
            <InputText class="w-full" />
        </div>
        <div class="formContainerfizl">
            <h1 class="w-1/2">Факс<span class="text-red-500">*</span></h1>
            <InputText class="w-full" />
        </div>
        <div class="formContainerfizl">
            <h1 class="w-1/2">E-mail<span class="text-red-500">*</span></h1>
            <InputText class="w-full" />
        </div>
        <div class="formContainerfizl">
            <h1 class="w-1/2">Код подтверждения действия<span class="text-red-500">*</span></h1>
            <InputText type="password" class="w-full" />
        </div>
        <!-- Buttons start -->
        <div class="flex items-center gap-5">
            <Button label="Отмена" />
            <Button label="Сохранить" severity="success"/>
        </div>
        <!-- Buttons end -->
    <!-- Form end -->
</template>
<script setup>
import { ref } from "vue";

const selectedTypeC = ref();
const typeC = ref([
    { name: 'New York' },
    { name: 'New York' },
    { name: 'New York' },
    { name: 'New York' },
    { name: 'New York' },
    { name: 'New York' },
]);

</script>
<style>
@import url('./fizl.css');

.p-fileupload-basic {
    width: 100%;
}
</style>