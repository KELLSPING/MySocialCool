import React from "react";
import app from "../utils/firebase";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
  doc,
} from "firebase/firestore";

function Topics() {
  React.useEffect(() => {
    async function fetchData() {
      const db = getFirestore(app);

      const q = query(collection(db, "topics"));

      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map((doc) => {
        return doc.data();
      });
      console.log(data);
    }
    fetchData();
  }, []);

  return "Topics";
}

export default Topics;
