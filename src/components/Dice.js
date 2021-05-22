import React, { Component } from 'react'
import './Dice.css';

export default class Dice extends Component {
    render() {
        let {number, rolling} = this.props
        return (
            <div className="Dice">
                <i className={`fas fa-dice-${number} fa-7x ${this.props.rolling ? 'Dice-rolling' : ''}`}></i>
            </div>
        )
    }
}
