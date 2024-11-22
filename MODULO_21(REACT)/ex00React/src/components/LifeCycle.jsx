// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';

function Relogio() {
  const [hora, setHora] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const intervalo = setInterval(() => {
      setHora(new Date().toLocaleTimeString());
    }, 1000);

    // Limpar intervalo quando o componente for desmontado
    return () => {clearInterval(intervalo)
      console.log('oi')
    };
  }, []);

  return (
    <div>
      <p>A hora atual é: {hora}</p>
    </div>
  );
}

export default Relogio;
