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
};

//   Exibindo a estrutura
console.log(livro);


// Acesso usando o nome do prop. e índice do array desta prop
console.log(livro.volume [1]);

// Exemplo 3: array de objetos 
const livros = [
    {
        titulo: "Harry Potter",
        autor: "J.K. Rowling"
    },
    {
        titulo: "Senhor dos Aneis",
        autor: "J.R.R. Tolkien"
    },
    {
        titulo: "Ghost Rider",
        autor: "Neil Peart"
    },
   
];

console.log(livros [1].autor);

// Exercicios:

const aluno = {
    nome: "Ygor PereiraDe Faria",
    nascimento: "19/07/2006",
    telefone:["25455521"],
    endereco: {
        rua: "Barnabé Alcantara",
        numero: "98",
        bairro: "Parque Boturussu"
    }    
}





console.log(aluno.nome);
 
console.log(aluno.telefone[0]); 
 
console.log(aluno.endereco.bairro); 








