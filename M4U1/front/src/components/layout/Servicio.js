import aereo from './aereo.jpg'
import ferroviario from './ferroviario.jpg'
import maritimo from './maritimo.jpg'
import terrestre from './terrestre.jpg'
import React from 'react'
import Nav from './Nav';
import Header from './Header';
import Footer from './Footer';
import Styles from './Servicio.module.css';
const Servicio = () => {
  return (
    <div>
    
        <Header />
        <Nav />
        <main className={Styles.holder}>
        <h2>Servicios</h2>
        <div className={Styles.servicio}>
          <img src={ferroviario} alt="Avion" />

          <div className={Styles.info}>
            <h4>Transporte Ferroviario</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, quidem temporibus hic nam iusto
              explicabo quasi beatae nemo tenetur delectus rerum facere velit quae tempore illum. Quod sapiente
              consequatur voluptatibus.</p>
          </div>
        </div>
        <div className={Styles.servicio}>
          <img src={aereo} alt="Avion" />

          <div className={Styles.info}>
            <h4>Transporte Ferroviario</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, quidem temporibus hic nam iusto
              explicabo quasi beatae nemo tenetur delectus rerum facere velit quae tempore illum. Quod sapiente
              consequatur voluptatibus.</p>
          </div>
        </div>
        <div className={Styles.servicio}>
          <img src={maritimo} alt="Avion" />

          <div className={Styles.info}>
            <h4>Transporte Ferroviario</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, quidem temporibus hic nam iusto
              explicabo quasi beatae nemo tenetur delectus rerum facere velit quae tempore illum. Quod sapiente
              consequatur voluptatibus.</p>
          </div>
        </div>
        <div className={Styles.servicio}>
          <img src={terrestre} alt="Avion" />

          <div className={Styles.info}>
            <h4>Transporte Ferroviario</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, quidem temporibus hic nam iusto
              explicabo quasi beatae nemo tenetur delectus rerum facere velit quae tempore illum. Quod sapiente
              consequatur voluptatibus.</p>
          </div>
        </div>


      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Servicio