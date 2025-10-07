import React, { useEffect } from 'react'

const BasicEffect = () => {

    useEffect(() => {
      console.log("Effect ran on first load");
    }, [])
    

  return (
    <div>BasicEffect</div>
  )
}

export default BasicEffect