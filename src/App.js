import './App.css'
import { Switch, Route, } from 'react-router-dom'
import { Home } from './pages/Home'
import { Admin } from './pages/Admin'
import { Panel } from './pages/Panel'
import { Invite } from './components/Admin/Invite/Invite'
import { PageNotFound } from './components/commons/404'

function App() {
  return (
    <div className="App container">
      <div className="bg-page">
        <Switch>
          <Route exact path="/invitation/:id" component={ Home }/>
          <Route exact path="/admin" component={ Admin }/>
          <Route exact path="/admin/panel" component={ Panel }/>
          <Route exact path="/admin/invite" component={ Invite }/>
          <Route path="*" component={ PageNotFound }/>
        </Switch>
      </div>
    </div>
  )
}

export default App
