
 class Index {    
    constructor(toggle) {
        this.toggle = toggle;
        this.init();
        this.expansiveToggle();   
    }

    init() {
        var submit = document.getElementById("submit");
                submit.addEventListener("click", ()=> {
                    alert("parabéns pela sua inscrição")
                        console.log("parabéns pela sua inscrição");
        });
    }

    expansiveToggle() {

        var painel = document.querySelectorAll(".painel-exp");
            painel.forEach(painel => { 
                var cabecalho = painel.querySelector(".cabecalho-painel");
                var conteudo  =  painel.querySelector(".conteudo-painel");
                var expandir = painel.querySelector(".expandir");
                var reduzir =painel.querySelector(".reduzir");

                if (this.toggle) {
                    expandir.style.display = "none";
                } else {
                    reduzir.style.display = "none";
                }

                cabecalho.addEventListener("click", () => {
                if ( conteudo.style.display === "none" ) {
                        conteudo.style.display = "block" 
                        expandir.style.display = "none"
                        reduzir.style.display = "block"
                        this.toggle = true;
                    }  else { 
                        conteudo.style.display = "none"
                        reduzir.style.display = "none"
                        expandir.style.display = "block"
                        this.toggle = false;
                    }
                });
            });
    }
}
 
new Index();

function handleSubmit(event) {
    event.preventDefault(); // Impede o envio do formulário e o recarregamento da página

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const telephone = document.getElementById('telephone').value;
    const message = document.getElementById('message').value;
    
    console.log('Nome:', username);
    console.log('E-mail:', email);
    console.log('Telefone:', telephone);
    console.log('Mensagem:', message);   
  }

  const form = document.querySelector('.form');
  form.addEventListener('submit', handleSubmit);
