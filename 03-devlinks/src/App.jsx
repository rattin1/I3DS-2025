import "./App.css"
import foto from "./img/37294f75ac58fe0258bd066b00e43c12.jpg"
import foto2 from "./img/eu2.png"

import Perfil from "./components/perfil/perfil";
import Switch from "./components/switch/Switch";
import Links from "./components/links/Links";
import SocialLinks from "./components/socialLinks/SocialLinks";
import Rodape from "./components/rodape/Rodape";
import { useState } from "react";


const App = () => {
  const [isLight,setIsLight] = useState(true);
  const[trocarPerfil, setTrocarPerfil] = useState(foto)
  const troca = () =>{
    setIsLight(!isLight);
    setTrocarPerfil(isLight ? foto : foto2);
  };
  




  return (
    <div id="App" className={isLight ? "light" : ""}>
     
     <div id="container">
      
     <Perfil fotoPerfil={trocarPerfil}>@rattini</Perfil>

     <Switch troca={troca} isLight={isLight} />


<div id="links">
     <ul>
     <Links link={"https://github.com/rattin1"}>Github</Links>
     <Links link={"https://www.instagram.com/raattini/"}>Instagram</Links>
     <Links link={"https://neilpatel.com/br/blog/o-que-e-portfolio/"}>Portfólio</Links>
     <Links link={"https://rattin1.github.io/Pizzaria/"}>Projetos</Links>
     </ul>
</div>



     <div id="socialLinks">
      <SocialLinks 
      link={"https://github.com/rattin1"}
      icon={"logo-github"} 
      />
      <SocialLinks 
      link={"https://www.instagram.com/raattini/"}
      icon={"logo-instagram"} 
      />
      <SocialLinks
      link={"https://www.youtube.com/@alanzoka"}
      icon={"logo-youtube"} 
      />
      <SocialLinks 
      link={"https://br.linkedin.com/in/ryan-rattini-ribeiro-80582b2b3"}
      icon={"logo-linkedin"} 
      />
     </div>

     <Rodape>rattini</Rodape>
      </div>
    </div>
  );
};

export default App;
