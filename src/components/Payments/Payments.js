import React from 'react'

export const Payments = () => {
  return (
    <div id="pagos" className="mb-5">
      <div className="px-4">
        <h1 className="text-center">Medios de pago</h1>
        <div className="mt-5 row justify-content-center">
          <h5 className='text-center col-12 col-md-8 col-lg-8'>El precio de la tarjeta es de <b>$2500</b> (por persona), y podes abonar en efectivo comunicándote con Mar, Nico, o depositando en las siguientes cuentas.</h5>
        </div>
        <div className="mt-5 row justify-content-center">
          <div className="col-lg-6 col-12 mb-5">
            <h3 className='text-center'>MercadoPago</h3>
            <div className='text-center py-3'>
              <p className='m-1'>CVU: 0000003100016432631666</p>
              <p className='m-1'>Alias: MARIANELLA.JRIVAS</p>
              <p className='m-1'>o</p>
              <p className='m-1'>Abona haciendo click <a href='http://mpago.li/1SxZFFV'>aqui</a></p>
            </div>
          </div>
          <div className="col-lg-6 col-12 mb-5">
            <h3 className='text-center'>Transferencia</h3>
            <div className='text-center py-3'>
              <p className='m-1'>Nombre completo: Marianella Juarez Rivas</p>
              <p className='m-1'>CBU: 1430001713005586350011</p>
              <p className='m-1'>Alias: MARIANELLAJRIVAS</p>
              <p className='m-1'>Nº de cuenta: 1300558635001</p>
              <p className='m-1'>CUIT: 27-38742868-8</p>
            </div>
          </div>
          <p className='text-center'>*El precio de la tarjeta puede sufrir incrementos cada 2 meses.</p>
        </div>
      </div>
    </div>
  )
}
