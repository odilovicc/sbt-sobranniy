export const ProductService = {
  getProductsData() {
      const yuridik = "Юридическое лицо";
      const physical = "Физическое лицо";
    return [
      {
        number: '1',
        name: 'MCHJ "AKUMSHIN SAVDO"',
        type: yuridik,
        inn: '300990218',
        clientStatus: 'Активен',
      },
      {
        number: '1',
        name: 'MCHJ "AKUMSHIN SAVDO"',
        type: yuridik,
        inn: '300990218',
        clientStatus: 'Новый',
      },
      {
        number: '1',
        name: 'MCHJ "AKUMSHIN SAVDO"',
        type: yuridik,
        inn: '300990218',
        clientStatus: 'Заблокирован сотрудником РКП',
      },
      {
        number: '1',
        name: 'MCHJ "AKUMSHIN SAVDO"',
        type: yuridik,
        inn: '300990218',
        clientStatus: 'Заблокирован руководителем БК',
      },
    ];
  },

  getProductsMini() {
    return Promise.resolve(this.getProductsData().slice(0, 5));
  },
};
