import { Home } from "./pages/home/Home";
import { Authorization } from "./pages/authorization/Authorization";
import { Registration } from "./pages/registration/Registration";
import { Layout } from "./components/layout/Layout";
import { Chat } from "./pages/chat/Chat";
import { Routes, Route } from "react-router-dom";
import { RequireAuth } from "./hoc/RequireAuth";
import { FriendProfile } from "./pages/friendsProfile/FriendProfile";
import s from "./app.module.scss";


function App() {
  return (
    <div className={s.App}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/authorization" element={<Authorization />} />
        <Route
          path="/profile/*"
          element={
            <>
              <RequireAuth>
                <Layout />
              </RequireAuth>
            </>
          }
        >
          <Route path="chat" element={<Chat />} />
          <Route path="friend" element={<FriendProfile />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
