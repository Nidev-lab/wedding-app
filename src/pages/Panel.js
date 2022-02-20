import React, { useEffect, useState } from 'react'
import { AllGuest } from '../components/Admin/AllGuest/AllGuest'
import { Invite } from '../components/Admin/Invite/Invite'
import { PaidOut } from '../components/Admin/PaidOut/PaidOut'
import { PayInvited } from '../components/Admin/PayInvited/PayInvited'

export const Panel = () => {
  const token = localStorage.getItem("token")
  const urlBase = process.env.REACT_APP_URL_API

  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch(urlBase + '/allinvited', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'access-token': token,
      },
    })
      .then(resp => resp.json())
      .then(json => setUsers(json))
  }, [token, urlBase])

  const handleDelete = (id) => {
    fetch(urlBase + '/invited/' + id, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'access-token': token,
      }
    })
  }

  const handlePay = (user) => {
    const userPayed = {
      ...user,
      invitationPaid: true,
    }

    fetch(urlBase + '/pay/' + user._id, {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'access-token': token,
      },
      body: JSON.stringify(userPayed),
    })
  }

  return (
    <>
      <div className="p-4">
        <div className="d-flex justify-content-between">
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
              <button className="nav-link active" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Invitados</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Familia</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="paid-tab" data-bs-toggle="tab" data-bs-target="#paid" type="button" role="tab" aria-controls="contact" aria-selected="false">Pagados</button>
            </li>
          </ul>
          <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Agregar Invitado</button>
        </div>
        <div className="tab-content" id="myTabContent">
          <div className="tab-pane fade show active" id="profile" role="tabpanel" aria-labelledby="profile-tab">
            <AllGuest users={users} handleDelete={handleDelete} handlePay={handlePay}/>
          </div>
          <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
            <PayInvited users={users} handleDelete={handleDelete} />
          </div>
          <div className="tab-pane fade" id="paid" role="tabpanel" aria-labelledby="paid-tab">
            <PaidOut users={users} />
          </div>
        </div>
      </div>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Nuevo Invitado</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <Invite />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
