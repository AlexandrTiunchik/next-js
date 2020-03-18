import styles from './footer.module.scss';

const Footer = (props) => {
  const { style } = props;

  return (
    <footer className={`${styles.footer} ${style}`}>
      {props.children}
    </footer>
  )
}

export default Footer;
