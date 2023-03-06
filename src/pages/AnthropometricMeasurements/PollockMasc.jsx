import styles from './Pollock.module.css';

import { useState } from "react";

const PollockMasc = () => {

  const [age, setAge] = useState("");
  const [subscapular, setSubscapular] = useState("");
  const [triceps, setTriceps] = useState("");
  const [chest, setChest] = useState("");
  const [axilla, setAxilla] = useState("");
  const [suprailliac, setSuprailliac] = useState("");
  const [abdominal, setAbdominal] = useState("");
  const [thigh, setThigh] = useState("");
  const [skinFolds, setSkinFolds] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    let sumSkinFold = Number(subscapular) + Number(triceps) + Number(chest) + Number(axilla) + Number(suprailliac)
      + Number(abdominal) + Number(thigh);

    setSkinFolds(sumSkinFold);

    let density = 1.112- 0.00043499 * (sumSkinFold) + 0.00000055 * (sumSkinFold)**2 - 0.00028826 * (age);
    let bodyFat = (4.95 / density - 4.50) * 100;

    setResult(bodyFat);

    setAge("");
    setSubscapular("");
    setTriceps("");
    setChest("");
    setAxilla("");
    setSuprailliac("");
    setAbdominal("");
    setThigh("");   
  };

  return (
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.main_form_container}>
          <div className={styles.first_container}>
            <div>
              <label>Idade:</label>
              <input type="number" onChange={(e) => setAge(e.target.value)} value={age} required />
            </div>
            <div>
              <label>Subescapular:</label>
              <input type="number" onChange={(e) => setSubscapular(e.target.value)} value={subscapular} required />
            </div>      
            <div>
              <label>Tricipital:</label>
              <input type="number" onChange={(e) => setTriceps(e.target.value)} value={triceps} required />
            </div>
            <div>
              <label>Peitoral:</label>
              <input type="number" onChange={(e) => setChest(e.target.value)} value={chest} required />
            </div>
          </div>
          <div className={styles.second_container}>
            <div>
              <label>Axilar:</label>
              <input type="number" onChange={(e) => setAxilla(e.target.value)} value={axilla} required />
            </div>
            <div>
              <label>Supraillíaca:</label>
              <input type="number" onChange={(e) => setSuprailliac(e.target.value)} value={suprailliac} required />
            </div>      
            <div>
              <label>Abdominal:</label>
              <input type="number" onChange={(e) => setAbdominal(e.target.value)} value={abdominal} required />
            </div>
            <div>
              <label>Coxa:</label>
              <input type="number" onChange={(e) => setThigh(e.target.value)} value={thigh} required />
            </div>
          </div>
        </div>
        <div className={styles.submit}>
          <input type="submit" value="Calcular" />
        </div>
        {result &&  (
          <div className={styles.resultPollock}>
           <p>Percentual de Gordura: {Number(result).toFixed(2).replace(".",",")}%</p>
           <p>Somatório de Dobras: {Number(skinFolds).toFixed(1).replace(".",",")}mm</p>
          </div>
        )}
      </form>
  )
}

export default PollockMasc;