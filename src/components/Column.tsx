import type { Component, JSXElement } from "solid-js"

type ColumnProps = {
  children?: JSXElement;
}

const Column: Component<ColumnProps> = ({ children }) => {
  return (
    <div class="flex flex-col gap-1 flex-wrap max-h-44 w-full justify-center items-center">
      { children }
    </div>
  )
}

export default Column;
