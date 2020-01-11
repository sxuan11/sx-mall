import Vue from 'vue';
import { Tabbar, TabbarItem, Search, Lazyload, Swipe, SwipeItem, Icon, Notify, Grid, GridItem } from 'vant';


Vue.use(Tabbar).use(TabbarItem);
Vue.use(Notify);
Vue.use(Swipe).use(SwipeItem);
Vue.use(Lazyload);
Vue.use(Search);
Vue.use(Icon);
Vue.use(Grid).use(GridItem);