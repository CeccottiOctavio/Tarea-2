import nosotros1 from './nosotros1.jpg'
import nosotros2 from './nosotros2.jpg'
import nosotros3 from './nosotros3.jpg'
import nosotros4 from './nosotros4.jpg'
import nosotros5 from './nosotros5.jpg'
import React from 'react'
import Nav from './Nav';
import Header from './Header';
import Footer from './Footer';
import Styles from './Nosotros.module.css';

const Nosotros = () => {
  return (
    <div>
        
      <Header/>
      <Nav/>
      <main className={Styles.holder}>
      
        <div className={Styles.historia}>
            <h2>Historia</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi nihil enim amet fugit libero in ullam
                mollitia deserunt adipisci repudiandae alias porro natus doloribus nam, eius aut cum. Laboriosam, optio!
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus eos temporibus ad quisquam ipsam
                laudantium magnam harum quidem quaerat? Unde asperiores, ducimus voluptate quo totam illo omnis
                laudantium. Eveniet, consequatur?
            </p>
        </div>
        <div className={Styles.staff}>
            <h2>Staff</h2>
            <div class={Styles.personas}>


                <div className={Styles.persona}>
                <img src={nosotros1} alt="Juan Gomez"/>  
                    <h5>Juan Gomez</h5>
                    <h5>Gerente General</h5>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet esse itaque hic quisquam dicta
                        exercitationem repudiandae cum animi? Soluta molestias voluptate mollitia consequuntur cum
                        reiciendis officiis quos quae numquam eum.
                    </p>
                </div>
                <div className={Styles.persona}>
                <img src={nosotros2} alt="Juan Gomez"/> 
                    <h5>Juan Gomez</h5>
                    <h5>Gerente General</h5>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet esse itaque hic quisquam dicta
                        exercitationem repudiandae cum animi? Soluta molestias voluptate mollitia consequuntur cum
                        reiciendis officiis quos quae numquam eum.
                    </p>
                </div>
                <div className={Styles.persona}>
                <img src={nosotros3} alt="Juan Gomez"/> 
                    <h5>Juan Gomez</h5>
                    <h5>Gerente General</h5>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet esse itaque hic quisquam dicta
                        exercitationem repudiandae cum animi? Soluta molestias voluptate mollitia consequuntur cum
                        reiciendis officiis quos quae numquam eum.
                    </p>
                </div>
                <div className={Styles.persona}>
                <img src={nosotros4} alt="Juan Gomez"/> 
                    <h5>Juan Gomez</h5>
                    <h5>Gerente General</h5>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet esse itaque hic quisquam dicta
                        exercitationem repudiandae cum animi? Soluta molestias voluptate mollitia consequuntur cum
                        reiciendis officiis quos quae numquam eum.
                    </p>
                </div>
                <div className={Styles.persona}>
                <img src={nosotros5} alt="Juan Gomez"/> 
                    <h5>Juan Gomez</h5>
                    <h5>Gerente General</h5>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet esse itaque hic quisquam dicta
                        exercitationem repudiandae cum animi? Soluta molestias voluptate mollitia consequuntur cum
                        reiciendis officiis quos quae numquam eum.
                    </p>
                </div>
            </div>

        </div>


    </main>
    <footer>
        <Footer/>
    </footer>

    </div>
  )
}

export default Nosotros