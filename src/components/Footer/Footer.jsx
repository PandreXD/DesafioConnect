import Logo from "../../assets/logo.png"
import Whats from "../../assets/whatsapp.png"
import Insta from "../../assets/instagram.png"
import Linkedin from "../../assets/linkedin.png"

import styles from "./Footer.module.scss"


export default function Footer() {
  return (
    <footer className={styles.footer}>
      
      <div className={styles.blocoDaEsquerda}>
        <img src={Logo} alt="Logo Connect" />
        <span>Connect</span>
      </div>

      <div className={styles.center}>
        <p>&copy; 2026 Vai na Web & Empower. Todos os direitos reservados.</p>
        <p>Projeto destinado exclusivamente a fins educativos.</p>
      </div>

      <div className={styles.blocoDaDireita}>
        <img src={Whats} alt="WhatsApp" />
        <img src={Insta} alt="Instagram" />
        <img src={Linkedin} alt="LinkedIn" />
      </div>

    </footer>
  )
  
}
