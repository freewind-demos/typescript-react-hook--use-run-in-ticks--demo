import React, {useState, FC} from 'react'
import {useRunInTicks} from './useRunInTicks';

export const Hello: FC = () => {
  const [inputText, setInputText] = useState('aaa');

  const run = useRunInTicks([() => {
    console.log("inputText1: ",inputText)
    setInputText(inputText + "!")
  }, () => {
    console.log("inputText2: ",inputText)
    setInputText(inputText + "#")
  }]);

  return <div>
    <h1>Hello {inputText}</h1>
    <button onClick={() => run()}>Run</button>
  </div>
};
