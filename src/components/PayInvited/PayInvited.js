import React, { useEffect, useState } from 'react'

export const PayInvited = () => {
  const token = localStorage.getItem("token")
  const urlBase = process.env.REACT_APP_URL_API

  const [users, setUsers] = useState([])
  const [usersPayed, setUsersPayed] = useState([])

  if (!token) {
    window.location.href = '/admin'
  }

  const handleDelete = (id) => {
    fetch(`${urlBase}/invited/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'access-token': token,
      }
    })
  }

  useEffect(() => {
    fetch(`${urlBase}/allinvited`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'access-token': token,
      },
    })
      .then(resp => resp.json())
      .then(json => setUsers(json))
  }, [token, urlBase])

  useEffect(() => {
    const usersPay = users.filter(user => user.isPaid === false)
    setUsersPayed(usersPay)
  }, [users])

  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Mesa</th>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Confirmo?</th>
            <th scope="col">Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {
            usersPayed.map((user, i) => (
              <tr>
                <th scope="row">{user.table}</th>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>{user.lastName}</td>
                <td>{user.isConfirmed ? '🟢' : '🔴'}</td>
                <td>
                  <button onClick={() => handleDelete(user._id)}>Eliminar</button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}
