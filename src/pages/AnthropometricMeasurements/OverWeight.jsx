import styles from './OverWeight.module.css';

import { useState } from 'react';

const OverWeight = () => {

  const [abdMeasure1Men, setAbdMeasure1Men] = useState("");
  const [abdMeasure2Men, setAbdMeasure2Men] = useState("");
  const [abdMeasure1Women, setAbdMeasure1Women] = useState("");
  const [abdMeasure2Women, setAbdMeasure2Women] = useState("");
  const [abdMeasureAverage, setAbdMeasureAverage] = useState("");
  const [weightMen, setWeightMen] = useState("");
  const [weightWomen, setWeightWomen] = useState("");
  const [height, setHeight] = useState("");
  const [resultMen, setResultMen] = useState("");
  const [resultWomen, setResultWomen] = useState("");

  const handleSubmitMen = (e) => {
    e.preventDefault();

    let abdAverage = (Number(abdMeasure1Men) + Number(abdMeasure2Men)) / 2;
    setAbdMeasureAverage(abdAverage);

    let bodyFatMen = 0.31457 * (abdAverage) - 0.10969 * (weightMen) + 10.8336;
    setResultMen(bodyFatMen);

    setAbdMeasure1Men("");
    setAbdMeasure2Men("");
    setWeightMen("");
  }

  const handleSubmitWomen = (e) => {
    e.preventDefault();

    let abdAverage = (Number(abdMeasure1Women) + Number(abdMeasure2Women)) / 2;
    setAbdMeasureAverage(abdAverage);

    let bodyFatWomen = 0.11077 * (abdAverage) - 0.17666 * (height) + 0.14354 * (weightWomen) + 51.03301;
    setResultWomen(bodyFatWomen);

    setAbdMeasure1Women("");
    setAbdMeasure2Women("");
    setWeightWomen("");
    setHeight("");
  }

  return (
    <div className={styles.main_container}>
      <h2>Medida para Homens</h2>
      <div className={styles.masc_container}>
        <form onSubmit={handleSubmitMen} className={styles.form_masc}>
          <div className={styles.measures}>
            <label>Medida 1:</label>
            <input type="number" onChange={(e) => setAbdMeasure1Men(e.target.value)} value={abdMeasure1Men} required />
            <label>Medida 2:</label>
            <input type="number" onChange={(e) => setAbdMeasure2Men(e.target.value)} value={abdMeasure2Men} required />
          </div>
          <div className={styles.weight}>
            <label>Peso:</label>
            <input type="number" onChange={(e) => setWeightMen(e.target.value)} value={weightMen} required />
            <input type="submit" value="Calcular" />
          </div>
          {resultMen && (
            <>
              <p>Média das medidas: {abdMeasureAverage}</p>
              <p>Percentual de gordura: {Number(resultMen).toFixed(2).replace(".",",")}</p>
            </>
          )}
        </form>
      </div>
      <h2>Medida para Mulheres</h2>
      <div className={styles.fem_container}>
        <form onSubmit={handleSubmitWomen} className={styles.form_fem}>
          <div className={styles.measures}>
              <label>Medida 1:</label>
              <input type="number" onChange={(e) => setAbdMeasure1Women(e.target.value)} value={abdMeasure1Women} required />
              <label>Medida 2:</label>
              <input type="number" onChange={(e) => setAbdMeasure2Women(e.target.value)} value={abdMeasure2Women} required />
            </div>
            <div className={styles.weight}>
              <label>Peso:</label>
              <input type="number" onChange={(e) => setWeightWomen(e.target.value)} value={weightWomen} required />
              <label>Altura:</label>
              <input type="number" onChange={(e) => setHeight(e.target.value)} value={height} required />
            </div>
            <div className={styles.submit_fem}>
              <input type="submit" value="Calcular" />
            </div>
            {resultWomen && (
            <>
              <p>Média das medidas: {abdMeasureAverage}</p>
              <p>Percentual de gordura: {Number(resultWomen).toFixed(2).replace(".",",")}</p>
            </>
          )}
        </form>
      </div>
    </div>

  )
}

export default OverWeight;