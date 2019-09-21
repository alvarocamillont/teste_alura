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
  for (let indice = 0; indice < carrinho.length; indice++) {
    const item = carrinho[indice];
    if (item.descricao === descricao) {
      return item;
    }
  }
}

function totalizaCarrinho(carrinho) {
  let valorTotal = 0;
  for (let indice = 0; indice < carrinho.length; indice++) {
    valorTotal += carrinho[indice].valor;
  }
  return valorTotal;
}

function filtraPorId(id, carrinho) {
  let carrinhoFiltrado = [];
  for (let indice = 0; indice < carrinho.length; indice++) {
    const item = carrinho[indice];
    if (item.id === id) {
      carrinhoFiltrado.push(item);
    }
  }
  return carrinhoFiltrado;
}

console.log(encontraPorDescricao('Bacon', carrinhoExemplo));
console.log(filtraPorId(1, carrinhoExemplo));
console.log(totalizaCarrinho(carrinhoExemplo));
