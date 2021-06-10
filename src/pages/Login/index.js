import React, { useEffect, useState } from 'react';
import './style.css';
import '../../style.css';

import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import logo from '../../assets/images/logo.png';

import InputLogin from '../../components/InputLogin';
import Button from '../../components/Button';
import Image from '../../components/Image';

const initialFormLoginState = {
    cpf: '',
    password: '',
}

toast.configure();
const Login = ({ history }) => {
    const [formLogin, setFormLogin] = useState(initialFormLoginState);

    useEffect(() => {
        document.body.style.backgroundColor = 'rgb(54, 53, 53)'
    }, []);

    const setInput = (newValue) => {
        setFormLogin(formLogin => ({ ...formLogin, ...newValue }));
    }

    const submitLogin = () => {
        let userRecords = JSON.parse(localStorage.getItem('formData'));
        localStorage.setItem('loggedInUser', formLogin.cpf)

        if (!localStorage.getItem('formData') && formLogin.cpf && formLogin.password) {
            toast.error('Usuário não cadastrado.', {
                position: "top-right",
                autoClose: 3000,
            });
        }

        else if (localStorage.getItem('formData') && formLogin.cpf && formLogin.password) {
            for (let i = 0; i < userRecords.length; i++) {
                const checkLogin = userRecords.find(val => userRecords[i].cpf === formLogin.cpf);
                if (checkLogin) {
                    history.push('home');
                } else {
                    toast.error('Usuário ou senha incorreto!', {
                        position: "top-right",
                        autoClose: 3000,
                    });
                }
            }
        } else {
            toast.error('Campos CPF e senha obrigatórios.', {
                position: "top-right",
                autoClose: 3000,
            });
        }
    }

    return (
        <div className="login">
            <Image src={logo} alt="Logo" width="150px" heigth="150px" />

            <h1 className="login--title">Entrar</h1>
            <hr />

            <div className="login--content">
                <InputLogin type="text"
                    placeholder="CPF"
                    onChange={e => setInput({ cpf: e.target.value }) }
                />
                <InputLogin type="password"
                    placeholder="Senha"
                    onChange={e => setInput({ password: e.target.value })}
                />
                <Button title="Entrar" handlerButton={submitLogin} width="270px" />

                <Link to="/home"></Link>

                <label className="login--forgotPassword">Esqueceu a senha?</label>
                <Link to="/cadastro">
                    <label className="login--register">Cadastre-se</label>
                </Link>
            </div>

        </div>
    )
}
export default Login;
