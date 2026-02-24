import { Button } from "@/components/ui/button"

interface IProduct {
    name: string,
    price: number,
    image: string
    key: number
}

const ProductCard = ({ name, price, image, key }: IProduct) => {
    return (
        <>
            <div key={key}>
                <div className="border border-black">

                    <img className="object-cover w-full h-60" src={image} alt={name} />

                    <div className="p-4">
                        <div className="mb-4">
                            <p className="text-lg font-semibold">{name}</p>
                            <p className="text-lg font-semibold text-orange-500">${price}</p>
                        </div>
                        <div className="flex justify-arounds gap-4">
                            <Button className="bg-blue-500 text-white px-4 py-2 rounded">Add to Cart</Button>
                            <Button className="bg-green-500 text-white px-4 py-2 rounded">View Details</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductCard;