function ProfileImageUpload({ profile, setProfile }) {
  function handleImageChange(e) {
    const file = e.target.files[0];
    const imageUrl = URL.createObjectURL(file);

    setProfile({ ...profile, image: imageUrl })
  }

  return (
    <div className="
  bg-white 
  rounded-2xl 
  shadow-md 
  p-6 sm:p-8 
  border border-gray-200
">

      <div className="flex flex-col sm:flex-row items-center gap-6">

        {/* Profile Image */}
        <div className="relative">
          <img
            src={profile.image || `https://ui-avatars.com/api/?name=${profile.fullName}&background=6366F1&color=fff`}
            alt="Profile"
            className="
          w-24 h-24 
          sm:w-28 sm:h-28 
          rounded-full 
          object-cover 
          border-4 border-gray-100
          shadow-sm
        "
          />
        </div>

        {/* Upload Button */}
        <div className="flex flex-col items-center sm:items-start gap-3">

          <label
            htmlFor="imageUpload"
            className="
          cursor-pointer
          bg-blue-600
          text-white
          px-3 py-1.5
          rounded-lg
          text-sm sm:text-base
          hover:bg-blue-700
          transition
          shadow-sm
        "
          >
            upload image
          </label>

          <input
            id="imageUpload"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
          />

          <p className="text-xs text-gray-400 text-center sm:text-left">
            JPG, PNG or GIF. Max size 2MB.
          </p>

        </div>

      </div>
    </div>
  )
}

export default ProfileImageUpload;