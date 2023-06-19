import { done } from '../data'

const Done = () => {
  return (
    <section className="md:w-[354px] w-[280px] min-h-[400px] bg-[#F5F5F5] mt-6 px-4 rounded-[16px] pb-4">
        <div className="flex items-center justify-between pt-4 md:w-[314px] w-[250px]">
          <div className="flex items-center gap-3">
            <div className='bg-[#8BC48A] w-2 h-2 rounded-full'></div>
            <p className="text-[#0D062D] text-[16px] font-medium -ml-1">Done</p>
            <p className="text-[#625F6D] bg-[#E0E0E0] w-5 h-5 rounded-full flex items-center justify-center text-xs">{done.length}</p>
          </div>
        </div>

        <div className="h-[3px] my-5 bg-[#8BC48A] md:w-[314px] w-[250px]"></div>

        {done.map((task) => (
          <div key={task.id} className={`bg-white rounded-[16px] px-5 pt-5 mb-5 cursor-pointer md:w-[314px] w-[250px] h-[${task.height}px]`}>
            <div className="flex items-center justify-between">
              <p className="bg-[#68B266]/20 text-[#68B266] w-[76px] h-[23px] flex items-center justify-center text-xs rounded-[4px]">{task.level}</p>
              <img src="assets/threeDots.svg" alt="" />
            </div>

            <p className="text-[#0D062D] text-lg font-semibold mb-[6px]">{task.title}</p>
            {task.desc ? <p className="text-[#787486] text-xs">{task.desc}</p> : <img src={task.img} alt="" />}
            

            <div className="flex items-center justify-between mt-6 pb-5">
              <img className="md:w-[50px] w-[25px]" src={task.peopleImg} alt="" />

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <img className="w-[14px]" src="assets/message.svg" alt="" />
                  <p className="text-[#787486] md:text-[15px] text-[10px]">{task.comments} comments</p>
                </div>
                <div className="flex items-center gap-1">
                  <img className="w-[14px]" src="assets/file.svg" alt="" />
                  <p className="text-[#787486] md:text-[15px] text-[10px]">{task.files} files</p>
                </div>
              </div>
            </div>

          </div>

        ))}
      </section>
  )
}

export default Done