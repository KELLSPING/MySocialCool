import { Grid } from "semantic-ui-react";

function Posts() {
  return (
    <Grid>
      <Grid.Row>
        <Grid.Column width={3}>主題列表</Grid.Column>
        <Grid.Column width={10}>貼文列表</Grid.Column>
        <Grid.Column width={3}>空白</Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default Posts;
