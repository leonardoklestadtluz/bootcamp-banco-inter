const lista = [
  {
    nome: 'sabão em pó',
    preco: 35
  },
  {
    nome: 'ceral',
    preco: 12
  },
  {
    nome: 'toalha',
    preco: 67
  }
];

const saldoDisponivel = 200;

function calculaSaldo(saldoDisponivel, lista) {
  return lista.reduce(function (prev, current) {
    return prev - current.preco;
  }, saldoDisponivel);
}

console.log('Seu saldo R$', calculaSaldo(saldoDisponivel, lista));