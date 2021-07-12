import React from 'react'
import useSWR from 'swr'
import './App.css'
import './assets/gallery.css'

import { Card } from './components/Card'
import { Search } from './components/Search'

function App() {
    const { data, error } = useSWR(
        `${process.env.REACT_APP_POKEMON_API}/pokemon?limit=200&offset=200`
    )
    const [searchText, setSearchText] = React.useState<string>('')

    if (!data) return <div>Loading..</div>

    if (error) return <div>Failed</div>

    const handleInputClick = (newtext: string) => {
        setSearchText(newtext)
    }

    return (
        <div className="App">
            <div className="search">
                <Search text={searchText} setText={handleInputClick} />
            </div>
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
