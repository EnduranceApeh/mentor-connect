import logo from "../../assets/images/logo.png"

function MenteeNavbar() {
  return(
     <header className="h-16 bg-white flex items-center justify-between px-6 fixed top-0 left-0 right-0">

      {/* Logo */}
      <img src={logo} alt={logo} className="w-[180px]"/>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search mentors by role..."
        className="border rounded-lg px-4 py-2 w-72 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

    </header>
  )
}

export default MenteeNavbar