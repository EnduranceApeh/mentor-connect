import { db } from "./config";
import {collection, addDoc, serverTimestamp} from "firebase/firestore";


async function sendMentorshipRequest({
  mentorId,
  mentorName,
  menteeId,
  menteeName
}) {
  try{
    await addDoc(collection(db, "requests"), {
      mentorId,
      mentorName,
      menteeId,
      menteeName,
      status: "pending",
      createdAt: serverTimestamp(),
    })
  } catch(error) {
    console.error("Error sending request:", error)
  }
}

export default sendMentorshipRequest;