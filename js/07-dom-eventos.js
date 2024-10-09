/* Funções de acesso e manipulação dom DOM 

querySelector() é uma funçaõ para selecionar UM ÚNICO elemento na página(DOM).

- querySelectorAll() é uma função para selecionar VÁRIOS elementos na página ?(DOM)

nos dois casos, a seleção é feita uasando seletores comums ao que fizemos no CSS.
*/

/* Exemplos */
const titulo = document.querySelectorAll("h1");
const textoDom = document.querySelectorAll(".texto-dom");
const subtitulos = document.querySelectorAll("h2");
const varios = document.querySelectorAll("p, img, button");

console.log(varios);


/* Modificando elementos do DOM */
titulo.textContent = "Olá JavaScript!";
textoDom.innerHTML = "<i>O Marcio será Reprovado!</i>"

/* selecionar todos os links da lista de referencias e colocar neles o atributo target valendo _blank. */

const links = document.querySelectorAll(".lista-de-referencias a");

// console.log(links);

// // Se fosse um por um...
// links [0].setAttribute("target", "_blank");

for(const link of links){
    //Para versões mais modernas.
    link.setAttribute("target", "_blank")
    
    //Para versões mais antigas
    link.target = "_blank";
}

/* Manipulando Eventos */   

const ex1 = document.querySelector("#exemplo01");

//Poderiamos também usar a função getElementById em vez do querySelector. a diferença é que ela funciona para seletores através de ID. OBS.: ao usa-lá NÃO COLOQUE #.

// const msg = document.getElementById("mensagem");


const msg = document.querySelector("#mensagem");
const pagina = document.querySelector("body")

//Função Ouvinte de eveto (event listener) aplicado ALVO do evento desejado ("click") e uma função para executar as ações a partir do evento. OBS.: esta função é considerada do tipo "Ânonima" e é conhecida como "callback".
ex1.addEventListener("click", function(){
    //Acessamos o parágrafo vazio e colocarmos um conteudo dentro dele
    msg.innerHTML = "Olá 🎆";

    //Modificar a página 
    pagina.style.fontFamily = "Verdana";
});

//Ouvinte de evento para voltar ao normal (sem texto no parágrafo e com fonte pradrao na página)

msg.addEventListener("dblclick", function(){
    msg.innerHTML = ""; // removendo o conteudo do paragrafo 

    pagina.style.fontFamily = "initial"; //voltando para fonte padrão
});


// Exemplo 02: modo noturno
const botaoAtivar = document.querySelector("#ativar");
botaoAtivar.addEventListener("click", function(){
    //usamos o toggle para alternar a aplicacão/remoção da class "noturno". Na prática, vira um liga/desliga.
    pagina.classList.toggle("noturno");

    //DESAFIO!! FAÇA AQUI MESMO: Trocar a palavra do Botão. Se a página estiver com a classe "noturno" aplicada, o botão deve mostrar a palavra "Desativar". Caso contrario, deve mostra a palavra "Ativar". Use if/else!

   
        
        botao = document.getElementById("ativar");
        
       
        if (botao.innerHTML === "Ativar") {
            botao.innerHTML = "Desativar";
        } else {
            botao.innerHTML = "Ativar";
        }
    
    
});

//Sobre o duplo e o tripo sinal de igual

let a = "10";//texo
let b = 10;//numero
let resultado = a === b;//false 
console.log(resultado);

// ==  compara VALORES
// === compara VALORES E TIPOS DE DADO