import "./css/main.css";
import DisplayTodos from "./components/DisplayTodos";
import Todos from "./components/Todos";
import LoginButton from "./components/Login";
import LogoutButton from "./components/Logout";
import { useAuth0 } from '@auth0/auth0-react';
import { motion } from "framer-motion";

function App() {
  const { isAuthenticated } = useAuth0();
  return (
    <div>
      {!isAuthenticated && <LoginButton />}
      <LogoutButton />
      {isAuthenticated && <div className="App" >
        <motion.h1
          initial={{ y: -200 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", duration: 0.5 }}
          whileHover={{ scale: 1.1 }}
        >
          Todo App
        </motion.h1>
        <motion.div
          initial={{ y: 1000 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", duration: 1 }}
        >
          <Todos />
          <DisplayTodos />
        </motion.div>
      </div>
      }
    </div>
  );
}

export default App;
