import React from 'react'
import PropType from 'prop-types'

const PropsType = ({ list }) => {
  return (
      <>
          {/* <h1>{site.name }</h1> */}
          <h1>{list.name}</h1>
          <h1>{list.age }</h1>
    </>
  )
}
// PropsType.PropType = {
//     site: PropType.number.isRequired
// }

PropsType.PropType = {
  list: PropType.shape({
    name: PropType.number.isRequired,
    age: PropType.string.isRequired
  })
}

export default PropsType
