import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom";

// Navigate non funzionante, rimane nel caricamento
// import { useNavigate } from "react-router-dom";



export default function ProductDetails() {
    // imposto il parametro id
    const { id } = useParams();

    // imposto il navigate
    // const navigate = useNavigate();


    // Stato dettagli prodotto
    const [productDetails, setProductDetails] = useState();

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`).then(
            (res) => {
                setProductDetails(res.data)
                console.log("ARRAY", res.data);
            }
        )
        // Non restituisce un errore
        // .catch(() => { navigate("/product") })
    }, [id])


    return (
        <div className="d-flex justify-content-center">
            {productDetails ? (
                <div className="card-details">
                    <div className="card-image">
                        <img src={productDetails.image} className="card-img-top" alt={productDetails.title} />
                    </div>
                    <div className="card-body">
                        <p className="title-product">{productDetails.title}</p>
                        <p className="card-text">{productDetails.description}</p>
                        <p className="price-text">{productDetails.price}€</p>
                        <Link to="/product">Torna allo shop</Link>
                    </div>
                </div>
            )
                :
                (<p className="loading">Caricamento...</p>)}
        </div>
    )
}