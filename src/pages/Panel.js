import React from 'react'
import { Link } from 'react-router-dom' 

export const Panel = () => {
  return (
    <div className="p-4">
      <h1 className="text-center mb-5">Panel Admin</h1>
      <Link to="/admin/invite" type="button" className="btn btn-secondary w-sm-50 w-100 my-3">Invitar</Link>
      <Link to="/admin/desinvite" type="button" className="btn btn-secondary w-sm-50 w-100 my-3">Desinvitar</Link>
      <Link to="/admin/payment" type="button" className="btn btn-secondary w-sm-50 w-100 my-3">Pagar</Link>
      <Link to="/admin/verify" type="button" className="btn btn-secondary w-sm-50 w-100 my-3">Verificar</Link>
    </div>
  )
}
