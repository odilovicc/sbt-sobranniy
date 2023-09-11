<template>
    <div class="wrapper-stepper mx-auto max-[640px]:w-[100vw]">
        <div class="stepper mx-auto w-full lg:w-1/2">
            <div class="stepper-progress">
                <div class="stepper-progress-bar" :style="'width:' + stepperProgress"></div>
            </div>

            <div class="stepper-item w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6"
                :class="{ 'current': step == item, 'success': step > item }" v-for="item in 3" :key="item">
                <div class="stepper-item-counter">
                    <img class="icon-success"
                        src="https://www.seekpng.com/png/full/1-10353_check-mark-green-png-green-check-mark-svg.png" alt="">
                    <span class="number">{{ item }}</span>
                </div>
                <span class="stepper-item-title">Этап {{ item }}</span>
            </div>
        </div>

        <div class="stepper-content" v-for="item in 3" :key="item">
            <div class="stepper-pane w-full px-0 lg:px-24 py-14" v-if="step == item">
                <template v-if="step === 1">
                    <RegStepOne />
                </template>
                <template v-else-if="step === 2">
                    <RegStepTwo />
                </template>
                <template v-else>
                    <div class="mx-auto w-1/2 text-center lg:text-start">
                        <!-- Final step -->
                        <h1 class="text-2xl font-bold  lg:flex items-center justify-center">Ваша заявка принята. <svg
                                class="checkmark inline- ml-0 lg:ml-4 w-10 h-10 my-6" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 52 52">
                                <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
                                <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                            </svg></h1>
                        <p class="text-[#676767] mt-4 text-center">Ваша заявка на регистрацию отправлено. Логин и пароль будет отправлен
                            на ваш указанный электронный адрес.</p>
                    </div>
                    <!-- Final step -->
                </template>
            </div>
        </div>

        <div class="flex justify-around">
            <button
                class="btn p-5 rounded-full text-2xl bg-[#75CC65] text-white border-2 border-transparent transition duration-200 hover:border-[#75CC65] hover:bg-white hover:text-[#75CC65];"
                @click="step--" :disabled="step == 1"><i class="fas fa-arrow-left"></i></button>
            <button type="submit"
                class="btn p-5 rounded-full text-2xl bg-[#75CC65] text-white border-2 border-transparent transition duration-200 hover:border-[#75CC65] hover:bg-white hover:text-[#75CC65]"
                @click="step++" :disabled="step == 3"><i class="fas fa-arrow-right"></i> </button>
        </div>
    </div>
</template>
<script>
import RegStepOne from './RegSteps/RegStepOne.vue';
import RegStepTwo from './RegSteps/RegStepTwo.vue'
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
@import url('RegPeopleBirja.css');
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/fontawesome.min.css");
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css");
</style>