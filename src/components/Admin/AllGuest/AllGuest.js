import React from 'react'

export const AllGuest = ({ users, handleDelete, handlePay }) => {
  return (
    <div>
      <table className="table table-borderless mt-4">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Mesa</th>
            <th scope="col">Invitacion</th>
            <th scope="col">Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Confirmo?</th>
            <th scope="col">Eliminar</th>
            <th scope="col">Pago?</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((user, i) => (
              <tr key={user._id}>
                <th scope="row">{ i + 1 }</th>
                <td>{user.table}</td>
                <td>
                  <a href={'https://chinaynico.netlify.app/invitation/' + user._id}>Link</a>
                </td>
                <td>{user.name}</td>
                <td>{user.lastName}</td>
                <td>{user.isConfirmed ? '🟢' : '🔴'}</td>
                <td>
                  <button className="btn btn-danger btn-sm" onClick={() => handleDelete(user._id)}>X</button>
                </td>
                <td>
                  {
                    user.invitationPaid 
                      ? 'Pagado'
                      : <button className="btn btn-outline-secondary btn-sm" onClick={() => handlePay(user)}>Pagó</button>
                  }
                  
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}
