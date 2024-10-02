// Exemplo 1: objetos como dados de uma pessoa 
const pessoa = {
    nome: "Chaves", 
    idade: 24,
    cidade: "São Paulo",
    estado: "SP"
};

console.log(pessoa);

console.log(`O ${pessoa.nome} possui ${pessoa.idade} anos e mora em ${pessoa.cidade}.`);


// Exemplo 2: objeto com array 
const livro = { 
    titulo: "Senhor dos Aneis",
    autor: "J.R.R Tolkien",
    volume: [
        "A Sociedade do Anel",
        "As duas Torres",
        "O Retorno do Rei"
    ]
}