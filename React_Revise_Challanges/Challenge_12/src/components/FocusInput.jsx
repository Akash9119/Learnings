import React from 'react'
import { useRef } from 'react'

const FocusInput = () => {
    const inputVal = useRef(null);

    const handleClick = () => {
        inputVal.current.focus();
    }
  return (
    <div>
        <input type="text" ref={inputVal} />
        <button onClick={handleClick}>Click Me</button>
    </div>
  )
}

export default FocusInput