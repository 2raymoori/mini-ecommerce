import { getProducts } from "@/data/products"

const ProductList = () => {
    const product = getProducts()[0]
    return (
        <>
            <h1>Welcome to Product List... </h1>
            <p>More contents to be added later...</p>

            <div className="border border-black">
                <h1>{product.name}</h1>
                <p>{product.price}</p>
                <img src={product.image} alt={product.name} />
                <p>{product.description}</p>
            </div>
        </>
    )
}
export default ProductList