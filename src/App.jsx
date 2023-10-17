import Temp from './temp'
import {Route, BrowserRouter, Routes} from 'react-router-dom'
import LoginForm from './components/loginForm'
import SignupForm from './components/signupForm'
import LandingPage from './components/landingPage'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element = {<LandingPage />} />
      <Route path='/login' element = {<LoginForm />} />
      <Route path='/signup' Component={SignupForm}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
