import { useSelector } from "react-redux"
import TodoList from "./TodoList"

const Todo = () => {

  const todos = useSelector((state) => state.todo.data);

  return (
    <section className="md:w-[354px] w-[280px] min-h-[50px] bg-[#F5F5F5] mt-6 px-4 rounded-[16px] pb-4 flex flex-col items-center">
        <div className="flex items-center justify-between pt-4 md:w-[314px] w-[250px]">
          <div className="flex items-center gap-3">
            <div className='bg-[#5030E5] w-2 h-2 rounded-full'></div>
            <p className="text-[#0D062D] text-[16px] font-medium -ml-1">To Do</p>
            <p className="text-[#625F6D] bg-[#E0E0E0] w-5 h-5 rounded-full flex items-center justify-center text-xs">{todos.length}</p>
          </div>
          <img className="bg-[#5030E533] p-1 rounded w-4 cursor-pointer" src="assets/plus.svg" alt="" />
        </div>

        <div className="h-[3px] md:w-[314px] w-[250px] my-5 bg-[#5030E5]"></div>

        {todos.map((todo) => (
            <TodoList key={todo.id} todo={todo} id={todo.id}/>
        ))}
      </section>
  )
}

export default Todo