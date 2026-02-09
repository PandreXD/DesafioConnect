import Reciclagem from "../../assets/recicla.png"
import Tecnologia from "../../assets/tecnologia.png"
import Inclusao from "../../assets/esporte.png"
import grandeFamilia from "../../assets/familia.jpg"
import Escola from "../../assets/futuro.png"
import conectaJovem from "../../assets/conecta.png"
import styles from "./AcoesDaConnect.module.scss"

import { useState } from "react"

export default function AcoesDaConnect() {

const [projetos, setProjetos] = useState([
  {
    id: 1,
    imagem: Reciclagem,
    nome: "Mutirão de reciclagem",
    descricao: "Coletar materiais recicláveis e orientar sobre descarte consciente.",
    botao: "Quero participar"
  },
  {
    id: 2,
    imagem: Tecnologia,
    nome: "Aulas de Tecnologia",
    descricao: "Ensinar noções básicas de informática, internet segura e programação. Preparar jovens para o mercado de trabalho digital.",
    botao: "Quero participar"
  },
  {
    id: 3,
    imagem: Inclusao,
    nome: "Esporte e Inclusão",
    descricao: "Organizar treinos e jogos que incentivem a participação de todos. Promover disciplina, saúde e trabalho em equipe entre jovens.",
    botao: "Quero participar"
  },
  {
    id: 4,
    imagem: grandeFamilia,
    nome: "Instituto grande família",
    descricao: "Contribua com alimentos não perecíveis e ajude famílias em situação de vulnerabilidade.",
    botao: "Quero Doar"
  },
  {
    id: 5,
    imagem: Escola,
    nome: "Projeto Futuro na Escola",
    descricao: "Doe livros, cadernos, lápis, mochilas e canetas para ajudar jovens a continuarem seus estudos com mais estrutura.",
    botao: "Quero Doar"
  },
  {
    id: 6,
    imagem: conectaJovem,
    nome: "Instituto Conecta Jovem",
    descricao: "Doe computadores usados, tablets ou celulares em bom estado para permitir que jovens tenham acesso ao mundo digital.",
    botao: "Quero Doar"
  }
]);



  return (
     <section className={styles.containerDeAcoes} >
         <div className={styles.boxTitulo}>
            <h2>Ações da Connect</h2>
              <p>Junte-se a quem acredita na mudança. Apoie, participe e transforme vidas através de ações sociais que geram impacto real nas comunidades.</p>
         </div>
            <section className={styles.containerCardsDeAcoes}>
             {
              projetos.map((projetos) => (
              <article className={styles.cardsDeAcoes} key={projetos.id}>
                  <img src={projetos.imagem} alt={projetos.titulo} />
                  <h2>{projetos.titulo}</h2>
                  <p>{projetos.informacao}</p>
                  <button>{projetos.botao}</button>
                  </article>
                    ))
                }
            </section>
        </section>
    )

}
