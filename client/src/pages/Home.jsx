import { Link } from "react-router-dom"

const Taskhome=({task,reload})=>{
    const deleteTask= async (id)=>{
        const response = await fetch(`http://127.0.0.1:8000/delete/${id}`)
        const data=await response.json()
        reload()

        console.log(data)
    }
    return(
        <section class="text-gray-400 bg-gray-900 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">
    </div>
    <div class="flex flex-wrap -m-2">
      <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div class="h-full flex items-center border-gray-800 border p-4 rounded-lg">
          <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/80x80"/>
          <div class="flex-grow">
            <h2 class="text-white title-font font-medium">{task.task}</h2>
            <p class="text-gray-600">Deadline: {task.deadline}</p>
            <button><Link to={`/editTask/${task.id}`}state={task}>Edit</Link></button>
            <button onClick={()=>deleteTask(task.id)} className="text-red-500 m-[15px]">Delete</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    )
}

export default Taskhome