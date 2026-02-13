import { db } from "../config"
import { collection, getDocs, query, where } from "firebase/firestore"
import { useState, useEffect } from "react";


import MentorCard from "../../pages/mentor/MentorCard";

function ExploreMentor() {
  const [mentors, setMentors] = useState([]);

  useEffect(() => {
    async function fetchMentors() {
      try {
        // Build query
        const q = query(collection(db, "users"), where("role", "==", "mentor"));

        // Execute query
        const querySnapShot = await getDocs(q);

        const mentorList = querySnapShot.docs.map(doc => ({
          ...doc.data()
        }))

        setMentors(mentorList);

        console.log(mentorList)
      } catch (e) {
        console.log(e)
      }
    }

    fetchMentors()

  }, [])

  return (
    <ul>
      {mentors.map(mentor =>
        <li key={mentor.uid}>
          <MentorCard name={mentor.name} />
        </li>
      )}
    </ul>
  )
}

export default ExploreMentor