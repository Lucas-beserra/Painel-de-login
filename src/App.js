import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { BsFillLockFill, BsFillPersonFill } from 'react-icons/bs';
import { BsArrowRight } from 'react-icons/bs';
import Context from "./store/context";
//import { HiEye, HiEyeOff } from 'react-icons/hi';


    const user = "admin";
    const password = "admin";

    function estadoInicial() {
        return (user, password)
    }

    function login({user, password}) {
        if (user &&  password === "admin") {
            return {token: '1238'};
        }
        return {error: 'Usuário e/ou senha divergente'}
    }   

    const Login = () => {
        const [nome, setNome] = useState(estadoInicial);
        const setToken = useContext(Context);
        const history = useHistory;
    

    function Enviar(){
        const { token } = login(user, password);

        if (token) {
            setToken(token);
            return history.pushState('../home')
        }

        setNome(estadoInicial);
    }

    return (
        
    <form className="login-form">
        <h1>Login</h1>
        <div className="textb">
            <input type="text" 
            value={nome.user} 
            onChange={(e) => setNome(e.target.value)} 
            placeholder="Usuário(a)" 
            required />
            <BsFillPersonFill id="icons"/>
        </div>

        <div className="textb">
            <input type="password" 
            value={nome.password} 
            onChange={(e) => setNome(e.target.value)} 
            placeholder="Senha" 
            required />
            <BsFillLockFill id="icons" />
        </div>


        <div id="checkbox">
            <input type="checkbox" />
            <span>Lembre-se de mim</span>
        </div>

        <button className="btn" onSubmit={Enviar}>
            <BsArrowRight />
        </button>
        <br />
        <a href="#">Crie sua conta</a>
        <br />
        <a href="#">Esqueci a senha</a>

    </form>

    )
}

export default Login;