import { useState } from "react"
import TaskContainer from "./assets/components/taskContainer"
import Footer from "./assets/shared/footer"
import Header from "./assets/shared/header"
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
    const [tasks, setTasks] = useState([]);

  return (
    <>
    <Header tasks={tasks} setTasks={setTasks} />

    <TaskContainer tasks={tasks} setTasks={setTasks} />

    <Footer/>
    <ToastContainer/>
    </>
  )
}

export default App
