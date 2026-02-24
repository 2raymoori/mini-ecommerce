import { createContext } from "react";

interface AppContextType {
    isLoggedIn: boolean
    email: string,
    shoppingCart: number[]
    setShoppingCart: (value: []) => void
    setEmail: (value: string) => void
    setIsLoggedIn: (value: boolean) => void

}

const defaultContextVals: AppContextType = {
    isLoggedIn: false,
    email: "",
    shoppingCart: [],
    setShoppingCart: () => { },
    setEmail: () => { },
    setIsLoggedIn: () => { }
}

const AppCntxt = createContext<AppContextType>(defaultContextVals);

export default AppCntxt

/*

const AppCntxt = useContext(null);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <AppCntxt.Provider value= {{ }
}>
    { children }
    </AppCntxt.Provider>
    )
}
*/