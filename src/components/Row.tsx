import { Component, JSXElement } from "solid-js";

type BlockProps = {
  children: JSXElement;
}

const Block: Component<BlockProps> = ({ children }) => {
  return (
    <div class="flex gap-2">
      { children }
    </div>
  )
};

export default Block;
