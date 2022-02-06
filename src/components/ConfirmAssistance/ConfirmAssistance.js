import React, { useState } from 'react'

export const ConfirmAssistance = ({ user }) => {
  const [userConfirmed, setUserConfirmed] = useState({})

  console.log(user.isConfirmed)

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const parametros = {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userConfirmed),
      }

      const respuesta = await fetch(`http://localhost:8000/invited/${user._id}`, parametros)
      const dato = await respuesta.json()

      if (respuesta.status === 200) {
        console.log(dato)
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
            <label htmlFor="nombre">Nombre</label>
            <input type="text" name="nombre" className="form-control my-2" value={user.name || ''} disabled />

            <label htmlFor="apellido">Apellido</label>
            <input type="text" name="apellido" className="form-control my-2" value={user.lastName || ''} disabled />
            
            <label htmlFor="isConfirmed">Asistiras?</label>
            <select className="form-select mb-4" aria-label="Necesita transporte?" onChange={handleChange} disabled={user.isConfirmed}>
              <option value={true}>Si</option>
              <option value={false}>No</option>
            </select>

            {
              !user.isConfirmed && <button className="btn btn-outline-secondary w-100">Confirmar asistencia</button>
            }
            <p className="mt-4 text-center">*Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </form>
        </div>
      </div>
    </div>
  )
}