function ReviewCard({ stars, description, userImage, name, role }) {
  return(
    <div className="p-6 rounded-2xl border border-[#E5E7EB] bg-white shadow-sm space-y-4">
      
      {/* Stars */}
      <div className="flex gap-1">
        <img src={stars} alt="" />
      </div>

      {/* Description */}
      <p className="text-sm text-gray-600 text-left">
        {description}
      </p>

      {/* User */}
      <div className="flex items-center gap-3">
        <img
          src={userImage}
          alt={name}
          className="w-10 h-10 rounded-full object-cover"
        />

        <div>
          <p className="font-semibold text-sm">{name}</p>
          <p className="text-xs text-gray-500">{role}</p>
        </div>
      </div>

    </div>
  )
}

export default ReviewCard;