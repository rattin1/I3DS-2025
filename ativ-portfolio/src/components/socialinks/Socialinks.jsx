import styles from './Socialinks.module.css';

function Socialinks(props) {
  return (
    <div className={styles.main}>
      <div className={styles.up}>
        <button onClick={() => window.open(props.link1, '_blank')} className={styles.social1}>
          <ion-icon name={props.icon1}></ion-icon>
        </button>

        <button onClick={() => window.open(props.link2, '_blank')} className={styles.social2}>
          <ion-icon name={props.icon2}></ion-icon>
        </button>
      </div>
      <div className={styles.down}>
        <button onClick={() => window.open(props.link3, '_blank')} className={styles.social3}>
          <ion-icon name={props.icon3}></ion-icon>
        </button>

        <button onClick={() => window.open(props.link4, '_blank')} className={styles.social4}>
          <ion-icon name={props.icon4}></ion-icon>
        </button>
      </div>
    </div>
  );
}

export default Socialinks;