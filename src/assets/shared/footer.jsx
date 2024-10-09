
const Footer = () => {
    return (
        <section id="footer" className="bg-slate-400 dark:bg-slate-500 fixed bottom-0 right-0 left-0 py-3 transition-all duration-500 dark:text-white">
            <footer className="container m-auto text-center">
                <p>Copyright &copy; {new Date().getFullYear()} | <a href="https://facebook.com/fb.mohammadullah" target="_blank">Mohammad Ullah</a> </p>
            </footer>
        </section>
    )
}

export default Footer