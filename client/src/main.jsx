import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Addtask from './pages/Addtask.jsx'
import EditTask from './pages/Update.jsx'


const paths=createBrowserRouter([{
  path:"",
  element:<App/>,
},
{
  path:"/addtask",
  element:<Addtask/>
},
{
  path:"/editTask/:id",
  element:<EditTask/>
},

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={paths}/>
  </React.StrictMode>,
)
