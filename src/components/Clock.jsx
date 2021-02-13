import React from 'react'

function Clock(props) {

    return (
        <div>
            <h3>Clock component</h3>

            <p>minutes: {props.minutes}</p>
            <p>seconds: {props.seconds}</p>
        </div>
    )
}

export default Clock
