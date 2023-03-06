import styles from './TraditionalVolume.module.css'

import { useState } from 'react';

const TraditionalVolume = () => {

    const [sets, setSets] = useState("");
    const [reps, setReps] = useState("");
    const [kg, setKg] = useState("");
    const [result, setResult] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      const totalLoad = sets * reps * kg;
      setResult(totalLoad)
  
      setSets("");
      setReps("");
      setKg("");
    }

  return (
    <div className={styles.formContainer}>
        <form className={styles.form} onSubmit={handleSubmit}>
        <label>Número de séries:</label>
        <input 
            type="number" 
            placeholder="Digite o número de séries"
            onChange={(e) => setSets(e.target.value)}
            value={sets} 
        />
        <label>Número de repetições:</label>
        <input 
            type="number" 
            placeholder="Digite o número de repetições"
            onChange={(e) => setReps(e.target.value)}
            value={reps} 
        />
        <label>Intensidade(kg):</label>
        <input 
            type="number" 
            placeholder="Digite a intensidade"
            onChange={(e) => setKg(e.target.value)}
            value={kg} 
        />
        <input type='submit' value="Calcular" />
        {result && (
            <p>Volume Total: {result} kg</p>
        )}
        </form>
    </div>
  )
}

export default TraditionalVolume;