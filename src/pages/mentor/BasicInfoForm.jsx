function BasicInfoForm({profile, setProfile}) {
  
  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value
    })
  }

  return(
     <div className="space-y-4">

      <input
        type="text"
        name="fullName"
        placeholder="Full Name"
        value={profile.fullName}
        onChange={handleChange}
        className="w-full border p-3 rounded-lg"
      />

      <input
        type="text"
        name="techRole"
        placeholder="Tech Role"
        value={profile.techRole}
        onChange={handleChange}
        className="w-full border p-3 rounded-lg"
      />

      <textarea
        name="bio"
        placeholder="Bio"
        value={profile.bio}
        onChange={handleChange}
        className="w-full border p-3 rounded-lg"
      />

      <input
        type="number"
        name="experience"
        placeholder="Years of Experience"
        value={profile.experience}
        onChange={handleChange}
        className="w-full border p-3 rounded-lg"
      />

    </div>
  )
}

export default BasicInfoForm