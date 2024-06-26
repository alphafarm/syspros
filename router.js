// Componentes
const Home = { 
  template: `<div>Home</div>`
};

const About = { 
  template: `<div>About</div>`
};

const Contact = { 
  template: `<div>Contact</div>`
};

const NotFound = { 
  template: `<div>Not Found</div>`
};

const Leads = {
  template: `
    <div>
      <table class="table table-dark table-hover">
        <thead>
          <tr>
            <th scope="col">Nome</th>
            <th scope="col">Nicho</th>
            <th scope="col">Instagram</th>
            <th scope="col">Roda Ads?</th>
            <th scope="col">Prospectado em</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="lead in leads" :key="lead.id">
            <th scope="row">{{ lead.name }}</th>
            <td>{{ lead.role }}</td>
            <td>{{ lead.social }}</td>
            <td>{{ lead.isRunningAds ? 'Sim' : 'Não' }}</td>
            <td>{{ new Date(lead.created_at).toLocaleDateString() }}</td>
            <td>
              <a href="#">Editar</a>
              <a href="#">Excluir</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  `,
  data() {
    return {
      leads: []
    };
  },
  created() {
    this.fetchLeads();
  },
  methods: {
    fetchLeads() {
      const endpoint = 'https://script.google.com/macros/s/AKfycbyUO1xeCMTQSy65iB1fmvt99yudBstBHdTBuvj9bHkyW7vH1f9wd_7uA3FGRKZWaRs8/exec';
      fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ action: 'read', sheetName: 'leads' })
      })
      .then(response => response.json())
      .then(data => {
        if (data.status === 'success') {
          this.leads = data.data;
        }
      })
      .catch(error => {
        console.error('Erro ao buscar leads:', error);
      });
    }
  }
};

// Rotas
const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/contact', component: Contact },
  { path: '/leads', component: Leads },
  { path: '*', component: NotFound }
];

// Criando uma instância do Vue Router
const router = new VueRouter({
  routes // short for `routes: routes`
});

// Criando a instância principal do Vue
new Vue({
  el: '#app',
  router,
  methods: {
    goTo(path) {
      this.$router.push(path);
    }
  }
});
