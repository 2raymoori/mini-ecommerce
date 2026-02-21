import { Button } from "@/components/ui/button"

const Nav = () => {
    return (
        <nav className=" border border-black flex justify-between items-center p-2">
            <h2 className="text-black font-bold text-3xl">Njies Shop</h2>
            <ul className="flex gap-2">
                <li>Home</li>
                <li>Cart(0)</li>
            </ul>
            <div className="flex gap-2">
                <Button className="bg-orange-500">Login</Button>
                <Button className="bg-green-500">Register</Button>
            </div>
        </nav >
    )
}
export default Nav