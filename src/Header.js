import React from 'react'
import Nav from './Nav'
import logo from "./logo.svg"
const obj=[{name:"About us"},
           {name:"Career"},
           {name:"Departments", sub:[
                                    "Marketing & PR",
                                    "Customer Success & Sales",
                                    "IT, Product, Design & UX",
                                    "Finance & Administration",
                                    "HR & more"]}
            ]
export default function Header() {
  return (
    <div className="header-main">
        <a href="#"> <img  src={logo}  className="logo-Doc"alt="Docplanner Group" /> </a>
        <Nav navitem={obj}/>
      </div>
    )
}

