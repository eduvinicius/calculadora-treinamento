// CSS
import styles from './Vo2Max.module.css';

// Components
import Vo2MaxTest from './Vo2MaxTest'
import CooperTest from './CooperTest';
import BruceTest from './BruceTest';

// Images
import vo2Img from '../../images/vo2teste.png';

// Hooks
import { useState } from 'react';
import Select from '../../components/Select';



const Vo2Max = () => {

  const [vo2AHA, setVo2AHA] = useState(false);
  const [vo2Cooper, setVo2Cooper] = useState(false);
  const [vo2Bruce, setVo2Bruce] = useState(false);
 
  const handleChange = (e) => {

    if (e.target.value === "AHA") {
      setVo2AHA(true)
      setVo2Cooper(false)
      setVo2Bruce(false)
    } else if (e.target.value === "Cooper") {
      setVo2AHA(false)
      setVo2Cooper(true)
      setVo2Bruce(false)
    } else if (e.target.value === "Bruce") {
      setVo2AHA(false)
      setVo2Cooper(false)
      setVo2Bruce(true)
    } else {
      setVo2AHA(false)
      setVo2Cooper(false)
      setVo2Bruce(false)
    }
  };
  
  return (
    <div className={styles.container}>
      <h2>Calculadora de VO2Max</h2>
      <p>
        VO₂ max, ou volume de oxigênio máximo é a capacidade máxima do corpo de um indivíduo de 
        transportar e metabolizar oxigênio durante um exercício físico incremental — 
        tipicamente feito em uma esteira ergométrica — sendo a variável fisiológica que melhor reflete a 
        capacidade aeróbica de um indivíduo.
      </p>
      <img src={vo2Img} alt="Vo2Teste"/>
      <h2>Escolha um teste</h2>
        <Select onChange={handleChange}
          value1="AHA"
          value2="Cooper"
          value3="Bruce"
          optionName1="American Heart Association"
          optionName2="Teste de Cooper"
          optionName3="Teste de Bruce" 
         />
      <h3>Após escolher, faça o teste e preencha os campos requisitados</h3>
      {vo2AHA && <Vo2MaxTest />}
      {vo2Cooper && (
        <>
          <h3>Teste de Cooper</h3>
          <p>
            O teste de Cooper é um teste que tem como objetivo avaliar a capacidade cardiorrespiratória 
            através da análise da distância percorrida durante 12 minutos, em uma corrida ou caminhada, 
            sendo utilizado para avaliar o condicionamento físico da pessoa.
          </p>
          <CooperTest />
        </>
      )}
      {vo2Bruce && (
        <>
          <h3>Teste de Bruce</h3>
          <p>
            É o protocolo mais utilizado no meio médico, com aumentos progressivos da velocidade e da inclinação 
            a cada estagio, sendo estes de 3min, o nível é de 10% e 2,735km/h é aumentado 
            a cada estagio de 1,367km.h-¹ de inclinação até a exaustão.
          </p>
          <BruceTest />
        </>
      )}

    </div>
  )
};

export default Vo2Max;