import { useState } from "react"
import TaskContainer from "./assets/components/taskContainer"
import Footer from "./assets/shared/footer"
import Header from "./assets/shared/header"

const App = () => {
    const [tasks, setTasks] = useState([]);

  return (
    <>
    <Header />

    <TaskContainer tasks={tasks} setTasks={setTasks}/>

    <Footer/>
    </>
  )
}

export default App
