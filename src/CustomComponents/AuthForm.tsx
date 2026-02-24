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
    const navigate = useNavigate()

    const handleSwitchAccount = (input: boolean) => {
        setHasAccount(input)
    }
    const onFormSubmit = (data) => {
        console.log(data)
        if (!hasAccount) {
            if (data.password !== data.confirm_password) {
                alert("🚨🚨🚨Sorry, Passwords do not match")
                return
            }
            else {
                const newUser = {
                    email: data.email,
                    password: data.password
                }
                users.push(newUser)

                setIsLoggedIn(true)
                setEmail(data.email)
                navigate("/")
                alert("Account created successfully")
                console.log(users)
            }
        }
        else {
            const user = users.find((user) => user.email === data.email && user.password === data.password)
            if (user) {
                alert("Welcome back")
                setIsLoggedIn(true)
                setEmail(data.email)
                navigate("/")
            }
            else {
                alert("Invalid email or password")
            }
        }
        console.log(data)

    }

    return (
        <div className="flex justify-center h-screen">
            <section className=" rounded-2xl h-fit mt-10 p-6 shadow-2xl">
                <h1 className="font-bold text-2xl my-6 italic">{hasAccount ? "LogIn" : "Sign Up"}</h1>

                <form onSubmit={handleSubmit(onFormSubmit)}>
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
                <p className="mt-4 font-serif text-shadow-2xs text-[10px] text-gray-500 text-center ">
                    {hasAccount ? (
                        <div className="flex items-center gap-1  text-center">
                            <p>No Account Yet?</p>
                            <Button onClick={() => handleSwitchAccount(false)} className="bg-orange-100 hover:bg-orange-100 hover:cursor-pointer hover:underline text-orange-500 p-0 m-0 text-sm rounded">Sign Up</Button>
                        </div>
                    ) : (
                        <div className="flex items-center gap-1 text-center">
                            <p>Already have an account?</p>
                            <Button onClick={() => handleSwitchAccount(true)} className="bg-orange-100 hover:bg-orange-100 hover:cursor-pointer hover:underline text-orange-500 p-0 m-0 text-sm rounded">LogIn</Button>
                        </div>
                    )
                    }
                </p>
            </section>

        </div>
    )
}
export default AuthForm