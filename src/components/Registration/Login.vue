<template>
  <div class="p-8 mx-auto my-10 w-1/2">
    <div class="text-center mb-5">
      <img
        src="/logo-letter-13.png"
        alt="Image"
        class="mx-auto my-5"
      />
      <div class="text-900 text-3xl font-medium mb-3">Доступ к ЭСТБ</div>
      <span class="text-600 font-medium line-height-3">
        Введите свои данные для входа в систему:
      </span>
    </div>

    <div>
      <label for="email1" class="block text-900 font-medium mb-2">Логин</label>
      <InputText id="email1" type="text" class="w-full mb-3" />

      <label for="password1" class="block text-900 font-medium mb-2">
        Пароль
      </label>
      <InputText id="password1" type="password" class="w-full mb-3" />

      <div class="flex align-items-center justify-content-between mb-6">
        <a
          href="/regclient"
          class="font-medium underline mx-auto text-[--primary-color] text-right cursor-pointer"
        >
          Регистрация клиент
        </a>
      </div>

      <Button
        label="Вход"
        icon="pi pi-user"
        class="w-full"
        severity="info"
      ></Button>
    </div>
  </div>
</template>
<style>
@import url('@/assets/main.css');
</style>