import React from 'react'
import './HeaderN.css'
import { Link } from 'react-router-dom'


const HeaderN = () => {
    return (
        <>
            <div class="header">
                <div class="left">
                    <h1>Str<i class="fa-solid fa-earth-americas" style={{ color: 'red' }}></i>ll</h1>
                </div>
                <div class="right">
                    
                    <ul>
                        <li><Link to={'/stroll'}>Home1</Link></li>
                        <li><a href="about.html">About</a></li>
                        <li><a href="">Destination</a></li>
                        <li class="blog"><a href="">Blog&darr;</a>
                            <ul class="blog1">
                                <li><a href="">Blog</a></li>
                                <li><a href="">BlogPages</a></li>
                                <li><a href="">BlogStart</a></li>
                            </ul>
                        </li>
                        <li><a href="">Contact</a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default HeaderN