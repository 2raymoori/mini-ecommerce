import AppHeading1 from "@/CustomComponents/AppHeading1"
import AppHeading2 from "@/CustomComponents/AppHeading2"
import AppHeading3 from "@/CustomComponents/AppHeading3"
const Home = () => {
    return (
        <>
            <AppHeading1 title="Welcome to Njies Shop" />
            <AppHeading3 title="Discover amazing products at cheap and best prices" />

            <section>
                <AppHeading2 title="Our Products" />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

                </div>
            </section>
        </>
    )
}
export default Home