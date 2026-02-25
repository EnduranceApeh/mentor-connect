import {useEffect, useState} from "react";
import { where, collection, query, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";
import { useAuth } from "../../context/AuthContext";

function RequestStatus() {
  const {firebaseUser} = useAuth();
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRequests() {
      if(!firebaseUser) return;

      const q = query(
        collection(db, "requests"),
        where("menteeId", "==", firebaseUser.uid)
      );

      const snapshot = await getDocs(q);
      const data = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));

      setRequests(data);
      setLoading(false)
    }

    fetchRequests();
  }, [firebaseUser]);

  // Dynamic color
  function getStatusColor(status) {
    switch (status) {
      case "accepted":
        return "text-green-600";
      case "declined":
        return "text-red-600";
      default:
        return "text-yellow-600";

    }
  }

  if(loading) return <p>Loading requests...</p>
  return(
   <div className="bg-white rounded-2xl shadow-lg p-8">
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-2xl font-bold text-gray-800">My Mentorship Requests</h2>
    </div>

    {requests.length === 0 ? (
      <div className="text-center py-12 text-gray-500">
        You haven’t sent any requests yet.
      </div>
    ) : (
      <div className="overflow-x-auto">
        <table className="w-full text-left border-separate border-spacing-y-3">
          <thead>
            <tr className="text-sm uppercase text-gray-500 tracking-wider">
              <th className="px-4 py-2">Mentor</th>
              <th className="px-4 py-2">Status</th>
            </tr>
          </thead>

          <tbody>
            {requests.map((req) => (
              <tr
                key={req.id}
                className="bg-gray-50 hover:bg-gray-100 transition rounded-xl"
              >
                <td className="px-4 py-4 font-medium text-gray-700">
                  {req.mentorName}
                </td>

                <td className="px-4 py-4">
                  <span
                    className={`px-3 py-1 text-sm font-semibold rounded-full ${
                      req.status === "accepted"
                        ? "bg-green-100 text-green-700"
                        : req.status === "declined"
                        ? "bg-red-100 text-red-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {req.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )}
  </div>
  )
}

export default RequestStatus;