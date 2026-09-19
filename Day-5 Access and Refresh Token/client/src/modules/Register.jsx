import { useState } from 'react'
import useApi from './shared/useApi'

const Register = () => {


    const api = useApi

    async function handleSubmit(e){
     e.preventDefault()

    const res = await api.post("/auth/register",{
        name,
        email,
        password
    })

    console.log(res.data)

    }

    const [name, setName] = useState("")
    const [email, setemail] = useState("")
    const [password, setPassword] = useState("")
    const [firstName, setfirstName] = useState("")


  return (
    <main className="p-10 flex  ">
        <form onSubmit={handleSubmit}>
            <input  className='b-2 p-4 rounded-xl bg-blue-300 '
             type="text" placeholder='Name' 
            value={name} onChange={(e)=>setName(e.target.value)} />


            <input  className='b-2 p-4 rounded-xl bg-blue-300'
             type="email" placeholder='Email' 
            value={email} onChange={(e)=>setemail(e.target.value)} />


            <input  className='b-2 p-4 rounded-xl bg-blue-300'
             type="password" placeholder='Password' 
            value={password} onChange={(e)=>setPassword(e.target.value)} />

            <button className="p-2 bg bg-blue-500 rounded-sm" type='submit'>Register</button>

        </form>
    </main>
  )
}

export default Register
