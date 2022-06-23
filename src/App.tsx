import { Home } from "./pages/home/Home";
import { Authorization } from "./pages/authorization/Authorization";
import { Registration } from "./pages/registration/Registration";
import { Profile } from "./pages/profile/Profile";
import { Chat } from "./pages/chat/Chat";
import { Routes, Route, Navigate } from "react-router-dom";
import { RequireAuth } from "./hoc/RequireAuth";

import s from "./app.module.scss";

function App() {
  return (
    <div className={s.App}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/authorization" element={<Authorization />} />
        <Route
          path="/profile"
          element={
            <>
              <div className={s.App__profile}>
                <RequireAuth>
                  <Profile />
                </RequireAuth>
              </div>
              <div className={s.App__chat}>
                <RequireAuth>
                  <Chat />
                </RequireAuth>
              </div>
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
