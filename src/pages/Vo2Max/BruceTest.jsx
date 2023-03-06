// Css
import styles from './Vo2MaxTest.module.css';

// Hooks
import { useState } from 'react';

const BruceTest = () => {

    const [time, setTime] = useState("");
    const [vo2Max, setVo2Max] = useState(0);
    const [resultJsx, setResultJsx] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        let vo2Calculation =  6.14 + (3.26 * time)
        setVo2Max(parseFloat(vo2Calculation.toFixed(2)));
        setResultJsx(true);
        setTime("");
    };

    const cleanResult = (e) => {
        setResultJsx(false)
    };

  return (
    <div className={styles.container}>

      <form className={styles.form} onSubmit={handleSubmit}> 
        <label>Tempo (minutos)</label>
        <input 
            type="number" 
            placeholder="Digite o tempo"
            onChange={(e) => setTime(e.target.value)}
            value={time}  
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
}

export default BruceTest;