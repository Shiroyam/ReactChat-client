import { Home } from './pages/home/Home';
import { Authorization } from './pages/authorization/Authorization';
import { Registration } from './pages/registration/Registration';
import { Profile } from './pages/profile/Profile';

import s from "./app.module.scss"

function App() {
  return (
    <div className={s.App}>
      {/* <Home /> */}
      {/* <Registration /> */}
      {/* <Authorization /> */}
      <Profile />
    </div>
  );
}

export default App;
