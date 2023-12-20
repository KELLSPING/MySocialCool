import React from "react";
import app from "../utils/firebase";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";

function Topics() {
  React.useEffect(() => {
    async function fetchData() {
      const db = getFirestore(app);

      const q = query(collection(db, "topics"));

      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
      });
    }
    fetchData();
  }, []);

  return "Topics";
}

export default Topics;
