import { useState, useEffect } from "react";
import Axios from 'axios'


const Projeto = () => {
    const [repos, setRepos] = useState([])
    const [mostrar, setMostrar] = useState(false)
    //console.log(mostrar)
    useEffect(() => {
        async function pegaDados() {
            const response = await Axios.get('https://api.github.com/users/juliams17/repos')
            const dados = await response.data 
            //console.log(response)
            setRepos(dados)
        }
        pegaDados()
    }, [])
    //console.log(repos)
    return(
        <>
        <button className="button" onClick={() => setMostrar(true)}>Mostrar repos</button>
        { mostrar && 
        <div>
            <h1>Meus repos</h1>
            <ul>
                {repos.map(item =>
                    <li key={item.id}>{item.name}</li>
                    )}
            </ul>
        </div>
        }
        </>
    ) 
}

export default Projeto