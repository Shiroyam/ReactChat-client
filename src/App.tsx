import { Home } from './pages/home/Home';
import { Authorization } from './pages/authorization/Authorization';
import s from "./app.module.scss"
import { Registration } from './pages/registration/Registration';

function App() {
  return (
    <div className={s.App}>
      {/* <Home /> */}
      <Registration />
      {/* <Authorization /> */}
    </div>
  );
}

export default App;
