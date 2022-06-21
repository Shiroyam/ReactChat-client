import { Home } from './pages/home/Home';
import { Authorization } from './pages/authorization/Authorization';
import s from "./app.module.scss"

function App() {
  return (
    <div className={s.App}>
      <Home />
      {/* <Authorization /> */}
    </div>
  );
}

export default App;
