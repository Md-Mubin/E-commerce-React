import './App.css'
import Home from './component/Home'
import Sign_up from './component/Sign_up'
import Log_in from './component/Log_in'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Account from './component/Account'
import Contact from './component/Contact'
import NopageFound from './component/NopageFound'

function App() {

  const eCommerce = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/'             element={<Home/>}/>
        <Route path='/Sign_Up'      element={<Sign_up/>}/>
        <Route path='/Log_In'       element={<Log_in/>}/>
        <Route path='/My_Account'   element={<Account/>}/>
        <Route path='/Contact'      element={<Contact/>}/>
        <Route path='*'             element={<NopageFound/>}/>
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={eCommerce}/>
    </>
  )
}

export default App
