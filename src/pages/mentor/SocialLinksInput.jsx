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
    <div className="space-y-4 bg-[#fff] px-10 py-10 border-1 border-gray-300">
      <h3 className="text-x font-bold">Social Links</h3>

      <div>
        <label htmlFor="linkedin" className="text-[#374151] text-x">LinkedIn </label>
        <input
          type="text"
          id="linkedin"
          name="linkedin"
          placeholder="LinkedIn URL"
          value={profile.socialLinks.linkedin}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg
          border-gray-300 outline-gray-300 outline-none text-sm
          my-2"
        />
      </div>

      <div>
        <label htmlFor="linkedin" className="text-[#374151] text-x">Github</label>
        <input
          type="text"
          id="github"
          name="github"
          placeholder="GitHub URL"
          value={profile.socialLinks.github}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg
          border-gray-300 outline-gray-300 outline-none text-sm
          my-2"
        />
      </div>

      <label htmlFor="twitter" className="text-[#374151] text-x">Twitter</label>
      <input
        type="text"
        id="twitter"
        name="twitter"
        placeholder="Twitter URL"
        value={profile.socialLinks.twitter}
        onChange={handleChange}
        className="w-full border p-3 rounded-lg
        border-gray-300 outline-gray-300 outline-none text-sm
        my-2"
      />

    </div>
  )
}

export default SocialLinksInput