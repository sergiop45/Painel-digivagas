import { Route, Routes } from "react-router-dom";
import Cadastrar from "../pages/Cadastrar";
import Home from "../pages/Home";
import Vagas from "../pages/vagas";
import Cidade from "../pages/Cidades";
import Login from "../pages/Login";

export const AppRoutes = () => {
    return (
        
        
            <Routes>
                
                <Route  path="/" element={<Home/>} />
                <Route  path="/vagas" element={<Vagas/>} />
                <Route  path="/cadastrar" element={<Cadastrar/>} />
                <Route path="/cidades" element={<Cidade />} />
                <Route path="/login" element={<Login />} />
                <Route  path="*" element={<Home/>} />

            </Routes>
        
        
    )
}