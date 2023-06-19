
const Navbar = () => {
  return (
    <div className='flex py-[12px] px-10 md:border-b-[1px] items-center justify-between fixed bg-white' style={{width: 'calc(100vw - 243px)'}}>
        <div className="bg-[#F5F5F5] flex items-center py-2 px-4 w-[417px] h-[44px] rounded-[6px]">
            <img className="w-[18px]" src="assets/search.svg" alt="" />
            <input className="bg-[#F5F5F5] ml-4 md:w-full w-[170px] text-sm focus:outline-none" type="text" placeholder="Search for anything..." />
        </div>

        <div className="flex items-center gap-12">
            <div className="xl:flex hidden items-center gap-7">
                <img className="w-[18px] cursor-pointer" src="assets/calender.svg" alt="" />
                <img className="w-[18px] cursor-pointer" src="assets/help.svg" alt="" />
                <img className="w-[18px] cursor-pointer" src="assets/bell.svg" alt="" />
            </div>

            <div className="flex items-center md:gap-4 gap-6">
                <div className="lg:block hidden leading-[20px]">
                    <p className="text-[16px]">Anima Agarwal</p>
                    <p className="text-[#787486] text-[16px]">U.P, India</p>
                </div>
                <img className="rounded-full md:ml-0 ml-4" src="assets/image.svg" alt="" />
                <img src="assets/downArrow.svg" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Navbar