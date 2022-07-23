import { Component, JSXElement } from "solid-js"

type ColumnProps = {
  children: JSXElement;
}

const Column: Component<ColumnProps> = ({ children }) => {
  return (
    <div class="flex flex-col gap-2">
      { children }
    </div>
  )
}

export default Column;
