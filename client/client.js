Vue.component('home-page', HomePageComponent);
Vue.component('products-page', ProductsPageComponent);
Vue.component('cart-page', CartPageComponent);
Vue.component('login-page', LoginPageComponent);
Vue.component('admin-page', AdminPageComponent);


Vue.component('nav-menu', MenuComponent);
Vue.component('login', LoginComponent);
Vue.component('product', ProductComponent);
Vue.component('hello', HelloComponent);
Vue.component('registration', RegistrationComponent);
Vue.component('cart-item', CartItemComponent);
Vue.component('cart', CartComponent);
Vue.component('product-admin', ProductAdminComponent);
Vue.component('category', CategoryComponent);
Vue.component('category-admin', CategoryAdminComponent);







// Configure the router:
// about the VueRouter: https://www.liquidlight.co.uk/blog/article/building-a-vue-v2-js-app-using-vue-router/
const router  = new VueRouter({
  mode: 'history', // html5 popstate, alternatively: 'hash'
  base: '/', // set the correct base
  routes: [ // our frontend routes
    { path: '/', component: HomePageComponent },
    { path: '/products/:category?', component: ProductsPageComponent },
    { path: '/cart', component: CartPageComponent },
    { path: '/login', component: LoginPageComponent },
    { path: '/admin', component: AdminPageComponent},
   
   
  ]
});

const http = axios; // using axios 3rd party XHR/REST lib

// the app
let app = new Vue({
  el: "#app",
  router
});
