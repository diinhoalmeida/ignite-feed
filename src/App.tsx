import { Header } from "./components/Header/header";
import { Sidebar } from "./components/SideBar/sideBar";
import "./global.css";
import styles from "./app.module.css";
import { posts } from "./data/data";
import { Post } from "./components/Post/post";

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return <Post key={post.id} post={post} />;
          })}
        </main>
      </div>
    </div>
  );
}

export default App;
