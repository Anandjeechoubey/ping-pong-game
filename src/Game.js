import React from 'react'

const Game = (props) => {
    const [counter1, setCounter1] = React.useState(0)
    const [counter2, setCounter2] = React.useState(0)
    return (
        <div>
            <div className="points">
                <span>{props.player1}</span>  - <button className="win" onClick={() => setCounter1(counter1 + 1)}>Add Win</button>
            </div>
            <h4>
                Wins: {counter1}
            </h4>
            <div className="points">
                <span>{props.player2}</span>  - <button className="win" onClick={() => setCounter2(counter2 + 1)}>Add Win</button>
            </div>
            <h4>
                Wins: {counter2}
            </h4>
            <hr />
            <h4>Current Winner: {counter1 >= counter2 ? counter1 > counter2 ? props.player1 : "Scores Level" : props.player2}</h4>
            <h4>Win Difference: {counter1 >= counter2 ? counter1 - counter2 : counter2 - counter1}</h4>

        </div>
    )
}

export default Game
