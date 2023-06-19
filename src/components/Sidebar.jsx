
const Sidebar = () => {

  return (
    <div className='w-[60px] overflow-hidden md:w-[250px] h-[100vh] border-r-[1px] border-[#DBDBDB] fixed overflow-y-auto z-10'>
      <header className='flex items-center justify-between md:px-6 px-5 py-[19px] border-b-[1px] border-[#DBDBDB] mb-5'>
        <div className='flex items-center gap-2'>
          <img className="md:w-5 w-10" src="assets/logo.svg" alt="" />
          <h1 className='md:block hidden text-[#0D062D] text-[20px] font-semibold'>Project M.</h1>
        </div>
        <img className="md:block hidden" src="assets/leftArrows.svg" alt="" />
      </header>

      <nav>
        <ul className='md:px-6 md:block flex flex-col justify-between items-center md:h-[220px] h-[300px] border-b-[1px] border-[#DBDBDB] mb-5'>
          <li className='flex items-center gap-3 mb-5 cursor-pointer'>
            <img className="w-[18px] md:w-[20px]" src="assets/home.svg" alt="" />
            <p className='md:block hidden text-[#787486] text-[16px] font-medium'>Home</p>
          </li>
          <li className='flex items-center gap-3 mb-5 cursor-pointer'>
            <img className="w-[18px] md:w-[20px]" src="assets/message.svg" alt="" />
            <p className='md:block hidden text-[#787486] text-[16px] font-medium'>Messages</p>
          </li>
          <li className='flex items-center gap-3 mb-5 cursor-pointer'>
            <img className="w-[18px] md:w-[20px]" src="assets/tasks.svg" alt="" />
            <p className='md:block hidden text-[#787486] text-[16px] font-medium'>Tasks</p>
          </li>
          <li className='flex items-center gap-3 mb-5 cursor-pointer'>
            <img className="w-[18px] md:w-[20px]" src="assets/member.svg" alt="" />
            <p className='md:block hidden text-[#787486] text-[16px] font-medium'>Members</p>
          </li>
          <li className='flex items-center gap-3 mb-5 cursor-pointer'>
            <img className="w-[18px] md:w-[20px]" src="assets/setting.svg" alt="" />
            <p className='md:block hidden text-[#787486] text-[16px] font-medium'>Settings</p>
          </li>
        </ul>
      </nav>

      <section className='md:block hidden px-6'>
        <div className='flex items-center justify-between mb-3'>
          <p className='text-xs text-[#787486] font-bold'>MY PROJECTS</p>
          <img className="cursor-pointer" src="assets/add.svg" alt="" />
        </div>

        <ul>
          <li className='flex items-center justify-between cursor-pointer group hover:bg-[#5030E514] px-2 py-1.5 rounded mb-1'>
            <div className='flex items-center gap-3'>
              <div className='bg-[#7AC555] w-2 h-2 rounded-full'></div>
              <p className='font-semibold text-[#787486] text-[16px] group-hover:text-[#0D062D]'>Mobile App</p>
            </div>   
            <div className='flex items-center gap-0.5'>
              <div className='w-1 h-1 bg-white group-hover:bg-[#0D062D] rounded-full'></div>
              <div className='w-1 h-1 bg-white group-hover:bg-[#0D062D] rounded-full'></div>
              <div className='w-1 h-1 bg-white group-hover:bg-[#0D062D] rounded-full'></div>
            </div>         
          </li>
          <li className='flex items-center justify-between cursor-pointer group hover:bg-[#5030E514] px-2 py-1.5 rounded mb-1'>
            <div className='flex items-center gap-3'>
              <div className='bg-[#FFA500] w-2 h-2 rounded-full'></div>
              <p className='font-semibold text-[#787486] text-[16px] group-hover:text-[#0D062D]'>Website Redesign</p>
            </div>   
            <div className='flex items-center gap-0.5'>
              <div className='w-1 h-1 bg-white group-hover:bg-[#0D062D] rounded-full'></div>
              <div className='w-1 h-1 bg-white group-hover:bg-[#0D062D] rounded-full'></div>
              <div className='w-1 h-1 bg-white group-hover:bg-[#0D062D] rounded-full'></div>
            </div>         
          </li>
          <li className='flex items-center justify-between cursor-pointer group hover:bg-[#5030E514] px-2 py-1.5 rounded mb-1'>
            <div className='flex items-center gap-3'>
              <div className='bg-[#E4CCFD] w-2 h-2 rounded-full'></div>
              <p className='font-semibold text-[#787486] text-[16px] group-hover:text-[#0D062D]'>Design System</p>
            </div>   
            <div className='flex items-center gap-0.5'>
              <div className='w-1 h-1 bg-white group-hover:bg-[#0D062D] rounded-full'></div>
              <div className='w-1 h-1 bg-white group-hover:bg-[#0D062D] rounded-full'></div>
              <div className='w-1 h-1 bg-white group-hover:bg-[#0D062D] rounded-full'></div>
            </div>         
          </li>
          <li className='flex items-center justify-between cursor-pointer group hover:bg-[#5030E514] px-2 py-1.5 rounded mb-1'>
            <div className='flex items-center gap-3'>
              <div className='bg-[#76A5EA] w-2 h-2 rounded-full'></div>
              <p className='font-semibold text-[#787486] text-[16px] group-hover:text-[#0D062D]'>Wireframes</p>
            </div>   
            <div className='flex items-center gap-0.5'>
              <div className='w-1 h-1 bg-white group-hover:bg-[#0D062D] rounded-full'></div>
              <div className='w-1 h-1 bg-white group-hover:bg-[#0D062D] rounded-full'></div>
              <div className='w-1 h-1 bg-white group-hover:bg-[#0D062D] rounded-full'></div>
            </div>         
          </li>
        </ul>
      </section>

      <footer className="md:flex hidden px-6 text-center justify-center mt-[88px] mb-[30px]">
        <div className="bg-[#C4C4C4]/20 rounded-2xl w-[206px] h-[200px] relative">
          <div className="bg-gradient-to-b from-[#C4C4C4]/40 to-[#C4C4C4]/5 w-[66px] h-[66px] rounded-full absolute -top-2 left-[50%] -translate-x-[50%] -translate-y-[50%] flex items-center justify-center">
            <div style={{backgroundImage: 'url("assets/bulbBlur.svg")', width: '66px', height: '66px', backgroundPosition: 'center', borderRadius: '50%', background: 'linear-gradient(to top,  rgba(251, 203, 24,0) 0%,rgba(251, 203, 24,1) 500%)'}} className="flex item-center justify-center">
              <img className="w-[15px]" src="assets/bulb.svg" alt="" />
            </div>
          </div>

          <p className="font-medium pt-4 mb-2 text-sm">Thoughts Time</p>
          <p className="text-[#787486] text-xs px-5 mb-2">We don't have any notice for you, till then you can share your thoughts with your peers.</p>
          <button className="bg-white text-sm font-medium p-2 rounded-md">Write a message</button>

        </div>
      </footer>

    </div>
  )
}

export default Sidebar