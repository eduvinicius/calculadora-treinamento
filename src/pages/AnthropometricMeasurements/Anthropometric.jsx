import styles from './Anthropometric.module.css'

import imgDobras from '../../images/como-fazer-avaliacao-fisica.jpg';

import Select from '../../components/Select';
import PollockMasc from './PollockMasc';
import PollockFem from './PollockFem';
import OverWeight from './OverWeight';

import { useState } from 'react';




const Anthropometric = () => {

  const [pollockMasc, setPollockMasc] = useState(false);
  const [pollockFem, setPollockFem] = useState(false);
  const [overweight, setOverweight] = useState(false);

  const handleChange = (e) => {
    
    switch(e.target.value) {
      case "7dMasc":
          setPollockMasc(true);
          setPollockFem(false);
          setOverweight(false);
      break;

      case "7dFem":
        setPollockMasc(false);
        setPollockFem(true);
        setOverweight(false);
      break;

      case "overWeight":
        setPollockMasc(false);
        setPollockFem(false);
        setOverweight(true);
      break;

      default:
        setPollockMasc(false);
        setPollockFem(false);
        setOverweight(false);
    }
  };

  return (
    <div className={styles.container}>
      <h2>Cálculo de Percentual de Gordura</h2>
      <p>
        Nesta seção, você pode escolher o método que deseja para calcular o percentual de gordura de um aluno.

      </p>
      <div className={styles.imgContainer}>
        <img src={imgDobras} />
      </div>

      <Select
        onChange={handleChange} 
        moreOptions={true}
        value1="7dMasc"
        value2="7dFem"
        value3="overWeight"
        optionName1="Pollock 7 Dobras Masculino"
        optionName2="Pollock 7 Dobras Feminino"
        optionName3="Protocolo Weltman(1988)" 
      />
      <p>
        Acima, temos 3 opções de avaliação. Pollock 7 dobras masculino e feminino, e avaliação por medidas.
        Escolha a que faz mais sentido para o seu aluno!
      </p> 
      {pollockMasc && (
        <div className={styles.meth_container}>
          <p>
            Avaliação para mensurar o nível de gordura de homens. Pollock utiliza 7 dobras 
            (Subescapular, Tricipal, Peitoral, Axilar média, Suprailíaca, Abdominal e Coxa).
            As medições, que são feitas com um Adipômetro (aparelho à direita na foto acima),
            é realizada apenas ao lado direito do corpo do avaliado.
          </p>
          <PollockMasc />
        </div>
      )}
      {pollockFem && (
        <div className={styles.meth_container}>
          <p>
            Avaliação para mensurar o nível de gordura de mulheres. Pollock utiliza 7 dobras 
            (Subescapular, Tricipal, Peitoral, Axilar média, Suprailíaca, Abdominal e Coxa).
            As medições, que são feitas com um Adipômetro (aparelho à direita na foto acima),
            é realizada apenas ao lado direito do corpo da avaliada.
          </p>
          <PollockFem />
        </div>
      )}
      {overweight && (
        <>
          <p>
            O protocolo de Weltman é utilizado para obter o percentual de gordura através
            da média da medida de circunferência do abdomên. São feitas duas medidas e, no final, a média
            é calculada. Para homens, além da médida é necessário saber o peso para incluir na equação final.
          </p>
          <OverWeight />
        </>
      )}
    </div>
  )
}

export default Anthropometric;