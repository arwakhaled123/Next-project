import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <Link class="nav-link active" aria-current="page" href="/">Home</Link>
        <Link class="nav-link" href="/posts">Posts</Link>
        {/* <Link class="nav-link" href="#">Pricing</Link>
        <Link class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</Link> */}
      </div>
    </div>
  </div>
</nav>
  )
}

export default Navbar