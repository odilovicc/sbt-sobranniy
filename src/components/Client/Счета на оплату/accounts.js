export const ProductService = {
  getProductsData() {
    return [
      {
        number: '1',
        group: 'биржевой сбор',
        Number: '№ 1 от 07.01.2021 г.',
        contract: '№ 359/3 от 12.03.2020 г.',
        contractStatus: 'Новый',
        summ: '432 000.00 сум',
        paymentDeadline: '17.01.21'
      },
      {
        number: '1',
        group: 'биржевой сбор',
        Number: '№ 1 от 07.01.2021 г.',
        contract: '№ 359/3 от 12.03.2020 г.',
        contractStatus: 'Просрочен',
        summ: '432 000.00 сум',
        paymentDeadline: '17.01.21'
      },
    ];
  },

  getProductsMini() {
    return Promise.resolve(this.getProductsData().slice(0, 5));
  },
};
