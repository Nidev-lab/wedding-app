import React from 'react'
import qr from '../../assets/qr.png'

export const Payments = () => {
  return (
    <div id="pagos" className="mb-5">
      <div className="px-4">
        <h1 className="text-center">Medios de pago</h1>
        <div className="mt-4 row justify-content-center">
          <h5 className='text-center col-12 col-md-8 col-lg-8'>El precio de la tarjeta es de <b>$2500</b>, y podes abonar en efectivo comunicándote con Mar, Nico, o depositando en las siguientes cuentas.</h5>
        </div>
        <div className="mt-5 row justify-content-center">
          <div className="col-lg-6 col-12 mb-5">
            <h3 className='text-center'>MercadoPago</h3>
            <div className='d-flex justify-content-center'>
              <img src={qr} alt="qr" className='text-center'/>
            </div>
          </div>
          <div className="col-lg-6 col-12 mb-5">
            <h3 className='text-center'>Transferencia</h3>
            <div className='d-flex justify-content-center'>
              <img src={qr} alt="qr" className='text-center' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
