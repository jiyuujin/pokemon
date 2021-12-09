import React from 'react'
import { ReactLocation, Router, Outlet } from 'react-location'
import Index from './pages/Index'
import About from './pages/About'

const routes = [
    {
        path: '/',
        loader: async (_match: any, { dispatch }: any) => {
            const teamsRes = await fetch(
                `${process.env.REACT_APP_POKEMON_API}/pokemon?limit=200&offset=200`
            )
            dispatch({
                type: 'maxAge',
                maxAge: Number(teamsRes.headers.get('max-age')),
            })
            return {
                data: await teamsRes.json(),
            }
        },
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
