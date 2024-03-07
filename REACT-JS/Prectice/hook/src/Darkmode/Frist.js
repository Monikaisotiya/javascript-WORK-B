import React, { useContext } from 'react'
import { T } from './Main'

const Frist = () => {
    const [color,setTheme]= useContext(T)
  return (
      <>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
                      <button onClick={() => {
                          setTheme(color == 'light' ? 'dark' : 'light')
                      }} class="btn btn-outline-success my-2 my-sm-0" type="submit">{ color == 'light' ? 'dark':'light'}</button>
    </div>
  </div>
          </nav> 
          

          <h1 style={{backgroundColor:color =='dark'? 'black': 'white',color: color == 'dark' ? 'white' : 'black'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam nemo corrupti vitae numquam libero repellendus, autem optio. Praesentium fugiat corrupti voluptatem neque dignissimos quo in, eligendi autem placeat, incidunt cupiditate.lorem40</h1>
      
    </>
  )
}

export default Frist
