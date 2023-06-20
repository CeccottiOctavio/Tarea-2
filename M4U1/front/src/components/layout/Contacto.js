import React from 'react';
import Styles from './Contacto.module.css';
import Nav from './Nav';
import Header from './Header';
import Footer from './Footer';

const Contacto = () => {
  return (
    <div className={Styles.Contacto}>
      
        <Header />
        <Nav />
        <main className={Styles.holder}>
        <div>
          <h2>Contacto Rápido</h2>
          <form action="" method="" className={Styles.formulario}>
            <p>
              <label htmlFor="Nombre">Nombre</label>
              <input type="text" name="" />
            </p>
            <p>
              <label htmlFor="Email">Email</label>
              <input type="text" name="" />
            </p>
            <p>
              <label htmlFor="Telefono">Teléfono</label>
              <input type="text" name="" />
            </p>
            <p>
              <label htmlFor="Mensaje">Mensaje</label>
              <textarea name=""></textarea>
            </p>
            <p className={Styles.acciones}>
              <input type="submit" value="Enviar" />
            </p>
          </form>
        </div>
        <div className={Styles.datos}>
          <h2>Otras vías de comunicación</h2>
          <p>También pueden contactarse con nosotros utilizando los siguientes medios</p>
          <ul>
            <li>Teléfono: 43422989</li>
            <li>Email: Contacto@transporte.com.ar</li>
            <li>Facebook:</li>
            <li>Twitter:</li>
            <li>Skype:</li>
          </ul>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Contacto;
