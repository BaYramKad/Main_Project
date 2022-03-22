import React from 'react'
import { NavLink } from 'react-router-dom'
import nav from './NavBar.module.scss'

 function NavBar() { 
  return (<div className={nav.navbar}>
          <NavLink to='/articles' className={nav.logo}>SHARETRADE<sub>.COM</sub></NavLink>

</div>)
}

export default NavBar
