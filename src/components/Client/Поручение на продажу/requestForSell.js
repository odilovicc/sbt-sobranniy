export const ProductService = {
        getProductsData() {
            return [
                {
                    number: '1',
                    broker: 'bk2223',
                    date: '12.12.2020',
                    brokerStatus: 'Новый',
                },
                {
                    number: '1',
                    broker: 'bk2223',
                    date: '12.12.2020',
                    brokerStatus: 'Использован',
                },
            ];
        },

        getProductsMini() {
            return Promise.resolve(this.getProductsData().slice(0, 5));
        },
    };

    