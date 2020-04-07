import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Button } from "vant"
import { Tabbar, TabbarItem } from 'vant';
import { Icon } from 'vant';
import { Image } from 'vant';
import { Search } from 'vant';
import { Swipe, SwipeItem } from 'vant';
import { Grid, GridItem } from 'vant';
import { DropdownMenu, DropdownItem } from 'vant';
import { Sticky } from 'vant';
import { Card } from 'vant';
import { Tag } from 'vant';

Vue.use(Tag);
Vue.use(Card);
Vue.use(Sticky);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Image);
Vue.use(Icon);
Vue.use(Button);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Search);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
