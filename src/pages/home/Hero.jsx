import { Link } from "react-router-dom";
import connectImage from "../../assets/images/connect-learn-grow.png";
import heroImage from "../../assets/images/hero-image.png";
import userIcon from "../../assets/icons/user-icon.png";

function Hero() {
  return (
    <div className="bg-gradient-to-b from-blue-100 to-white 
                    flex flex-col-reverse lg:flex-row 
                    items-center justify-between 
                    px-6 sm:px-10 lg:px-20 
                    py-16 lg:py-0 
                    min-h-screen gap-12">

      {/* Left Section */}
      <div className="flex flex-col gap-6 
                      w-full lg:w-1/2 
                      text-center lg:text-left">

        <img
          src={connectImage}
          alt="Connect Learn Grow"
          className="w-44 sm:w-52 mx-auto lg:mx-0"
        />

        <h1 className="text-3xl sm:text-4xl lg:text-5xl 
                       font-extrabold leading-tight text-gray-900">
          Your Path to Tech{" "}
          <span className="text-blue-500">Mentorship</span>
        </h1>

        <p className="text-gray-600 leading-relaxed 
                      text-base sm:text-lg">
          Connect with experienced tech professionals or share your expertise
          with the next generation. MentorHub makes meaningful mentorship
          simple and accessible.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row 
                        gap-4 sm:gap-6 
                        mt-2 justify-center lg:justify-start">

          <Link
            to="/sign-up"
            className="bg-blue-500 hover:bg-blue-600 
                       text-white py-3 px-6 
                       rounded-lg font-semibold 
                       shadow-md hover:shadow-lg 
                       transition-all duration-200 text-center"
          >
            Join as Mentee
          </Link>

          <Link
            to="/sign-up"
            className="py-3 px-6 
                       border-2 border-gray-200 
                       text-gray-700 rounded-lg 
                       font-semibold 
                       hover:bg-gray-100 
                       transition-all duration-200 text-center"
          >
            Become a Mentor
          </Link>
        </div>

        {/* Stats */}
        <div className="flex justify-center lg:justify-start 
                        gap-8 sm:gap-12 mt-6 
                        flex-wrap">

          <div>
            <h4 className="font-bold text-xl sm:text-2xl text-gray-900">
              1,000+
            </h4>
            <p className="text-xs sm:text-sm text-gray-500">
              Active Mentors
            </p>
          </div>

          <div>
            <h4 className="font-bold text-xl sm:text-2xl text-gray-900">
              10,000+
            </h4>
            <p className="text-xs sm:text-sm text-gray-500">
              Students Helped
            </p>
          </div>

          <div>
            <h4 className="font-bold text-xl sm:text-2xl text-gray-900">
              95%
            </h4>
            <p className="text-xs sm:text-sm text-gray-500">
              Success Rate
            </p>
          </div>

        </div>
      </div>

      {/* Right Section */}
      <div className="hidden lg:flex lg:w-1/2 justify-center">
        <img
          src={heroImage}
          alt="Mentorship illustration"
          className="w-full max-w-md sm: lg:max-w-xl object-contain"
        />
      </div>

    </div>
  );
}

export default Hero;