import type { Component } from 'solid-js';
import { lazy } from 'solid-js';
import { Routes, Route } from "solid-app-router";
const HomePage = lazy(() => import('@pages/index'));
const StoryPage = lazy(() => import('@pages/story'));
const NotFoundPage = lazy(() => import('@pages/404'));

const App: Component = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/story' element={<StoryPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default App;
