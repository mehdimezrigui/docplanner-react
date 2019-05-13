import React from 'react'

export default function Box({desc}) {
  return (
    <div className="lead-section">
    {desc.map(el => <div className={el.class}>
    <h5>{el.titre}</h5>
    <h2>{el.description}</h2>
    {!el.country? null : <select>{el.country.map(el => <option value={el}>{el}</option>)}</select>}
    <img className={el.classimg} src={el.image}/>
    </div> )}
    </div>

  )
}
