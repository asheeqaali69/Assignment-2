const Navbar = () => {
    return (
        <>
        <nav className="flex flex-col-12 h-14 w-full bg-[#252B42]">     
          
        <h3 className=" font-extrabold text-2xl w-3/12 text-center text-white pt-6 ">BrandName</h3>
    
        <div className=" w-6/12   pt-7">
            <ul className="flex flex-row gap-9 text-sm text-white pr-5 font-bold">
                <li>Home</li>
                <li>Product</li>
                <li>Pricing</li>
                <li>Contact</li>
            </ul>
        </div>
     <div className="flex flex-col-2 gap-7 w-40 pt-7 font-bold items-center ">
      <button>Login</button>
      <div>
        <button className="bg-blue-600 rounded-[5px] w-[110px] h-[52px]">Join us</button>
      </div>
      </div>
        </nav>
        </>

    )
}

export default Navbar;