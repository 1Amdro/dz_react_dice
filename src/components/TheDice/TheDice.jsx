import styles from "./TheDice.module.css";

function TheDice({ num }) {
  const srcPath = num && require(`../../images/dice_${num}.png`);
  console.log(num);
  return (
    <div>
      {num === 0 ? (
        <h2 className={styles.text}>Кликай на кнопку!</h2>
      ) : (
        <img key={num} className={styles["img-dice"]} alt="img" src={srcPath} />
      )}
    </div>
  );
}

export default TheDice;
