import React, { Component } from 'react'
import PropTypes from 'prop-types'

const Display = ({ count }) =>
  <div className="display">
    {count}
  </div>

Display.propTypes = {
  count: PropTypes.number.isRequired
}

Display.defaultProps = {
  count: 0
}

export default Display

