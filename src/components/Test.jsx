import React, { useEffect, useState } from 'react'

function Test() {

    const calculateTimeLeft = () => {
        let year = new Date().getFullYear()
        const difference = +new Date(`10/01/${year}`) - +new Date()
        let timeLeft = {}
        if (difference > 0) {
            timeLeft.days = Math.floor(difference / (1000 * 60 * 60 * 24))
            timeLeft.hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
            timeLeft.minutes = Math.floor((difference / (1000 * 60)) % 60)
            timeLeft.seconds = Math.floor((difference / (1000)) % 60)
        }
        // console.log(timeLeft)
        return timeLeft
    }

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())
    const [year] = useState(new Date().getFullYear())

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft())
        }, 1000)
        return () => clearTimeout(timer);
    })

    const timerComponents = [];

    Object.keys(timeLeft).forEach((interval) => {
        if (!timeLeft[interval]) {
            return
        }

        timerComponents.push(
            <span key={interval}>
                {timeLeft[interval]} {interval}{", "}
            </span>
        )
    })

    return (
        <div>
            <h1>Test</h1>
            <h3>{timeLeft.days}</h3>
            <h3>{timeLeft.hours}</h3>
            <h3>{timeLeft.minutes}</h3>
            <h3>{timeLeft.seconds}</h3>
            <button onClick={() => calculateTimeLeft()} >button</button>

            <div>
                <h1>Corona Party {year} Countdown</h1>
                <h2>With React Hooks!</h2>
                {timerComponents.length ? timerComponents : <span>Time's up!</span>}
            </div>
        </div>
    )
}

export default Test
