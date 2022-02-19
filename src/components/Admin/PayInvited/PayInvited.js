import React, { useEffect, useState } from 'react'

export const PayInvited = ({ users, handleDelete }) => {

  const [usersPayed, setUsersPayed] = useState([])

  useEffect(() => {
    if (users) {
      const usersPay = users.filter(user => user.isPaid === false)
      setUsersPayed(usersPay)  
    }
  }, [users])

  return (
    <div>
      <table className="table mt-4">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Mesa</th>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Confirmo?</th>
          </tr>
        </thead>
        <tbody>
          {
            usersPayed.map((user, i) => (
              <tr>
                <th scope="row">{i + 1}</th>
                <th>{user.table}</th>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>{user.lastName}</td>
                <td>{user.isConfirmed ? '🟢' : '🔴'}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}
