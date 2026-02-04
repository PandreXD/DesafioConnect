import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Inicio from "../Inicio/Inicio"
import AcoesDaConnect from "../AcoesDaConnect/AcoesDaConnect"
import QuemSomos from "../QuemSomos/QuemSomos"
import Perfil from "../Perfil/Perfil"
import Logo from "../../assets/logo.png"
import ImgPerfil from "../../assets/perfil1.jpeg"

import styles from "./NavBar.module.scss"

export default function NavBar() {
  return (
    <BrowserRouter>
    <nav className={styles.navBar}>
     <Link to="/"><img className={styles.logo} src={Logo} alt="" /></Link>

      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/acoesDaConnect">Ações da Connect</Link></li>
        <li><Link to="/quemSomos">Quem Somos</Link></li>
      </ul>

      <Link to="/perfil1"><img className={styles.perfil} src={ImgPerfil} alt="" /></Link>
    </nav>
    
    <Routes>
      <Route path="/" element={<Inicio/>}/>
      <Route path="/acoesDaConnect" element={<AcoesDaConnect/>}/>
      <Route path="/quemSomos" element={<QuemSomos/>} />
      <Route path="/perfil1" element={<Perfil/>}/>
    </Routes>
    </BrowserRouter>
  )
}
