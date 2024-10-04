/* Comandos condicionais
if          --> SE
else        --> SENÃO
*/

// Exemplo 1: condondicinal simples

let numero = 5;

if( numero > 10){
    console.log(numero);
    
}

// Exemplo 2: condicinal composta 
let aluno = "Klaibert";
let idade = 18;

/* Lógica: verificar se o aluno é menor de idade ou maior de idade. */

if( idade < 18 ){
    console.log("É menor de idade");
} 
else {
    console.log("É maoir de idade");
    
}


console.log("---/n");

/* Exercicio (FAÇA AQUI) */

/* 1) crie duas variaveis conforme a seguir:
nota 1 (contendo um valor de 0 a 10)*/

/* 2) crie uma variavel chamada "media" que recebera o valor calculado da media das duas notas informadas. dica: você devê SOMAR as duas notas e depois dividir por 2 */

/*  3)  */


let nota1 = 8;

let nota2 = 5;

let minima = 2

let media = (nota1 + nota2) / minima


console.log(media);

if( media >= 7 ){
    console.log("Aprovado");
} 
else {
    console.log("Reprovado");
    
}

/* ShortHand if/else (if/else "curto/abreviado") */
let situacao = media >= 7? "aprovado" : "reprovado"; 

console.log(situacao);


