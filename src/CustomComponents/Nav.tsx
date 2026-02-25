import AppCntxt from "@/appContext";
import { Button } from "@/components/ui/button"
import { useContext } from "react";
import { Link } from "react-router"

const Nav = () => {
    const { isLoggedIn, email, shoppingCart, setIsLoggedIn, setEmail } = useContext(AppCntxt)
    const handleLogout = () => {
        setIsLoggedIn(false)
        setEmail("")
        localStorage.removeItem("isLoggedIn")
        localStorage.removeItem("email")
    }
    const status = true;
    return (
        <nav className="bg-orange-100 flex justify-between items-center p-2  shadow-2xl shadow-gray-400 sticky top-0 z-10">
            <h2 className="text-black font-bold text-3xl">
                <Link to="/">Njies Shop</Link></h2>
            <ul className="flex gap-2">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/checkout">Cart({shoppingCart.length})</Link></li>
            </ul>
            <div className="flex gap-2 justify-center items-center">
                {isLoggedIn ? (
                    <>
                        {isLoggedIn && <h1 className=" font-light italic text-xl ">Welcome {email?.split("@")[0]}</h1>}
                        <Button onClick={handleLogout} className="bg-orange-500 py-2 px-3 rounded-lg text-white hover:bg-gray-700" >Logout</Button>
                    </>
                ) : (
                    <>
                        <Link className="bg-orange-500 py-2 px-3 rounded-lg text-white hover:bg-gray-700" to="/auth">Login</Link>
                        <Link className="bg-green-500 py-2 px-3 rounded-lg text-white hover:bg-gray-700" to="/auth">Register</Link>
                    </>
                )}
            </div>
        </nav >
    )
}
export default Nav