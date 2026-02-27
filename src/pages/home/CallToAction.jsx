
import { Link } from "react-router-dom";
import {Rocket} from "lucide-react";
function CallToAction() {
 return(
  <section className="bg-blue-500 
                    py-16 sm:py-20 
                    px-6 sm:px-10 lg:px-20 
                    flex flex-col 
                    justify-center items-center 
                    text-center">

  <h2 className="text-white 
                 text-2xl sm:text-3xl lg:text-4xl 
                 font-semibold leading-tight">
    Ready to Start Your Journey?
  </h2>

  <p className="text-blue-100 
                text-sm sm:text-base 
                mt-4 
                max-w-xl sm:max-w-2xl">
    Join a growing community of developers learning, sharing knowledge, and building stronger careers through meaningful mentorship connections.
  </p>

  <Link
    to="/sign-up"
    className="inline-flex items-center gap-2 
               bg-white text-blue-500 
               py-3 px-6 
               rounded-lg 
               mt-6 
               font-semibold 
               shadow-md hover:shadow-lg 
               hover:-translate-y-0.5 
               transition-all duration-200"
  >
    <Rocket size={18} />
    Get Started
  </Link>

</section>
 )
}

export default CallToAction