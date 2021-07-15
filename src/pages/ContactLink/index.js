// import { useParams } from "react-router-dom";

import { IoLogoWhatsapp } from 'react-icons/io5';
import { FiInstagram } from 'react-icons/fi'
import { BsPhone } from 'react-icons/bs'

import logo from '../../assets/logo.png';
import './styles.css';

const ContactLink = () => {
    // const { contact } = useParams();
    
    // if(contact === 'contact'){
    //     window.location.href = "https://wa.me/+5587988147658?text=Ola!%20Israela,%20fiquei%20interessada%20em%20seus%20produtos.";
    // }

    function spaceModify(text) {
        const textReplace = text.replace(' ', '%20')
        return textReplace
    }

    const attendant = [
        {
            id: 1,
            name: 'Israela Lima',
            phone: '87988147658',
            text: 'Ola Israela, fiquei interessada em seus produtos.'
        }
    ]

    
    return(
        <div className="App">
          
          <header className="App-header">     
            <img src={logo} className="App-logo" alt="logo" />
              <label htmlFor="" style={{marginRight: '50%', marginBottom: 7, fontSize: 20, fontWeight: 'bold'}}>Atendentes: </label>     
              {
                  attendant.map( atten => (
                    <a  
                        key={atten.id}
                        className="App-link"
                        href={`https://wa.me/+55${atten.phone}?text=${spaceModify(atten.text)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <IoLogoWhatsapp size={50} className="icon-whats-at"/>
                        <span className="text-link">{atten.name}</span> 
                    </a>
                  ))
              }
          </header>
          <footer className="App-footer">
              <a
                className="App-link-footer"
                href="https://www.instagram.com/palmirinhachic/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiInstagram size={32} color="#fff"/>
                <span className="text-link-footer">Instagram</span> 
              </a>
              <a
                className="App-link-footer"
                href="https://wa.me/+5587988147658?text="
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsPhone size={32} color="#fff"/>
                <span className="text-link-footer">(87) 9.8814-7658</span> 
              </a>
          </footer>
        </div>
    )
  }

  export default ContactLink;