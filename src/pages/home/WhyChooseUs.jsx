import FeatureCard from "../../components/ui/FeatureCard";


// Import Icons
import serchIcon from "../../assets/icons/search-icon.png";
import requestIcon from "../../assets/icons/request-icon.png";
import verifiedIcon from "../../assets/icons/verified-icon.png";

function WhyChooseUs() {
  const features = [
    {
      icon: serchIcon,
      title: "Easy Discovery",
      description: "Browse through hundreds of verified mentors with detailed profiles, skills, and experience to find your perfect match."
    },
    {
      icon: requestIcon,
      title: "Simple Requests",
      description: "Send mentorship requests with one click. Track status in real-time and manage all conversations in one place."
    },
    {
      icon: verifiedIcon,
      title: "Verified Profiles",
      description: "All mentors are verified professionals with proven track records in their respective tech domains."
    }
  ]
  return (
    <section className="my-16 sm:my-20 
                    text-center 
                    px-6 sm:px-10 lg:px-20">

  <h2 className="text-2xl sm:text-3xl lg:text-4xl 
                 text-gray-900 
                 font-bold">
    Why Choose MentorConnect?
  </h2>

  <p className="text-gray-600 
                text-sm sm:text-base 
                mt-3 max-w-xl mx-auto">
    Everything you need for a tech mentorship journey
  </p>

  <div className="grid 
                  grid-cols-1 
                  sm:grid-cols-2 
                  lg:grid-cols-3 
                  gap-6 sm:gap-8 
                  mt-12">

    {features.map((item, index) => (
      <FeatureCard key={index} {...item} />
    ))}

  </div>
</section>
  )
}

export default WhyChooseUs;