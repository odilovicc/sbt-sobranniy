export const ProductService = {
        getProductsData() {
            return [
                {
                    number: '1',
                    position: '13',
                    nameRequest: 'Хлопковое волокно средневолокнистое 4-тип, сорт-4, класс «Олий»,ур.2019 г. АО Узпахтасаноат',
                    detailRequest: 'Технические культуры и продукция их переработки',
                    size: '6',
                    sizeCurrency: 'т',
                    priceTrader: '500',
                    priceTraderCurrency: 'доллар США',
                    allSum: '250 000 000',
                    allSumCurrency: 'сум',
                    basis: 'FCA',
                    basisSrok: '22 банк. дней',
                    countryHappens: 'Узбекистан',
                    inventoryStatus: 'Новый',
                    prim: true
                },
                {
                    number: '1',
                    position: '13',
                    nameRequest: 'Хлопковое волокно средневолокнистое 4-тип, сорт-4, класс «Олий»,ур.2019 г. АО Узпахтасаноат',
                    detailRequest: 'Технические культуры и продукция их переработки',
                    size: '6',
                    sizeCurrency: 'т',
                    priceTrader: '500',
                    priceTraderCurrency: 'доллар США',
                    allSum: '250 000 000',
                    allSumCurrency: 'сум',
                    basis: 'FCA',
                    basisSrok: '22 банк. дней',
                    countryHappens: 'Узбекистан',
                    inventoryStatus: 'В торге',
                    prim: false
                },
                {
                    number: '1',
                    position: '13',
                    nameRequest: 'Хлопковое волокно средневолокнистое 4-тип, сорт-4, класс «Олий»,ур.2019 г. АО Узпахтасаноат',
                    detailRequest: 'Технические культуры и продукция их переработки',
                    size: '6',
                    sizeCurrency: 'т',
                    priceTrader: '500',
                    priceTraderCurrency: 'доллар США',
                    allSum: '250 000 000',
                    allSumCurrency: 'сум',
                    basis: 'FCA',
                    basisSrok: '22 банк. дней',
                    countryHappens: 'Узбекистан',
                    inventoryStatus: 'свободные',
                    prim: true
                },
                {
                    number: '1',
                    position: '13',
                    nameRequest: 'Хлопковое волокно средневолокнистое 4-тип, сорт-4, класс «Олий»,ур.2019 г. АО Узпахтасаноат',
                    detailRequest: 'Технические культуры и продукция их переработки',
                    size: '6',
                    sizeCurrency: 'т',
                    priceTrader: '500',
                    priceTraderCurrency: 'доллар США',
                    allSum: '250 000 000',
                    allSumCurrency: 'сум',
                    basis: 'FCA',
                    basisSrok: '22 банк. дней',
                    countryHappens: 'Узбекистан',
                    inventoryStatus: 'Купленные',
                    prim: false
                },
            ];
        },

        getProductsMini() {
            return Promise.resolve(this.getProductsData().slice(0, 5));
        },
    };

    