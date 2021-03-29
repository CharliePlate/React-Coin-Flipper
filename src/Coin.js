import React, { Component } from 'react'
import './Coin.css'


export default class Coin extends Component {
    render() {
        return (
            <div className="Coin">
                <img className="Coin-img" src={this.props.side ? `https://bjc.edc.org/June2017/bjc-r/img/5-algorithms/img_flipping-a-coin/${this.props.side}.png`: ''} />
            </div>
        )
    }
}
