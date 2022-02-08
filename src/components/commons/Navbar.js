import React from 'react'

export const Navbar = ({ user }) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light mt-5" id="inicio">
        <div className="container-fluid justify-content-end">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul className="navbar-nav text-end mt-4 me-2">
              <li className="nav-item ms-4">
                <a className="nav-link active" aria-current="page" href="#inicio">Inicio</a>
              </li>
              <li className="nav-item ms-4">
                <a className="nav-link" href="#ubicacion">Ubicación</a>
              </li>
              <li className="nav-item ms-4">
                <a className="nav-link" href="#asistencia">Asistencia</a>
              </li>
              {
                user.isPaid && 
                (
                  <li className="nav-item ms-4">
                    <a className="nav-link" href="#pagos">Medios de pago</a>
                  </li>
                )
              }
              
              <li className="nav-item ms-4">
                <a className="nav-link" href="#regalos">Regalos</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
