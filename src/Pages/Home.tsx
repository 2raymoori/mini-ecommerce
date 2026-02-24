import AppHeading1 from "@/CustomComponents/AppHeading1"
import AppHeading2 from "@/CustomComponents/AppHeading2"
import AppHeading3 from "@/CustomComponents/AppHeading3"
import ProductListing from "@/CustomComponents/ProductListing"

const Home = () => {
    return (
        <>
            <AppHeading1 title="Welcome to Njies Shop" />
            <AppHeading3 title="Discover amazing products at cheap and best prices" />

            <section>
                <AppHeading2 title="Our Products" />
                <div className="">
                    <ProductListing />
                </div>
            </section>
        </>
    )
}
export default Home