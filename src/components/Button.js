import React from 'react'

function Button({num, func, key}) {

  return (
    <div className="btn" onClick={func}>{num}</div>
  )
}

export default Button