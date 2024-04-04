import styles from './Select.module.css'

const Select = ({ options, onChange, value, name = 'Filtry' }) => (
  <div className={styles.container}>
    <div className={styles.name}>{name}:</div>
    <select value={value} onChange={(e) => onChange(e.target.value)}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
)

export default Select
