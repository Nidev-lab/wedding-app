import React from 'react'

export const Where = () => {
  return (
    <section className="mb-5">
      <h1 id="ubicacion" className="text-center">Ubicación</h1>
      <div className="mt-5 gx-0 text-center">
        <h3 className='my-4'>Pacará House Salon (Country Las Moritas)</h3>
        <div className='d-flex justify-content-center'>
          <div className="col-lg-6 col-12 px-4">
            <iframe title="salon" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3562.7538198019392!2d-65.17911278525335!3d-26.752230992972624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225fad55d0fa55%3A0xa853f4e72f3d1bd7!2sPACARA%20HOUSE!5e0!3m2!1sen!2sar!4v1635026095432!5m2!1sen!2sar" width="100%" height="300" allowFullScreen="" loading="lazy"></iframe>
          </div>
        </div>
        <div className='my-4'>
          <h5>Ruta 314 Km 3.5, 4103.</h5>
          <h5>Tafí Viejo, Tucuman.</h5>
          <h5>01/10/2022 - 21:30hs</h5>
        </div>
      </div>
    </section>
  )
}
