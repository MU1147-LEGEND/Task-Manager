/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import logo from './../images/assdi-logo.png';

const Header = ({ tasks, setTasks }) => {
    const [checked, setChecked] = useState(false);
    const [search, setSearch] = useState("");
    const [originalTasks, setOriginalTasks] = useState([...tasks]);
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
    // theme toggling
    useEffect(() => {
        if (theme === "dark") {
            document.querySelector("html").classList.add("dark");
        } else {
            document.querySelector("html").classList.remove("dark");
        }
    }, [theme]);
    const changeTheme = () => {
        setChecked(!checked);
        localStorage.setItem("theme", theme === "dark" ? "light" : "dark");
        setTheme(theme === "dark" ? "light" : "dark");
    };

    useEffect(() => {
        const localTasks = localStorage.getItem("tasks");
        if(localTasks){
            setOriginalTasks(JSON.parse(localTasks));
        }else{
            if (tasks.length > 0 && originalTasks.length === 0) {
                setOriginalTasks([...tasks]);
            }
        }
    }, [tasks]);

    const handleSearch = (e) => {
        const searchValue = e.target.value;
        setSearch(searchValue.trim());
    };

    useEffect(() => {
        if (search !== "") {
            const searchedTasks = originalTasks.filter((task) => {
                return task.title.toLowerCase().includes(search.toLowerCase());
            });
            setTasks(searchedTasks);
        }
        else {
            setTasks(originalTasks);
        }
    }, [search]);

    return (
        <>
            <section id="header" className='bg-slate-400 py-4 dark:bg-slate-500 transition-all duration-500'>
                <header className='container m-auto flex items-center justify-between px-6 gap-3'>
                    <div className="header-logo w-80 ">
                        <img src={logo} alt="assdi-logo" className='w-full lg:w-3/4 h-auto' />
                    </div>
                    <div className="search-theme flex items-center justify-center gap-2 lg:gap-8">
                        {/* searchbar */}
                        <div className="search-input">
                            <input type="search" placeholder='Search Tasks'
                                value={search}
                                onChange={(e) => { handleSearch(e) }}
                                className='focus:outline-none rounded-md py-1.5 px-2' />
                        </div>
                        <div className="theme-toggle hover:text-orange-500 dark:text-white transition-all duration-[400] relative">
                            <label >
                                <input type="checkbox" className='group hidden' onChange={changeTheme} />
                                {/* <!-- sun icon --> */}
                                <svg
                                    className={`h-8 w-8 lg:h-10 lg:w-10 fill-current hover:rotate-180 transition-transform duration-500 ${checked ? "" : "hidden"}`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24">
                                    <path
                                        d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                                </svg>

                                {/* <!-- moon icon --> */}
                                <svg
                                    className={`h-8 w-8 lg:w-10 lg:h-10 fill-current hover:-rotate-90 transition-transform duration-500 ${checked ? "hidden" : ""}`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24">
                                    <path
                                        d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                                </svg>
                            </label>
                        </div>
                    </div>
                </header>
            </section>
        </>
    )
}

export default Header