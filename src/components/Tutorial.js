import React from "react";
import { Typography, Space,Button,Tooltip } from 'antd';
import {CopyOutlined} from '@ant-design/icons';
import '../css/Tutorial.css';
import Keyboard from "./Keyboard";
import Header from "./Header";
const Tutorial = (props) => {
    const { Title, Text, Link } = Typography;
    return (
        <div>
            <Header></Header>
            <div id="tutorialContainer">
                <Title id="tutorialTitle">Keyboard Shortcuts in Windows</Title>
                <Title level={3}>Please answer the following question by clicking key(s) on virtual keyboard.</Title>
                <div className="questionContainer">
                    <CopyOutlined style={{ fontSize: '3.5rem', color:'#4D504E'}} className='questionIcon'/>
                    <span className="questionTitle">Copy the selected item.</span>
                </div>
            </div>
            <div id='tutorialKeyboard'>
                <Keyboard></Keyboard>
            </div>
            
        </div>    
    )
};

export default Tutorial;