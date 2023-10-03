const botoes = document.querySelectorAll('.botao');


const personagens = document.querySelectorAll(".personagem");

//*add botão selecionado
botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {

        desselecionarbotao();
        desselecionarbotao();

        botao.classList.add("selecionado");



        personagens[indice].classList.add("selecionado");


    });
});


function desselecionarbotao() {
    const personagemSelecionado = document.querySelector(".personagem.selecionado");
    personagemSelecionado.classList.remove("selecionado");
}

function desselecionarbotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
}

