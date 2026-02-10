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
    <section className="my-20 text-center px-9">
      <h2 className="text-2xl text-[#1E293B] font-bold leading-[46px]">Why Choose MentorConnect?</h2>
      <p className="text-[#4B5563] text-sm font-normal">Everything you need for a tech mentors</p>
      <div className="grid grid-cols-3 gap-6 my-9">
        {

          features.map((item, index) => (
            <FeatureCard key={index} {...item} />
          ))
        }
      </div>
    </section>
  )
}

export default WhyChooseUs;