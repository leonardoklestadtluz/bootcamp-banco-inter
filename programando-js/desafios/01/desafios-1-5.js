// DESAFIO 1 ================================================
let lines = gets(10000).split('\n');
var N = parseInt(lines.shift());

for (let i = 1; i <= N; i++) {
  if (i % 2 === 0) console.log(`${i}^2 = ${i * i}`); //escreva sua lógica nos espaços em branco
}

// DESAFIO 2 ================================================
let lines = gets().split('\n');
let n = parseInt(lines.shift());

for (let i = 1; i < 10000; i++) {
  if (i % n === 2) {
    console.log(`${i}\n`);
  };
}

// DESAFIO 3 =================================================
let lines = gets().split("\n");
let line = parseInt(lines.shift().split(' '));
// escreva seu código aqui

let mensagem = "LIFE IS NOT A PROBLEM TO BE SOLVED";

console.log(mensagem.substring(0, line));

// DESAFIO 4 =================================================
let lines = gets().split("\n");
let line = lines.shift().split(' ');

// escreva aqui o seu código
let tomadas = 0;
for (i = 1; i < 5; i++) {
  tomadas = tomadas + parseInt(line.slice(-i));
}

tomadas = tomadas - 3;
console.log(tomadas);

// DESAFIO 5 =================================================
let lines = gets().split("\n");
let line = lines.shift().split(' ');

//continue o seu código aqui
let N = parseFloat(line[0]);
let L = parseFloat(line[1]);
let P = N * L;
console.log(P);