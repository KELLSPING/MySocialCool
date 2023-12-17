import React from "react";
import { Menu, Form, Container } from "semantic-ui-react";

function SignIn() {
  const [activeItem, setActiveItem] = React.useState("signin");

  return (
    <Container>
      <Menu widths={2}>
        <Menu.Item
          active={activeItem === "register"}
          onClick={() => setActiveItem("register")}
        >
          註冊
        </Menu.Item>
        <Menu.Item
          active={activeItem === "signin"}
          onClick={() => setActiveItem("signin")}
        >
          登入
        </Menu.Item>
      </Menu>
      <Form>
        <Form.Input label="信箱" value="" placeholder="請輸入信箱" />
        <Form.Input label="密碼" value="" placeholder="請輸入密碼" />
        <Form.Button>
            {activeItem === 'register' && '註冊'}
            {activeItem === 'signin' && '登入'}
        </Form.Button>
      </Form>
    </Container>
  );
}

export default SignIn;
