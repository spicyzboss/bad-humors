import type { Component } from 'solid-js'
import { onMount } from 'solid-js'

const NotFoundPage: Component = () => {
  onMount(() => {
    document.title = 'Not Found | Bad Humors'
  })

  return (
    <div>Not Found</div>
  );
};

export default NotFoundPage;
