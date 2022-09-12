// @flow 
import * as React from 'react';
import  Logo from '../../assets/images/psychonauts-logo.png';
import './styles.scss'
// type Props = {
//     titleG: string,
//     children: JSX.Element,
// };
export const Home = () => {
    
    return (
        <div className='page-not-found'>
                <img src={Logo} alt="psychouts" className='logo'/>
                <h1>404</h1>
                <p>Não encontramos esta página.</p>
                <a href="/">Voltar ao início</a>
        </div>
    );
};
export default Home;