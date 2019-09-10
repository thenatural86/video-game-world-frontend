import React from "react"
import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <div>
      <NavLink to="/favs">Favorites</NavLink>
      <NavLink to="/games">Games</NavLink>
      <NavLink to="home">Welcome</NavLink>
    </div>
  )
}

export default Navbar
