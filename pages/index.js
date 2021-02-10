import { useState } from 'react'
function Home() {
    return <div>
        <h1>Bem vindo ao contador </h1>
        <Contador />
        <div>Teste teste</div>
    </div>
}

function Contador() {
    const [contador, setContador] = useState(1);
    function adicionarContador() {
        setContador(contador + 1);
    }
    return (
        <div>
            <div>{contador}</div>
            <button onClick={adicionarContador}>Contar</button>
        </div>
    )
}


export default Home