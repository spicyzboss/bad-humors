import type { Component } from "solid-js";
import type { BlockColor } from 'types/main'

type BlockProps = {
  color?: BlockColor;
}

const colorMap = {
  'red': 'bg-red-400',
  'green': 'bg-emerald-400',
  'yellow': 'bg-yellow-400',
  'gray': 'bg-gray-200',
}

const Block: Component<BlockProps> = ({ color="gray" }) => {
  return (
    <div class={ `w-5 h-5 ${colorMap[color]} rounded hover:cursor-pointer` } />
  )
};

export default Block;
