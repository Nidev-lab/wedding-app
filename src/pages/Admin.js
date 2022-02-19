import React from 'react'
import { Login } from '../components/Admin/Login/Login'
import { useHistory } from "react-router-dom";


export const Admin = () => {
  const history = useHistory();
  const token = localStorage.getItem('token')

  if (token){
    history.push('/admin/panel')
  }

  return <Login />
}
