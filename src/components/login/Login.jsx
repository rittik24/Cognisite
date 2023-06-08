import React, { useState } from 'react'
import "./login.css"
import { useNavigate } from 'react-router-dom'
const Login = () => {
    const [num, setNum] = useState("")
    const [pass, setPass] = useState("")
    const [logindata, setLogindata] = useState([])
    const navigate = useNavigate()
    const loginData = (e) => {
        e.preventDefault()
        logdata()
    }

    const logdata = async () => {
        const res = await fetch("https://mock4rev.vercel.app/users", {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        })
        const data = await res.json()
        setLogindata(data)
        console.log(data)
        let userlogdata = data.filter(
            (item) => item.number === num && item.pass === pass
        );
        console.log(userlogdata);
        if (userlogdata.length === 1) {
            alert("login succesfull");
            navigate("/todo")
        } else {
            alert("login failed")
        }
    }
    return (
        <div>
            <form action="" onSubmit={loginData}>
                <lebel style={{ color: "yellow" }} >Ph . Number : </lebel>
                <input type="number" placeholder='enter number' value={num} onChange={(e) => setNum(e.target.value)} /> <br />
                <lebel style={{ color: "yellow" }}>Password : </lebel>
                <input type="password" placeholder='enter password' value={pass} onChange={(e) => setPass(e.target.value)} /> <br />
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}

export default Login