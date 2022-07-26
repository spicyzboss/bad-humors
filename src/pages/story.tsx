import { createSignal, Show, onMount } from "solid-js";
import type { Component } from "solid-js";
import anime from 'animejs';

const StoryPage: Component = () => {
  const [time, setTime] = createSignal<number>(0);
  const [begin, setBegin] = createSignal<boolean>(false);
  const timeDelay = 4500;

  const beginTime = setInterval(() => {
    setTime(time()+100);
    setBegin(Math.floor(time()/timeDelay) > wordlists.length - 1);

    if (begin()) {
      clearInterval(beginTime);
    }
  }, 100);

  const wordlists = [
    "👋 Nice to meet you.",
    "How are you today?",
    "Can you tell me about it?",
  ];

  onMount(() => {
    const messageAnimation = anime({
      targets: '.message',
      duration: 1000,
      endDelay: timeDelay/2 - 1000,
      easing: 'easeInQuint',
      direction: 'alternate',
      opacity: '1',
      loop: wordlists.length * 2,
      autoplay: false,
    });

    messageAnimation.play();
  });

  return (
    <>
      <div class="h-screen w-screen flex justify-center items-center">
        <p class="text-8xl opacity-0 font-bold select-none message absolute">{ wordlists[Math.floor(time()/timeDelay)] }</p>
      </div>
    </>
  )
}

export default StoryPage;
