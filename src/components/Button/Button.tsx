import React from 'react'

import './Button.css'

const Button = ({ style, text, onAction }: any) => {
  return <button className={`btn ${style}`} onClick={onAction}>{text}</button>
}

export default Button
