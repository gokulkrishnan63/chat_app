import "./App.css";
import MainComponents from "./components/MainContainer";
import Login from "./components/Login";
import { Route, Routes } from "react-router-dom";
import Welcome from "./components/Welcome";
import ChatArea from "./components/ChatArea";
import UserGroups from "./components/User_Groups";
import CreateGroups from "./components/CreateGroups";
import Groups from "./components/Groups";
function App() {
  return (
    <>
      <div className="App">
        {/* <MainComponents/> */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="app" element={<MainComponents />}>
            <Route path="welcome" element={<Welcome />} />
            <Route path="chat" element={<ChatArea />} />
            <Route path="users" element={<UserGroups />} />
            <Route path="create-groups" element={<CreateGroups />} />
            <Route path="groups" element={<Groups />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
