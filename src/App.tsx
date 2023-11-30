import { Header } from "./components/Header/header";
import { Sidebar } from "./components/SideBar/sideBar";
import "./global.css";
import styles from "./app.module.css";

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
