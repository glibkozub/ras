import React from 'react'

const weatherCard = ( props ) => {
  return (
    <p>
      <span>{props.day}</span> - <span>{props.summary}</span>
    </p>
  )
}

export default weatherCard;