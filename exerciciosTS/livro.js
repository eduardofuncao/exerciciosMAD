//ex2
var exibirInformacoes = function (livro) {
    return "O livro ".concat(livro.titulo, " foi escrito por ").concat(livro.autor, " em ").concat(livro.anoPublicacao);
};
var livro = {
    titulo: "Vidas Secas",
    autor: "Graciliano Ramos",
    anoPublicacao: 1964
};
console.log(exibirInformacoes(livro));
