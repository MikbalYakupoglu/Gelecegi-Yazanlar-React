import React, { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0);
  const [amount, setAmount] = useState(1);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(prev => prev + amount)}>Arttır</button> {/* Statenin en son değerini alır (countu geri döndürür) */}
      <hr />
      <p>Arttırma : {amount}</p>
      <button onClick={() => setAmount(1)}>+1</button>
      <button onClick={() => setAmount(3)}>+3</button>
      <button onClick={() => setAmount(10)}>+10</button>

    </div>
  )
}

export default Counter