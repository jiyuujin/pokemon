import React from 'react'
import { ReactLocation, Router, Outlet } from 'react-location'
import Index from './pages/Index'
import About from './pages/About'

const routes = [
    {
        path: '/',
        element: <Index />,
    },
    {
        path: '/about',
        element: <About />,
    },
]

const location = new ReactLocation()

function App() {
    return (
        <Router location={location} routes={routes}>
            <div>
                <Outlet />
            </div>
        </Router>
    )
}

export default App
