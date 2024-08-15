//ex2

interface Livro {
    titulo:string;
    autor:string
    anoPublicacao:number
}

const exibirInformacoes = (livro:Livro) => {
    return `O livro ${livro.titulo} foi escrito por ${livro.autor} em ${livro.anoPublicacao}`
}

const livro1:Livro = {
    titulo: "Vidas Secas",
    autor: "Graciliano Ramos",
    anoPublicacao: 1964
   };

console.log(exibirInformacoes(livro1))