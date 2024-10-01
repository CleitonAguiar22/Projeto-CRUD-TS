"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cardapio = exports.comentarios = exports.carrinho = void 0;
exports.adicionarACesta = adicionarACesta;
exports.adicionarFavoritagem = adicionarFavoritagem;
exports.adicionarComentario = adicionarComentario;
exports.removerComentario = removerComentario;
exports.carrinho = [];
exports.comentarios = [];
export const cardapio = [
    //C1
    {
        img: "imgsalmao.png",
        favorito: false,
        id: 0,
        nome: "Salmão Teryaki",
        descricao: "Filé de salmão grelhado com molho teriyaki, acompanhado de arroz e vegetais.",
        valor: 20.0,
    },
    //C2
    {
        img: "imgPão Indiano.png",
        favorito: false,
        id: 1,
        nome: "Pão Indiano",
        descricao: "Pão típico da Índia, macio e levemente tostado, ideal para acompanhar pratos com molho.",
        valor: 25.0,
    },
    //C3
    {
        img: "imgcereal.png",
        favorito: false,
        id: 2,
        nome: "Cereal",
        descricao: "Mistura de cereais crocantes, servido com leite ou iogurte.",
        valor: 15.0,
    },
    //C4
    {
        img: "imgLamen.png",
        favorito: false,
        id: 3,
        nome: "Lamen",
        descricao: "Macarrão japonês em caldo, acompanhado de carne, ovo e vegetais.",
        valor: 20.0,
    },
];
//CREATE CARRINHO
function adicionarACesta(nome, quantidade) {
    var i = 0;
    while (i < exports.cardapio.length) {
        var comida = exports.cardapio[i];
        if (comida.nome === nome) {
            var novoCarrinho = {
                idComida: comida.id,
                quantidade: quantidade,
                valor: comida.valor * quantidade,
            };
            exports.carrinho.push(novoCarrinho);
            return exports.carrinho;
        }
        i++;
    }
}
// DELETE CARRINHO
// ADICIONAR E REMOVER FAVORITAGEM....
function adicionarFavoritagem(id) {
    var pratoEncontrado;
    exports.cardapio.forEach(function (prato) {
        if (prato.id !== id)
            return;
        prato.favorito = !prato.favorito;
        pratoEncontrado = prato;
    });
    return pratoEncontrado;
}
// ADICIONAR COMENTARIO
function adicionarComentario(texto) {
    var novoTexto = {
        id: exports.comentarios.length,
        comentario: texto,
    };
    exports.comentarios.push(novoTexto);
    return novoTexto;
}
console.log(adicionarComentario("Bom"));
console.log(adicionarComentario("Otimo"));
// REMOVER COMENTATRIO
function removerComentario(id) {
    var comentarioEcontrado;
    exports.comentarios.forEach(function (comentario) {
        if (comentario.id !== id) {
            exports.comentarios.splice(comentario.id, 1);
            comentarioEcontrado = false;
        }
    });
    return comentarioEcontrado;
}
console.log("===================");
console.log(removerComentario(1));
