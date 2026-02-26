import { useEffect, useState } from "react";
import { collection, query, where, getDocs, updateDoc, doc} from "firebase/firestore";
import { db } from "../../firebase/config";
import { useAuth } from "../../context/AuthContext";

function Requests() {
  const {firebaseUser} = useAuth();
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRequests() {
      if(!firebaseUser) return;

      const q = query(
        collection(db, "requests"),
        where("mentorId", "==", firebaseUser.uid)

      );

      const snapshot = await getDocs(q);
      const data = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));

      setRequests(data);
      setLoading(false);
    }

    fetchRequests();
  }, [firebaseUser])


  // Update request status
  async function updateStatus(id, newStatus) {
    await updateDoc(doc(db, "requests", id), {
      status: newStatus
    });

    setRequests(prev => 
      prev.map(req => 
        req.id === id ? {...req, status: newStatus } : req
      )
    )

  }

  if (loading) return <p>Loading requests...</p>
  return(
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-bold mb-4">Incoming Requests</h2>

      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b">
            <th className="text-left p-2">Mentee Name</th>
            <th className="text-left p-2">Status</th>
            <th className="text-left p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((req) => (
            <tr key={req.id} className="border-b">
              <td className="p-2">{req.menteeName}</td>
              <td className="p-2 capitalize">{req.status}</td>
              <td className="p-2 space-x-2">
                {req.status === "pending" && (
                  <>
                    <button
                      onClick={() => updateStatus(req.id, "accepted")}
                      className="bg-green-500 text-white px-3 py-1 rounded"
                    >
                      Accept
                    </button>
                    <button
                      onClick={() => updateStatus(req.id, "declined")}
                      className="bg-red-500 text-white px-3 py-1 rounded"
                    >
                      Decline
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Requests;