import React, {useState} from 'react'
import usePreviousValue from "./usePreviousValue";

export default function Hello() {
  const [inputText, setInputText] = useState('aaa');

  const previousText = usePreviousValue(inputText);

  return <div>
    <h1>Hello React</h1>
    <input type='text' value={inputText} onChange={e => setInputText(e.target.value)}/>
    <hr/>
    {previousText} -> {inputText}
  </div>
};
