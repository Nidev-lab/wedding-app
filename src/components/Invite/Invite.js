import React, { useState } from 'react'
import { useForm } from "react-hook-form"

export const Invite = () => {
  const token = localStorage.getItem("token")

  if (!token) {
    window.location.href = '/admin'
  }

  const urlBase = process.env.REACT_APP_URL_API
  
  const { register, handleSubmit } = useForm()
  const [invitation, setInvitation] = useState("")

  const onSubmit = data => {
    fetch(`${urlBase}/invited`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'access-token': token,
      },
    })
      .then(resp => resp.json())
      .then(json => setInvitation(json))
  }

  return (
    <>
      <section className="row justify-content-center">
        <h1 className="text-center pt-5">Invitar</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="py-5 px-4 col-12 col-sm-8">
          <label htmlFor="name">Nombre</label>
          <input type="text" name="name" className="form-control mb-3" {...register("name")} />

          <label htmlFor="lastname">Apellido</label>
          <input type="text" name="lastName" className="form-control mb-3" {...register("lastName")} />

          <label htmlFor="table">Mesa</label>
          <input type="number" name="table" className="form-control mb-3" {...register("table")} />
          
          <label htmlFor="paid">Paga tarjeta?</label>
          <select className="form-select mb-4" aria-label="Paga tarjeta?" {...register("isPaid")}>
            <option value={true}>Si</option>
            <option value={false}>No</option>
          </select>

          <label htmlFor="paid">Necesita transporte?</label>
          <select className="form-select mb-4" aria-label="Necesita transporte?" {...register("needTransport")}>
            <option value={true}>Si</option>
            <option value={false}>No</option>
          </select>
          
          <button type="submit" className="btn btn-secondary w-100">Invitar</button>
        </form>
      </section>
      {
        invitation && <a href={`https://chinaynico.netlify.app/invitation/${invitation}`} target="_blank" rel="noreferrer">Link de invitacion</a>
      }
    </>
  )
}
