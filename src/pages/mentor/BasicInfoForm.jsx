function BasicInfoForm({ profile, setProfile }) {
  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="space-y-4 bg-white p-6 sm:p-10 rounded-2xl shadow-sm border border-gray-200">
      <h3 className="text-lg sm:text-xl font-bold">Basic Info</h3>

      <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
        <div className="flex-1">
          <label htmlFor="fullname" className="text-gray-700 text-sm sm:text-base">
            Full Name*
          </label>
          <input
            type="text"
            id="fullname"
            name="fullName"
            placeholder="Full Name"
            value={profile.fullName}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-200 text-sm sm:text-base mt-2"
          />
        </div>

        <div className="flex-1">
          <label htmlFor="techRole" className="text-gray-700 text-sm sm:text-base">
            Tech Role*
          </label>
          <input
            type="text"
            id="techRole"
            name="techRole"
            placeholder="Tech Role"
            value={profile.techRole}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-200 text-sm sm:text-base mt-2"
          />
        </div>
      </div>

      <div>
        <label htmlFor="bio" className="text-gray-700 text-sm sm:text-base">
          Bio
        </label>
        <textarea
          name="bio"
          id="bio"
          placeholder="Bio"
          value={profile.bio}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-200 text-sm sm:text-base mt-2"
        />
      </div>

      <div>
        <label htmlFor="yearsOfExperience" className="text-gray-700 text-sm sm:text-base">
          Years of Experience*
        </label>
        <input
          type="number"
          id="yearsOfExperience"
          name="experience"
          placeholder="Years of Experience"
          value={profile.experience}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-200 text-sm sm:text-base mt-2"
        />
      </div>
    </div>
  );
}

export default BasicInfoForm;