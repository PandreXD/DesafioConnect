import React from 'react'
import ImPerfil from "../../assets/perfil1.jpeg"
import styles from "./Perfil.module.scss"
export default function Perfil() {
  return (
    <section className={styles.containerTelaPerfil}>
      <article>
        <img src={ImPerfil} alt="" />
        <div className={styles.cardInfo}>
          <h2>Pedro André</h2>
          <h3>Voluntario Ativo</h3>
          <p className={styles.paragrafoSobreMim}>Apaixonado por fazer a diferença na comunidade. Acredito que pequenas ações podem transformar vidas e estou sempre em busca de novas oportunidades para ajudar.</p>

          <address>
            <p>Magé, RJ</p>
            <p>wkpedroff@gmail.com</p>
            <p>Membro desde Janeiro de 2022</p>
          </address>
          <ul className={styles.listaInteresses}>
            <li>Educação</li>
            <li>Meio Ambiente</li>
            <li>Assistência Social</li>
            <li>Design</li>

          </ul>
        </div>
      </article>
    </section>
  )
}
