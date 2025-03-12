import styles from './Card.module.css'
 
const Card = (props) => {
    return ( 
  <div class={styles.card}>
  <img src={props.rattini} alt="" />
    <div class={styles.card__content}>
      <p class={styles.card__title}>Sobre Mim</p>
      <p class={styles.card__description}>Apaixonado por arquitetura, detalhes e a forma como os espaços nos fazem sentir. Gosto de transformar ideias em lugares que acolhem e inspiram. Sempre buscando equilíbrio entre estética e funcionalidade, acredito que cada projeto conta uma história – e eu quero contar as melhores.</p>
    </div>
  </div>
  
    )
  }

export default Card