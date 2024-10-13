/* eslint-disable no-unused-vars */
import { useEffect } from "react";

/* eslint-disable react/prop-types */
const TaskModal = ({isModalOpen, changeModalState, keyChange, handeSubmit }) => {

    return (
        <>
            <section onClick={changeModalState} id="modal" className="dark:text-white absolute bg-slate-500/60 dark:bg-slate-300/60 top-0 left-0 h-full w-full flex items-center justify-center z-[999]">
                <div onClick={(e) => { e.stopPropagation() }} className="modal-content bg-stone-300 dark:bg-zinc-800 lg:h-2/3 h-3/4 lg:w-1/2 w-4/5 rounded-lg p-5 relative">
                    {/* close button */}
                    <button onClick={changeModalState} className="absolute top-5 right-5 ring-1 ring-stone-500 dark:ring-orange-700 dark:hover:bg-orange-700 hover:bg-stone-500 hover:text-white p-2 rounded-full transition-all duration-300 hover:-translate-y-1">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="lg:h-8 h-6 lg:w-8 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    {/* modal contents for task */}
                    <h3 className="text-center lg:text-2xl text-xl font-semibold ">Create Your Task List</h3>
                    <div className="inputs">
                        <form onSubmit={(e) => { e.preventDefault(); handeSubmit(); }} className="flex flex-col py-10 lg:py-3 gap-10 lg:gap-7">
                            <div className="title flex flex-col">
                                <label htmlFor="title">Title</label>
                                <input onChange={(e) => { keyChange(e) }}
                                    type="text"
                                    id="title"
                                    name="title"
                                    className="focus:outline-none bg-inherit border-b-2 lg:w-2/3 border-black dark:border-white" />
                            </div>
                            <div className="description flex flex-col">
                                <label htmlFor="description">Description</label>
                                <textarea onChange={(e) => { keyChange(e) }} type="text" cols={1} rows={1} id="description" name="description" className="focus:outline-none bg-inherit border-b-2 lg:w-2/3 border-black dark:border-white" >
                                </textarea>
                            </div>
                            <div className="tags flex flex-col">
                                <label htmlFor="tags">Tags</label>
                                <input onChange={(e) => { keyChange(e) }} type="text" id="tags" name="tags" className="focus:outline-none bg-inherit border-b-2 lg:w-2/3 border-black dark:border-white" />
                            </div>
                            <div className="priority flex flex-col">
                                <label htmlFor="priority">Priority</label>
                                <select onChange={(e) => { keyChange(e) }} name="priority" id="priority" className="focus:outline-none bg-inherit lg:w-2/3 border-none appearance-none pt-2 px-4" >
                                    <option value="" className="bg-stone-300 dark:bg-zinc-800">Select Option</option>
                                    <option value="Low" className="bg-stone-300 dark:bg-zinc-800">Low</option>
                                    <option value="Medium" className="bg-stone-300 dark:bg-zinc-800 ">Medium</option>
                                    <option value="High" className="bg-stone-300 dark:bg-zinc-800">High</option>
                                </select>
                            </div>
                            <div className="buttons flex items-center justify-around absolute bottom-4 left-0 right-0">
                                <button onClick={changeModalState} className="bg-red-600 text-white py-2 px-5 rounded-lg hover:bg-red-700 transition-all duration-300">Close</button>
                                <button type="submit" className="bg-blue-600 text-white py-2 px-5 rounded-lg hover:bg-blue-800 transition-all duration-300">Save</button>
                            </div>
                        </form>
                    </div>

                </div>
            </section>
        </>
    )
}

export default TaskModal