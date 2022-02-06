import './App.css'
import { Switch, Route, } from 'react-router-dom'
import { Home } from './pages/Home'
import { Admin } from './pages/Admin'
import { Panel } from './pages/Panel'
import { Invite } from './components/Invite/Invite'
import { Desinvite } from './components/Desinvite/Desinvite'
import { Payment } from './components/Payment/Payment'
import { Verify } from './components/Verify/Verify'

function App() {
  return (
    <div className="App container">
      <div className="bg-page">
        <Switch>
          <Route exact path="/home/:id" component={ Home }/>
          <Route exact path="/admin" component={ Admin }/>
          <Route exact path="/admin/panel" component={ Panel } />
          <Route exact path="/admin/invite" component={ Invite } />
          <Route exact path="/admin/desinvite" component={ Desinvite } />
          <Route exact path="/admin/payment" component={ Payment } />
          <Route exact path="/admin/verify" component={ Verify } />
        </Switch>
      </div>
    </div>
  )
}

export default App
