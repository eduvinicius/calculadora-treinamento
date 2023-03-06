// Css
import styles from './Vo2MaxTest.module.css';

// Hooks
import { useState } from 'react';

const Vo2MaxTest = () => {

    const [maxSpeed, setMaxSpeed] = useState("");
    const [grade, setGrade] = useState("");
    const [vo2Max, setVo2Max] = useState(0);
    const [resultJsx, setResultJsx] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        let vo2Calculation = (0.2 * maxSpeed) + (0.9 * maxSpeed * grade) + 3.5;
        setVo2Max(parseFloat(vo2Calculation.toFixed(2)))
        setResultJsx(true)
        setMaxSpeed("")
        setGrade("")
    }

    const cleanResult = (e) => {
        setResultJsx(false)
    }
  
  return (

    <div className={styles.container}>

      <form className={styles.form} onSubmit={handleSubmit}> 
        <label>Velocidade Máxima</label>
        <input 
            type="number" 
            placeholder="Digite a velocidade"
            onChange={(e) => setMaxSpeed(e.target.value)}
            value={maxSpeed}  
            required 
        />
        <label>% Inclinação</label>
        <input  
            type="number"  
            placeholder="Digite a Inclinação"
            onChange={(e) => setGrade(e.target.value)}
            value={grade} 
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

export default Vo2MaxTest;