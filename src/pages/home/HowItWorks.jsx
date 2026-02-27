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
    <section className="bg-gray-50 
                        py-16 sm:py-20 
                        px-6 sm:px-10 lg:px-20 
                        text-center">

      {/* Header */}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl 
                     font-bold text-gray-900">
        How It Works
      </h2>

      <p className="text-gray-600 
                    text-sm sm:text-base 
                    mt-3 max-w-xl mx-auto">
        Everything you need for a tech mentorship journey
      </p>

      {/* Steps Grid */}
      <div className="grid 
                      grid-cols-1 
                      sm:grid-cols-2 
                      lg:grid-cols-3 
                      gap-6 sm:gap-8 
                      mt-12">
        {steps.map((item, index) => (
          <StepCard key={index} {...item} />
        ))}
      </div>

    </section>
  )
}

export default HowItWorks;