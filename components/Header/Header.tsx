import styles from './header.module.scss';
import IHeader from './IHeader';

const Header = (props: IHeader) => {
  const { style, children } = props;
  
  return (
    <header className={`${styles.header} ${style}`}>
      {children}
    </header>
  );
};

export default Header;
