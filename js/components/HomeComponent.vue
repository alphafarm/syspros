<!-- HomeComponent.vue -->
<template>
  <div class="home">
    <h1>Home Page</h1>
    <p>Welcome to the home page!</p>
  </div>
</template>

<script>
export default {
  // Opcional: nome do componente (pode ser útil em rotas dinâmicas)
  name: 'HomeComponent',

  // Métodos, dados, etc.
  data() {
    return {
      // Dados do componente, se houver
    };
  },

  // Outras configurações do componente, como métodos, computed, etc.
};
</script>

<style scoped>
/* Estilos específicos para este componente */
.home {
  /* Estilos CSS aqui */
}
</style>
