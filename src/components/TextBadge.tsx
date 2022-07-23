import type { Component, JSXElement } from "solid-js";

type TextBadgeProps = {
  backgroundColor?: string;
  children: JSXElement;
}

const TextBadge: Component<TextBadgeProps> = (props) => {
  return (
    <p class={ `text-2xl font-google-mono py-2 px-4 ${props.backgroundColor ?? 'bg-indigo-400'} rounded-xl text-white` }>{ props.children }</p>
  )
};

export default TextBadge;
