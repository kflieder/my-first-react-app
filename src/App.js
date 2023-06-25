import logo from './logo.svg';
import salon from './images/salon.png';
import dogSite from './images/dogSite.png';
import taxi from './images/taxi.png';
import WhatsAppButton from './images/WhatsAppButton.png'
import { useState } from 'react';
import './index.css'
import TableToRender from './businessList.js'



const navBar = (
    <nav className="nav--bar">
        <h1>Kacey's Websites</h1>
        {/* <ul>
          <li> */}
          {/* <Link
                activeClass="active"
                to="welcome"
                spy={true}
                smooth={true}
                offset={-200}
                duration={1000}
                >Inicio
                </Link>
          </li>
          <li><Link
                activeClass="active"
                to="link--gallery"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
                >Galeria
                </Link></li>
          <li>
            <Link
                activeClass="active"
                to="link--howItWorks"
                spy={true}
                smooth={true}
                offset={-100}
                duration={1000}
                >Como Funciona
                </Link>
          </li>
        </ul> */}
          <a href="https://wa.me/529993700666"><img id="whats-app-img" src={WhatsAppButton} /></a>
    </nav>
  )
const welcome = (
    <div className="card" id="welcome">
        <h1>¡Bienvenidos!</h1>
         <p>  Mi nombre es Kacey y estoy aprendiendo cómo construir
          sitios web. Me gustaría ayudar a la comunidad y a 
          los negocios locales de mi zona, ofreciendo una herramienta 
          de marketing gratuita y poderosa. Puedo proporcionar una 
          plataforma para que promocionen sus productos y/o servicios, 
          lo que les permitirá anunciarse a un grupo de personas más
          grande. También publicaré el enlace a sus negocios 
          directamente en mi sitio web. A medida que comienzo 
          este viaje, iré creciendo y aprendiendo, lo que significa
          que habrá más y mejores características en un futuro 
          cercano. Mi esperanza es que, juntos, podamos construir 
          un directorio de todos los increíbles negocios locales.
        </p>
      </div>
        )
const links = (
  <div className="card links">
  

    <div className="welcome-box">
      <p>A medida que más extranjeros se mudan a México, encuentro crucial apoyar a las empresas locales y evitar que las grandes corporaciones monopolicen estas hermosas ciudades. Aquí encontrará un directorio de empresas locales. Si es propietario de un negocio y desea un sitio web gratuito o que se agregue su información, envíeme un mensaje por WhatsApp.</p>
    </div>
   {/* <div id="mini-cards">
    <h3>Terapia de masaje</h3>
    <a href="velkan/velkan.html">Velkan Lopez</a>
    </div>
     <div id="mini-cards">
    <h3>Terapia de masaje</h3>
    <a href="velkan/velkan.html">Velkan Lopez</a>
    </div>
*/}

   </div>
  )
const moreLinks = (
  <div className="card">
    <TableToRender/>
  </div>
    
  

)
const Gallery = (


  <div id="link--gallery">
    <div id="gallery">
        
        <GalleryImages />
       
   </div>
   </div>


  )

function GalleryImages() {
  let [image, setImage] = useState(salon);
  return(
    <>
    <div className="card">
          <h1>Gallery</h1>
         <div id="button-div">
          <button onClick={() => setImage(salon)}></button>
          <button onClick={() => setImage(dogSite)}></button>
          <button onClick={() => setImage(taxi)}></button>

          </div>
          <img id="gallery-img" src={image}/>
          <div id="button-div">
          <button onClick={() => setImage(salon)}></button>
          <button onClick={() => setImage(dogSite)}></button>
          <button onClick={() => setImage(taxi)}></button>

          </div>
          </div>
     
    </>
    )
}


const howItWorks = (
  <div id="link--howItWorks">
  
  <div className="card" id="howItWorks">
  <h1>How it works</h1>
    <p>
    ¡Todo lo que necesitas hacer es enviarme un mensaje en <a href="https://wa.me/529993700666">WhatsApp!</a> Sin embargo, si deseas estar preparado de antemano, esta es la información que te pediré:
    </p>
    <ul>
        <li>Nombre de tu negocio</li>
        <li>Lista de productos y/o servicios, con o sin precios</li>
        <li>Preferencias de color y diseño</li>
        <li>Si deseas un enlace de WhatsApp y/o redes sociales</li>
        <li>Un breve párrafo sobre ti y tu negocio para incluir en la sección "Acerca de nosotros"</li>
        <li>Fotos que te gustaría mostrar</li>
    </ul>


</div>
   </div>
   )
const attributes = (
  <div> <a href="https://www.freepik.com/free-photo/blue-technology-background_897967.htm#query=abstract%20background%20technology&position=20&from_view=search&track=ais">Image by starline</a> on Freepik
  </div>
  )


// finished pages variables 
const kaceyWebYucatanMainPage = (
   <div>
      {navBar}

      <div id="content">
      {/*{welcome}*/}
      {links}
      {moreLinks}

      
      </div>
     {/* {Gallery}
      {howItWorks}*/}
      </div>
  )
   


function App() {
  return (
    kaceyWebYucatanMainPage
    );
}

export default App;
