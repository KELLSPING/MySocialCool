import React from "react";
import { Container, Header, Form, Image, Button } from "semantic-ui-react";
import app from "../utils/firebase";
import { getFirestore, collection, query, getDocs } from "firebase/firestore";

function NewPost() {
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");
  const [topics, setTopics] = React.useState([]);
  const [topicName, setTopicName] = React.useState("");
  const [file, setFile] = React.useState(null);

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

  const options = topics.map((topic) => {
    return {
      text: topic.name,
      value: topic.name,
    };
  });

  const previewUrl = file
    ? URL.createObjectURL(file)
    : "https://react.semantic-ui.com/images/wireframe/image.png";

  return (
    <Container>
      <Header>發表文章</Header>
      <Form>
        <Image src={previewUrl} size="small" alt="image" floated="left" />
        <Button basic as="label" htmlFor="post-image">
          上傳文章圖片
        </Button>
        <Form.Input
          type="file"
          id="post-image"
          style={{ display: "none" }}
          onChange={(e) => setFile(e.target.files[0])}
        />
        <Form.Input
          placeholder="輸入文章標題"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Form.TextArea
          placeholder="輸入文章內容"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Form.Dropdown
          placeholder="選擇文章主題"
          options={options}
          selection
          value={topicName}
          onChange={(e, { value }) => setTopicName(value)}
        />
        <Form.Button>送出</Form.Button>
      </Form>
    </Container>
  );
}

export default NewPost;
