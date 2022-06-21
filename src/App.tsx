import React from 'react';
import { Home } from './pages/Home';
import s from "./app.module.scss"

function App() {
  return (
    <div className={s.App}>
      <Home />
    </div>
  );
}

export default App;
