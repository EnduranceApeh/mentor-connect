import StepCard from "../../components/ui/StepCard";

function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Create Your Profile",
      description: "Sign up as a mentor or mentee. Complete your profile with your skills, experience, and goals."
    },
     {
      number: "2",
      title: "Connect & Request",
      description: "Browse mentors or receive requests. Send connection requests with personalized messages."
    },
     {
      number: "3",
      title: "Start Learning",
      description: "Once connected, schedule sessions, set goals, and begin your mentorship journey together."
    },
  ]

  return (
    <section className="my-20 text-center px-9 bg-[#F9FAFB] py-10">
      <h2 className="text-2xl text-[#1E293B] font-bold leading-[46px]">How It Works</h2>
      <p className="text-[#4B5563] text-sm font-normal">Everything you need for a tech mentors</p>
      <div className="grid grid-cols-3 gap-6 my-9">
        {

          steps.map((item, index) => (
            <StepCard key={index} {...item} />
          ))
        }
      </div>
    </section>
  )
}

export default HowItWorks;