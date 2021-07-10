import React from 'react'
import useSWR from 'swr'
import './App.css'
import './assets/gallery.css'

import { Card } from './components/Card'

function App() {
    const { data, error } = useSWR(
        `${process.env.REACT_APP_POKEMON_API}/pokemon?limit=200&offset=200`
    )

    if (!data) return <div>Loading..</div>

    if (error) return <div>Failed</div>

    return (
        <div className="App">
            <div className="gallery">
                {data.results.map((pokemon: { name: string; url: string }) => (
                    <div key={pokemon.name} className="gallery__item">
                        <Card pokemon={pokemon} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default App
