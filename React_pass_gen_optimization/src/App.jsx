import { useEffect, useState, useCallback, useRef } from "react";

const App = () => {
  const [length, setLength] = useState(6);
  const [numbersAllowed, setNumbersAllowed] = useState(false);
  const [charsAllowed, setCharsAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const copyPass = useRef(null);

  const randomPassGenFunc = useCallback(
    function generatePassword() {
    let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (charsAllowed) chars += "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    if (numbersAllowed) chars += "0123456789";

    let randPassword = "";
    for (let i = 1; i <= length; i++) {
      let randomChar = Math.floor(Math.random() * chars.length + 1);
      randPassword += chars.charAt(randomChar);
    }
    setPassword(randPassword);
  },
    [length, numbersAllowed, charsAllowed, setPassword],
  )

  useEffect(() => {
    randomPassGenFunc();
  }, [length, numbersAllowed, charsAllowed]);

  let setPasswordLength = (e) => {
    setLength(e.target.value);
  };

  let numbersAllow = (e) => {
    setNumbersAllowed(!numbersAllowed);
  };

  let charsAllow = (e) => {
    setCharsAllowed(!charsAllowed);
  };

  let copyPassToClipBoard = () => {
      copyPass.current?.select();
      navigator.clipboard.writeText(copyPass.current.value);
  }

  return (
    <div className="bg-black min-h-screen text-white flex flex-col items-center py-24 ">
      <h1 className="text-4xl font-semibold">React Password Generator</h1>
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg mt-8 w-full max-w-2xl">
        <div className="flex gap-3">
          <input
            type="text"
            name="passval"
            id="passval"
            className="bg-white text-black px-3 py-2 rounded-xl min-w-sm"
            readOnly
            value={password}
            ref={copyPass}
          />
          <button className="bg-green-800 px-5 py-2 rounded-md cursor-pointer hover:bg-green-900" onClick={copyPassToClipBoard}>
            Copy to ClipBoard
          </button>
        </div>
        <div className="flex flex-row flex-wrap gap-4 mt-6">
          <label htmlFor="passlwngth">Length : {length}</label>
          <input
            type="range"
            name="passlength"
            id="passlength"
            min={4}
            max={18}
            onChange={setPasswordLength}
          />

          <label htmlFor="numbersAllowed">Numbers Allowed:</label>
          <input
            type="checkbox"
            name="numbersAllowed"
            id="numbersAllowed"
            onClick={numbersAllow}
          />

          <label htmlFor="charsAllowed">Characters Allowed:</label>
          <input
            type="checkbox"
            name="charsAllowed"
            id="charsAllowed"
            onClick={charsAllow}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
