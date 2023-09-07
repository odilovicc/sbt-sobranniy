export const ProductService = {
  getProductsData() {
    return [
      {
        number: '1',
        client: 'OOO "Same Company"',
        date: '12.12.2020',
        traderStatus: 'Новый'
      },
      {
        number: '1',
        client: 'OOO "Same Company"',
        date: '12.12.2020',
        traderStatus: 'Использован'
      },
    ];
  },

  getProductsMini() {
    return Promise.resolve(this.getProductsData().slice(0, 5));
  },
};
