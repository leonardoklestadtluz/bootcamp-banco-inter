function validaArray(arr, num) {


  try {
    // 1ª validação
    if (!arr && !num) throw new ReferenceError("Envie os parâmetros");

    // 2ª validação
    if (typeof arr !== 'object') throw new TypeError("Array precisa ser do tipo Object");

    // 3ª validação
    if (typeof num !== 'number') throw new TypeError("Num precisa ser do tipo Number");

    // 4ª validação
    if (arr.length !== num) throw new RangeError("Tamanho inválido");

    return arr;
  } catch (e) {
    if (e instanceof ReferenceError) {
      console.log("Este erro é um ReferenceError!");
      console.log(e.message);
    } else if (e instanceof TypeError) {
      console.log("Este erro é um TypeError!");
      console.log(e.message);
    } else if (e instanceof RangeError) {
      console.log("Este erro é um RangeError!");
      console.log(e.message);
    } else {
      console.log("Tipo de erro inesperado: " + e);
    }
  }
}

console.log(validaArray([], 'w'));