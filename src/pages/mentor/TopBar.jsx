import logo from "../../assets/images/logo.png"

function TopBar() {
  return(
     <header className="h-16 bg-white flex items-center justify-between px-6 fixed top-0 left-0 right-0">

      {/* Logo */}
      <img src={logo} alt={logo} className="w-[180px]"/>
    </header>
  )
}

export default TopBar