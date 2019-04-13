import React, { Component, Fragment } from 'react';

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
      <Fragment>
        <header className="header">
          <h1>Count Away</h1>
        </header>

        <div className="components">
          <InputForm interval={this.state.interval} changeIncrement={this.changeIncrement} />
          <small>Change counter interval</small>

          <Button value={'+'} change={this.countIncrement} />

          <Display count={this.state.count} />

          <Button value={'-'} change={this.countDecrement} />

          <br />

          <Button value={'C'} change={this.countReset} />
        </div>

        <footer className="footer">
          <h3>&copy; Oyekunle Oloyede</h3>
        </footer>
      </Fragment>
    )
  }
}

export default App;

