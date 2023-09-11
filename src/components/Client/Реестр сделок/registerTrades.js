export const ProductService = {
  getProductsData() {
    return [
      {
        numberAgreement: "0102/18-Б",
        client: "ООО MAHSULOT TRANZIT INVEST",
        bkNumber: 'БК №-449',
        item: "Мыло хозяйственное - 350 гр. 60%",
        datePutting: 'срок поставки 28.02.2019 г.',
        sum: "916 133 400,00",
        currency: 'сум',
        summa: "916 133 400,00",
        percent: "100,00",
        freeBudget: "0,000",
        summ: "916 133 400,00",
        price: "2 450,00",
        realise: "373 920",
        ostatok: "12",
        status: 'Закрытый'
      },
      {
        numberAgreement: "0102/18-Б",
        client: "ООО MAHSULOT TRANZIT INVEST",
        bkNumber: 'БК №-449',
        item: "Мыло хозяйственное - 350 гр. 60%",
        datePutting: 'срок поставки 28.02.2019 г.',
        sum: "916 133 400,00",
        currency: 'сум',
        summa: "916 133 400,00",
        percent: "100,00",
        freeBudget: "0,000",
        summ: "916 133 400,00",
        price: "2 450,00",
        realise: "373 920",
        ostatok: "12",
        status: 'действующий'
      },
      {
        numberAgreement: "0102/18-Б",
        client: "ООО MAHSULOT TRANZIT INVEST",
        bkNumber: 'БК №-449',
        item: "Мыло хозяйственное - 350 гр. 60%",
        datePutting: 'срок поставки 28.02.2019 г.',
        sum: "916 133 400,00",
        currency: 'сум',
        summa: "916 133 400,00",
        percent: "100,00",
        freeBudget: "0,000",
        summ: "916 133 400,00",
        price: "2 450,00",
        realise: "373 920",
        ostatok: "12",
        status: 'оплата 100%'
      },
      {
        numberAgreement: "0102/18-Б",
        client: "ООО MAHSULOT TRANZIT INVEST",
        bkNumber: 'БК №-449',
        item: "Мыло хозяйственное - 350 гр. 60%",
        datePutting: 'срок поставки 28.02.2019 г.',
        sum: "916 133 400,00",
        currency: 'сум',
        summa: "916 133 400,00",
        percent: "100,00",
        freeBudget: "0,000",
        summ: "916 133 400,00",
        price: "2 450,00",
        realise: "373 920",
        ostatok: "12",
        status: 'аннулированный'
      },
    ];
  },

  getProductsMini() {
    return Promise.resolve(this.getProductsData().slice(0, 5));
  },
};
