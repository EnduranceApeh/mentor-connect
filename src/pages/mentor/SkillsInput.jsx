import { useState } from "react";

function SkillsInput({ profile, setProfile }) {
  const [skillInput, setSkillInput] = useState("");

  function addSkill() {
    if (!skillInput) return;

    setProfile({
      ...profile,
      skills: [...profile.skills, skillInput],
    });

    setSkillInput("");
  }

  function removeSkill(skill) {
    setProfile({
      ...profile,
      skills: profile.skills.filter((s) => s !== skill),
    });
  }

  return (
    <div className="space-y-4 bg-white p-6 sm:p-10 rounded-2xl shadow-sm border border-gray-200">
      <h3 className="text-lg sm:text-xl font-bold">Skills & Expertise</h3>
      <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6">
        Add relevant skills and technologies you can mentor in
      </p>

      {/* Input + Add Button */}
      <div className="flex flex-col sm:flex-row gap-2">
        <input
          type="text"
          id="skills"
          value={skillInput}
          onChange={(e) => setSkillInput(e.target.value)}
          placeholder="Add Skill"
          className="flex-1 border p-2 rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-200 text-sm sm:text-base"
        />
        <button
          onClick={addSkill}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition w-full sm:w-auto"
        >
          Add
        </button>
      </div>

      {/* Skills List */}
      <div className="flex flex-wrap gap-2 mt-2">
        {profile.skills.map((skill, index) => (
          <span
            key={index}
            onClick={() => removeSkill(skill)}
            className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full cursor-pointer text-sm sm:text-base"
          >
            {skill} ✕
          </span>
        ))}
      </div>
    </div>
  );
}

export default SkillsInput;