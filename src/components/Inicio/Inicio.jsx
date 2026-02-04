import Uniao from "../../assets/uniao.png"
import styles from "./Inicio.module.scss"
export default function Inicio() {
  return (
    <section className={styles.secaoInicio}>
      <div className={styles.texto}>
    <h2>Projetos Sociais que trasformam</h2>
    <p>Conectamos sua empresa com projetos sociais impactantes. Juntos, criamos mudanças reais na comunidade.</p>
    </div>
    <img src={Uniao} alt="" />
   </section>
  )
}
