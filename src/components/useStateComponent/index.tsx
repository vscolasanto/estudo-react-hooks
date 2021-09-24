import React from 'react';
import './index.css';

/**
 * UseState é uma função onde seu retorno tem duas posições.
 * A primeira posição é o valor do estado, e a segunda posição é uma função para atualização deste valor.
 * Quando usamos as duas posições dentor de um mesmo bloco, é interessante usarmos
 * a forma de callback ao setar o estado setCounter((prevState) => prevState - 1);
 */

export const UseStateComponent: React.FC = () => {
  const [rotate, setRotate] = React.useState<boolean>();
  const [counter, setCounter] = React.useState<number>(0);

  const rotateClass = rotate ? 'rotate' : 'reverse';

  const handlerotate = () => {
    setRotate(!rotate);
  };

  const handleCounter = (type: 'minus' | 'plus') => {
    if (type === 'minus') {
      // setCounter(counter - 1);
      setCounter((prevState) => prevState - 1);
    } else {
      // setCounter(counter + 1);
      setCounter((prevState) => prevState + 1);
    }
  };

  return (
    <div className="comp">
      <div className="counter">
        <h3>Contador: {counter}</h3>
        <div>
          <button className="plus" onClick={() => handleCounter('plus')}>
            +
          </button>
          <button className="minus" onClick={() => handleCounter('minus')}>
            -
          </button>
        </div>
      </div>
      <h1 className={rotateClass}>USE STATE</h1>
      <button className="button-rotate" onClick={() => handlerotate()}>
        Inverter giro
      </button>
    </div>
  );
};
