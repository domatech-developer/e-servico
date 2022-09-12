// @flow 
import {useState, useEffect} from 'react';
import  Logo from '../../assets/images/psychonauts-logo.png';
import '../styles.scss'
// const axios = require('axios').default;
import api from '../../services/api'

// type Props = {
//     // img: string,
//     // children: JSX.Element,
// };
interface Icharacter {
    gender: string,
    img: string,
    name: string
}
interface Ibusca {
    nomeCaractere: string
}
export const Home = () => {

    const [ charactersList, setCharactersList] = useState<Icharacter[]>([]);
    useEffect(() => {
        // document.title = shoe ? 'Conseguir' : "Alpost";
        api.get<Icharacter[]>('https://psychonauts-api.herokuapp.com/api/characters')
        .then(function (response) {
            // handle success
            setCharactersList(response.data);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
    },[]);



 const SearchCharacter = e => {

    let nam = e.target.name;
    let val = e.target.value;
    console.log("nam val")
    console.log(nam, val)
 }
    
    return (
        <div className='container'>
            <div className='page-home'>

                <img src={Logo} alt="psychouts" className='logo'/>

                <div className='filter-search'>
                    <input type="text" placeholder='Pesquise...' className='busca' 
                    onChange={(e) => SearchCharacter}/>

                    <select name="filterGender" id="">
                        <option value="">Selecione</option>
                        <option value="male">Fêmea</option>
                        <option value="female">Macho</option>
                    </select>

                </div>


                <div className='character-list'>
                    <p className='number-characters'>
                        {
                            charactersList.length ? 
                            charactersList.length : "0"
                        } personagens
                    </p>
                    <ul>
                        {
                            charactersList[0] !== undefined ? charactersList
                            .map((caracter, index) => (
                            <>
                            
                        
                                <li key={index}>
                                    <div className='photo'>
                                        <img src={caracter.img} alt="" />
                                    </div>
                                    <div>
                                        <p className='name'>{caracter.name}</p>
                                        <div className='psiPowers'>
                                            <p >xxxxx</p>

                                            <p >xxxxx</p>

                                            <p >xxxxx</p>

                                        </div>
                                    </div>
                                    
                                </li>
                            </>


                            )) : (
                            <>
                            nada encontrado
                            </>
                            )
                        }
                    </ul>
                </div>

            </div>

        </div>
    );
};
export default Home;