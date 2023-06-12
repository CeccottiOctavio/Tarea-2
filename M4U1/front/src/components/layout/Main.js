import img01 from './img01.jpg'
const Main = (props) => {
    return (
        <main className="holder">
            <div>
                <img src={img01} alt="Avion"/>
            </div>
            <div className="columnas">
                <div className="bienvenidos">
                    <h2>Bienvenidos</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident saepe culpa doloremque maiores,
                        laudantium consectetur quia id ducimus mollitia, perferendis similique commodi. Minima dolorem
                        cupiditate, recusandae distinctio obcaecati et modi!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quidem, provident laudantium soluta,
                        perferendis voluptate enim nesciunt rem, cupiditate dolorem voluptas veritatis autem fugiat non ad
                        asperiores praesentium tempora accusamus.</p>
                </div>
                <div className="testimonios">
                    <h2>Testimonios</h2>
                    <div className="testimonio">
                        <span className="cita">Simplemente Excelente</span>
                        <samp className="autor">Juan Perez - zapatos.com</samp>
                    </div>

                </div>

            </div>

        </main>


    )


}

export default Main;