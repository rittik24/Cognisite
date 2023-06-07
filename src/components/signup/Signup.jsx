import React from 'react'
import {  useState } from 'react'
const Signup = () => {
    const [name, setName] = useState("");
    const [pass, setPass] = useState("");
    const [number, setNumber] = useState("");
    const [data, setData] = useState([])

    const signForm = (e) => {
        e.preventDefault()
        fetchData()
        setName("")
        setPass("")
        setNumber("")
      }

      const fetchData = async () => {
        try {
          const res = await fetch("https://mock4rev.vercel.app/users", {
            method: 'POST',
            headers: { 'Content-Type':'application/json' },
            body: JSON.stringify({name: name, pass: pass, number: number})
          })
        } catch (error) {
          console.log(error)
        }
      }

    return (
        <div>
            <form action="" onSubmit={signForm}>
                <lebel style={{color:"yellow"}}>Full Name : </lebel>
                <input type="text" placeholder='Enter Full Name' value={name} onChange={(e) => setName(e.target.value)} /> <br />
                <lebel style={{color:"yellow"}}>Password : </lebel>
                <input type="password" placeholder='Enter Password' value={pass} onChange={(e) => setPass(e.target.value)} /><br />
                <lebel style={{color:"yellow"}}>Phone No : </lebel>
                <input type="number" placeholder='Enter Phone No..' value={number} onChange={(e) => setNumber(e.target.value)} /> <br />
                <button type='submit'>Signup</button>
            </form>
        </div>
    )
}

export default Signup