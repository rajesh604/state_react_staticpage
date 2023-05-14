import '../src/App'
import React from 'react'

export default function Header() {

    const [dark, setDark] = React.useState(false)

    function toggle() {
        setDark((dark) => !dark)
    }

    return (
        <header className="App-header">
            <div className='div-header'>
                <img src={reactlogo} className="App-logo" alt="logo" />
                <h1>ReactFacts</h1>
            </div>
            <div className='main-header'>
                <h3>Light</h3>
                <div id="box" onClick={toggle} className={dark ? 'dark' : 'light'}></div>
                <h3>Dark</h3>
            </div>
        </header>
    )
}