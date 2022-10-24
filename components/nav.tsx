
export const Nav = () => {




  return (

    <div className="flex flex-col h-screen w-fit justify-between px-4 z-10 bg-[black] sticky top-0  text-white">
    <div className='flex flex-row items-center text-xl pt-10'><img className="h-[3rem] mr-2" src='/truck.svg'/>DeFi Depot</div>
    <div className='flex flex-col w-fit'>
    <a href="https://twitter.com/Ares_Finance" className="w-fit flex flex-row items-center text-lg group"><img className='group-hover:animate-ping w-[2rem]' src='/eth.png'/> <p className='pl-4   font-Inter'>Twitter</p></a>
    <a href="https://tr.ee/3XjWsr0H8p" target="blank" className="w-fit flex flex-row items-center text-lg group pt-5"><img className="group-hover:animate-ping w-[2rem]" src='/fuel.png'/><p className='pl-4  font-Inter'>Telegram</p></a>
    <a className="w-fit flex flex-row items-center text-lg group pt-5"><img className="group-hover:animate-ping w-[2rem]" src='/barrels.svg'/><p className='pl-4 font-Inter'>Documentation</p></a>
    </div>
    <span></span>

  </div>
  )
}