export const ProductService = {
        getProductsData() {
            return [
                {
                    number: '1',
                    traderNumber: 'bk303-1',
                    nameTrader: 'Шрот хлопковый',
                    nameProducer: 'ООО "PLASTEKS"',
                    size: '500',
                    sizeCurrency: 'т',
                    priceTrader: '500',
                    priceTraderCurrency: 'доллар США',
                    allSum: '250 000 000',
                    allSumCurrency: 'сум',
                    basis: 'FCA',
                    basisSrok: '22 банк. дней',
                    countryHappens: 'США',
                    inventoryStatus: 'Новый',
                    prim: false
                },
                {
                    number: '1',
                    traderNumber: 'bk303-1',
                    nameTrader: 'Шрот хлопковый',
                    nameProducer: 'ООО "PLASTEKS"',
                    size: '500',
                    sizeCurrency: 'т',
                    priceTrader: '500',
                    priceTraderCurrency: 'доллар США',
                    allSum: '250 000 000',
                    allSumCurrency: 'сум',
                    basis: 'FCA',
                    basisSrok: '22 банк. дней',
                    countryHappens: 'США',
                    inventoryStatus: 'Новый',
                    prim: true
                },
                {
                    number: '1',
                    traderNumber: 'bk303-1',
                    nameTrader: 'Шрот хлопковый',
                    nameProducer: 'ООО "PLASTEKS"',
                    size: '500',
                    sizeCurrency: 'т',
                    priceTrader: '500',
                    priceTraderCurrency: 'доллар США',
                    allSum: '250 000 000',
                    allSumCurrency: 'сум',
                    basis: 'FCA',
                    basisSrok: '22 банк. дней',
                    countryHappens: 'США',
                    inventoryStatus: 'Просроченный',
                    prim: false
                },
                {
                    number: '1',
                    traderNumber: 'bk303-1',
                    nameTrader: 'Шрот хлопковый',
                    nameProducer: 'ООО "PLASTEKS"',
                    size: '500',
                    sizeCurrency: 'т',
                    priceTrader: '500',
                    priceTraderCurrency: 'доллар США',
                    allSum: '250 000 000',
                    allSumCurrency: 'сум',
                    basis: 'FCA',
                    basisSrok: '22 банк. дней',
                    countryHappens: 'США',
                    inventoryStatus: 'Отказанный',
                    prim: false
                },
                {
                    number: '1',
                    traderNumber: 'bk303-1',
                    nameTrader: 'Шрот хлопковый',
                    nameProducer: 'ООО "PLASTEKS"',
                    size: '500',
                    sizeCurrency: 'т',
                    priceTrader: '500',
                    priceTraderCurrency: 'доллар США',
                    allSum: '250 000 000',
                    allSumCurrency: 'сум',
                    basis: 'FCA',
                    basisSrok: '22 банк. дней',
                    countryHappens: 'США',
                    inventoryStatus: 'Утвержденный',
                    prim: true
                },
            ];
        },

        getProductsMini() {
            return Promise.resolve(this.getProductsData().slice(0, 5));
        },
    };

    