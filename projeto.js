const meuPrimeiroApp = Vue.createApp({
    data() {
    return {
    mensagemInicial: 'Bem-vindo ao VUE.JS',
    }
    }
   })
   const mountedApp = meuPrimeiroApp.mount('#divPrincipal')