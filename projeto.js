const meuPrimeiroCod= Vue.createCod({

    data() { //variáveis
        return {
            msgInicial: 'Bem-vindo ao VUE.JS', 
            verMsg: false,
            corMsg: false,
            contador: 0,
            cores: [
                { ptbr: 'AZUL' },
                { ptbr: 'VERDE' },
                { ptbr: 'VERMELHO' }
            ],
            msgText: "Para nada!"     //computed  
        }
    },


    
    //methods retorna um valor ligado ao alert
    //computed tem que ligar a variável e o "this."
    methods: {
        avisoSistema(msgText) {
            alert(this.msgText)  
        }
    }
})

// criação do template para reutilizar os elementos criados
meuPrimeiroApp.component('botao', {
    template: `
    <button>
    Utilidade deste
    </button> `
})
const mountedApp = meuPrimeiroCod.mount('#divPrincipal')