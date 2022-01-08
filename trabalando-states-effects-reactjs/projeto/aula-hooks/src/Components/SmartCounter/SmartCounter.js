import { useState } from 'react';

function SmartCounter() {
  // retorna um vetor
  // 1. variável stateful (com memória)
  // 2. função amarrada a variável que atualiza este valor

  const [quantity, upQuantity] = useState(100000000);

  return (
    <>
      <h1>{quantity}</h1>
      <button onClick={() => upQuantity(quantity + 1)}>Aumentar</button>
    </>
  );
}

export default SmartCounter;