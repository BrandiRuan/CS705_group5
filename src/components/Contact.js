import { Typography, Avatar, List } from 'antd';
import React from 'react';
import Header from './Header';
import '../css/Contact.css';

const data = [
  {
    title: 'Zixuan Wang',
    description: "zwan843@aucklanduni.ac.nz",
    picture: 'https://joeschmoe.io/api/v1/jenni'
  },
  {
    title: 'Jiayu Wan',
    description: "jwan574@aucklanduni.ac.nz",
    picture: 'https://joeschmoe.io/api/v1/jenni'
  },
  {
    title: 'Nandi Ruan',
    description: "nrua090@aucklanduni.ac.nz",
    picture: 'https://joeschmoe.io/api/v1/jenni'
  },
  {
    title: 'Qiong Zhou',
    description: "qzho906@aucklanduni.ac.nz",
    picture: 'https://joeschmoe.io/api/v1/jenni'
  },
  {
    title: 'Bao Li',
    description: "bli621@aucklanduni.ac.nz",
    picture: 'https://joeschmoe.io/api/v1/jon'
  },
  {
    title: 'Kai Chen',
    description: "kche355@aucklanduni.ac.nz",
    picture: 'https://joeschmoe.io/api/v1/jon'
  }

];
const { Title, Text, Link } = Typography;
const Contact = () => (
    <div>  
        <Header></Header>
        <div id='contactContainer'>
          <Title className='tutorialTitle'>Contact us</Title>
          <Title level={3}>Group 5 Team Members:</Title>
          <br/>
          <div >
              <List className='contactList'
                  itemLayout="horizontal"
                  dataSource={data}
                  bordered={true}
                  renderItem={(item) => (
                  <List.Item>
                      <List.Item.Meta
                      avatar={<Avatar src={item.picture} />}
                      title={item.title}
                      description={<Text type="secondary" copyable>{item.description}</Text>}
                      />
                  </List.Item>
                  )}
              />
              <br/>
              <Text type="secondary">From School of Computer Science, University of Auckland</Text>
          </div>
        </div>

  </div>
);

export default Contact;