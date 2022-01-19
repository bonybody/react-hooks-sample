import React, {useRef, useState} from 'react';
import {Button} from "./Button";

export function Modal() {
  const modalButtonRef = useRef<HTMLButtonElement>(null)
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const openButtonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (modalButtonRef.current === null) return
    setIsOpen(true)
    modalButtonRef.current.focus()
  }

  const closeButtonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (modalButtonRef.current === null) return
    setIsOpen(false)
  }

  return <>
    <Button onClick={openButtonHandler}>開く</Button>
    <dialog open={isOpen}>
      <article>
        <h3>モーダル</h3>
        <p>
          モーダルを開いています。<br/>
          モーダルを開く際に"閉じる"ボタンにフォーカスを当てているのでEnterで閉じることが出来ます。
        </p>
        <footer>
          <Button onClick={closeButtonHandler} ref={modalButtonRef}>閉じる</Button>
        </footer>
      </article>
    </dialog>
  </>
}