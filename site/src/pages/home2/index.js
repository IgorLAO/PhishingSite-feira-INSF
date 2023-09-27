import './index.scss';

import Logo from '../../assets/images/instagram-logo.webp';
import PostImage from '../../assets/images/publiIMG.png';
import VerifiedIcon from '../../assets/images/verified.png';
import PopUp from '../../components/loginPopUp';

import jairLula from '../../assets/images/luizBolsonaro.jfif';
import gaules from '../../assets/images/gaules.jpg';
import frifa from '../../assets/images/frifa.jfif';
import carlinhos from '../../assets/images/carlinhos.jfif';
import lula from '../../assets/images/lula.jfif';

import { useState, useRef } from 'react';

export default function Post_HomePage() {
    const [hidden, setHidden] = useState(false);

    const Hide = () => {
        setHidden(true)
        if (hidden)
            setHidden(false)
    }

    return (
        <div className='mainPost'>
            {hidden &&
                <PopUp hidden={hidden} />
            }

            <nav>
                <span className='imgLogo'>
                    <svg aria-label="Instagram" class="_ab6-" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)" height="29" role="img" viewBox="32 4 113 32" width="103"><path clip-rule="evenodd" d="M37.82 4.11c-2.32.97-4.86 3.7-5.66 7.13-1.02 4.34 3.21 6.17 3.56 5.57.4-.7-.76-.94-1-3.2-.3-2.9 1.05-6.16 2.75-7.58.32-.27.3.1.3.78l-.06 14.46c0 3.1-.13 4.07-.36 5.04-.23.98-.6 1.64-.33 1.9.32.28 1.68-.4 2.46-1.5a8.13 8.13 0 0 0 1.33-4.58c.07-2.06.06-5.33.07-7.19 0-1.7.03-6.71-.03-9.72-.02-.74-2.07-1.51-3.03-1.1Zm82.13 14.48a9.42 9.42 0 0 1-.88 3.75c-.85 1.72-2.63 2.25-3.39-.22-.4-1.34-.43-3.59-.13-5.47.3-1.9 1.14-3.35 2.53-3.22 1.38.13 2.02 1.9 1.87 5.16ZM96.8 28.57c-.02 2.67-.44 5.01-1.34 5.7-1.29.96-3 .23-2.65-1.72.31-1.72 1.8-3.48 4-5.64l-.01 1.66Zm-.35-10a10.56 10.56 0 0 1-.88 3.77c-.85 1.72-2.64 2.25-3.39-.22-.5-1.69-.38-3.87-.13-5.25.33-1.78 1.12-3.44 2.53-3.44 1.38 0 2.06 1.5 1.87 5.14Zm-13.41-.02a9.54 9.54 0 0 1-.87 3.8c-.88 1.7-2.63 2.24-3.4-.23-.55-1.77-.36-4.2-.13-5.5.34-1.95 1.2-3.32 2.53-3.2 1.38.14 2.04 1.9 1.87 5.13Zm61.45 1.81c-.33 0-.49.35-.61.93-.44 2.02-.9 2.48-1.5 2.48-.66 0-1.26-1-1.42-3-.12-1.58-.1-4.48.06-7.37.03-.59-.14-1.17-1.73-1.75-.68-.25-1.68-.62-2.17.58a29.65 29.65 0 0 0-2.08 7.14c0 .06-.08.07-.1-.06-.07-.87-.26-2.46-.28-5.79 0-.65-.14-1.2-.86-1.65-.47-.3-1.88-.81-2.4-.2-.43.5-.94 1.87-1.47 3.48l-.74 2.2.01-4.88c0-.5-.34-.67-.45-.7a9.54 9.54 0 0 0-1.8-.37c-.48 0-.6.27-.6.67 0 .05-.08 4.65-.08 7.87v.46c-.27 1.48-1.14 3.49-2.09 3.49s-1.4-.84-1.4-4.68c0-2.24.07-3.21.1-4.83.02-.94.06-1.65.06-1.81-.01-.5-.87-.75-1.27-.85-.4-.09-.76-.13-1.03-.11-.4.02-.67.27-.67.62v.55a3.71 3.71 0 0 0-1.83-1.49c-1.44-.43-2.94-.05-4.07 1.53a9.31 9.31 0 0 0-1.66 4.73c-.16 1.5-.1 3.01.17 4.3-.33 1.44-.96 2.04-1.64 2.04-.99 0-1.7-1.62-1.62-4.4.06-1.84.42-3.13.82-4.99.17-.8.04-1.2-.31-1.6-.32-.37-1-.56-1.99-.33-.7.16-1.7.34-2.6.47 0 0 .05-.21.1-.6.23-2.03-1.98-1.87-2.69-1.22-.42.39-.7.84-.82 1.67-.17 1.3.9 1.91.9 1.91a22.22 22.22 0 0 1-3.4 7.23v-.7c-.01-3.36.03-6 .05-6.95.02-.94.06-1.63.06-1.8 0-.36-.22-.5-.66-.67-.4-.16-.86-.26-1.34-.3-.6-.05-.97.27-.96.65v.52a3.7 3.7 0 0 0-1.84-1.49c-1.44-.43-2.94-.05-4.07 1.53a10.1 10.1 0 0 0-1.66 4.72c-.15 1.57-.13 2.9.09 4.04-.23 1.13-.89 2.3-1.63 2.3-.95 0-1.5-.83-1.5-4.67 0-2.24.07-3.21.1-4.83.02-.94.06-1.65.06-1.81 0-.5-.87-.75-1.27-.85-.42-.1-.79-.13-1.06-.1-.37.02-.63.35-.63.6v.56a3.7 3.7 0 0 0-1.84-1.49c-1.44-.43-2.93-.04-4.07 1.53-.75 1.03-1.35 2.17-1.66 4.7a15.8 15.8 0 0 0-.12 2.04c-.3 1.81-1.61 3.9-2.68 3.9-.63 0-1.23-1.21-1.23-3.8 0-3.45.22-8.36.25-8.83l1.62-.03c.68 0 1.29.01 2.19-.04.45-.02.88-1.64.42-1.84-.21-.09-1.7-.17-2.3-.18-.5-.01-1.88-.11-1.88-.11s.13-3.26.16-3.6c.02-.3-.35-.44-.57-.53a7.77 7.77 0 0 0-1.53-.44c-.76-.15-1.1 0-1.17.64-.1.97-.15 3.82-.15 3.82-.56 0-2.47-.11-3.02-.11-.52 0-1.08 2.22-.36 2.25l3.2.09-.03 6.53v.47c-.53 2.73-2.37 4.2-2.37 4.2.4-1.8-.42-3.15-1.87-4.3-.54-.42-1.6-1.22-2.79-2.1 0 0 .69-.68 1.3-2.04.43-.96.45-2.06-.61-2.3-1.75-.41-3.2.87-3.63 2.25a2.61 2.61 0 0 0 .5 2.66l.15.19c-.4.76-.94 1.78-1.4 2.58-1.27 2.2-2.24 3.95-2.97 3.95-.58 0-.57-1.77-.57-3.43 0-1.43.1-3.58.19-5.8.03-.74-.34-1.16-.96-1.54a4.33 4.33 0 0 0-1.64-.69c-.7 0-2.7.1-4.6 5.57-.23.69-.7 1.94-.7 1.94l.04-6.57c0-.16-.08-.3-.27-.4a4.68 4.68 0 0 0-1.93-.54c-.36 0-.54.17-.54.5l-.07 10.3c0 .78.02 1.69.1 2.09.08.4.2.72.36.91.15.2.33.34.62.4.28.06 1.78.25 1.86-.32.1-.69.1-1.43.89-4.2 1.22-4.31 2.82-6.42 3.58-7.16.13-.14.28-.14.27.07l-.22 5.32c-.2 5.37.78 6.36 2.17 6.36 1.07 0 2.58-1.06 4.2-3.74l2.7-4.5 1.58 1.46c1.28 1.2 1.7 2.36 1.42 3.45-.21.83-1.02 1.7-2.44.86-.42-.25-.6-.44-1.01-.71-.23-.15-.57-.2-.78-.04-.53.4-.84.92-1.01 1.55-.17.61.45.94 1.09 1.22.55.25 1.74.47 2.5.5 2.94.1 5.3-1.42 6.94-5.34.3 3.38 1.55 5.3 3.72 5.3 1.45 0 2.91-1.88 3.55-3.72.18.75.45 1.4.8 1.96 1.68 2.65 4.93 2.07 6.56-.18.5-.69.58-.94.58-.94a3.07 3.07 0 0 0 2.94 2.87c1.1 0 2.23-.52 3.03-2.31.09.2.2.38.3.56 1.68 2.65 4.93 2.07 6.56-.18l.2-.28.05 1.4-1.5 1.37c-2.52 2.3-4.44 4.05-4.58 6.09-.18 2.6 1.93 3.56 3.53 3.69a4.5 4.5 0 0 0 4.04-2.11c.78-1.15 1.3-3.63 1.26-6.08l-.06-3.56a28.55 28.55 0 0 0 5.42-9.44s.93.01 1.92-.05c.32-.02.41.04.35.27-.07.28-1.25 4.84-.17 7.88.74 2.08 2.4 2.75 3.4 2.75 1.15 0 2.26-.87 2.85-2.17l.23.42c1.68 2.65 4.92 2.07 6.56-.18.37-.5.58-.94.58-.94.36 2.2 2.07 2.88 3.05 2.88 1.02 0 2-.42 2.78-2.28.03.82.08 1.49.16 1.7.05.13.34.3.56.37.93.34 1.88.18 2.24.11.24-.05.43-.25.46-.75.07-1.33.03-3.56.43-5.21.67-2.79 1.3-3.87 1.6-4.4.17-.3.36-.35.37-.03.01.64.04 2.52.3 5.05.2 1.86.46 2.96.65 3.3.57 1 1.27 1.05 1.83 1.05.36 0 1.12-.1 1.05-.73-.03-.31.02-2.22.7-4.96.43-1.79 1.15-3.4 1.41-4 .1-.21.15-.04.15 0-.06 1.22-.18 5.25.32 7.46.68 2.98 2.65 3.32 3.34 3.32 1.47 0 2.67-1.12 3.07-4.05.1-.7-.05-1.25-.48-1.25Z" fill="currentColor" fill-rule="evenodd"></path></svg>
                </span>

               
                <div className='NavBtns'>
                    <button onClick={Hide}> Entrar </button>
                    <a href='cadastro'> Cadastre-se </a>
                </div>
            </nav>
            <section className='PostSection'>
                <div className='Post'>
               

                    <div className='imagePost'>
                        <div className='headerResponsivo'>
                            <span style={{ display: "flex", alignItems: "center" }}>
                                <img src='https://s2-g1.glbimg.com/yGzD9QZnq9Jod8lELbkvvfnhpS0=/0x0:977x555/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2022/L/8/uEij4NQfeVEF5aJYvyyg/bill-bill.png' className='imgperfil' />
                                <a className='PerfilLink' >

                                    <b onClick={Hide}> Dalva's Giveaway </b>
                                    <svg aria-label="Verificado" class="x1lliihq x1n2onr6" color="rgb(0, 149, 246)" fill="rgb(0, 149, 246)" height="12" role="img" viewBox="0 0 40 40" width="12"><title>Verificado</title><path d="M19.998 3.094 14.638 0l-2.972 5.15H5.432v6.354L0 14.64 3.094 20 0 25.359l5.432 3.137v5.905h5.975L14.638 40l5.36-3.094L25.358 40l3.232-5.6h6.162v-6.01L40 25.359 36.905 20 40 14.641l-5.248-3.03v-6.46h-6.419L25.358 0l-5.36 3.094Zm7.415 11.225 2.254 2.287-11.43 11.5-6.835-6.93 2.244-2.258 4.587 4.581 9.18-9.18Z" fill-rule="evenodd"></path></svg>
                                    <span style={{ marginLeft: 5 }}>•</span>
                                    <a onClick={Hide}> Seguir </a>
                                </a>
                            </span>
                            <i style={{ fontSize: 20 }} class="fa-solid fa-ellipsis"></i>
                        </div>
                        <img src={PostImage} />
                    </div>
                    <div className='DetailsPost'>

                        <div className='header'>
                            <span style={{ display: "flex", alignItems: "center" }}>
                                <img src='https://s2-g1.glbimg.com/yGzD9QZnq9Jod8lELbkvvfnhpS0=/0x0:977x555/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2022/L/8/uEij4NQfeVEF5aJYvyyg/bill-bill.png' className='imgperfil' />
                                <a className='PerfilLink' >

                                    <b onClick={Hide}> Dalva's Giveaway </b>
                                    <svg aria-label="Verificado" class="x1lliihq x1n2onr6" color="rgb(0, 149, 246)" fill="rgb(0, 149, 246)" height="12" role="img" viewBox="0 0 40 40" width="12"><title>Verificado</title><path d="M19.998 3.094 14.638 0l-2.972 5.15H5.432v6.354L0 14.64 3.094 20 0 25.359l5.432 3.137v5.905h5.975L14.638 40l5.36-3.094L25.358 40l3.232-5.6h6.162v-6.01L40 25.359 36.905 20 40 14.641l-5.248-3.03v-6.46h-6.419L25.358 0l-5.36 3.094Zm7.415 11.225 2.254 2.287-11.43 11.5-6.835-6.93 2.244-2.258 4.587 4.581 9.18-9.18Z" fill-rule="evenodd"></path></svg>
                                    <span style={{ marginLeft: 5 }}>•</span>
                                    <a onClick={Hide}> Seguir </a>
                                </a>
                            </span>
                            <i style={{ fontSize: 20 }} class="fa-solid fa-ellipsis"></i>
                        </div>

                        <div className='Comments'>
                            <div className='comment'>
                                <img src='https://s2-g1.glbimg.com/yGzD9QZnq9Jod8lELbkvvfnhpS0=/0x0:977x555/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2022/L/8/uEij4NQfeVEF5aJYvyyg/bill-bill.png' className='aaa' />

                                <div className='textComment'>
                                    <a > <b onClick={Hide}> Dalva's Giveaway <svg aria-label="Verificado" class="x1lliihq x1n2onr6" color="rgb(0, 149, 246)" fill="rgb(0, 149, 246)" height="12" role="img" viewBox="0 0 40 40" width="12"><title>Verificado</title><path d="M19.998 3.094 14.638 0l-2.972 5.15H5.432v6.354L0 14.64 3.094 20 0 25.359l5.432 3.137v5.905h5.975L14.638 40l5.36-3.094L25.358 40l3.232-5.6h6.162v-6.01L40 25.359 36.905 20 40 14.641l-5.248-3.03v-6.46h-6.419L25.358 0l-5.36 3.094Zm7.415 11.225 2.254 2.287-11.43 11.5-6.835-6.93 2.244-2.258 4.587 4.581 9.18-9.18Z" fill-rule="evenodd"></path></svg> </b>
                                        🌟 Sorteio Incrível! Ganhe um PC Gamer de Última Geração! 🌟
                                        <br />
                                        Prepare-se para a experiência definitiva de gaming! Estamos sorteando um poderoso PC Gamer com processador de alta performance, placa gráfica potente e muito mais. Para concorrer, basta seguir nossas redes sociais e marcar três amigos nos comentários. O vencedor será anunciado em [data]. Não perca essa chance de elevar seu gameplay a um novo nível! 🚀🎮
                                        <i style={{ color: '#1877F2' }}>#SorteioPCGamer</i>
                                        <br />
                                        <i style={{ color: '#1877F2' }}>#GamingTop</i>

                                    </a>
                                </div>
                            </div>
                            <div className='comment'>
                                <img src={carlinhos} className='aaa' />

                                <div className='textComment'>
                                    <a>
                                        <b> Manoel Julio </b> oiiiii
                                    </a>
                                </div>
                            </div>
                            <div className='comment'>
                                <img src={frifa} className='aaa' />

                                <div className='textComment'>
                                    <a>
                                        <b> Carlinhos </b> Eu ganhei eu ganheiii. Ganhar agora.
                                    </a>
                                </div>
                            </div>
                            <div className='comment'>
                                <img src={jairLula} className='aaa' />

                                <div className='textComment'>
                                    <a>
                                        <b> Luiz Messias </b> Eu ganhei eu ganheiii. Ganhar agora.
                                    </a>
                                </div>
                            </div>
                            <div className='comment'>
                                <img src={lula} className='aaa' />

                                <div className='textComment'>
                                    <a>
                                        <b> Jair da silva ferreira </b> Eu ganhei eu ganheiii. Ganhar agora.
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='BtnsReactions'>
                            <span className='reactions'>
                                <span>
                                    <a onClick={Hide}>
                                        <svg aria-label="Curtir" class="x1lliihq x1n2onr6" color="rgb(142, 142, 142)" fill="rgb(142, 142, 142)" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Curtir</title><path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path></svg>
                                    </a>
                                    <a onClick={Hide}>
                                        <svg aria-label="Comentar" class="x1lliihq x1n2onr6" color="rgb(115, 115, 115)" fill="rgb(115, 115, 115)" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Comentar</title><path d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg>
                                    </a>
                                    <a onClick={Hide}>
                                        <svg aria-label="Compartilhar publicação" class="x1lliihq x1n2onr6" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Compartilhar publicação</title><line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></polygon></svg>
                                    </a>
                                </span>
                                <a onClick={Hide}>
                                    <svg aria-label="Salvar" class="x1lliihq x1n2onr6" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Salvar</title><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon></svg>
                                </a>
                            </span>
                            <b> 338.494 curtidas </b>
                            <a style={{ color: "#" + "8F8F8F" }}> Há 18 anos </a>
                        </div>
                    </div>
                </div>
            </section>
            <footer>
                <div className='links'>
                    <a href='' >Meta</a>
                    <a href='' >Sobre</a>
                    <a href='' >Blog</a>
                    <a href='' >Carreiras</a>
                    <a href='' >Ajuda</a>
                    <a href='' >API</a>
                    <a href='' >Privacidade</a>
                    <a href='' >Termos</a>
                    <a href='' >Principais Contas</a>
                    <a href='' >Localizações</a>
                    <a href='' >instagram Lite</a>
                    <a href='' >Threads</a>
                    <a href='' >Carregamento de contatos e não usuarios</a>
                    <a href='' >Meta Verified</a>
                    <a href='' >Principais</a>
                </div>
                <div>
                    <a href=''>Português (Brasil)  </a>
                    <a href=''>
                        &copy; 2023 Instagram from Meta
                    </a>
                </div>
            </footer>
        </div>
    );
}