// Css
import styles from './Vo2MaxTest.module.css';

// Hooks
import { useState } from 'react';

const CooperTest = () => {

    const [distance, setDistance] = useState("");
    const [vo2Max, setVo2Max] = useState(0);
    const [resultJsx, setResultJsx] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        let vo2Calculation = (distance - 504) / 45;
        setVo2Max(parseFloat(vo2Calculation.toFixed(2)));
        setResultJsx(true);
        setDistance("");
    };

    const cleanResult = (e) => {
        setResultJsx(false)
    };
  
  return (

    <div className={styles.container}>

      <form className={styles.form} onSubmit={handleSubmit}> 
        <label>Distância(metros)</label>
        <input 
            type="number" 
            placeholder="Digite a distância percorrida"
            onChange={(e) => setDistance(e.target.value)}
            value={distance}  
            required 
        />
        <div className={styles.submitContainer}>
            <input type="submit" value="Calcular" />
            <input type="button" value="Limpar" onClick={cleanResult} />
        </div>

        {resultJsx && (
            <p>Vo2Max: {vo2Max} (ml.kg.min-1)</p>
        )}
      </form>
    </div>
  )
};

export default CooperTest;