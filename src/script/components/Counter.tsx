import React, {useEffect, useState} from 'react';

export function Counter() {
  const [count, setCount] = useState<number>(0)
  const clickHandler = () => {
    addCount()
  }

  const addCount = () => {
    setCount(count + 1)
  }

  return (
    <>
      <div><span>clicked: {count}</span></div>
      <div>
        <button onClick={clickHandler}>
          Count Button
        </button>
      </div>
    </>
  )
}