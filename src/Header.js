import { Menu, Search } from "semantic-ui-react";

function Header() {
    return <Menu>
        <Menu.Item>Social Cool</Menu.Item>
        <Menu.Item>
            <Search></Search>
        </Menu.Item>
        <Menu.Menu position="right">
            <Menu.Item>註冊/登入</Menu.Item>
        </Menu.Menu>
    </Menu>
}

export default Header;