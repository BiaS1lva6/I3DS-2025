import "./App.css";
import PerfilLight from "./img/perfil.jpg";
import PerfilDark from "./img/liviasolla.jpg";


import Perfil from "./components/perfil/perfil";
import Switch from "./components/switch/Switch";
import Links from "./components/links/Links";
import SocialLinks from "./components/socialLinks/SocialLinks";
import Rodape from "./components/rodape/Rodape";
import { useState } from "react";

const App = () => {
  const [isLight, setIsLight] = useState(true);

  const troca = () => {
    setIsLight(!isLight);
  }

  

  return (
    <div id="App" className={isLight ? "light" : "" }>
      <Perfil fotoPerfil={isLight ? PerfilLight : PerfilDark}>@BeatrizSilva</Perfil>

      <Switch troca={troca} isLight={isLight} />
      
      <div id="container">
      <ul>
        <Links link={"https://github.com/BiaS1lva6"}>GitHub</Links>
        <Links link={"https://www.instagram.com/bia_s1lva07/"}>Instagram</Links>
        <Links link={"https://br.pinterest.com/bibiaaasilva/"}>Pinterest</Links>
        <Links link={"https://github.com/BiaS1lva6?tab=repositories"}>
          Projetos
        </Links>
      </ul>
      </div>

      <div id="socialLinks">
        <SocialLinks
          link={"https://github.com/BiaS1lva6"}
          icon={"logo-github"}
        />
        <SocialLinks
          link={"https://www.instagram.com/bia_s1lva07/"}
          icon={"logo-instagram"}
        />
        <SocialLinks link={"https://www.youtube.com/"} icon={"logo-youtube"} />
        <SocialLinks link={"https://br.linkedin.com/"} icon={"logo-linkedin"} />
      </div>
      <Rodape>Beatriz Silva</Rodape>
    </div>
  );
};

export default App;
