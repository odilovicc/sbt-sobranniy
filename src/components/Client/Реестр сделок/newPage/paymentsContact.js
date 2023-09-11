export const ProductService = {
    getProductsData() {
        return [
            {
                id: '1000',
                number: '1',
                typePayment: 'Биржевой сбор с продавца',
                for: 'Paxtakor Sifat Yog MCHJ',
                forWho: 'Продавец',
                forPayment: '52 500,00',
                numberAccount: 'Сч.№ 128',
                paid: '52 500,00',
                percent: '100%',
                paymentStatus: 'Оплачен'
            },
            {
                id: '1000',
                number: '1',
                typePayment: 'Биржевой сбор с продавца',
                for: 'Paxtakor Sifat Yog MCHJ',
                forWho: 'Продавец',
                forPayment: '52 500,00',
                numberAccount: 'Сч.№ 128',
                paid: '52 500,00',
                percent: '100%',
                paymentStatus: 'В процессе'
            },
        ];
    },

    getProductsMini() {
        return Promise.resolve(this.getProductsData().slice(0, 5));
    },

};

