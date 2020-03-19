import styles from './logo.module.scss';

const Logo = (props) => {
  const { children, style } = props;

  return (
    <h1 className={`${styles.logo} ${style}`}>{children}</h1>
  );
}

export default Logo;
