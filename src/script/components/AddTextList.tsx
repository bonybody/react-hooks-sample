import React, {FormEvent, useEffect, useRef, useState} from 'react';

export function AddTextList() {
  const inputTextRef = useRef<HTMLTextAreaElement>(null)
  const [textList, setTextList] = useState<Array<string>>([])

  const submitHandler = (event: FormEvent) => {
    if (inputTextRef.current === null) return
    submitInputText()
    event.preventDefault()
  }

  const keyPressHandler = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    const isCtrl = event.ctrlKey
    if (isCtrl) {
      submitInputText()
    }
  }

  const submitInputText = () => {
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
          <textarea ref={inputTextRef} onKeyPress={keyPressHandler}/>
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