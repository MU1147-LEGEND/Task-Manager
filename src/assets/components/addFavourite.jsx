/* eslint-disable react/prop-types */
import { SiTicktick } from "react-icons/si";
import { TbSquareRounded } from "react-icons/tb";
import { toast } from "react-toastify";



const AddFavourite = ({ task, tasks, setTasks }) => {

    const handleFavourite = (taskId) => {

        const completedTasks = tasks.map((task) => {

            if (task.id === taskId) {
                const isCompleted = !task.completed;
                if (isCompleted) {
                    toast.success(`The task '${task.title}' marked as completed.`, {
                        position: "top-center",
                        pauseOnFocusLoss: false,
                        pauseOnHover: false,
                    });

                }else{
                    toast.info(`The task '${task.title}' marked as incomplete.`, {
                        position: "top-center",
                        pauseOnFocusLoss: false,
                        pauseOnHover: false,
                    });
                }
                return {
                    ...task,
                    completed: isCompleted,
                }
            }
            else {
                return task
            }
        });

        setTasks(completedTasks);
        localStorage.setItem("tasks", JSON.stringify(completedTasks));
    }

    return (
        <>
            <td
                onClick={() => { handleFavourite(task.id) }}
                className="absolute left-2 lg:text-xl">
                {task.completed ? <SiTicktick /> : <TbSquareRounded />}
            </td>
        </>
    )
}

export default AddFavourite;