export const listPayments = {
  getPayments() {
    return [
      {
        number: "1",
        nomer: "361",
        date: "12.12.2020",
        paymentDetails: "За биржевой сбор согласно счет фактуре №322 от 04.03.2020 г.к котракту №325/3 от 04.03.2020 г.",
        paymentSize: '724 500,00',
        resizePayment: '724 500,00',
        paymentStatus: 'нераспределенный'
      },
      {
        number: "1",
        nomer: "361",
        date: "12.12.2020",
        paymentDetails: "За биржевой сбор согласно счет фактуре №322 от 04.03.2020 г.к котракту №325/3 от 04.03.2020 г.",
        paymentSize: '724 500,00',
        resizePayment: '724 500,00',
        paymentStatus: 'распределенный'
      },
      {
        number: "1",
        nomer: "361",
        date: "12.12.2020",
        paymentDetails: "За биржевой сбор согласно счет фактуре №322 от 04.03.2020 г.к котракту №325/3 от 04.03.2020 г.",
        paymentSize: '724 500,00',
        resizePayment: '724 500,00',
        paymentStatus: 'авансовый платеж'
      },
      {
        number: "1",
        nomer: "361",
        date: "12.12.2020",
        paymentDetails: "За биржевой сбор согласно счет фактуре №322 от 04.03.2020 г.к котракту №325/3 от 04.03.2020 г.",
        paymentSize: '724 500,00',
        resizePayment: '724 500,00',
        paymentStatus: 'ошибочный'
      },
      {
        number: "1",
        nomer: "361",
        date: "12.12.2020",
        paymentDetails: "За биржевой сбор согласно счет фактуре №322 от 04.03.2020 г.к котракту №325/3 от 04.03.2020 г.",
        paymentSize: '724 500,00',
        resizePayment: '724 500,00',
        paymentStatus: 'возврат'
      },
      {
        number: "1",
        nomer: "361",
        date: "12.12.2020",
        paymentDetails: "За биржевой сбор согласно счет фактуре №322 от 04.03.2020 г.к котракту №325/3 от 04.03.2020 г.",
        paymentSize: '724 500,00',
        resizePayment: '724 500,00',
        paymentStatus: 'возврат'
      },
    ];
  },

  getPaymentsMini() {
    return Promise.resolve(this.getPayments().slice(0, 10));
  },
};
