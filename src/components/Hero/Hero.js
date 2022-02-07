import React from 'react'
import heroimage from '../../assets/images/optionhero.jpg'
export const Hero = ({ user }) => {
  return (
    <div className='mb-5'>
      <h1 className="principal-title text-center">{user.name} {user.lastName}</h1>
      <div className='d-flex justify-content-center mt-4'>
        <div className='col-10 col-md-8'>
          <h4 className='text-center'>Para nosotros es fundamental compartir la alegría de nuestro matrimonio con vos, por eso nos gustaría que nos acompañes</h4>
        </div>
      </div>
      <div className="text-center">
        <div className="px-4">
          <div className="d-flex justify-content-center">
            <img src={heroimage} alt="" className="w-25"/>
          </div>
          <h3 className="text-center">Vení a celebrar nuestra boda</h3>
          <br />
          <div className="d-flex justify-content-center">
            <div>
              <hr className="w-100"/>
              <h1 className="py-4 px-5">Marianella Juarez Rivas</h1>
              <h2>—&nbsp;<em>y</em>&nbsp;—</h2>
              <h1 className="py-4 px-5">Nicolas Gonzalez</h1>
              <hr className="w-100" />
            </div>
          </div>
          <br />
          <div className="d-flex justify-content-center">
            <div className="col-lg-6 col-12">
              <h3>Sábado, 1 de Octubre, 2022 - 21:30hs</h3>
            </div>      
          </div>
        </div>
      </div>
    </div>
  )
}
