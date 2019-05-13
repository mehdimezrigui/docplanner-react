import React from 'react'

export default function Province({info}) {
  return (
    <div className="office">
      {info.map(el => <a href ="#" className="box-office">
      <img src={el.image} srcset={el.set}/>
      <h3>{el.titre}</h3>
      <span className="button-office">SEE OPENINGS</span>
      </a>)}
    </div>
  )
}
