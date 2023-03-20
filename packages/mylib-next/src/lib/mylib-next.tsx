import styles from './mylib-next.module.css';

/* eslint-disable-next-line */
export interface MylibNextProps {}

export function MylibNext(props: MylibNextProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to MylibNext!</h1>
    </div>
  );
}
export default MylibNext;
