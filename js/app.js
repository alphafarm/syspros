// Exemplo básico de configuração do Vue Router e instância do Vue
const HomeComponent = { template: '<div>Home Component</div>' };
const AboutComponent = { template: '<div>About Component</div>' };
const ContactComponent = { template: '<div>Contact Component</div>' };

const routes = [
  { path: '/', component: HomeComponent },
  { path: '/about', component: AboutComponent },
  { path: '/contact', component: ContactComponent }
];

const router = new VueRouter({
  routes
});

const app = new Vue({
  router
}).$mount('#app');
