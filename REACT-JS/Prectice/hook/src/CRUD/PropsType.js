import React from 'react'
import PropType from 'prop-types'

const PropsType = ({list}) => {
  return (
      <>
          {/* <h1>{site.name }</h1> */}
          <h1>{list.name}</h1>
          <h1>{list.age }</h1>
    </>
  )
}
// PropsType.PropType = {
//     site: PropsType.number.isRequired
// }

PropsType.PropsType = {
    list: PropType.shape({
  site: PropsType.number,
    age: PropsType.string
    })
  
}
export default PropsType
