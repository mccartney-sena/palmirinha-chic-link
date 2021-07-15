import { IoLogoWhatsapp } from 'react-icons/io5';
import { FiInstagram } from 'react-icons/fi'
import { BsPhone } from 'react-icons/bs'

import logo from '../../assets/logo.png';
import './styles.css';

const Contact = () => {
    return(
        <div className="App">
          
          <header className="App-header">     
            <img src={logo} className="App-logo" alt="logo" />
              <label htmlFor="" style={{marginRight: '50%', marginBottom: 15, fontSize: 20, fontWeight: 'bold'}}>Atendentes: </label>     
              <a
                className="App-link"
                href="https://wa.me/+5587988147658?text=Ola!%20Israela,%20fiquei%20interessada%20em%20seus%20"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoLogoWhatsapp size={50} className="icon-whats-at"/>
                <span className="text-link">Israela Lima</span> 
              </a>
          </header>
          <footer className="App-footer">
              <a
                className="App-link-footer"
                href="https://www.instagram.com/palmirinhachic/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiInstagram size={32} className="icon-footer"/>
                <span className="text-link-footer">Instagram</span> 
              </a>
              <a
                className="App-link-footer"
                href="https://wa.me/+5587988147658?text="
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsPhone size={32} className="icon-footer"/>
                <span className="text-link-footer">(87) 9.8814-7658</span> 
              </a>
          </footer>
        </div>
    )
  }

  export default Contact;