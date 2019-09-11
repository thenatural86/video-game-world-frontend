import React from "react"
import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <div>
      <NavLink to="/favs">Favorites</NavLink>
      <br />
      <NavLink to="/games">Games</NavLink>
      <br />
      <NavLink to="home">Welcome</NavLink>
    </div>
  )
}

export default Navbar
