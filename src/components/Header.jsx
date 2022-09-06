import { Menu, Button } from 'antd';
import { HomeOutlined, FolderOutlined, FormOutlined, HighlightOutlined} from '@ant-design/icons';


const Header = () => (
    <>
    <Menu mode="horizontal" defaultSelectedKeys={['home']}>
        <Menu.Item key="logo">
            Logo
        </Menu.Item>

        <Menu.Item key="home" icon={<HomeOutlined />}>
            Home
        </Menu.Item>

        <Menu.Item key="document" icon={<FolderOutlined />}>
            Document
        </Menu.Item>

        <Menu.Item key="toturial" icon={<FormOutlined />}>
            Tutorial
        </Menu.Item>

        <Menu.Item key="test" icon={<HighlightOutlined />}>
            Test
        </Menu.Item>

        <Menu.Item key="contact" style={{ marginLeft: 'auto' }}>
            <Button shape='round'>Contact us</Button>
        </Menu.Item>
    </Menu>
    <br/>
    </>
  );
export default Header;