
import { getProducts } from "@/data/products"
import ProductCard from "./ProductCard"

const ProductListing = () => {
    const product = getProducts()
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" >
                {product.map((product) => (
                    <ProductCard key={product.id} name={product.name} price={product.price} image={product.image} />
                ))}
            </div>
        </>
    )
}

export default ProductListing