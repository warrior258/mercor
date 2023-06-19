
const Header = () => {
  return (
    <div className="px-10 mt-[100px]">
      <header className="flex items-center justify-between gap-10">
        <div className="flex items-center md:gap-6 gap-3">
          <h1 className="md:text-[46px] text-[30px] font-semibold">Mobile App</h1>
          <div className="flex items-center gap-4">
            <div className="w-[25px] h-[25px] bg-[#5030E533] rounded flex items-center justify-center cursor-pointer">
              <img className="w-[16px]" src="assets/edit.svg" alt="" />
            </div>
            <div className="w-[25px] h-[25px] bg-[#5030E533] rounded flex items-center justify-center cursor-pointer">
              <img className="w-[16px]" src="assets/link.svg" alt="" />
            </div>
          </div>
        </div>

        <div className="lg:flex hidden items-center gap-5">
          <img className="bg-[#5030E533] p-1 rounded w-[15px] cursor-pointer" src="assets/plus.svg" alt="" />
          <p className="text-[#5030E5] -ml-3 font-medium text-[16px]">Invite</p>
          <img src="assets/peoples.svg" alt="" />
        </div>
      </header>

      <section className="mt-6 flex md:flex-row flex-col md:items-center gap-4 justify-between">
        <div className="flex items-center gap-2.5">
          <div className="flex items-center justify-center gap-5 w-[122px] h-[40px] border p-1 border-[#787486] rounded cursor-pointer">
            <img className="w-[11.47px]" src="assets/filter.svg" alt="" />
            <p className="text-[#787486] text-[16px] -ml-3">Filter</p>
            <img className="w-[11.47px]" src="assets/downArrow2.svg" alt="" />
          </div>

          <div className="flex items-center justify-center gap-5 w-[122px] h-[40px] border p-1 border-[#787486] rounded cursor-pointer">
            <img className="w-[11.47px]" src="assets/date.svg" alt="" />
            <p className="text-[#787486] text-[16px] -ml-3">Today</p>
            <img className="w-[11.47px]" src="assets/downArrow2.svg" alt="" />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center gap-3 w-[97px] h-[40px] border p-1 border-[#787486] rounded cursor-pointer">
            <img className="w-[12px]" src="assets/member.svg" alt="" />
            <p className="text-[#787486] text-[16px] -ml-1.5">Share</p>
          </div>

          <img src="assets/line.svg" alt="" />
          <img className="bg-[#5030E5] p-2 rounded cursor-pointer" src="assets/equalTo.svg" alt="" />
          <img className="cursor-pointer" src="assets/4dots.svg" alt="" />
        </div>
      </section>

    </div>
  )
}

export default Header