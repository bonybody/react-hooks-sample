import React, {FormEvent, useEffect, useRef, useState} from 'react';

export function AddTextList() {
  const inputTextRef = useRef<HTMLInputElement>(null)
  const [textList, setTextList] = useState<Array<string>>([])

  const submitHandler = (event: FormEvent) => {
    if (inputTextRef.current === null) return

    const inputText = inputTextRef.current.value
    const insteadInputText = "hogehoge"

    if (inputText) {
      addTextList(inputText);
      inputTextRef.current.value = ""
    } else {
      inputTextRef.current.value = insteadInputText
    }
    inputTextRef.current.focus()
    event.preventDefault()
  }

  const addTextList = (text: string) => {
    setTextList([...textList, text])
  }

  useEffect(() => {
    console.log("render: AddTextList")
  })

  return (
    <>
      <div>
        <form onSubmit={submitHandler}>
          <input type="text" ref={inputTextRef}/>
          <input type={"submit"} value={"Add Text"}/>
        </form>
      </div>
      <div>
        <ul>
          {textList.map((text) =>
            <li key={Math.random()}>{text}</li>
          )}
        </ul>
      </div>
    </>
  )
}