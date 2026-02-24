import AppCntxt from "@/appContext";
import { Button } from "@/components/ui/button"
import { useContext } from "react";
import { Link } from "react-router"

const Nav = () => {
    const { isLoggedIn, email, shoppingCart } = useContext(AppCntxt)
    const status = true;
    return (
        <nav className="border border-black flex justify-between items-center p-2  shadow-2xl shadow-gray-400">
            <h2 className="text-black font-bold text-3xl">
                <Link to="/">Njies Shop</Link></h2>
            <ul className="flex gap-2">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/checkout">Cart({shoppingCart.length})</Link></li>
            </ul>
            <div className="flex gap-2 justify-center items-center">
                {isLoggedIn ? (
                    <>
                        {isLoggedIn && <h1 className=" font-light italic text-xl ">Welcome {email}</h1>}
                        <Link className="bg-orange-500 py-2 px-3 rounded-lg text-white hover:bg-gray-700" to="/auth">Logout</Link>
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