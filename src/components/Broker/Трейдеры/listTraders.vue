<template>
  <div class="">
    <div class="flex items-center">
      <h1 class="text-2xl font-semibold">Список Трейдеров</h1>
      <div class="ml-auto flex items-center gap-5">
        <Button
          label="Антитеррор"
          severity="info"
          icon="pi pi-user"
          @click="visible = true"
        />
        <!-- Диалог антитеррор -->
        <Dialog
          v-model:visible="visible"
          modal
          header="Соглашение антитеррор"
          :style="{ width: '50vw' }"
        >
          <form action="">
            <div class="flex items-center py-5">
              <label class="w-1/2"
                >Ответственный <span class="text-red-500">*</span></label
              >
              <Dropdown
                v-model="selectedTrader"
                :options="listOfTraders"
                optionLabel="name"
                placeholder="Выберите трейдера"
                class="w-full md:w-14rem"
              />
            </div>
            <div class="flex items-center py-5">
              <label class="w-1/2"
                >Приказ № <span class="text-red-500">*</span></label
              >
              <InputText class="w-full" />
            </div>
            <div class="flex items-center py-5">
              <label class="w-1/2">от<span class="text-red-500">*</span></label>
              <Calendar v-model="date" class="w-full" />
            </div>
            <div class="flex items-center py-5">
              <label class="w-1/2"
                >2038 приказ<span class="text-red-500">*</span></label
              >
              <div class="w-full">
                <FileUpload mode="basic" chooseLabel="Прикрепить"  />
                <span class="text-opacity-20 text-white mt-4"
                  >Прикрепите отсканированный документ</span
                >
              </div>
            </div>
          </form>
          <template #footer>
            <Button label="Отмена" severity="info" />
            <Button label="Сохранить" severity="success" @click="show()" />
            <Toast />
          </template>
        </Dialog>
        <!-- Диалог антитеррор -->
        <Button
          label="Новый Трейдер"
          severity="primary"
          @click="newTrader = true"
          icon="pi pi-plus"
          outlined
        />
        <!-- Диалог Новый трейдер -->
        <Dialog
          v-model:visible="newTrader"
          modal
          header="Новый трейдер"
          :style="{ width: '50vw' }"
        >
          <form action="">
            <div class="flex items-center py-5">
              <label class="w-1/2">Прикрепить открытый ключ ЭЦП</label>
              <FileUpload
                mode="basic"
                class="w-full"
                chooseLabel="Прикрепить"
              />
            </div>
            <div class="flex items-center py-5">
              <label class="w-1/2">Пол</label>
              <div class="mx-5 flex items-center">
                <RadioButton
                  v-model="genderChoose"
                  inputId="genderChoose1"
                  value="man"
                />
                <label for="genderChoose1" class="ml-2">Мужской</label>
              </div>
              <div class="mx-5 flex items-center">
                <RadioButton
                  v-model="genderChoose"
                  inputId="genderChoose2"
                  value="woman"
                />
                <label for="genderChoose2" class="ml-2">Женский</label>
              </div>
            </div>
            <div class="flex items-center py-5">
              <label class="w-1/2">ФИО пользователя</label>
              <InputText class="w-full" />
            </div>
            <div class="flex items-center py-5">
              <label class="w-1/2">Паспорт №</label>
              <InputNumber class="w-full" />
            </div>
            <h1 class="my-8 text-xl">Контактная информация</h1>
            <div class="py-5">
              <div class="flex items-center py-5">
                <label class="w-1/3">Телефон</label>
                <div class="p-inputgroup flex-1">
                  <span class="p-inputgroup-addon"> +998 </span>
                  <InputMask
                    id="basic"
                    v-model="value"
                    mask="99-999-99-99"
                    placeholder=""
                  />
                </div>
              </div>
              <div class="flex items-center py-5">
                <label class="w-1/3">Мобильный</label>
                <div class="p-inputgroup flex-1">
                  <span class="p-inputgroup-addon"> +998 </span>
                  <InputMask
                    id="basic"
                    v-model="value"
                    mask="99-999-99-99"
                    placeholder=""
                  />
                </div>
              </div>
              <div class="py-5 flex items-center">
                <label class="w-1/2">Email</label>
                <InputText class="w-full" />
              </div>
            </div>
          </form>
          <template #footer>
            <Button severity="info" label="Отмена" />
            <Button severity="success" label="Сохранить" @click="addTrader()" />
            <Toast />
          </template>
        </Dialog>
        <!-- Диалог Новый трейдер -->
      </div>
    </div>
    <DataTable
      :value="products"
      tableStyle="min-width: 50rem"
      class="mt-12"
    >
      <Column field="number" header="№"></Column>
      <Column field="loginTrader" header="Логин"></Column>
      <Column field="nameTrader" header="Наименование"></Column>
      <Column header="Status">
        <template #body="slotProps">
          <Tag
            :value="slotProps.data.traderStatus"
            :severity="getSeverity(slotProps.data)"
          />
        </template>
      </Column>
      <Column class="w-14">
        <template #body>
          <div class="flex items-center gap-5">
            <Button severity="info" icon="pi pi-pencil" @click="newTrader = true" />
            <Button severity="danger" icon="pi pi-trash" @click="confirm1()" />
            <Toast />
            <ConfirmDialog></ConfirmDialog>
          </div>
        </template>
      </Column>
    </DataTable>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { ProductService } from "./traders";

onMounted(() => {
  ProductService.getProductsMini().then((data) => (products.value = data));
});
const date = ref();
const products = ref();
const getSeverity = (product) => {
  switch (product.traderStatus) {
    case "Активен":
      return "success";

    case "Новый":
      return "warning";

    case "Заблокирован руководителем БК":
      return "danger";

    default:
      return null;
  }
};
import { useConfirm } from "primevue/useconfirm";
import { useToast } from "primevue/usetoast";
import FileUpload from "primevue/fileupload";

const confirm = useConfirm();
const toast = useToast();
const newTrader = ref(false);
const visible = ref(false);
const confirm1 = () => {
  confirm.require({
    message: "Вы точно хотите удалить трейдера?",
    header: "Подтверждение",
    icon: "pi pi-exclamation-triangle",
    accept: () => {
      toast.add({
        severity: "success",
        summary: "Удалено!",
        detail: "Трейдер успешно удалено!",
        life: 3000,
      });
    },
    reject: () => {
      toast.add({
        severity: "error",
        summary: "Отменено!",
        detail: "Вы отменили удаление трейдера!",
        life: 3000,
      });
    },
  });
};
const show = () => {
  toast.add({
    severity: "success",
    summary: "Сохранено",
    detail: "Антитеррор успешно сохранено",
    life: 3000,
  });
};
const addTrader = () => {
  toast.add({
    severity: "success",
    summary: "Добавлено!",
    detail: "Новый трейдер успешно добавлен!",
    life: 3000,
  });
};

// Dropdown
const selectedTrader = ref();
const listOfTraders = ref([
  { name: "Эгамбердиев Комилжон Ашурович" },
  { name: "Исаев Акбар Эргашевич" },
  { name: "Сохибов Лазиз Ахадович" },
]);

// RadioButton
// Не забудь импортировать { ref }
const genderChoose = ref("");
</script>

<style scoped>
.p-fileupload-basic {
  width: 100%;
}
</style>
