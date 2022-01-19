import React from "react";
import {Counter} from "./components/Counter";
import {AddTextList} from "./components/AddTextList";
import {Modal} from "./components/Modal";

export const App = () => {
  return <>
    <div className={"article"}>
      <article>
        <header>
          <h1>Counter App</h1>
        </header>
        <Counter/>
      </article>
    </div>
    <div className={"article"}>
      <article>
        <header>
          <h1>Add Text App</h1>
        </header>
        <AddTextList/>
      </article>
    </div>
    <div className={"article"}>
      <article>
        <header>
          <h1>Modal App</h1>
        </header>
        <Modal/>
      </article>
    </div>
  </>
}