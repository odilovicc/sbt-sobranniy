export const ProductService = {
        getProductsData() {
            return [
                {
                   number: '261',
                   position: '12',
                   production: 'Уголь марки Б3 Сарыкольский производство Казахстан фракция 50-200 мм',
                   productionType: 'Энергоносители',
                   uki: '6',
                   client: 'AKUMSHIN SAVDO',
                   yourPrice: '45 000 сум',
                   normPrice: '41 000 сум',
                   goodPrice: false,

                },
                {
                   number: '261',
                   position: '12',
                   production: 'Уголь марки Б3 Сарыкольский производство Казахстан фракция 50-200 мм',
                   productionType: 'Энергоносители',
                   uki: '6',
                   client: 'AKUMSHIN SAVDO',
                   yourPrice: '45 000 сум',
                   normPrice: '41 000 сум',
                   goodPrice: true,
                
                }, 
            ];
        },

        getProductsMini() {
            return Promise.resolve(this.getProductsData().slice(0, 5));
        },
    };

    