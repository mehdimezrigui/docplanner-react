import React from 'react'

export default function Stat({info}) {
  return (
    <div className="grid-stat">
      {info.map(el => <div className={el.class}>
      <img src={el.imager} srcset={el.set}/>
      <h3>{el.titre}</h3>
      <p>{el.description}</p> </div>)}
    </div>
  )
}
