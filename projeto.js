const meuPrimeiroCod = Vue.createCod({

    data(){
        return{
            textoDinamico: null,
            corTexto: "blue"
        }
    }
})
const mountedApp = meuPrimeiroCod.mount('#formPrincipal')
