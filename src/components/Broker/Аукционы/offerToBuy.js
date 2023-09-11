export const ProductService = {
  getProductsData() {
    return [
      {
        time: '15:07:29.9',
        sizeRequests: '127',
        priceRequest: '1 931 990,00'
      },
      {
        time: '15:07:29.9',
        sizeRequests: '127',
        priceRequest: '1 931 990,00'
      },
      {
        time: '15:07:29.9',
        sizeRequests: '127',
        priceRequest: '1 931 990,00'
      },
    ];
  },

  getProductsMini() {
    return Promise.resolve(this.getProductsData().slice(0, 5));
  },
};
