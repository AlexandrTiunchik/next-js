import styles from './header.module.scss';

const Header = (props) => {
  const { style } = props;
  
  return (
    <header className={`${styles.header} ${style}`}>
      {props.children}
    </header>
  );
};

export default Header;
