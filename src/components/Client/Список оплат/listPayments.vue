<template>
    <div>
        <div class="defaultBg">
            <h1 class="headerOfSection">Список оплат</h1>
            <!-- Table start -->
            <DataTable :value="payments" tableStyle="min-width: 50rem">
                <Column field="number" header="№"></Column>
                <Column field="nomer" header="Номер"></Column>
                <Column field="date" header="Дата"></Column>
                <Column field="paymentDetails" header="Детали платежа"></Column>
                <Column field="paymentSize" header="Сумма оплаты, сум"></Column>
                <Column field="resizePayment" header="Сумма распред., сум"></Column>
                <Column header="Статус">
                    <template #body="slotProps">
                        <Tag :value="slotProps.data.paymentStatus" :severity="getSeverity(slotProps.data)" />
                    </template>
                </Column>
            </DataTable>
            <!-- Table end -->
        </div>
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import { listPayments } from './listPayments';

onMounted(() => {
    listPayments.getPaymentsMini().then((data) => (payments.value = data));
});

const payments = ref();
const getSeverity = (payment) => {
    switch (payment.paymentStatus) {
        case 'распределенный':
            return 'success';

        case 'авансовый платеж':
            return 'info';

        case 'возврат':
            return 'warning';

        default:
            return null;
    }
};

</script>