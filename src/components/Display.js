import React, { Component } from 'react'
import PropTypes from 'prop-types'

const Display = ({ count }) =>
  <div>
    <h1>{count}</h1>
  </div>

Display.propTypes = {
  count: PropTypes.number.isRequired
}

Display.defaultProps = {
  count: 0
}

export default Display

