import AppCntxt from "@/appContext"
import { Button } from "@/components/ui/button"
import users from "@/data/users"
import { useContext, useState } from "react"
import { useForm } from "react-hook-form"
import { Link, redirect, useNavigate } from "react-router"

const AuthForm = () => {
    const [hasAccount, setHasAccount] = useState(true)
    const { register, handleSubmit, formState: { errors } } = useForm()
    const { setIsLoggedIn, setEmail } = useContext(AppCntxt)
    const [error, setError] = useState<string | null>(null)
    const [success, setSuccess] = useState<string | null>(null)
    const navigate = useNavigate()

    const handleSwitchAccount = (input: boolean) => {
        setHasAccount(input)
    }
    const onFormSubmit = (data) => {
        console.log(data)
        if (!hasAccount) {
            if (data.password !== data.confirm_password) {
                setError("🚨🚨🚨Sorry, Passwords do not match")
                setSuccess(null)
                return
            }
            else {
                const newUser = {
                    email: data.email,
                    password: data.password
                }
                users.push(newUser)
                //setIsLoggedIn(true)
                //setEmail(data.email)
                setSuccess("Account created successfully. Please Login")
                setHasAccount(true)
                setError(null)
                console.log(users)
            }
        }
        else {
            const user = users.find((user) => user.email === data.email && user.password === data.password)
            if (user) {
                setIsLoggedIn(true)
                setEmail(data.email)
                localStorage.setItem("isLoggedIn", "true")
                localStorage.setItem("email", data.email)
                navigate("/")
            }
            else {
                const checkAccount = users.find((user) => user.email === data.email || user.password === data.password)
                if (checkAccount) {
                    setError("Invalid email or password")
                    setSuccess(null)
                }
                else {
                    setError("Account does not exist")
                    setSuccess(null)
                }
            }
        }
        console.log(data)

    }

    return (
        <div className="flex justify-center h-screen">
            <section className=" rounded-2xl h-fit mt-10 p-6 shadow-2xl">
                <h1 className="font-bold text-2xl my-6 italic">{hasAccount ? "LogIn" : "Sign Up"}</h1>

                <form onSubmit={handleSubmit(onFormSubmit)}>
                    {error && <h1 className="text-white bg-red-400 p-2 rounded-sm mb-2">{error}</h1>}
                    {success && <h1 className="text-white bg-green-400 p-2 rounded-sm mb-2">{success}</h1>}
                    <div className="mb-4">
                        <label className="mb-2 block" htmlFor="email">Email</label>
                        <input {...register("email", {
                            required: {
                                value: true,
                                message: "Email is required"
                            },
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Invalid email address"
                            }
                        })} placeholder="[EMAIL_ADDRESS]" className="border-2 border-black" type="email" id="email" name="email" />
                        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                    </div>
                    <div className="mb-4">
                        <label className="mb-2 block" htmlFor="password">Password</label>
                        <input {...register("password", {
                            required: {
                                value: true,
                                message: "Sorry a valid password is required"
                            },
                            minLength: {
                                value: 6,
                                message: "Password must be at least 6 characters long"
                            }
                        })} placeholder="**********" className="border-2 border-black" type="password" id="password" name="password" />
                        {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                    </div>
                    {!hasAccount && (
                        <div className="mb-4">
                            <label className="mb-2 block" htmlFor="confirm_password">Confirm Password</label>
                            <input {...register("confirm_password")} placeholder="**********" className="border-2 border-black" type="password" id="confirm_password" name="confirm_password" />
                        </div>
                    )}
                    {
                        hasAccount ? (
                            <button type="submit" className="bg-orange-500 text-white px-4 py-2 rounded">LogIn</button>
                        ) : (
                            <button type="submit" className="bg-orange-500 text-white px-4 py-2 rounded">Sign Up</button>
                        )
                    }
                </form>
                <div className="mt-4 font-serif text-shadow-2xs text-[10px] text-gray-500 text-center ">
                    {hasAccount ? (
                        <div className="flex items-center gap-1  text-center">
                            <span>No Account Yet?</span>
                            <Button onClick={() => handleSwitchAccount(false)} className="bg-orange-100 hover:bg-orange-100 hover:cursor-pointer hover:underline text-orange-500 p-0 m-0 text-sm rounded">Sign Up</Button>
                        </div>
                    ) : (
                        <div className="flex items-center gap-1 text-center">
                            <span>Already have an account?</span>
                            <Button onClick={() => handleSwitchAccount(true)} className="bg-orange-100 hover:bg-orange-100 hover:cursor-pointer hover:underline text-orange-500 p-0 m-0 text-sm rounded">LogIn</Button>
                        </div>
                    )
                    }
                </div>
            </section>

        </div>
    )
}
export default AuthForm