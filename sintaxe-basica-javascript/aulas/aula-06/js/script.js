function calculadora() {
  const operacao = Number(prompt(`
    Escolha uma operação: 
    1 - Adição............. +
    2 - Subtração.......... -
    3 - Multiplicação...... *
    4 - Divisão real....... /
    5 - Resto da Divisao... %
    6 - Potenciação........ **
    0 - Sair
  `));

  if (!operacao || operacao >= 7) {
    alert(`Operação inválida!`)
    calculadora();
  } else {
    let numero1 = Number(prompt(`Informe o primeiro número: `));
    let numero2 = Number(prompt(`Informe o segundo número: `));
    let resultado;

    if (!numero1 || !numero2) {
      alert(`[ERRO]: Parêmetros inválidos!`);
      calculadora();
    } else {
      function adicao() {
        resultado = numero1 + numero2;
        alert(`${numero1} + ${numero2} = ${resultado}`);
        novaOperacao();
      }
      function subtracao() {
        resultado = numero1 - numero2;
        alert(`${numero1} - ${numero2} = ${resultado}`);
        novaOperacao();
      }
      function multiplicacao() {
        resultado = numero1 * numero2;
        alert(`${numero1} * ${numero2} = ${resultado}`);
        novaOperacao();
      }
      function divisaoReal() {
        resultado = numero1 / numero2;
        alert(`${numero1} / ${numero2} = ${resultado}`);
        novaOperacao();
      }
      function restoDivisao() {
        resultado = numero1 % numero2;
        alert(`O resto da divisão entre ${numero1} e ${numero2} = ${resultado}`);
        novaOperacao();
      }
      function potenciacao() {
        resultado = numero1 ** numero2;
        alert(`${numero1} elevado a ${numero2}ª = ${resultado}`);
        novaOperacao();
      }
      function sair() {
        alert(`Até mais!`);
      }

      function novaOperacao() {
        let opcao = Number(prompt(`Deseja fazer outra operação? \n1 - Sim\n2 - Não`));
        if (opcao == 1) {
          calculadora();
        } else if (opcao == 2) {
          alert(`Até mais!`);
        } else {
          alert(`Digite uma opção válida!`);
          novaOperacao();
        }
      }

      if (operacao == 1) {
        adicao();
      } else if (operacao == 2) {
        1
        subtracao();
      } else if (operacao == 3) {
        multiplicacao();
      } else if (operacao == 4) {
        divisaoReal();
      } else if (operacao == 5) {
        restoDivisao();
      } else if (operacao == 6) {
        potenciacao();
      } else if (operacao == 0) {
        sair();
      }
    }
  }
}

calculadora();