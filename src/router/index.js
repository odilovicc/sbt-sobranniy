import { createRouter, createWebHistory } from 'vue-router'
import auctions from '../components/Broker/Аукционы/auctions.vue'
import auctionsView from '../components/Broker/Аукционы/auctionView.vue'
import listTraders from '../components/Broker/Трейдеры/listTraders.vue'
import clientR from '../components/Broker/Клиенты (Резиденты)/clientR.vue'
import yur from '../components/Broker/Клиенты (Резиденты)/podPage/yur.vue'
import fizl from '../components/Broker/Клиенты (Резиденты)/podPage/fizl.vue'
import requestList from '../components/Broker/Список заявок/requestList.vue'
import newRequest from '../components/Broker/Список заявок/newRequest.vue'
import buliten from '../components/Broker/Бюлтень/buliten.vue'
import bulitenView from '../components/Broker/Бюлтень/bulitenView.vue'
import dogovorSale from '../components/Trader/dogovorSale.vue'
import dogovorSaleView from '../components/Trader/dogovorSaleView.vue'
import tNewRequest from '../components/Trader/tNewRequest.vue'
import Login from '../components/Registration/Login.vue';
import RegClient from '../components/Registration/RegClient.vue';
import RegPeopleBirja from '../components/Registration/RegPeopleBirja.vue';
import listBrokers from '../components/Client/Брокеры/listBrokers.vue';
import builten from '../components/Client/Бюлтень/builten.vue';
import poruch from '../components/Client/Поручение на продажу/requestForSell.vue';
import reestr from '../components/Client/Реестр сделок/registerTrades.vue';
import clientRequestList from '../components/Client/Список заявок/clientRequestList.vue';
import payments from '../components/Client/Список оплат/listPayments.vue';
import accounts from '../components/Client/Счета на оплату/accounts.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/regclient',
      name: 'regclient',
      component: RegClient
    },
    {
      path: '/regpeople',
      name: 'regpeople',
      component: RegPeopleBirja
    },
    {
      path: '/client/listBrokers',
      name: 'listBrokers',
      component: listBrokers
    },
    {
      path: '/client/buliten',
      name: 'buliten',
      component: builten
    },
    {
      path: '/client/request',
      name: 'requestForSell',
      component: poruch
    },
    {
      path: '/client/reestr',
      name: 'reestr',
      component: reestr
    },
    {
      path: '/client/requestlist',
      name: 'requestList',
      component: clientRequestList
    },
    {
      path: '/client/payments',
      name: 'listpayments',
      component: payments
    },
    {
      path: '/client/accounts',
      name: 'accounts',
      component: accounts
    },
    {
      path: '/broker/auctions',
      name: 'auctions',
      component: auctions
    },
    {
      path: '/broker/auctions/view',
      name: 'auctionview',
      component: auctionsView
    },
    {
      path: '/broker/traders',
      name: 'traders',
      component: listTraders
    },
    {
      path: '/broker/clientr',
      name: 'client-resident',
      component: clientR
    },
    {
      path: '/broker/clientr/yurl',
      name: 'yurl',
      component: yur
    },
    {
      path: '/broker/clientr/fizl',
      name: 'fizl',
      component: fizl
    },
    {
      path: '/broker/requests',
      name: 'requests',
      component: requestList
    },
    {
      path: '/broker/newrequest',
      name: 'newRequest',
      component: newRequest
    },
    {
      path: '/broker/buliten',
      name: 'builten',
      component: buliten
    },
    {
      path: '/broker/buliten/bulitenView',
      name: 'bulitenView',
      component: bulitenView
    },
    {
      path: '/trader/sales',
      name: 'sales',
      component: dogovorSale
    },
    {
      path: '/trader/salesview',
      name: 'salesview',
      component: dogovorSaleView
    },
    {
      path: '/trader/newrequest',
      name: 'tradernewr',
      component: tNewRequest
    }
  ]
})

export default router