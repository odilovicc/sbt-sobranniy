<template>
    <div class="w-full lg:w-1/2 mx-0 lg:mx-auto">
        <form action="" class="flex justify-center" method="post">
            <div class="w-full">
                <div class="py-5">
                    <label class="text-900 font-medium mb-2">Прикрепить открытый ключ
                        ЭЦП</label>
                    <FileUpload mode="basic" choose-label="Выбрать" accept="image/*" class="w-full mb-3"
                        :maxFileSize="1000000" @upload="onUpload" />
                </div>
                <div class="py-5">
                    <label class=" text-900 font-medium mb-2">ФИО руководителя</label>
                    <InputText type="text" class="w-full mb-3 rounded-xl" placeholder="ФИО руководителя" />
                </div>
                <div class="py-5">
                    <label class=" text-900 font-medium mb-2">Наименование
                        организации</label>
                    <div class="flex items-center">
                        <Dropdown v-model="compType" :options="type" optionLabel="name" placeholder="OOO"
                            class="w-full md:w-14rem rounded-xl rounded-r-none border-r-0" />
                        <InputText type="text" class="border-[#ced4da] z-50 w-full rounded-xl rounded-l-none" />
                    </div>
                </div>
                <div class="py-5">
                    <label class=" text-900 font-medium mb-2">ИНН</label>
                    <InputText type="text" class="w-full mb-3 rounded-xl" placeholder="ИНН" />
                </div>
                <div class="py-5">
                    <label class=" text-900 font-medium mb-2">ОКЭД</label>
                    <InputText type="text" class="w-full mb-3 rounded-xl" placeholder="ОКЭД" />
                </div>
                <div class="py-5">
                    <label class=" text-900 font-medium mb-2">ИНПО</label>
                    <InputText type="text" class="w-full mb-3 rounded-xl" placeholder="ИНПО" />
                </div>
                <div class="py-5">
                    <label class=" text-900 font-medium mb-2">Cтранa</label>
                    <Dropdown v-model="selectCountry" :options="country" optionLabel="name" placeholder="Страна"
                        class="w-full" />
                </div>
                <div class="py-5">
                    <label class=" text-900 font-medium mb-2">Регион</label>
                    <Dropdown v-model="selectRegion" :options="regions" optionLabel="name" placeholder="Регион"
                        class="w-full" />
                </div>
                <div class="py-5">
                    <label class=" text-900 font-medium mb-2">Город</label>
                    <Dropdown v-model="selectCity" :options="city" optionLabel="name" placeholder="Город" class="w-full" />
                </div>
                <div class="py-5">
                    <label class=" text-900 font-medium mb-2">Юридический адрес</label>
                    <InputText type="text" class="border-[#ced4da] w-full rounded-xl" placeholder="Юридический адрес" />
                </div>
                <div class="py-5">
                    <label class=" text-900 font-medium mb-2">Должность руководителя</label>
                    <InputText type="text" class="border-[#ced4da] w-full rounded-xl"
                        placeholder="Должность руководителя" />
                </div>
                <div class="py-5">
                    <label class=" text-900 font-medium mb-2">Действующий на основании
                    </label>
                    <InputText type="text" class="border-[#ced4da] w-full rounded-xl"
                        placeholder="Действующий на основании" />
                </div>
                <div class="py-5">
                    <label class=" text-900 font-medium mb-2">Рабочий телефон
                    </label>
                    <InputMask id="basic" mask="999-99-999-99-99" class="w-full rounded-xl"
                        placeholder="998-99-999-99-99" />
                </div>
                <div class="py-5">
                    <label class=" text-900 font-medium mb-2">Мобильный телефон
                    </label>
                    <InputMask id="basic" mask="999-99-999-99-99" class="w-full rounded-xl"
                        placeholder="998-99-999-99-99" />
                </div>
                <div class="py-5">
                    <label class=" text-900 font-medium mb-2">Э-мэйл
                    </label>
                    <InputText type="text" class="border-[#ced4da] w-full rounded-xl" placeholder="E-mail" />
                </div>
                <div class="py-5">
                    <label class=" text-900 font-medium mb-2">Вебсайт
                    </label>
                    <InputText type="text" class="border-[#ced4da] w-full rounded-xl" placeholder="Вебсайт" />
                </div>
                <div class="py-5">
                    <label class=" text-900 font-medium mb-2">Наименование банка
                    </label>
                    <InputText type="text" class="border-[#ced4da] w-full rounded-xl" placeholder="Наименование банка" />
                </div>
                <div class="py-5">
                    <label class=" text-900 font-medium mb-2">МФО
                    </label>
                    <InputText type="text" class="border-[#ced4da] w-full rounded-xl" placeholder="МФО" />
                </div>
                <div class="py-5">
                    <label class=" text-900 font-medium mb-2">Расчетный счет
                    </label>
                    <InputText type="text" class="border-[#ced4da] w-full rounded-xl" placeholder="Расчетный счет" />
                </div>

                <div class="px-5 py-2 shadow-xl rounded-xl">
                    <div class="py-5">
                        <label class=" text-900 font-medium mb-2">Паспортные данные</label>
                        <FileUpload choose-label="Выбрать" mode="basic" class="w-full mb-3" />
                        <span class="text-red-600 text-sm">*Прикрепите отсканированный документ</span>
                    </div>
                    <div class="py-5">
                        <label class=" text-900 font-medium mb-2">Устав</label>
                        <FileUpload choose-label="Выбрать" mode="basic" class="w-full mb-3" />
                        <span class="text-red-600 text-sm">*Прикрепите отсканированный документ</span>
                    </div>
                    <div class="py-5">
                        <label class=" text-900 font-medium mb-2">Guvohnoma</label>
                        <FileUpload choose-label="Выбрать" mode="basic" class="w-full mb-3" />
                        <span class="text-red-600 text-sm">*Прикрепите отсканированный документ</span>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>
<script setup>
import { ref } from "vue";

const compType = ref();
const type = ref([
    { name: 'OOO', code: 'OOO' },
    { name: 'СП', code: 'SP' },
    { name: 'БК', code: 'BK' },
    { name: 'ОАО', code: 'OAO' },
    { name: 'ДП', code: 'DP' },
    { name: 'ФХ', code: 'FX' }
]);
const selectCountry = ref();
const country = ref([
    { name: 'Узбекистан', code: 'UZB' },
    { name: 'Казахстан', code: 'KZX' },
    { name: 'Россия', code: 'RUS' },
]);
const selectRegion = ref();
const regions = ref([
    { name: 'Ташкент', code: 'TASH' },
    { name: 'Бухара', code: 'BUX' },
    { name: 'Самарканд', code: 'SMR' },
]);
const selectCity = ref();
const city = ref([
    { name: 'Tashkent City', code: 'TASHC' },
    { name: 'Кибрай', code: 'QB' },
    { name: 'Газалкент', code: 'GZL' },
]);

</script>