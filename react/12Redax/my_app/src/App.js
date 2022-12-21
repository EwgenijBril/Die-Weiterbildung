import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import PostsPage from "./pages/PostsPage";
import UserPage from "./pages/UserPage";
import Layout from "./components/Layout";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element={ <MainPage/> }/>
        <Route path="/users" element={ <UserPage/> }/>
        <Route path="/posts" element={ <PostsPage/> }/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
