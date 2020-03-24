import styles from './logo.module.scss';
import ILogo from './ILogo';

const Logo = (props: ILogo) => {
  const { children, style } = props;

  return (
    <h1 className={`${styles.logo} ${style}`}>{children}</h1>
  );
}

export default Logo;
