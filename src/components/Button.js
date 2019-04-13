import React, { Component } from 'react'
import PropTypes from 'prop-types'

const Button = ({ value, change }) =>
  <button className="button" onClick={() => {
    change()
  }} >
    {value}
  </button>

Button.propTypes = {
  value: PropTypes.string.isRequired,
  change: PropTypes.func.isRequired
}

Button.defaultProps = {
  value: 0,
  change: f => f
}

export default Button;

