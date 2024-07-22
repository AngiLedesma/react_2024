import '../estilos/home.css';

const HomePage = (props) => {

    return (
        <main className="holder">
            <div className="homeimg">
                <img src="img/home/img01.jpg" alt="avion" />
            </div>
            <div>
                <div className="columnas">
                    <div className="bienvenidos">
                        <h2>Bienvenidos</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum porro, tenetur, nihil id
                    praesentium, facilis minus animi dolore veritatis dolor cumque? Laboriosam eius quas dolorum quia
                    amet aliquam odio laborum.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum aliquid dolorum vitae alias corporis
                    quasi ullam reiciendis amet porro! Repellendus eos commodi atque aut mollitia, nam dolor officia
                    explicabo aliquid!</p>
        
                    </div>

                    <div className="testimonios">
                        <h2>Testimonios</h2>
                        <div className="testimonio">
                            <span className="cita">Simplemente Excenlente</span>
                            <span className="autor">Juan Gomez - zapatos.com</span>
                        </div>
                    </div>

                </div>
            </div>

        </main>

    )




}


export default HomePage;