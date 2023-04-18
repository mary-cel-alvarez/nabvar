import './Item.css'
import { Link } from 'react-router-dom'



const Item = ({id, nombre, img, precio, cantidad}) => {

    return (
        <article className= "CardItem">
            <header className= "Header">
                <h2 className= "ItemHeader">
                    {nombre}
                </h2>
            </header>
            <picture>
                <img src={img} alt={nombre} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info">
                    Precio: ${precio}
                </p>
                <p className="Info">
                    Stock Disponible: {cantidad}
                </p>
            </section>
            <footer className='ItemFooter'>
                <Link to={`/item/${id}`} className='Option'>Ver Detalle</Link>
            </footer>
        </article>
    )
}

export default Item