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
  return(
    <section className="my-20 text-center px-9 bg-[#ffff] py-10">
      <h2 className="text-2xl text-[#1E293B] font-bold leading-[46px]">Success Stories</h2>
      <p className="text-[#4B5563] text-sm font-normal">Hear from our community</p>
      <div className="grid grid-cols-3 gap-6 my-9">
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