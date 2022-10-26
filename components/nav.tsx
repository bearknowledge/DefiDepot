export const Nav = () => {
  return (
    <div className="flex mobile:flex-row bg-[black] mobile:w-full h-[80px] items-center justify-between laptop:flex-col laptop:h-screen laptop:w-fit justify-between p-4 z-10 bg-[black] sticky top-0 text-white">
      <div className="flex mobile:text-sm pt-0 laptop:flex-row items-center text-xl pt-10">
        <img className="h-[3rem] mr-2" src="/truck.svg" />
        DeFi Depot
      </div>



<div className="laptop:hidden">
  <button>
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path></svg>
  </button>
</div>


      <div className="mobile:hidden laptop:flex flex-col w-max">
        <a
          href="https://twitter.com/fuellabs_"
          className="w-fit flex flex-row items-center text-lg group"
        >
          <img
            className="group-hover:animate-ping w-[1.5rem]"
            src="/twitter.svg"
          />{" "}
          <p className="pl-4   font-Inter">Twitter</p>
        </a>
        <a
          href="https://discord.com/invite/fuelnetwork"
          target="blank"
          className="w-fit flex flex-row items-center text-lg group pt-5"
        >
          <img
            className="group-hover:animate-ping w-[2rem]"
            src="/discord.svg"
          />
          <p className="pl-4  font-Inter">Discord</p>
        </a>
        <a className="w-fit flex flex-row items-center text-lg group pt-5">
          <img
            className="group-hover:animate-ping w-[2rem]"
            src="/gitbook-icon.svg"
          />
          <p className="pl-4 font-Inter">Documentation</p>
        </a>
      </div>
      <span className="mobile:hidden laptop:block"></span>
    </div>
  );
};
