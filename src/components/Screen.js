import React from 'react'

function Screen({value}) {

  return (
    <div className="screen">
      { value.length > 0 ? value : "0"}

    </div>
  )
}

export default Screen