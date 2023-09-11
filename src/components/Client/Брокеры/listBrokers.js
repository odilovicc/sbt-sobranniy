export const ProductService = {
        getProductsData() {
            return [
                {
                   number: '1',
                   nameBroker: 'MCHJ "AKUMSHIN SAVDO"',
                   deadline: '12.12.2020',
                   brokerStatus: 'Активен'
                },
                {
                   number: '1',
                   nameBroker: 'MCHJ "AKUMSHIN SAVDO"',
                   deadline: '12.12.2020',
                   brokerStatus: 'На модерации'
                },
                {
                   number: '1',
                   nameBroker: 'MCHJ "AKUMSHIN SAVDO"',
                   deadline: '12.12.2020',
                   brokerStatus: 'Истек срок'
                },
            ];
        },

        getProductsMini() {
            return Promise.resolve(this.getProductsData().slice(0, 5));
        },

    };

    