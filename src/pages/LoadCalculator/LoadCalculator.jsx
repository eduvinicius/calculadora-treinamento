// CSS
import styles from './LoadCalculator.module.css';

// Hooks
import { useState } from 'react';

// Images
import imgRT from '../../images/liftweights_1024.jpg';

import TraditionalVolume from './TraditionalVolume';
import Select from '../../components/Select';
import DropRestVolume from './DropRestVolume';

const LoadCalculator = () => {

  const [traditional, setTraditional] = useState(false);
  const [dropRest, setDropRest] = useState(false);

  const handleChange = (e) => {
    e.preventDefault()

    if (e.target.value === "TRAD") {
      setTraditional(true)
      setDropRest(false)
    } else if (e.target.value === "DROPREST") {
      setTraditional(false)
      setDropRest(true)
    } else {
      setTraditional(false)
      setDropRest(false)
    }
  };
  
  return (
    <div className={styles.containerLoad}>
      <h2>Calculadora de Volume de Treino</h2>
      <p>
        Para calcular o volume de treino, é necessário multiplicar o número de
        séries x repetições x intensidade(kg). Preencha os campos abaixos e faça o
        cálculo do volume do seu treino.
      </p>
      <p>
        <span>Sobre cada variável que será utilizada:</span><br></br>
        Séries é quantas vezes você vai fazer um exercício;<br></br>
        Repetições é o número de movimentos que se realiza dentro de uma série;<br></br>
        Intensidade é a quantidade de kilos em um exercício.
      </p>
      <div className={styles.imgContainer}>
        <img src={imgRT} />
      </div>
      <Select
        onChange={handleChange}
        value1="TRAD"
        value2="DROPREST"
        optionName1="Tradicional"
        optionName2="Drop-Set e Rest-Pause"    
      />
      <h3>Após escolher, faça o teste e preencha os campos requisitados</h3>
      {traditional && (
        <div className={styles.meth_container}>
          <p>
            Quando falamos sobre "tradicional", estamos nos referindo ao treinamento
            de múltiplas séries.
          </p>
          <TraditionalVolume />
        </div>
      ) }
      {dropRest && (
       <div className={styles.meth_container}>
          <p>
            Nesta parte do site, você poderá calcular o volume dos métodos Drop-set e Rest-pause, ou
            métodos semelhantes. Drop-set consiste em realizar uma série, depois diminuir de 5% a 50% da carga e
            sem descanso realizar uma subsérie. A quantidade de subséries é subjetiva, no entanto foi inserido a
            opção de preencher 3 subséries. No drop, a cada subsérie há a diminuição da intensidade (peso).
            No Rest-Pause segue uma lógica semelhante. O que muda é que a cada subsérie é exigido um descanso de 
            5 a 20 segundos. A intensidade não muda, ou seja, o peso é o mesmo desde o início das séries!
          </p>
          <DropRestVolume />
        </div>
      )}  
    </div>
  )
}

export default LoadCalculator