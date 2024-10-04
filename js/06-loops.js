/* Principais comandos de repetições:
- While -> ENQUANTO
- for  -> PARA

São comandos de uso geral, existem em praticamente qualquer limguagem de programação.
*/ 

// Exemplo 1: While
let contador = 1;

while( contador <= 5 ) {
    console.log("valor do contador é: "+contador);
    contador++; // ++ operador de incremento
    
}

console.log("---/n");

// Exemplo 2: for
for( let contador = 1; contador <=10; contador++ ) {
     console.log("Oieeee pela "+contador+" vez!");
}

/* Nomenclatura para variaveis de controle Embora possamos dar qualquer nome ( como contador por exemplo), geralmente são usadas as letras i, j, ou k (ou outras letras se necessario). */

for(let i = 1; i <= 3; i++) {
console.log("valor de i é: " +i);
    
}

// loops exclusivos do js para estrutura de dados 

// for/of -> loop para arrays

const bandas = ["Slayer", "Pink Floyd", "Rush", "Nightwish", "iron maiden", "judas", "metallica", "Justin Bieber "];

for (const banda of bandas){
    console.log(banda);
    
}

console.log("/n---");

let quantidade = bandas.length;

for( let i = 0; i < quantidade; i++ ){
    // usando i dentro dos colchetes como indice dinâmico do array
    console.log(bandas[i]);
    
}

/// for/in -:> loop para objetos
const pessoa = { 
    nome: "Fernado de Solza",
    idade: 32,
    cidade: "São Paulo", 
    estado: "SP",
    email: "ygor.paria@gmail.com",
    time: "Corinthians"
};

for(const prop in pessoa){
    //Mostra somente o nome da propriedade
    console.log(prop);

    // Mostra somente o valor da propriedade
    console.log(pessoa[prop]);
    
    
}

console.log("/n---");

// Exercicios 
// 1) Faça um array chamado "cliente" contendo 3 objetos. Cada objeto deverá ter uma propriedade "indentificador" ( com valores 1, 2, e 3 ) e uma propriedade "nome" ( com os nomes dos clientes: "Goku", "Naruto" e "Shiryu")

// 2) Faça um loop (qualquer um dos que vimos) e mostre no console os dados de cada cliente conforme a seguir:
// - Cliente: Goku, id: 1
//- Clinte: Naruto, id: 2 
// - Cliente: Shiryu, id:3


let cliente = [
    {nome1: "Felipe"},
    {nome2: "Dani"},
    {nome3: "Ygor"},

    
]

// for(){

// }
