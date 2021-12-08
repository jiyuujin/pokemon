import React from 'react'
import '../App.css'

function About() {
    return (
        <div className="App">
            <h1>Profile</h1>
            <ul style={{ listStyle: 'none', padding: 0 }}>
                <li>
                    <h2>Organization</h2>
                    <a href="https://nekohack.me/">https://nekohack.me/</a>
                </li>
                <li>
                    <h2>Profile</h2>
                    <a href="https://yuma-kitamura.nekohack.me/">
                        https://yuma-kitamura.nekohack.me/
                    </a>
                </li>
                <li>
                    <h2>Blog</h2>
                    <a href="https://webneko.dev/">https://webneko.dev/</a>
                </li>
            </ul>
        </div>
    )
}

export default About
