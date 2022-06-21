import { Home } from "./pages/home/Home";
import { Authorization } from "./pages/authorization/Authorization";
import { Registration } from "./pages/registration/Registration";
import { Profile } from "./pages/profile/Profile";
import { Chat } from "./pages/chat/Chat";

import s from "./app.module.scss";

function App() {
  return (
    <div className={s.App}>
      {/* <Home /> */}
      {/* <Registration /> */}
      {/* <Authorization /> */}
      <div className={s.App__profile}>
        <Profile />
      </div>
      <div className={s.App__chat}>
        <Chat />
      </div>
    </div>
  );
}

export default App;
