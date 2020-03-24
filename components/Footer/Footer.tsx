import styles from './footer.module.scss';
import IFooter from './IFooter';

const Footer = (props: IFooter) => {
  const { style, children } = props;

  return (
    <footer className={`${styles.footer} ${style}`}>
      {children}
    </footer>
  )
}

export default Footer;
