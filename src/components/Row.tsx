import { Component, JSXElement } from "solid-js";

type RowProps = {
  children: JSXElement;
}

const Row: Component<RowProps> = ({ children }) => {
  return (
    <div class="flex gap-2">
      { children }
    </div>
  )
};

export default Row;
