import React from 'react'
import { Login } from '../components/Login/Login'
import { useHistory } from "react-router-dom";


export const Admin = () => {
  const history = useHistory();
  const loginUser = localStorage.getItem('token')

  if (loginUser){
    history.push('/admin/invite')
  }
  return (
    <div>
      <Login />
    </div>
  )
}
