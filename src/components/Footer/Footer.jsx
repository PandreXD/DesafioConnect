import Logo from "../../assets/logo.png"
import Whats from "../../assets/whatsapp.png"
import Insta from "../../assets/instagram.png"
import Linkedin from "../../assets/linkedin.png"

import styles from "./Footer.module.scss"


export default function Footer() {
  return (
    <footer className={styles.footer}>
      
      <div>
        <img src={Logo} alt="Logo Connect" />
        <h2>Connect</h2>
      </div>
   
        <p className={styles.center}>&copy; 2026 Vai na Web & Empower. Todos os direitos reservados.Projeto destinado exclusivamente a fins educativos.</p>
        
      <nav className={styles.blocoDaDireita}>
        <img src={Whats} alt="WhatsApp" />
        <img src={Insta} alt="Instagram" />
        <img src={Linkedin} alt="LinkedIn" />
      </nav>

    </footer>
  )
  
}
