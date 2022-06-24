import { Home } from "./pages/home/Home";
import { Authorization } from "./pages/authorization/Authorization";
import { Registration } from "./pages/registration/Registration";
import { Layout } from "./components/layout/Layout";
import { Chat } from "./pages/chat/Chat";
import { Routes, Route } from "react-router-dom";
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
              <RequireAuth>
                <Layout>
                  <Chat />
                </Layout>
              </RequireAuth>
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
