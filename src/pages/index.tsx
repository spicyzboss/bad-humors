import { onMount } from "solid-js"
import type { Component } from "solid-js"

const HomePage: Component = () => {
  onMount(() => {
    document.title = 'Bad Humors'
  })

  return (
    <div class="h-screen w-screen flex justify-center items-center">
      <p class="text-4xl font-bold">Hello World!</p>
    </div>
  )
};

export default HomePage;
