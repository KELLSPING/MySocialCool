import React from "react";
import app from "../utils/firebase";
import { getFirestore, collection, query, getDocs } from "firebase/firestore";
import { List } from "semantic-ui-react";

function Topics() {
  const [topics, setTopics] = React.useState([]);

  React.useEffect(() => {
    async function fetchData() {
      const db = getFirestore(app);

      const q = query(collection(db, "topics"));

      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map((doc) => {
        return doc.data();
      });
      setTopics(data);
    }
    fetchData();
  }, []);

  return (
    <List animated selection>
      {topics.map((topic) => {
        return <List.Item key={topic.name}>{topic.name}</List.Item>;
      })}
    </List>
  );
}

export default Topics;
