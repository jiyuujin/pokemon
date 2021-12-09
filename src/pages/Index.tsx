import React from 'react'
import { useMatch } from 'react-location'
import '../App.css'
import '../assets/gallery.css'

import { Search } from '../components/Search'
import { CardList } from '../components/CardList'

function Index() {
    const {
        data: { data },
    } = useMatch()
    const [searchText, setSearchText] = React.useState<string>('')

    if (!data) return <div>Loading..</div>

    // if (error) return <div>Failed</div>

    const handleInputClick = (newtext: string) => {
        setSearchText(newtext)
    }

    return (
        <div className="App">
            <div className="search">
                <Search text={searchText} setText={handleInputClick} />
            </div>
            <div className="gallery">
                {/*@ts-ignore*/}
                <CardList data={data.results} search={searchText} />
            </div>
        </div>
    )
}

export default Index
