import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Navbar } from '../components/commons/Navbar'
import { ConfirmAssistance } from '../components/ConfirmAssistance/ConfirmAssistance'
import { Gifts } from '../components/Gifts/Gifts'
import { Hero } from '../components/Hero/Hero'
import { Payments } from '../components/Payments/Payments'
import { Where } from '../components/Where/Where'

export const Home = () => {

  const { id } = useParams()

  const [user, setUser] = useState({})

  useEffect(() => {
    fetch(`http://localhost:8000/invited/${id}`)
      .then(resp => resp.json())
      .then(json => setUser(json))
  },[id])

  return (
    <>
      <Navbar />
      <div className="container">
        <Hero user={user}/>
        <ConfirmAssistance user={user}/>
        <Payments />
        <Gifts />
        <Where />
      </div>
    </>
  )
}
