import React from 'react'

const Login = () => {

    const [form, setForm] = useState({
        email : "",
        password : "",
    })
    const [error, setError] = useState("")

  return (
    <div>
        <form>
            <h2>Login</h2>
            <input type="email" placeholder='email'/>
        </form>
    </div>
  )
}

export default Login