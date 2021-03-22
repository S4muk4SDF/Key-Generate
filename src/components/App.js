import React, { useState } from 'react'

import TextField from '@material-ui/core/TextField'

import './style.css'

function App() {

    const [token, setToken] = useState()

    function generateKey() {
        let opcaoSelecionada = document.getElementById('standard-basic').value

        let result = '';
        let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let charactersLength = characters.length;

        for (let i = 0; i < opcaoSelecionada; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }

        setToken(result)
    }

    return (
        <div className="main">

            <div className="card p-3 mb-2 bg-info shadow-lg">
                <h1 className="text-white fw-bold">Token: {token}</h1>

                <label className="text-white">Quantos caracteres você deseja?</label>
                <TextField id="standard-basic" />

                <button onClick={generateKey} className="mt-4 btn btn-primary">Gerar Senha</button>
            </div>

        </div>
    )
}

export default App;