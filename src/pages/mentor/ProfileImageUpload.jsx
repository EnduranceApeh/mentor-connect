function ProfileImageUpload({ profile, setProfile}) {
  function handleImageChange(e) {
    const file = e.target.files[0];
    const imageUrl = URL.createObjectURL(file);

    setProfile({ ...profile, image: imageUrl})
  }

  return(
    <div className="flex items-center gap-4">

      <img
        src={profile.image || "https://via.placeholder.com/100"}
        alt="Profile"
        className="w-24 h-24 rounded-full object-cover"
      />

      <input type="file" onChange={handleImageChange} />

    </div>
  )
}