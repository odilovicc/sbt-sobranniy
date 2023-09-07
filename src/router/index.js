import { createRouter, createWebHistory } from 'vue-router'
import auctions from '../components/Аукционы/auctions.vue'
import auctionsView from '../components/Аукционы/auctionView.vue'
import listTraders from '../components/Трейдеры/listTraders.vue'
import clientR from '../components/Клиенты (Резиденты)/clientR.vue'
import yur from '../components/Клиенты (Резиденты)/podPage/yur.vue'
import fizl from '../components/Клиенты (Резиденты)/podPage/fizl.vue'
import requestList from '../components/Список заявок/requestList.vue'
import newRequest from '../components/Список заявок/newRequest.vue'
import buliten from '../components/Бюлтень/buliten.vue'
import bulitenView from '../components/Бюлтень/bulitenView.vue'
import dogovorSale from '../components/Trader/dogovorSale.vue'
import dogovorSaleView from '../components/Trader/dogovorSaleView.vue'
import tNewRequest from '../components/Trader/tNewRequest.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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