import React from 'react'

function NavBar(props) {

    const changeMode = e => props.changeMode(e.target.innerText)

    return (
        <div>
            <h3>this is navbar</h3>
            <button  onClick={changeMode} >work</button>
            <button  onClick={changeMode} >break</button>
        </div>
    )
}

export default NavBar
