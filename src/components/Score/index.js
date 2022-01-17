import usePicker from "../../Hooks/usePicker"
import styles from "./styles.module.css"

function Score() {
  const {score} = usePicker()
  return (
    <div className={styles.score}>
      <p>Score</p>
      <span>{score}</span>
    </div>
  )
}

export default Score
