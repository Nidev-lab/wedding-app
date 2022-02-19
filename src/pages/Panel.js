import React, { useEffect, useState } from 'react'
import { AllGuest } from '../components/Admin/AllGuest/AllGuest'
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
    fetch(`${urlBase}/invited/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'access-token': token,
      }
    })
  }

  return (
    <div className="p-4">
      <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
          <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Todos los invitados</button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Familia</button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Pagados</button>
        </li>
      </ul>
      <div class="tab-content" id="myTabContent">
        <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
          <AllGuest users={users} handleDelete={handleDelete} />
        </div>
        <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
          <PayInvited users={users} handleDelete={handleDelete} />
        </div>
        <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
          Otra Tab
        </div>
      </div>
    </div>
  )
}
