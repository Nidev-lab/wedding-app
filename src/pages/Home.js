import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Navbar } from '../components/commons/Navbar'
import { ConfirmAssistance } from '../components/ConfirmAssistance/ConfirmAssistance'
import { Gifts } from '../components/Gifts/Gifts'
import { Hero } from '../components/Hero/Hero'
import { Payments } from '../components/Payments/Payments'
import { Where } from '../components/Where/Where'

export const Home = () => {
  const urlBase = process.env.REACT_APP_URL_API
  const { id } = useParams()

  const [user, setUser] = useState({})

  useEffect(() => {
    fetch(`${urlBase}/invited/${id}`)
      .then(resp => resp.json())
      .then(json => setUser(json))

    },[id, urlBase])
    
    document.title = user.name + ' ' + user.lastName
  return (
    <>
      {
        !user.name
        ?
        (
          <div className="d-flex align-items-center justify-content-center" style={{ height: '50vh' }}>
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )
        :
        (
          <>
            <Navbar user={user}/>
            <div className="container">
              <Hero user={user} />
              <ConfirmAssistance user={user} />
              {
                user.isPaid && <Payments />
              }
              <Gifts />
              <Where />
            </div>
          </>
        )
      }
    </>
  )
}
