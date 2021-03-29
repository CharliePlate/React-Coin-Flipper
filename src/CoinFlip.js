import React, { Component } from 'react'
import './CoinFlip.css'
import Coin from './Coin'


export default class CoinFlip extends Component {
    state = {
        side: undefined,
        heads: 0,
        tails: 0
    }

    randomSide = () => {

        let randomSide = Math.floor(Math.random() * 2)
        console.log(randomSide)
        let heads = this.state.heads
        let tails = this.state.tails
        
        if (randomSide === 1){
            this.setState({side: "Heads", heads: heads + 1})
        } else {
            this.setState({side: "Tails", tails: tails + 1})
        }
        console.log(this.state)
    }

    render() {
        return (
            <div>
                <h1>Let's Flip a coin!</h1>
                <Coin 
                side={this.state.side}
                />
                <button onClick={this.randomSide}>Flip Coin</button>
                <h3>{this.state.side}</h3>
                <p>Out of {this.state.heads + this.state.tails} flips, there have been {this.state.heads} heads and {this.state.tails} tails.</p>

            </div>
        )
    }
}
