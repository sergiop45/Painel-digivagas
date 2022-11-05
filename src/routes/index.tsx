import { BrowserRouter, Route, Routes } from "react-router-dom"
import Cadastrar from "../pages/Cadastrar"
import Home from "../pages/Home"
import Vagas from "../pages/vagas"

export const AppRoutes = () => {
    return (
        
        
            <Routes>
                
                <Route  path="/" element={<Home/>} />
                <Route  path="/vagas" element={<Vagas/>} />
                <Route  path="/cadastrar" element={<Cadastrar/>} />
                <Route  path="*" element={<Home/>} />

            </Routes>
        
        
    )
}