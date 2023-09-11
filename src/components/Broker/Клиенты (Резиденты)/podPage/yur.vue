<template>
    <header class="headerYur">
        <h1 class="title">Ввод нового клиента (резидента)</h1>
        <a href="/broker/clientr"><Button icon="pi pi-arrow-left" label="Вернуться в список" /></a>
    </header>
    <Message severity="error">Заполните все поля.</Message>
    <!-- Form start -->
        <div class="formContainerYur">
            <h1 class="w-1/2">Договор на брокерское обслуживание</h1>
            <FileUpload class="w-full" mode="basic" choose-label="Прикрепить" />
        </div>

        <div class="formContainerYur">
            <h1 class="w-1/2">Договор на брокерское обслуживание</h1>
            <FileUpload class="w-full" mode="basic" choose-label="Прикрепить" />
        </div>
        <div class="formContainerYur">
            <h1 class="w-1/2">Наименование <span class="text-red-500">*</span></h1>
            <div class="w-full">
                <div class="p-inputgroup flex-1">
                    <span class="p-inputgroup-addon">
                        <Dropdown v-model="selectedTypeC" :options="typeC" optionLabel="name" placeholder="Выберите"
                            class="w-full md:w-14rem" />
                    </span>
                    <InputText placeholder="вводите наименование на латинице" />
                </div>
            </div>
        </div>
        <div class="formContainerYur">
            <h1 class="w-1/2">Ф.И.О. руководителя <span class="text-red-500">*</span></h1>
            <InputText class="w-full" />
        </div>
        <div class="formContainerYur">
            <h1 class="w-1/2">Паспорт руководителя</h1>
            <FileUpload class="w-full" mode="basic" choose-label="Прикрепить" />
        </div>
        <div class="formContainerYur">
            <h1 class="w-1/2">Должность руководителя <span class="text-red-500">*</span></h1>
            <InputText class="w-full" />
        </div>
        <div class="formContainerYur">
            <h1 class="w-1/2">Действующий на основании <span class="text-red-500">*</span></h1>
            <InputText class="w-full" />
        </div>
        <div class="formContainerYur">
            <h1 class="w-1/2">Наличие документа основания</h1>
            <FileUpload class="w-full" mode="basic" choose-label="Прикрепить" />
        </div>
        <div class="formContainerYur">
            <h1 class="w-1/2">Юридический адрес <span class="text-red-500">*</span></h1>
            <InputText class="w-full" />
        </div>
        <div class="formContainerYur">
            <h1 class="w-1/2">Код ИНН <span class="text-red-500">*</span></h1>
            <InputText class="w-full" />
        </div>
        <div class="formContainerYur">
            <h1 class="w-1/2">Код ОКОНХ <span class="text-red-500">*</span></h1>
            <InputText class="w-full" />
        </div>
        <Divider />
        <div class="formContainerYur">
            <h1 class="w-1/2">Код банка <span class="text-red-500">*</span></h1>
            <div class="w-full">
                <div class="p-inputgroup flex-1">
                    <InputText />
                    <span class="p-inputgroup-addon">
                        <Button label="Проверить" />
                    </span>
                </div>
            </div>
        </div>
        <div class="formContainerYur">
            <h1 class="w-1/2">Наименование банка<span class="text-red-500">*</span></h1>
            <InputText class="w-full" />
        </div>
        <div class="formContainerYur">
            <h1 class="w-1/2">Код МФО<span class="text-red-500">*</span></h1>
            <InputText class="w-full" />
        </div>
        <div class="formContainerYur">
            <h1 class="w-1/2">Расчетный счет<span class="text-red-500">*</span></h1>
            <InputText class="w-full" />
        </div>
        <div class="formContainerYur">
            <h1 class="w-1/2">Реквизиты организации<span class="text-red-500">*</span></h1>
            <FileUpload mode="basic" choose-label="Прикрепить" class="w-full" />
        </div>
        <Divider />
        <div class="formContainerYur">
            <h1 class="w-1/2">Телефон<span class="text-red-500">*</span></h1>
            <InputText class="w-full" />
        </div>
        <div class="formContainerYur">
            <h1 class="w-1/2">Факс<span class="text-red-500">*</span></h1>
            <InputText class="w-full" />
        </div>
        <div class="formContainerYur">
            <h1 class="w-1/2">E-mail<span class="text-red-500">*</span></h1>
            <InputText class="w-full" />
        </div>
        <div class="formContainerYur">
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
@import url('./yur.css');

.p-fileupload-basic {
    width: 100%;
}
</style>