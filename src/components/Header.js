import { Menu, Button } from 'antd';
import { HomeOutlined, FolderOutlined, FormOutlined, HighlightOutlined,ContactsFilled} from '@ant-design/icons';
import {useNavigate, useLocation } from 'react-router-dom';
import {useState} from 'react';
import logo from '../image/coverImg15.jpg'
import '../css/Header.css';

const Header = (pros) => {
    const items = [
        {
          label: 'Homepage',
          key: '/homepage',
          icon: <HomeOutlined />,
          onClick: () => {history('/homepage')}
        },
        {
          label: 'Learning Fitts Law',
          key: '/fitts',
          icon: <HighlightOutlined />,
          onClick: () => {history('/fitts')}
        },
        {
          label: 'Document',
          key: '/document',
          icon: <FolderOutlined />,
          onClick: () => {history('/document')}
        },
        {
          label: 'Tutorial',
          key: '/tutorial',
          icon: <FormOutlined />,
          onClick: () => {history('/tutorial')}
        },
        {
          label: 'Test',
          key: '/test',
          icon: <HighlightOutlined />,
          onClick: () => {history('/test')}
        },
      ];
    const history = useNavigate();
    const location = useLocation();

    return(
      <div id='headerContainer'>
        <div className='logoContainer' onClick={() =>{history('/homepage')}}>
          {/* <img src={logo} alt="Logo"/> */}
        </div>
        <Menu selectedKeys={location.pathname} mode="horizontal" items={items} style={{backgroundColor:'transparent', width: '95%', float:'left', height:'3rem'}}/>
        <div>
          <Button shape="round" icon={<ContactsFilled />} size='large' id='contactButton' onClick={() =>{history('/contact')}}>Contact Us </Button>
        </div>
      </div>
    )
};
export default Header;