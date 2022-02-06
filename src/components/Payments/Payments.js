import React from 'react'
import qr from '../../assets/qr.png'

export const Payments = () => {
  return (
    <div id="pagos" className="mb-5">
      <div className="px-4">
        <h1 className="text-center">Medios de pago</h1>
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