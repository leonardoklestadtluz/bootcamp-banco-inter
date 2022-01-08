// Base de alunos
const alunos = [
  {
    nome: 'João',
    nota: 5,
    turma: '1B'
  },
  {
    nome: 'Sofia',
    nota: 9,
    turma: '1B'
  },
  {
    nome: 'Paulo',
    nota: 6,
    turma: '2c'
  },
  {
    nome: 'Miguel',
    nota: 10,
    turma: '2c'
  }
];

// Função para verificar alunos aprovados
function alunosAprovados(arr, media) {
  let aprovados = [];

  for (let i = 0; i < arr.length; i++) {
    const { nota, nome } = arr[i];
    if (nota >= media) {
      aprovados.push(nome);
    }
  }
  return aprovados;
}

// Chamada da função alunosAprovados(){}
console.log(alunosAprovados(alunos, 5));