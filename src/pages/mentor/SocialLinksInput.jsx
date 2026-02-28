function SocialLinksInput({ profile, setProfile }) {
  function handleChange(e) {
    setProfile({
      ...profile,
      socialLinks: {
        ...profile.socialLinks,
        [e.target.name]: e.target.value,
      },
    });
  }

  return (
    <div className="space-y-4 bg-white p-6 sm:p-10 rounded-2xl shadow-sm border border-gray-200">
      <h3 className="text-lg sm:text-xl font-bold">Social Links</h3>

      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center">
        {/* LinkedIn */}
        <div className="flex-1 w-full">
          <label htmlFor="linkedin" className="text-gray-700 text-sm sm:text-base">
            LinkedIn
          </label>
          <input
            type="text"
            id="linkedin"
            name="linkedin"
            placeholder="LinkedIn URL"
            value={profile.socialLinks.linkedin}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-200 text-sm sm:text-base mt-1"
          />
        </div>

        {/* GitHub */}
        <div className="flex-1 w-full">
          <label htmlFor="github" className="text-gray-700 text-sm sm:text-base">
            GitHub
          </label>
          <input
            type="text"
            id="github"
            name="github"
            placeholder="GitHub URL"
            value={profile.socialLinks.github}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-200 text-sm sm:text-base mt-1"
          />
        </div>
      </div>

      {/* Twitter */}
      <div className="w-full">
        <label htmlFor="twitter" className="text-gray-700 text-sm sm:text-base">
          Twitter
        </label>
        <input
          type="text"
          id="twitter"
          name="twitter"
          placeholder="Twitter URL"
          value={profile.socialLinks.twitter}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-200 text-sm sm:text-base mt-1"
        />
      </div>
    </div>
  );
}

export default SocialLinksInput;