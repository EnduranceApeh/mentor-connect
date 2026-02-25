import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../firebase/config";

const AuthContext = createContext();

// Custom hook
export const useAuth = () => {
  return useContext(AuthContext);
};

export function AuthProvider({ children }) {
  const [firebaseUser, setFirebaseUser] = useState(null);
  const [userData, setUserData] = useState(null); // full firestore data
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setLoading(true);

      if (currentUser) {
        setFirebaseUser(currentUser);

        try {
          const docRef = doc(db, "users", currentUser.uid);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            const data = docSnap.data();
            setUserData(data);
            setRole(data.role);
          } else {
            setUserData(null);
            setRole(null);
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
          setUserData(null);
          setRole(null);
        }
      } else {
        setFirebaseUser(null);
        setUserData(null);
        setRole(null);
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const value = {
    firebaseUser, // raw firebase auth user
    userData,     // firestore user document (name, role, etc.)
    role,
    loading,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}