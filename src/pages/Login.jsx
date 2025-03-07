import { Button, Input } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()  // Definir navigate correctamente

    const onLogin = () => {
        navigate('/') // Redirigir a la página principal sin validar datos
    }

    return (
        <div>
            <h2>Login</h2>
            <Input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <Button onClick={onLogin} variant="contained" color="primary">Login</Button>
        </div>
    )
}

export default Login
