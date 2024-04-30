import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"


const Addtask=()=>{
    const [task, setTask] = useState('')
    const [deadline, setDeadline] = useState('')
    const [error, setError] = useState(null)

    const navigate = useNavigate()

    const createBlog = async () => {
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                task: task,
                deadline: deadline,
            }),
        }
        try {
            const response = await fetch('http://127.0.0.1:8000/add/', options)
            if (!response.ok) {
                throw new Error('Failed to edit blog')
            }
            const data = await response.json()
            console.log(data)
            navigate("/")
        } catch (error) {
            console.error("Error creating blog:", error)
            setError("Failed to create blog")
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        createBlog().catch(error => console.error("Unhandled promise rejection:", error))
    }

    return(
        <form onSubmit={handleSubmit}  class="text-gray-400 bg-gray-900 body-font">
          <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-col text-center w-full mb-12">
              <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Add your task for the day</h1>
              <Link to='/'>Home</Link>
            </div>
            <div class="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:px-0 items-end sm:space-x-4 sm:space-y-0 space-y-4">
              <div class="relative sm:mb-0 flex-grow w-full">
                <label for="full-name" class="leading-7 text-sm text-gray-400">Task</label>
                <input type="text" id="full-name" name="full-name" onChange={(e) => setTask(e.target.value)} class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-red-500 focus:ring-2 focus:ring-red-900 focus:bg-transparent text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
              </div>
              <div class="relative sm:mb-0 flex-grow w-full">
                <label for="email" class="leading-7 text-sm text-gray-400">Deadline</label>
                <input type="datetime-local" id="email" name="email" onChange={(e) => setDeadline(e.target.value)}class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-red-500 focus:ring-2 focus:ring-red-900 focus:bg-transparent text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
              </div>
              <button class="text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg">Add</button>
            </div>
          </div>
        </form >
    )
}

export default Addtask