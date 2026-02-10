import logo from "../../assets/images/logo.png";

function Navbar() {
  return(
    <nav className="flex justify-between py-4 px-9 items-center fixed top-0 right-0 left-0 z-100 bg-[#fff]">
      <div className="w-[180px]">
        <img src={logo} alt="logo" />
      </div>

      <ul className="flex gap-10 text-[#4B5563] font-light text-xs">
        <li><a href="#">whyChooseUs</a></li>
        <li><a href="#">How It Works</a></li>
        <li><a href="#">Success Stories</a></li>
        <li><a href="#">Login</a></li>
        <li><a href="#">Get Started</a></li>
      </ul>
    </nav>
  )
}

export default Navbar;