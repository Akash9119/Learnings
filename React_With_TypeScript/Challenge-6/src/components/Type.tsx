import { useState } from 'react'

const Type = () => {
    const [text, setText] = useState<string>('');

    const changeTextValue = (e : any) => {
        setText(e.target.value);
    }

  return (
    <div>
        <h1>This is a Type Component with TypeScript</h1>
        <input type="text" value={text} onChange={changeTextValue} />
    </div>
  )
}

export default Type