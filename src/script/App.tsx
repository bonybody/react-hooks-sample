import React from "react";
import {Counter} from "./components/Counter";
import {AddTextList} from "./components/AddTextList";

export const App = () => {
  return <>
    <h1>React Hooks Sample</h1>
    <section>
      <h1>Counter App</h1>
      <Counter/>
    </section>
    <section>
      <h1>Add Text App</h1>
      <AddTextList/>
    </section>
  </>
}