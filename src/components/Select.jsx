import styles from "./Select.module.css";

const Select = ({onChange, value1, value2, value3, optionName1, optionName2, optionName3, moreOptions = false}) => {
  return (
    <div className={styles.selectContainer}>
        <select className={styles.select} onChange={onChange}>
        <option>Escolha uma opção</option>
        <option value={value1}>{optionName1}</option>
        <option value={value2}>{optionName2}</option>
        {moreOptions && (
          <option value={value3}>{optionName3}</option>
        )}
        </select>
  </div>
  )
}

export default Select