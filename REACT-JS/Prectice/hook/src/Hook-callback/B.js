import React, { memo} from 'react'

const B = ({ Todo, changeB }) => {
    console.log('component b');
  return (
    <>B</>
  )
}

export default memo (B)
