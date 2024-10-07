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
const msg = document.querySelector("#mensagem");

ex1.addEventListener("click", function(){
    msg.innerHTML = "Olá 🎆";
});