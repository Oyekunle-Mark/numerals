import React, { Component } from 'react';

const Button = ({ value, change }) =>
  <button onClick={() => {
    change()
  }} >
    {value}
  </button>

export default Button;

