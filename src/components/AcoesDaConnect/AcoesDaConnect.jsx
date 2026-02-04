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
    acao: "Quero participar"
  },
  {
    id: 2,
    imagem: Tecnologia,
    nome: "Aulas de Tecnologia",
    descricao: "Ensinar noções básicas de informática, internet segura e programação. Preparar jovens para o mercado de trabalho digital.",
    acao: "Quero participar"
  },
  {
    id: 3,
    imagem: Inclusao,
    nome: "Esporte e Inclusão",
    descricao: "Organizar treinos e jogos que incentivem a participação de todos. Promover disciplina, saúde e trabalho em equipe entre jovens.",
    acao: "Quero participar"
  },
  {
    id: 4,
    imagem: grandeFamilia,
    nome: "Instituto grande família",
    descricao: "Contribua com alimentos não perecíveis e ajude famílias em situação de vulnerabilidade.",
    acao: "Quero Doar"
  },
  {
    id: 5,
    imagem: Escola,
    nome: "Projeto Futuro na Escola",
    descricao: "Doe livros, cadernos, lápis, mochilas e canetas para ajudar jovens a continuarem seus estudos com mais estrutura.",
    acao: "Quero Doar"
  },
  {
    id: 6,
    imagem: conectaJovem,
    nome: "Instituto Conecta Jovem",
    descricao: "Doe computadores usados, tablets ou celulares em bom estado para permitir que jovens tenham acesso ao mundo digital.",
    acao: "Quero Doar"
  }
]);



  return (
    <main>
    <section className={styles.texto}>
    <h2>Ações da Connect </h2>
    <p>Junte-se a quem acredita na mudança. Apoie, participe e transforme vidas através de ações sociais que geram impacto real nas comunidades.</p>
    </section>


    <section className={styles.cards}>
     {projetos.map((projeto) => (
    <article key={projeto.id}>
      <img src={projeto.imagem} alt={projeto.nome} />
      <h3>{projeto.nome}</h3>
      <p>{projeto.descricao}</p>
      <button>{projeto.acao}</button>
    </article>
  ))}
</section>

    {/* <section className={styles.cards}>
      <article>
        <img src={Reciclagem} alt="" />
        <h3>Mutirão de reciclagem</h3>
        <p>Coletar materiais recicláveis e orientar sobre descarte consciente.</p>
        <button>Quero participar</button>
      </article>

      <article>
        <img src={Tecnologia} alt="" />
        <h3>Aulas de Tecnologia</h3>
        <p>Ensinar noções básicas de informática, internet segura e programação. Preparar jovens para o mercado de trabalho digital.</p>
        <button>Quero participar</button>
      </article>

      <article>
        <img src={Inclusao} alt="" />
        <h3>Esporte</h3>
        <p>Organizar treinos e jogos que incentivem a participação de todos. Promover disciplina, saúde e trabalho em equipe entre jovens.</p>
        <button>Quero participar</button>
      </article>

      <article>
        <img src={grandeFamilia} alt="" />
        <h3>Instituto grande familia</h3>
        <p>Contribua com alimentos não perecíveis e ajude famílias em situação de vulnerabilidade.</p>
        <button>Quero Doar</button>
      </article>

      <article>
        <img src={Escola} alt="" />
        <h3>Projeto Futuro na Escola</h3>
        <p>Doe livros, cadernos, lápis, mochilas e canetas para ajudar jovens a continuarem seus estudos com mais estrutura.</p>
        <button>Quero Doar</button>
      </article>

      <article>
        <img src={conectaJovem} alt="" />
        <h3>Instituto Conecta Jovem</h3>
        <p>Doe computadores usados, tablets ou celulares em bom estado para permitir que jovens tenham acesso ao mundo digital.</p>
        <button>Quero Doar</button>
      </article>
    </section> */}
    </main>
  )
}
