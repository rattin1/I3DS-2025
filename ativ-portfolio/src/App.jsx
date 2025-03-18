
import './App.css'
import Card from './components/card/Card'
import Socialinks from './components/socialinks/Socialinks'



function App() {


  return (
    <>
    <div id="espaço">
    <h4>arquitetura</h4>
    <h1>PORTFÓLIO</h1>

      <Card 
      rattini={"https://media.discordapp.net/attachments/1214541360053358615/1349381203240685579/Imagem_do_WhatsApp_de_2025-03-12_as_10.56.25_d64b24e1.jpg?ex=67d2e4ad&is=67d1932d&hm=e57ca5d0661ba5e521383c8e1c13c0f56347d0125b7ed25e235fc3d4324bd059&=&format=webp&width=300&height=200"}
      />
      <h3 className="corPrincipal">Click!👆</h3>
      </div>


    <div>
      <h1>ATUALIDADES</h1>
      
  

    </div>

    <div id="divisao">
      <h1>CONTATOS</h1>

      <Socialinks
        icon1={"logo-whatsapp"}
        link1={"https://wa.link/wggubl"}

        icon2={"logo-instagram"}
        link2={"https://www.instagram.com/raattini/"}

        icon3={"logo-linkedin"}
        link3={"https://br.linkedin.com/in/ryan-rattini-ribeiro-80582b2b3"}
        
        icon4={"logo-github"}
        link4={"https://github.com/rattin1"}
        />

        

      </div>


    

      
  
    
    </>
  )
}

export default App
