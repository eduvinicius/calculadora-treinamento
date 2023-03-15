import styles from './DropRestVolume.module.css';

import { useState } from 'react';

const DropSetVolume = () => {
  const [sets, setSets] = useState("");
  const [reps, setReps] = useState("");
  const [repsSub1, setRepsSub1] = useState("");
  const [repsSub2, setRepsSub2] = useState("");
  const [repsSub3, setRepsSub3] = useState("");
  const [kg, setKg] = useState("");
  const [kgSub1, setKgSub1] = useState("");
  const [kgSub2, setKgSub2] = useState("");
  const [kgSub3, setKgSub3] = useState("");
  const [dropRestResult, setDropRestResult] = useState("");
  const [resultWithoutDropRest, setResultWithoutDropRest] = useState("");
  const [diffBetweenMeth, setDiffBetweenMeth] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const volumeWithoutDropRest = sets * reps * kg;
    setResultWithoutDropRest(volumeWithoutDropRest);

    if (kgSub2 && !kgSub3) {
      var kgAverage = (Number(kg) + Number(kgSub1) + Number(kgSub2)) / 3;
    } else if (!kgSub2 && !kgSub3) {
      var kgAverage = (Number(kg) + Number(kgSub1)) / 2;
    } else {
      var kgAverage = (Number(kg) + Number(kgSub1) + Number(kgSub2) + Number(kgSub3)) / 4;
    }
    
    const totalReps = Number(reps) + Number(repsSub1) + Number(repsSub2) + Number(repsSub3);
    const totalLoad = sets * totalReps * kgAverage;
    setDropRestResult(parseInt(totalLoad));

    // diminuir o float
    const diffBetweenMeth = parseFloat(totalLoad / volumeWithoutDropRest);
    setDiffBetweenMeth(diffBetweenMeth.toFixed(2));

    setSets("");
    setReps("");
    setRepsSub1("");
    setRepsSub2("");
    setRepsSub3("");
    setKg("");
    setKgSub1("");
    setKgSub2("");
    setKgSub3("");
  };

 return (
  <div className={styles.formContainer}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.main_container}>
          <div className={styles.main_container_input1}>
            <div className={styles.container_sets}>
              <label>Série:</label>
              <input 
                  type="number" 
                  onChange={(e) => setSets(e.target.value)}
                  value={sets}
                  required 
              />
            </div>
            <div className={styles.kg_container}>
              <label>Peso:</label>
                <input 
                      type="number" 
                      onChange={(e) => setKg(e.target.value)}
                      value={kg} 
                      required
                  />
            </div>
            <div className={styles.reps_container}>
              <label>Reps:</label>
                <input 
                    type="number" 
                    onChange={(e) => setReps(e.target.value)}
                    value={reps} 
                    required
                />
            </div>
          </div>   

          <div className={styles.main_container_input2}>
            <div className={styles.reps_subsets}>
              <label>Reps das Subséries:</label>
              <input 
                  type="number" 
                  onChange={(e) => setRepsSub1(e.target.value)}
                  value={repsSub1}
                  required 
              />
              <input 
                  type="number" 
                  onChange={(e) => setRepsSub2(e.target.value)}
                  value={repsSub2} 
              />
              <input 
                type="number" 
                onChange={(e) => setRepsSub3(e.target.value)}
                value={repsSub3} 
              />
            </div>
            <div className={styles.subsets}>
              <label>Peso das Subséries:</label>
              <input 
                  type="number" 
                  onChange={(e) => setKgSub1(e.target.value)}
                  value={kgSub1}
                  required 
              />
              <input 
                  type="number" 
                  onChange={(e) => setKgSub2(e.target.value)}
                  value={kgSub2} 
              />
              <input 
                  type="number" 
                  onChange={(e) => setKgSub3(e.target.value)}
                  value={kgSub3} 
              />
            </div>
          </div>
        </div>
        <div className={styles.result_container}>
          <div className={styles.input_submit}>
            <input type='submit' value="Calcular" />
          </div>
          {dropRestResult && (
              <div className={styles.drop_rest_result}>
              <p>Volume Total do método: {dropRestResult} kg</p>
              <p>Volume Total sem método: {resultWithoutDropRest} kg</p>
              <p>Uma série com método equivaleu a {diffBetweenMeth} séries</p>
            </div>
          )}
        </div>
      </form>
  </div>
)
}

export default DropSetVolume