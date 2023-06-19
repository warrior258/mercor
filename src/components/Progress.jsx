import { useDrop } from "react-dnd";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/boardSlice";
import { remove } from "../store/todoSlice";

const Progress = () => {

    const dispatch = useDispatch();
    const board = useSelector((state) => state.board.data);
    const todos = useSelector((state) => state.todo.data);

    const addTask = (itemID) => {
        const itemList = todos.filter((item) => itemID === item.id);
        dispatch(add(itemList[0]));
        dispatch(remove(itemID));
        
      }

    const [{isOver}, drop] = useDrop(() => ({
        accept: 'div',
        drop: (item) => addTask(item.id),
        collect: (monitor) => ({
          isOver: !!monitor.isOver()
        })
      }))

  return (
    <section ref={drop} className="md:w-[354px] w-[280px] min-h-[400px] bg-[#F5F5F5] mt-6 px-4 rounded-[16px] pb-4 flex flex-col items-center">
        <div className="flex items-center justify-between pt-4 md:w-[314px] w-[250px]">
          <div className="flex items-center gap-3">
            <div className='bg-[#FFA500] w-2 h-2 rounded-full'></div>
            <p className="text-[#0D062D] text-[16px] font-medium -ml-1">On Progress</p>
            <p className="text-[#625F6D] bg-[#E0E0E0] w-5 h-5 rounded-full flex items-center justify-center text-xs">{board.length}</p>
          </div>
        </div>

        <div className="h-[3px] my-5 bg-[#FFA500] md:w-[314px] w-[250px]"></div>

        {board.map((progress) => (
          <div key={progress.id} className={`bg-white rounded-[16px] px-5 pt-5 mb-5 cursor-pointer md:w-[314px] w-[250px] h-[${progress.height}px]`}>
            <div className="flex items-center justify-between">
              <p className="bg-[#D58D49]/20 text-[#D58D49] w-[36px] h-[23px] flex items-center justify-center text-xs rounded-[4px]">{progress.level}</p>
              <img src="assets/threeDots.svg" alt="" />
            </div>

            <p className="text-[#0D062D] text-lg font-semibold mb-[6px]">{progress.title}</p>
            
            {progress.img ? <img src={progress.img} alt="" /> : <p className="text-xs text-[#787486]">{progress.desc}</p>}
            

            <div className="flex items-center justify-between mt-6 pb-5">
              {progress.peopleImg === 'assets/1people.svg' ? <img className="md:w-[23px] w-[18px]" src={progress.peopleImg} alt="" /> : <img className="md:w-[63px] w-[40px]" src={progress.peopleImg} alt="" />}
              

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <img className="w-[14px]" src="assets/message.svg" alt="" />
                  <p className="text-[#787486] md:text-[15px] text-[10px]">{progress.comments} comments</p>
                </div>
                <div className="flex items-center gap-1">
                  <img className="w-[14px]" src="assets/file.svg" alt="" />
                  <p className="text-[#787486] md:text-[15px] text-[10px]">{progress.files} files</p>
                </div>
              </div>
            </div>

          </div>

        ))}
      </section>
  )
}

export default Progress