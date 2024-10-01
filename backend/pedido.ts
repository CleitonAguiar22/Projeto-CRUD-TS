export type ItemDoCardapio = {
  img: string;
  favorito: boolean;
  estrelas: number;
  id: number;
  nome: string;
  valor: string;
  descricao: string;
};

export type ItemDoCarrinho = {
  idComida: number;
  quantidade: number;
  valor: number;
};

export type Comentario = {
  id: number;
  comentario: string;
};

export let carrinho: ItemDoCarrinho[] = [];

export let comentarios: Comentario[] = [];

export const cardapio: ItemDoCardapio[] = [
  //C1
  {
    id: 0,
    nome: "Salmão Teryaki",
    img: `img/Salmão Teryaki.png`,
    favorito: false,
    estrelas: 5,
    descricao:
      "Filé de salmão grelhado com molho teriyaki, acompanhado de arroz e vegetais.",
    valor: (20.5).toFixed(2),
  },

  //C2

  {
    id: 1,
    img: "img/Pão Indiano.png",
    favorito: false,
    estrelas: 5,
    nome: "Pão Indiano",
    descricao:
      "Pão típico da Índia, macio, ideal para acompanhar pratos com molho.",
    valor: (25.0).toFixed(2),
  },

  //C3
  {
    id: 2,
    img: "img/Lamen.png",
    favorito: false,
    estrelas: 5,
    nome: "Lamen",
    descricao:
      "Macarrão japonês em caldo, acompanhado de carne, ovo e vegetais.",
    valor: (20.0).toFixed(2),
  },

  //C4

  {
    id: 3,
    img: "img/cereal.png",
    favorito: false,
    estrelas: 5,
    nome: "Cereal",
    descricao:
      "Mistura de cereais crocantes e frutas deliciosas, servido com leite ou iogurte.",
    valor: (15.0).toFixed(2),
  },
];

//CREATE CARRINHO

export function adicionarACesta(nome: string, quantidade: number) {
  let i: number = 0;
  while (i < cardapio.length) {
    let comida = cardapio[i];

    if (comida.nome === nome) {
      let novoCarrinho: ItemDoCarrinho = {
        idComida: comida.id,
        quantidade: quantidade,
        valor: parseFloat(comida.valor),
      };
      return novoCarrinho;
    }
    i++;
  }
}

console.log(adicionarACesta("Lamen", 1));

// DELETE CARRINHO

export function limparCarrinho() {}

// ADICIONAR E REMOVER FAVORITAGEM....

export function adicionarFavoritagem(id: number): ItemDoCardapio | undefined {
  let pratoEncontrado: ItemDoCardapio | undefined;

  cardapio.forEach((prato) => {
    if (prato.id !== id) return;

    prato.favorito = !prato.favorito;

    pratoEncontrado = prato;
  });

  return pratoEncontrado;
}

// ADICIONAR COMENTARIO

export function adicionarComentario(texto: string) {
  let novoTexto: Comentario = {
    id: comentarios.length,
    comentario: texto,
  };

  comentarios.push(novoTexto);

  return novoTexto;
}

// REMOVER COMENTATRIO

export function removerComentario(id: number): boolean {
  let comentarioEcontrado: boolean = false;

  comentarios.forEach((comentario) => {
    if (comentario.id === id) {
      comentarios.splice(comentario.id, 1);
      comentarioEcontrado = true;
    }
  });
  return comentarioEcontrado;
}
