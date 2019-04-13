import React, { Component } from 'react'
import PropTypes from 'prop-types'

const InputForm = ({ interval, changeIncrement }) => {
  const clickHandler = (event) => {
    changeIncrement(event.target.value)
  }

  return (
    <form className="form">
      <input type='number' value={interval} onChange={clickHandler} autoFocus />
    </form>
  )
}

InputForm.propTypes = {
  interval: PropTypes.number.isRequired,
  changeIncrement: PropTypes.func.isRequired
}

InputForm.defaultProps = {
  interval: 1,
  changeIncrement: f => f
}

export default InputForm;

