<template>
  <div class="wrapper-stepper mx-auto max-[640px]:w-[100vw]">
    <div class="stepper mx-auto w-full lg:w-1/2">
      <div class="stepper-progress">
        <div :style="'width:' + stepperProgress" class="stepper-progress-bar"></div>
      </div>

      <div v-for="item in 3"
           :key="item" :class="{ 'current': step === item, 'success': step > item }" class="stepper-item w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6">
        <div class="stepper-item-counter">
          <img alt=""
               class="icon-success" src="https://www.seekpng.com/png/full/1-10353_check-mark-green-png-green-check-mark-svg.png">
          <span class="number">{{ item }}</span>
        </div>
        <span class="stepper-item-title">Этап {{ item }}</span>
      </div>
    </div>

    <div v-for="item in 3" :key="item" class="stepper-content">
      <div v-if="step == item" class="stepper-pane w-full px-0 lg:px-24 py-14">
        <template v-if="step === 1">
          <RegStepOne/>
        </template>
        <template v-else-if="step === 2">
          <RegStepTwo/>
        </template>
        <template v-else>
          <div class="mx-auto w-1/2 text-center lg:text-start">
            <h1 class="text-2xl font-bold block lg:flex items-center justify-center">Ваша заявка принята.
              <svg class="checkmark inline-block ml-0 lg:ml-4 w-10 h-10 my-6"
                   viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg">
                <circle class="checkmark__circle" cx="26" cy="26" fill="none" r="25"/>
                <path class="checkmark__check" d="M14.1 27.2l7.1 7.2 16.7-16.8" fill="none"/>
              </svg>
            </h1>
            <p class="text-[#676767] mt-4 text-center">Ваша заявка на регистрацию отправлено. Логин и пароль будет
              отправлен на ваш указанный электронный адрес.</p>
          </div>
        </template>
      </div>
    </div>

    <div class="controls flex justify-around">
      <button :disabled="step == 1" class="stepper-button" @click="step--"><i class="fas fa-arrow-left"></i></button>
      <button :disabled="step == 3" class="stepper-button" type="submit" @click="step++"><i class="fas fa-arrow-right"></i></button>
    </div>
  </div>
</template>
<script>
import RegStepOne from './RegStepsClient/RegStepOne.vue';
import RegStepTwo from './RegStepsClient/RegStepTwo.vue';

export default {
  components: {
    RegStepOne,
    RegStepTwo
  },
  data() {
    return {
      step: 1
    };
  },
  computed: {
    stepperProgress() {
      return (100 / 3) * (this.step - 1) + '%';
    }
  }
}

</script>

<style scoped>
@import url('RegClient.css');
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/fontawesome.min.css");
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css");
</style>