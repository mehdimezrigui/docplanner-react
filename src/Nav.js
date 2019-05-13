import React from 'react'
export default function Nav({navitem}) {
  return (
    
      <ul className="main-nav" >
            {navitem.map(el => (
            <li>
            <a href="#">{el.name}</a>
            {!el.sub ? null:<ul className="dropdown-department">{el.sub.map(el => (<li className="lien"><a href="#">{el}</a></li>))}</ul>}
            </li>
            ))}
        
      </ul>
    
  )
}
