
export const Nav = () => {




  return (

    <div className="flex flex-1 flex-col h-screen w-fit justify-between px-4 z-10 bg-[black] sticky top-0  text-white">
    <div className='flex flex-row items-center text-xl pt-10'><img className="h-[3rem] mr-2" src='/truck.svg'/>DeFi Depot</div>
    <div className='flex flex-col w-max'>
    <a href="https://twitter.com/fuellabs_" className="w-fit flex flex-row items-center text-lg group"><img className='group-hover:animate-ping w-[1.5rem]' src='/twitter.svg'/> <p className='pl-4   font-Inter'>Twitter</p></a>
    <a href="https://discord.com/invite/fuelnetwork" target="blank" className="w-fit flex flex-row items-center text-lg group pt-5"><img className="group-hover:animate-ping w-[2rem]" src='/discord.svg'/><p className='pl-4  font-Inter'>Discord</p></a>
    <a className="w-fit flex flex-row items-center text-lg group pt-5"><img className="group-hover:animate-ping w-[2rem]" src='/gitbook-icon.svg'/><p className='pl-4 font-Inter'>Documentation</p></a>
    </div>
    <span></span>

  </div>
  )
}