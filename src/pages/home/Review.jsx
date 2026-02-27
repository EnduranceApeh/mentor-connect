import ReviewCard from "../../components/ui/ReviewCard";

import fullRating from "../../assets/icons/full-rating.png"

function Review() {
  const reviews = [
    {
      stars: fullRating,
      description: "MentorConnect helped me transition from bootcamp to my first developer job. My mentor's guidance was invaluable!",
      userImage: "../../assets/images/userImage.png",
      name: "Faith BorntoWin",
      role: "Junior Developer"
    },
    {
      stars: fullRating,
      description: "MentorConnect helped me transition from bootcamp to my first developer job. My mentor's guidance was invaluable!",
      userImage: "../../assets/images/userImage.png",
      name: "Sundus Noor",
      role: "Junior Developer"
    },
    {
      stars: fullRating,
      description: "MentorConnect helped me transition from bootcamp to my first developer job. My mentor's guidance was invaluable!",
      userImage: "../../assets/images/userImage.png",
      name: "Emmanuel Paul",
      role: "Junior Developer"
    }
  ]
  return (
    <section className="my-16 sm:my-20 
                    text-center 
                    px-6 sm:px-10 lg:px-20">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl 
                 text-gray-900 
                 font-bold">Success Stories</h2>
      <p className="text-gray-600 
                text-sm sm:text-base 
                mt-3 max-w-xl mx-auto">Hear from our community</p>
      <div className="grid 
                  grid-cols-1 
                  sm:grid-cols-2 
                  lg:grid-cols-3 
                  gap-6 sm:gap-8 
                  mt-12">
        {

          reviews.map((item, index) => (
            <ReviewCard key={index} {...item} />
          ))
        }
      </div>
    </section>
  )
}

export default Review;