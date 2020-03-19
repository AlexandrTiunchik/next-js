import styles from './card.module.scss';

const Card = (props) => {
  const { image, date, state, maxTemp, minTemp, } = props;

  return (
    <div className={styles.container}>
      <img alt={state} className={styles.container__image} src={image}/>
      <div className={styles.container__info}>
        <span>{date}</span>
        <span>{state}</span>
      </div>
      <div className={styles.container__temp}>
        <span>{parseInt(maxTemp)} C / {parseInt(minTemp)} C</span>
      </div>
    </div>
  );
}

export default Card;
