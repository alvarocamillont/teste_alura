const carrinhoExemplo = [
  {
    id: 1,
    descricao: 'Pão',
    valor: 2
  },
  {
    id: 1,
    descricao: 'Pão',
    valor: 2
  },
  {
    id: 2,
    descricao: 'Carne',
    valor: 10
  },
  {
    id: 3,
    descricao: 'Bacon',
    valor: 3
  }
];

function encontraPorDescricao(descricao, carrinho) {
  return carrinho.find((item) => item.descricao === descricao);
}

function totalizaCarrinho(carrinho) {
  return carrinho.reduce((valorTotal, item) => valorTotal + item.valor, 0);
}

function filtraPorId(id, carrinho) {
  return carrinho.filter((item) => item.id === id);
}

console.log(encontraPorDescricao('Bacon', carrinhoExemplo));
console.log(filtraPorId(1, carrinhoExemplo));
console.log(totalizaCarrinho(carrinhoExemplo));
