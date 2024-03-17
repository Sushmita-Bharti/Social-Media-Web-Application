import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./assets/component/header";
import Footer from "./assets/component/footer";
import Sidebar from "./assets/component/Sidebar";
import CreatePost from "./assets/component/createPost";
import Post from "./assets/component/Post";
import PostList from "./assets/component/PostList";
import PostListProvider from "./assets/store/postliststore";
import { Outlet } from "react-router-dom";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <PostListProvider>
      <div className="app-container">
        <Sidebar
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        ></Sidebar>
        <div className="content">
          <Header></Header>
          {selectedTab === "Home" ? (
            <PostList></PostList>
          ) : (
            <CreatePost
              selectedTab={selectedTab}
              setSelectedTab={setSelectedTab}
            ></CreatePost>
          )}
          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  );
}
export default App;
