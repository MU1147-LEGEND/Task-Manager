/* eslint-disable react/prop-types */
import { useState } from "react"
import TaskModal from "./taskModal"
import NoTask from "./noTaskFound";

const TaskContainer = ({ tasks, setTasks }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [task, setTask] = useState({
        id: crypto.randomUUID(),
        title: "",
        description: "",
        tags: [],
        priority: "",
        isFavourite: false,
    });

    const changeModalState = () => {
        setIsModalOpen(!isModalOpen);
    }

    const onChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        if (name === "tags") {
            value = value.split(",");
        }
        setTask({
            ...task,
            [name]: value,
        });
    }

    const handeSubmit = () => {
        setTasks([...tasks, task]);

        setIsModalOpen(!isModalOpen);
    }

    return (
        <>
            <section id="taskContainer" className="bg-slate-200 dark:bg-slate-800">
                <div className="container m-auto w-full flex flex-col items-center justify-center transition-all duration-500">
                    <h2 className="text-2xl lg:text-3xl dark:text-yellow-400 text-center font-semibold my-4">Create Your Task List</h2>

                    {/* task lists */}
                    <div className="tasks lg:w-4/5 w-[90%] lg:h-[22rem] h-[30rem] overflow-auto bg-black/20 rounded-t-lg dark:bg-black/40 dark:text-white transition-all duration-500 relative">
                        <table className="w-full">
                            <thead className="sticky top-0 z-10">
                                <tr className="flex justify-around bg-slate-400 dark:bg-slate-600 py-4 text-lg rounded-t-lg tracking-wider">
                                    <th className="px-4">Title<span className="w-[2px] h-8 bg-black/40 lg:ml-24 ml-3.5 absolute"></span></th>
                                    <th className="px-4">Description<span className="w-[2px] h-8 bg-black/40 lg:ml-24 ml-3.5 absolute"></span></th>
                                    <th className="px-4">Tags<span className="w-[2px] h-8 bg-black/40 lg:ml-24 ml-3.5 absolute"></span></th>
                                    <th className="px-4">Priority</th>
                                </tr>
                            </thead>

                            <tbody>
                                {tasks.length > 0 ? tasks.map((task, index) => (
                                    <tr key={crypto.randomUUID()} className="flex justify-evenly py-4 relative text-left">
                                        <td className="absolute lg:left-4 left-1">{index + 1}.</td>
                                        <td className="md:-ml-16">{task.title}</td>
                                        <td className="w-16 lg:w-auto">{task.description}</td>
                                        <td className="w-16 lg:w-auto">
                                        <ul>
                                                {task.tags.map((tag) =>
                                                    ( <li key={crypto.randomUUID()}>{tag}</li> )
                                                )}
                                            </ul>
                                        </td>
                                        <td className="">{task.priority}</td>
                                    </tr>
                                )) : <NoTask />}
                            </tbody>
                        </table>

                    </div>
                    {/* add delete button */}
                    <div className="buttons lg:w-4/5 w-[90%] m-auto bg-black/20 dark:bg-black/40 dark:text-white rounded-b-lg p-4 space-x-4">
                        <button onClick={changeModalState} className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-800 transition-all duration-300">Add Task</button>
                        <button className="bg-red-600 text-white py-3 px-6 rounded-lg hover:bg-red-700 transition-all duration-300">Delete All</button>
                    </div>
                </div>

            </section>
            {/* open and close modal dynamically */}
            {isModalOpen && <TaskModal changeModalState={changeModalState} keyChange={onChange} handeSubmit={handeSubmit} />}
        </>
    )
}

export default TaskContainer