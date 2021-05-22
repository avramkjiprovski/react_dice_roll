import React, { Component } from 'react'
import Dice from './Dice';
import './Dices.css';

export default class Dices extends Component {
    static defaultProps = {
        numbers: ["one", "two", "three", "four", "five", "six"]
      }
      constructor(){
        super()
        this.state = {
          diceOne: "one",
          diceTwo: "six"
        }
        this.rollDice = this.rollDice.bind(this)
      }
      rollDice(){
        this.setState({
            rolling: true
        })
        setTimeout(() => {
            this.setState({
                rolling: false
            })
        }, 500);
        const min = 1;
        const max = 7;
        let num1 = Math.floor(min + Math.random() * (max - min))-1
        let num2 = Math.floor(min + Math.random() * (max - min))-1
        // console.log("Numbers:", num1, num2)
    
        this.setState({
          diceOne: this.props.numbers[num1],
          diceTwo: this.props.numbers[num2]
        })
      }
    render() {
        return (
            <div className="Dices">
                <div className="Dices-row">
                    <Dice number={this.state.diceOne} rolling={this.state.rolling }/>
                    <Dice number={this.state.diceTwo} rolling={this.state.rolling} />
                </div>
                <div className="Dices-row">
                    <button className="Dices-button" onClick={this.rollDice}>ROLL!!</button>
                </div>
            </div>
        )
    }
}
