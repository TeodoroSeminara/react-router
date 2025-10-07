import { useEffect, useState } from "react"
import Products from "../components/Products";

export default function ProductPage() {

    const [products, setProducts] = useState([]);

    // Chiamata Api
    function fetchProduct() {
        axios.get("https://fakestoreapi.com/products").then(
            (res) => {
                setProducts(res.data)
                console.log(res.data);
            }
        )
    }

    useEffect(() => {
        fetchProduct()
    }, [])

    return (
        <>
            <div className="container d-flex flex-wrap gap-3 justify-content-center">
                {products.map((product) => (
                    <Products key={product.id}
                        product={product} />
                ))}
            </div>
        </>
    )
}