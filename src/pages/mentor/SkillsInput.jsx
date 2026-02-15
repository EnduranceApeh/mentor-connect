import { useState } from "react";

function SkillsInput({ profile, setProfile }) {
  const [skillInput, setSkillInput] = useState("")

  function addSkill() {
    if(!skillInput) return;

    setProfile({
      ...profile,
      skills: [...profile.skills, skillsInput]
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
    <div className="space-y-3">

      <div className="flex gap-2">
        <input
          type="text"
          value={skillInput}
          onChange={(e) => setSkillInput(e.target.value)}
          placeholder="Add Skill"
          className="flex-1 border p-2 rounded-lg"
        />
        <button
          onClick={addSkill}
          className="bg-blue-500 text-white px-4 rounded-lg"
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