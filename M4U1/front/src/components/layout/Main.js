import img01 from './img01.jpg'
import Nav from './Nav';
import Header from './Header';
import Footer from './Footer';
import Styles from './Main.module.css';
const Main = (props) => {
    return (
        <>
        
            <Header/>
            <Nav/>
            <main className={Styles.holder}>
            <div>
                <img src={img01} alt="Avion"/>
            </div>
            <div className={Styles.columnas}>
                <div className={Styles.bienvenidos}>
                    <h2>Bienvenidos</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident saepe culpa doloremque maiores,
                        laudantium consectetur quia id ducimus mollitia, perferendis similique commodi. Minima dolorem
                        cupiditate, recusandae distinctio obcaecati et modi!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quidem, provident laudantium soluta,
                        perferendis voluptate enim nesciunt rem, cupiditate dolorem voluptas veritatis autem fugiat non ad
                        asperiores praesentium tempora accusamus.</p>
                </div>
                <div className={Styles.testimonios}>
                    <h2>Testimonios</h2>
                    <div className={Styles.testimonio}>
                        <span className={Styles.cita}>Simplemente Excelente</span>
                        <samp className={Styles.autor}>Juan Perez - zapatos.com</samp>
                    </div>

                </div>

            </div>
        <footer>
            <Footer/>
        </footer>
        </main>
        </>


    )


}

export default Main;