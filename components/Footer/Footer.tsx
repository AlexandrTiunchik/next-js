import styles from './footer.module.scss';

const Footer = (props) => {
  const { style, children } = props;

  return (
    <footer className={`${styles.footer} ${style}`}>
      {children}
    </footer>
  )
}

export default Footer;
