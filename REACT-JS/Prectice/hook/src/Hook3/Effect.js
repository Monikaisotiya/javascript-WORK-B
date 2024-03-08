import React,{useEffect, useState} from 'react'


const Effect = () => {
    const [product] = useState([])
    useEffect(() => {
        console.log('hello this is my effect hook');
        alert('hii')
        document.getElementById('home').style.color = 'red'
        
    })
  return (
      <>
      <h1 id='home'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores consequatur minus possimus quibusdam nulla saepe, deserunt quis aperiam sunt obcaecati repellendus quo sapiente tenetur dolores itaque excepturi ipsa repellat, perferendis debitis ad asperiores sint. Possimus perspiciatis blanditiis incidunt quae nulla alias odit expedita repudiandae nisi. Totam iure quam nisi delectus.</h1>
      
      </>
  )
}

export default Effect