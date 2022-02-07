import React, { useState } from 'react'

export const ConfirmAssistance = ({ user }) => {
  const urlBase = process.env.REACT_APP_URL_API

  const [userConfirmed, setUserConfirmed] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState('')
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    
    setIsLoading(true)
    try {
      const parametros = {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userConfirmed),
      }

      const respuesta = await fetch(`${urlBase}/invited/${user._id}`, parametros)
      const dato = await respuesta.json()
      
      if (respuesta.status === 200) {
        setMessage(dato.mensaje)
        setIsLoading(false)
      }
    } catch (error) {
      console.error(error)
    }
  }
  
  const handleChange = ({ target }) => {
    setUserConfirmed({
      ...user,
      isConfirmed: (target.value === 'true'),
    })
  }
  
  return (
    <div id="asistencia" className="mb-5">
      <div className="px-4">
        <h1 className="mb-4 text-center">Confirmanos tu asistencia</h1>
        <div className='row justify-content-center'>
          <form className="mt-4 col-12 col-md-8 col-lg-6" onSubmit={handleSubmit}>
            <label htmlFor="nombre">Nombre(s)</label>
            <input type="text" name="nombre" className="form-control my-2" value={user.name || ''} disabled />

            <label htmlFor="apellido">Apellido(s)</label>
            <input type="text" name="apellido" className="form-control my-2" value={user.lastName || ''} disabled />
            
            <label htmlFor="isConfirmed">Asistirás?</label>
            <select className="form-select mb-4" aria-label="Necesita transporte?" onChange={handleChange} >
              <option value={true}>Si</option>
              <option value={false}>No</option>
            </select>

            <button className="btn btn-outline-secondary w-100">
              {
                isLoading 
                ?
                  (
                    <div className='mt-1'>
                      <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                      <span class="visually-hidden">Loading...</span>
                    </div>
                  )
                : 
                  (
                    <span>Confirmar asistencia</span>
                  )
              }
            </button>
            <p className="mt-4 text-center">{message}</p>
          </form>
        </div>
      </div>
    </div>
  )
}