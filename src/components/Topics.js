import React from "react";
import app from "../utils/firebase";
import { getFirestore, doc, getDoc } from "firebase/firestore";

function Topics() {
  React.useEffect(() => {
    async function fetchData() {
      const db = getFirestore(app);

      const docRef = doc(db, "topics", "movie");
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
      }
    }
    fetchData();
  }, []);

  return "Topics";
}

export default Topics;
