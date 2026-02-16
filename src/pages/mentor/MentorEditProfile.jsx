import { useState, useEffect } from "react";
import { db, auth } from "../../firebase/config";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

import ProfileImageUpload from "./ProfileImageUpload";
import BasicInfoForm from "./BasicInfoForm";
import SkillsInput from "./SkillsInput";
import SocialLinksInput from "./SocialLinksInput";

function MentorEditProfile() {

  const [profile, setProfile] = useState({
    imageFile: null,
    imageURL: "",
    fullName: "",
    techRole: "",
    bio: "",
    experience: "",
    skills: [],
    socialLinks: {
      linkedin: "",
      github: "",
      twitter: ""
    }
  });

  const [loading, setLoading] = useState(false);

  const storage = getStorage();

  const user = auth.currentUser;

  // Load existing profile

  useEffect(() => {

    async function fetchProfile() {
      if (!user) return;

      const docRef = doc(db, "users", user.uid);
      const snap = await getDoc(docRef);

      if (snap.exists()) {
        setProfile(prev => ({
          ...prev,
          ...snap.data()
        }))
      }
    }

    fetchProfile()
  }, [user])

  // Save profile
  async function handleSave() {
    console.log("Saving profile:", profile);
    if(!user) return;

    try{
      setLoading(true);

      let imageUrl = profile.imageURL;

      // Uplaod image if new file selected
      if (profile.imageFile) {
        const imageRef = ref(storage, `profileImages/${user.uid}`)
        await uploadBytes(imageRef, profile.imageFile)
        imageUrl = await getDownloadURL(imageRef);
      }

      await updateDoc(doc(db, "users", user.uid), {
        fullName: profile.fullName,
        techRole: profile.techRole,
        bio: profile.bio,
        experience: profile.experience,
        skills: profile.skills,
        socialLinks: profile.socialLinks,
        imageUrl
      });

      alert("profile updated sucessfully")
    }catch(e) {
      console.log(error)
      alert("something went wrong")
    }finally{
      setLoading(false)
    }
  };

  return (
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-2xl shadow-md space-y-6">

      <h1 className="text-2xl font-bold">Edit Profile</h1>

      <ProfileImageUpload profile={profile} setProfile={setProfile} />

      <BasicInfoForm profile={profile} setProfile={setProfile} />

      <SkillsInput profile={profile} setProfile={setProfile} />

      <SocialLinksInput profile={profile} setProfile={setProfile} />

      <button
        onClick={handleSave}
        disabled={loading}
        className={`w-full py-3 rounded-lg text-white transition ${
          loading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
        }`}
      >
        {loading ? "Saving..." : "Save Changes"}
      </button>

    </div>
  );
}

export default MentorEditProfile;