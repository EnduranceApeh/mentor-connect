import {Link} from "react-router-dom";
import connectImage from "../../assets/images/connect-learn-grow.png";
import heroImage from "../../assets/images/hero-image.png";
import userIcon from "../../assets/icons/user-icon.png"

function Hero() {
  return(
    <div className="bg-gradient-to-b from-[#DBEAFE] to-[#FFFFFF] flex justify-between px-7 h-screen">
      <div className="flex flex-col gap-4 w-[34%] my-20 mx-10">
        <img src={connectImage} alt="" className="w-[203px] h-[36px]"/>
        <h1 className="text-5xl text-extrabold leading-[50px]">Your Path to Tech <span className="text-[#3B82F6]">Mentorship</span></h1>
        <p className="leading-[30px]">Connect with experienced tech professionals or share your expertise with the next generation. MentorHub makes meaningful mentorship simple and accessible.</p>
        <div className="flex gap-8">
          <Link to="/sign-up" className="bg-[#3B82F6] py-2 px-4 text-[#FFFFFF rounded-sm text-[#ffff]">Join as Mentee</Link>
          <Link to="/sign-up" className="py-2 px-4 bg-transparent border-2 border-[#E5E7EB] text-[#374151] rounded-sm">Become a Mentor</Link>
        </div>
        <div className="flex gap-5">
          <div>
            <h4 className="font-bold text-xl">1,000+</h4>
            <p className="text-xs text-[#4B5563]">Active Mentors</p>
          </div>
          <div>
            <h4 className="font-bold text-xl">10,000+</h4>
            <p className="text-xs text-[#4B5563]">Student Helped</p>
          </div>
          <div>
            <h4 className="font-bold text-xl">95%</h4>
            <p className="text-xs text-[#4B5563]">Success Rate</p>
          </div>
        </div>
      </div>

      <div className="w-[640px] h-[640px]">
        <img src={heroImage} alt="hero image" className="w-100%"/>
      </div>
    </div>
  )
}

export default Hero