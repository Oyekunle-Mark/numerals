import React, { Component } from 'react';

import Button from './Button';
import InputForm from './InputForm'
import Display from './Display'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
      interval: 1
    }
    this.countIncrement = this.countIncrement.bind(this)
    this.countDecrement = this.countDecrement.bind(this)
    this.countReset = this.countReset.bind(this)
    this.changeIncrement = this.changeIncrement.bind(this)
  }

  countIncrement() {
    const newCount = this.state.count + this.state.interval
    this.setState({
      count: newCount,
      interval: this.state.interval
    })
  }

  countDecrement() {
    const newCount = this.state.count - this.state.interval
    this.setState({
      count: newCount,
      interval: this.state.interval
    })
  }

  countReset() {
    this.setState({
      count: 0,
      interval: this.state.interval
    })
  }

  changeIncrement(interval) {
    this.setState({
      count: this.state.count,
      interval: parseInt(interval)
    })
  }

  render() {
    return (
      <div>
        <InputForm interval={this.state.interval} changeIncrement={this.changeIncrement} />
        <Button value={'+'} change={this.countIncrement} />
        <Button value={'-'} change={this.countDecrement} />
        <Button value={'C'} change={this.countReset} />
        <Display count={this.state.count} />
      </div>
    )
  }
}

export default App;

