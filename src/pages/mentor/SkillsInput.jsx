import { useState } from "react";

function SkillsInput({ profile, setProfile }) {
  const [skillInput, setSkillInput] = useState("")

  function addSkill() {
    if(!skillInput) return;

    setProfile({
      ...profile,
      skills: [...profile.skills, skillInput]
    })

    setSkillInput("");
  }

  function removeSkill(skill) {
    setProfile({
      ...profile,
      skills: profile.skills.filter((s) => s !== skill)
    })
  }

  return(
    <div className="space-y-3 bg-[#fff] px-10 py-10 border-1 border-gray-300">
      <h3 className="text-x font-bold">Skills & Expertise</h3>
      <p className="text-[#374151] text-xs mb-9">Add relevant skills and technololies you can mentor in</p>

      <div className="flex gap-2">
        <div>
          <input
            type="text"
            id="skills"
            value={skillInput}
            onChange={(e) => setSkillInput(e.target.value)}
            placeholder="Add Skill"
            className="flex-1 border p-2 rounded-lg border-gray-300 outline-gray-300 outline-none text-sm"
          />
        </div>
        <button
          onClick={addSkill}
          className="bg-blue-500 text-white px-4 rounded-lg cursor-pointer "
        >
          Add
        </button>
      </div>

      <div className="flex flex-wrap gap-2">
        {profile.skills.map((skill, index) => (
          <span
            key={index}
            onClick={() => removeSkill(skill)}
            className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full cursor-pointer"
          >
            {skill} ✕
          </span>
        ))}
      </div>

    </div>
  )
}

export default SkillsInput;