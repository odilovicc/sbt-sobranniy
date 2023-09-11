export const ProductService = {
        getProductsData() {
            return [
                {
                    number: '1',
                    loginTrader: 'bk303-1',
                    nameTrader: 'Кучаров Бахтиёр Бойкобилович',
                    traderStatus: 'Активен'
                },
                {
                    number: '1',
                    loginTrader: 'bk303-1',
                    nameTrader: 'Кучаров Бахтиёр Бойкобилович',
                    traderStatus: 'Новый'
                },
                {
                    number: '1',
                    loginTrader: 'bk303-1',
                    nameTrader: 'Кучаров Бахтиёр Бойкобилович',
                    traderStatus: 'Заблокирован руководителем БК'
                },
            ];
        },

        getProductsMini() {
            return Promise.resolve(this.getProductsData().slice(0, 5));
        },

        getProductsSmall() {
            return Promise.resolve(this.getProductsData().slice(0, 10));
        },

        getProducts() {
            return Promise.resolve(this.getProductsData());
        },

        getProductsWithOrdersSmall() {
            return Promise.resolve(this.getProductsWithOrdersData().slice(0, 10));
        },

        getProductsWithOrders() {
            return Promise.resolve(this.getProductsWithOrdersData());
        }
    };

    