import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Signin from './Components/Signin/Signin'
import Layout from './Components/Layout/Layout'
import Watchlist from './Components/Watchlist/Watchlist'
import Signup from './Components/Signup/Signup'
import Contact from './Components/Contact/Contact'
import NotFound from './Components/NotFound/NotFound'
import TV from './Components/TV/TV'
import Home from './Components/Home/Home'
import Movies from './Components/Movies/Movies'





export default function App() {

  let root = createBrowserRouter([
    {
      path: '/', element: <Layout></Layout>, children: [
        { index: true, element: <Home></Home> },
        { path: 'movies', element: <Movies></Movies> },
        { path: 'tv', element: <TV></TV> },
        { path: 'watchList', element: <Watchlist></Watchlist> },
        { path: 'signin', element: <Signin></Signin> },
        { path: 'signup', element: <Signup></Signup> },
        { path: '*', element: <NotFound></NotFound> },
        { path: 'contact', element: <Contact></Contact> },
      ]
    }
  ])
  return <>
    <RouterProvider router={root}></RouterProvider>
    </>

}
