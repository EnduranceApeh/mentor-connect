function BasicInfoForm({profile, setProfile}) {
  
  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value
    })
  }

  return(
     <div className="space-y-4 bg-[#fff] px-10 py-10 border-1 border-gray-300">
      <h3 className="text-x font-bold">Basic Info</h3>

      <div className="flex justify-between">
        <div>
          <label htmlFor="fullname" className="text-[#374151] text-x">Full Name*</label>
          <input
            type="text"
            id="fullname"
            name="fullName"
            placeholder="Full Name"
            value={profile.fullName}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg border-gray-300 outline-gray-300 outline-none text-sm
            my-2"
          />
        </div>
        <div>
          <label htmlFor="techRole" className="text-[#374151] text-x">Tech Role*</label>
          <input
            type="text"
            id="techRole"
            name="techRole"
            placeholder="Tech Role"
            value={profile.techRole}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg border-gray-300 outline-gray-300 outline-none text-sm
            my-2"
          />
        </div>
      </div>

      <div>
        <label htmlFor="bio" className="text-[#374151] text-x">Bio</label>
        <textarea
          name="bio"
          id="bio"
          placeholder="Bio"
          value={profile.bio}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg border-gray-300 outline-gray-300 outline-none text-sm
          my-2"
        />
      </div>

      <label htmlFor="yearsOfExperience" className="text-[#374151] text-x">Years of experience*</label>
      <input
        type="number"
        id="yearsOfExperience"
        name="experience"
        placeholder="Years of Experience"
        value={profile.experience}
        onChange={handleChange}
        className="w-full border p-3 rounded-lg border-gray-300 outline-gray-300 outline-none text-sm
        my-2"
      />

    </div>
  )
}

export default BasicInfoForm