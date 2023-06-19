import React from 'react'
import { useDrag } from 'react-dnd'

const TodoList = ({todo, id}) => {

    const [{isDragging}, drag] = useDrag(() => ({
        type: 'div',
        item: {id: id},
        collect: (monitor) => ({
          isDragging: !!monitor.isDragging()
        })
      }))

  return (
        <div ref={drag} className={`${isDragging ? 'border border-dashed border-[#5030E5]/[59%] bg-[#5030E5]/[6%]': 'bg-white'} rounded-[16px] px-5 pt-5 mb-5 cursor-grab md:w-[314px] w-[250px] h-[177px]`}>
            
            <section className={`${isDragging ? 'opacity-0' : 'opacity-1'}`}>
              <div className='flex items-center justify-between'>
                <p className={`${todo.level === 'Low' ? 'bg-[#D58D49]/20 text-[#D58D49]' : todo.level === 'High' ? 'bg-[#D8727D]/20 text-[#D8727D]' : 'bg-[#68B266]/20 text-[#68B266]' } w-[36px] h-[23px] flex items-center justify-center text-xs rounded-[4px]`}>{todo.level}</p>
                <img src="assets/threeDots.svg" alt="" />
              </div>

              <p className='text-[#0D062D] text-lg font-semibold mb-[6px]'>{todo.title}</p>
              <p className='text-[#787486] text-xs'>{todo.desc}</p>

              <div className='flex items-center justify-between mt-6 pb-5'>
                {todo.peopleImg === 'assets/2people.svg' ? <img className='md:w-[50px] w-[40px]' src={todo.peopleImg} alt="" /> : <img className='md:w-[63px] w-[40px]' src={todo.peopleImg} alt="" />}
                

                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <img className="w-[14px]" src="assets/message.svg" alt="" />
                    <p className="text-[#787486] md:text-[15px] text-[10px]">{todo.comments} comments</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <img className="w-[14px]" src="assets/file.svg" alt="" />
                    <p className="text-[#787486] md:text-[15px] text-[10px]">{todo.files} files</p>
                  </div>
                </div>
              </div>
            </section>

        </div>
  )
}

export default TodoList