export default function Products(props) {
    const { product } = props
    return (
        <>
            <div className="card">
                <div className="card-image">
                    <img src={product.image} className="card-img-top" alt={product.title} />
                </div>
                <div className="card-body">
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                    <p>{product.price}€</p>
                </div>
            </div>
        </>
    )
}