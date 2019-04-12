import React, { Component } from 'react'

const InputForm = ({ interval, changeIncrement }) => {
  const clickHandler = (event) => {
    changeIncrement(event.target.value)
  }

  return (
    <form>
      <input type='number' value={interval} onChange={clickHandler} />
    </form>
  )
}

export default InputForm;

