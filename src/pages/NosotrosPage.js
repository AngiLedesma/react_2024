import '../estilos/nosotros.css';

const NosotrosPage = (props) => {

    return(
   
       
        <main className="holder">

        <section className="historia">
            <h2>Historia</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quibusdam accusamus esse sed, natus
                iure modi maxime fugit quam? Molestiae fugit exercitationem, eveniet dolore voluptatem repellendus
                praesentium dignissimos adipisci dolorem!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ratione adipisci ad natus quo doloribus
                laboriosam, ipsa sequi facere sunt voluptatum et? Quidem eveniet architecto exercitationem dignissimos,
                mollitia reprehenderit officiis.</p>
        </section>

        <section className="staff">
            <h2>Stafff</h2>
            <div className="personas"> 

                <div className="persona"> 
                    <img src="img/nosotros/nosotros1.jpg" alt="Juan Gomez"/>
                    <h5>Juan Gomez</h5>
                    <h6>Gerenete General</h6>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia aliquam eos maxime
                        laboriosam exercitationem eum, blanditiis quis corrupti sit quaerat! Cupiditate saepe
                        voluptates dolore laboriosam reprehenderit ea. Illum, officiis aliquam?</p>
                </div>

                <div className="persona"> 
                    <img src="img/nosotros/nosotros2.jpg" alt="Juan Gomez"/>
                    <h5>Diana Reyes </h5>
                    <h6>Gerenete Comercial</h6>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia aliquam eos maxime
                        laboriosam exercitationem eum, blanditiis quis corrupti sit quaerat! </p>
                </div>

                <div className="persona"> 
                    <img src="img/nosotros/nosotros3.jpg" alt="Juan Gomez"/>
                    <h5>Roberto Zavala</h5>
                    <h6>Gereente de Sistemas</h6>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia aliquam eos maxime
                        laboriosam exercitationem eum, blanditiis quis corrupti sit quaerat! Cupiditate saepe
                        voluptates dolore laboriosam reprehenderit ea. Illum, officiis aliquam?</p>
                </div>

                <div className="persona"> 
                    <img src="img/nosotros/nosotros4.jpg" alt="Juan Gomez"/>
                    <h5>Sandra Mastroloi</h5>
                    <h6>Gerente de Marketing</h6>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia aliquam eos maxime
                        laboriosam exercitationem eum, blanditiis quis corrupti sit quaerat! Cupiditate saepe
                        voluptates dolore laboriosam reprehenderit ea. Illum, officiis aliquam?</p>
                </div>

                <div className="persona"> 
                    <img src="img/nosotros/nosotros5.jpg" alt="Juan Gomez"/>
                    <h5>Luciano Gomez</h5>
                    <h6>Gerenete de Logìstica</h6>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia aliquam eos maxime
                        laboriosam exercitationem eum, blanditiis quis corrupti sit quaerat! Cupiditate saepe
                        voluptates dolore laboriosam reprehenderit ea. Illum, officiis aliquam?</p>

                </div>
            </div>

        </section>
    </main>



    )



}

export default NosotrosPage;