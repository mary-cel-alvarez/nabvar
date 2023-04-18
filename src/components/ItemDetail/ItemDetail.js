import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({id, nombre, img, category, descripcion, precio, cantidad}) => {
    return (
        <article className="cardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {nombre}
                </h2>
            </header>
            <picture>
                <img src={img} alt={nombre} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info">
                    Categoria: {category}
                </p>
                <p className="Info">
                    Descripción: {descripcion}
                </p>
                <p className="Info">
                    Precio: ${precio}
                </p>
            </section>
            <footer className='ItemFooter'>
                <ItemCount initial={1} cantidad={cantidad} onAdd={quantity => console.log('Cantidad Agregada ',quantity) }/>
            </footer>
        </article>
    )
}

export default ItemDetail