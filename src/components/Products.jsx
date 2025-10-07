// Import della funzione link
import { Link } from "react-router-dom"
// import ProductDetails from "../pages/ProductDetails"

export default function Products(props) {
    const { product } = props
    return (
        <>
            <div className="card">
                <Link to={`${product.id}`}>
                    <div className="card-image">
                        <img src={product.image} className="card-img-top" alt={product.title} />
                    </div>
                    <div className="card-body">
                        <p className="price-text">{product.price}€</p>
                        <p className="feed-text">Recensioni: {product.rating.rate}/5</p>
                    </div>
                </Link >
            </div>
        </>
    )
}