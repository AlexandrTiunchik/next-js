import styles from './imageCard.module.scss';
import IImageCard from './IImageCard';

export default function MenuCard(props: IImageCard) {
  const { img, desc, onClick } = props;

  return (
    <div onClick={onClick} className={`${styles.container}`}>
      <img className={`${styles.image}`} src={img}/>
      <h2 className={`${styles.desc}`}>{desc}</h2>
    </div>
  );
}
