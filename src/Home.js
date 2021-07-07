import React from 'react'

const Home = (props) => {
    return (
        <div className="home">
            <h4>Player 1 Name</h4>
            <input value={props.player1} />
            <h4>Player 2 Name</h4>
            <input value={props.player2} />
        </div>
    )
}

export default Home
