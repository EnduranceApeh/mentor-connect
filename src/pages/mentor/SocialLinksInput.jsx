function SocialLinksInput({ profile, setProfile }) {

  function handleChange(e) {
    setProfile({
      ...profile,
      socialLinks: {
        ...profile.socialLinks,
        [e.target.name]: e.target.value
      }
    });
  }

  return (
    <div className="space-y-4">

      <input
        type="text"
        name="linkedin"
        placeholder="LinkedIn URL"
        value={profile.socialLinks.linkedin}
        onChange={handleChange}
        className="w-full border p-3 rounded-lg"
      />

      <input
        type="text"
        name="github"
        placeholder="GitHub URL"
        value={profile.socialLinks.github}
        onChange={handleChange}
        className="w-full border p-3 rounded-lg"
      />

      <input
        type="text"
        name="twitter"
        placeholder="Twitter URL"
        value={profile.socialLinks.twitter}
        onChange={handleChange}
        className="w-full border p-3 rounded-lg"
      />

    </div>
  )
}