import React, {useCallback, useEffect, useState} from 'react'

const App = () => {

  const [value, setValue] = useState("");
  const [length, setLength] = useState(6);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [copied, setCopied] = useState(false);

  const generatePassword = () => {
    let characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numberAllowed) {
      characters += "0123456789";
    }
    if (characterAllowed) {
      characters += "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    }

    let password = "";
    for(let i=0; i<length; i++) {
      password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    setValue(password);
  }

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(value);
    setCopied(true);
  }, [value]);

useEffect(() =>{
  generatePassword()
}, [length, numberAllowed, characterAllowed]);

  return (
    <div className='bg-black text-white h-screen flex justify-center items-center p-24'>
      <div className='bg-gray-800 rounded-xl p-4'>
      <div>
        <input type="text" className='bg-white text-black rounded-full p-3 m-6 w-[calc(100%-200px)]' value={value} disabled />
        <button onClick={handleCopy} className='bg-gray-600 border-2 border-gray-800 px-8 py-2 rounded-full cursor-pointer hover:bg-gray-700'>Copy</button>
      </div>
      <div className='flex flex-row gap-5'>
        <input min={5} max={16} onChange={(e) => setLength(e.target.value)} type="range" name="range" id="range" />
        <label htmlFor='range'>Length : {length}</label>

        <input type="checkbox" name="NumberAllowed" id="NumberAllowed" onClick={() =>setNumberAllowed(!numberAllowed)} />
        <label htmlFor="NumberAllowed">Numbers Allowed</label>

        <input type="checkbox" name="CharactersAllowed" id="CharactersAllowed" onClick={() => setCharacterAllowed(!characterAllowed)} />
        <label htmlFor="CharactersAllowed">Characters Allowed</label>
        </div>
      </div>
    </div>
  )
}

export default App