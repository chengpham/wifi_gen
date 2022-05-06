import './App.scss'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MaintenancePage from './components/MaintenancePage'
// import Navbar from './components/Navbar';
// import Intro from './components/Intro'
// import About from './components/About'
// import Project from './components/Project'
// import Contact from './components/Contact'

export default function App() {
  return (
    <BrowserRouter>
    {process.env.REACT_APP_MAINTENANCE === 'true' ? (
				<Switch>
					<Route component={MaintenancePage} />
		  		</Switch>
			) : (
        <Switch>
            {/* <Route path='/intro' render={(routeProps)=><Intro {...routeProps}/>} /> */}
            {/* <Route path='/' component={Home} /> */}
        </Switch>
      )}
    </BrowserRouter>
  )
}

