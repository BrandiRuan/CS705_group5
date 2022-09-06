
import React from 'react';
import { Button, Space } from 'antd';
import './Homepage.css';

const Homepage = () => (
    <div className='main'>
        <div class="content">
            <h1 className='title'>Welcome to the Shortcut Key Learning Platform</h1>
            <p>Group 5: Jiayu Wan, Zixuan Wang, Kai Chen, Nandi Ruan, Qiong Zhou, Bao Li</p>
        </div>
        <Space size={160} className='buttons'>
            <Button size={'large'} shape={'round'}>Learn Document</Button>
            <Button size={'large'} shape={'round'}>Learn Document</Button>
            <Button size={'large'} shape={'round'}>Learn Document</Button>
        </Space>
        <img className="mainphoto" 
                src="https://i.pcmag.com/imagery/articles/02wnrVjrFlym5xtNmiE0c4J-9..v1629748559.jpg" />
    </div>
);

export default Homepage;