import '../estilos/contacto.css'
const ContactoPage = (props) => {

    return(
     

        <main className="holder contacto">
        <div>
            <h2>Completa el formulario</h2>
            <form action="" class="formulario">
                <p>
                    <label for="">Nombre</label>
                    <input type="text" />
                </p>
                <p>
                    <label for="">Email</label>
                    <input type="text" />
                </p>
                <p>
                    <label for="">Telefono</label>
                    <input type="text" />
                </p>
                <p>
                    <label for="">Comentario</label>
                    <textarea name=""></textarea>
                </p>
                <p>
                    <input type="submit" class="prueba" value="Enviar" />
                </p>
            </form>
        </div>

        <div className="datos">
            <h2>Otras vìas de comunicaciòn</h2>
            <p>Tambien pueden contacatarse con nosotros usando los siguientes medios</p>
            <ul>
                <li><a href=""><i class="fa-solid fa-square-phone"></i></a>: Telefono 218473934</li>
                <li> <a href=""> <i class="fa-brands fa-facebook"></i> </a>:redsocial1</li>
                <li> <a href="">  <i class="fa-brands fa-instagram"></i></a>: redsocial2</li>
                <li><a href=""><i class="fa-brands fa-twitter"></i></a>: redsocial3</li>
                <li> <a href=""> <i class="fa-brands fa-tiktok"></i></a>: redsocial4</li>
                <li><a href=""><i class="fa-solid fa-envelope"></i></a>: ejemplo@gmail.com</li>
            </ul>

            <div className="mapa">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6139551.528322523!2d12.712159999999999!3d41.29085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sit!2sit!4v1716213175556!5m2!1sit!2sit" style={{ border:0, width:500, height: 300}}></iframe>

            </div>
        </div>

    </main>
    )



}

export default ContactoPage;