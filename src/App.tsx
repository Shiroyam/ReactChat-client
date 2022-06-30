import { Home } from "./pages/home/Home";
import { Authorization } from "./pages/authorization/Authorization";
import { Registration } from "./pages/registration/Registration";
import { Layout } from "./components/layout/Layout";
import { Chat } from "./pages/chat/Chat";
import { Routes, Route } from "react-router-dom";
import { RequireAuth } from "./hoc/RequireAuth";
import { FriendProfile } from "./pages/friendsProfile/FriendProfile";
import { Chats } from "./components/sidebar/chats/Chats";
import { Friends } from "./components/sidebar/friends/Friends";
import { Settings } from "./components/sidebar/settings/Settings";
import s from "./app.module.scss";
import { ChoiceChat } from "./pages/choicePage/ChoiceChat";

function App() {
  return (
    <div className={s.App}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/authorization" element={<Authorization />} />
        <Route
          path="/app/*"
          element={
            <RequireAuth>
              <Layout />
            </RequireAuth>
          }
        >
          <Route path="chat/*" element={<Chats />}>
            <Route path=":id" element={<Chat />} />
          </Route>
          <Route path="friend/*" element={<Friends />}>
            <Route path=":id" element={<FriendProfile />} />
          </Route>
          <Route path="settings/*" element={<Settings />}>
            <Route path=":id" element={<Chat />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;

