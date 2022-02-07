import React, { useState } from 'react'
import { useHistory } from "react-router-dom" 

export const Login = () => {
  const urlBase = process.env.REACT_APP_URL_API
  let history = useHistory() 

  const [login, setLogin] = useState({
    user: "",
    password: ""
  })

  const handleSubmit = async (e) => {
    e.preventDefault() 

    try {
      const parametros = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(login),
      } 

      const respuesta = await fetch(`${urlBase}/login`, parametros) 
      const dato = await respuesta.json() 

      if (respuesta.status === 200) {
        localStorage.setItem("token", dato.token) 
        history.push("/admin/invite") 
      }
    } catch (error) {
      console.error(error) 
    }
  } 

  const handleChange = ({ target }) => {
    setLogin({
      ...login,
      [target.name]: target.value,
    })
  }

  return (
    <div className="row justify-content-center">
      <form onSubmit={handleSubmit} className="pt-5 px-4 col-12 col-md-8 col-lg-6">
        <label htmlFor="user">Usuario</label>
        <input type="text" name="user" className="form-control mb-3" onChange={handleChange}/>

        <label htmlFor="password">Contraseña</label>
        <input type="text" name="password" className="form-control mb-3" onChange={handleChange}/>

        <button type="submit" className="btn btn-secondary w-100">Login</button>
        <p className="py-4 text-center"><a href="/#" className="text-decoration-none text-dark">Olvide mi contraseña</a></p>
      </form>
    </div>
  )
}
