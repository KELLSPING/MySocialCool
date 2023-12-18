import React from "react";

import { Menu, Search } from "semantic-ui-react";

import { Link } from "react-router-dom";

import { getAuth, onAuthStateChanged } from "firebase/auth";

function Header() {
  const auth = getAuth();

  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    // Get the currently signed-in user
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in.
        const uid = user.uid;
        setUser(user);
      } else {
        // User is signed out.
        setUser(null);
      }
    });
  }, []);

  return (
    <Menu>
      <Menu.Item as={Link} to="/">
        Social Cool
      </Menu.Item>
      <Menu.Item>
        <Search></Search>
      </Menu.Item>
      <Menu.Menu position="right">
        {user ? (
          <>
            <Menu.Item as={Link} to="/newpost">
              發表文章
            </Menu.Item>
            <Menu.Item as={Link} to="/myaccount">
              會員
            </Menu.Item>
            <Menu.Item onClick={() => auth.signOut()}>登出</Menu.Item>
          </>
        ) : (
          <Menu.Item as={Link} to="/signin">
            註冊/登入
          </Menu.Item>
        )}
      </Menu.Menu>
    </Menu>
  );
}

export default Header;
