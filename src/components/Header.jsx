import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div>
    <header class="absolute inset-x-0 top-0 z-50">
    <nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
      <div class="flex lg:flex-1">
        <Link to="/" class="-m-1.5 p-1.5">
          <h1 style={{fontSize:"35px", fontFamily:"sans-serif", fontWeight:"bold", color:"#1d1d1d"}}>
          <span class="material-symbols-outlined">
arrow_back_ios
</span> CodePath</h1>
        </Link>
      </div>
    </nav>
    <hr></hr>
  </header>
    </div>
  )
}

export default Header