import React from "react";
import { Typography, Space,Button,Tooltip,Drawer,Table,Badge,Descriptions,message  } from 'antd';
import {CopyOutlined} from '@ant-design/icons';
import Header from "./Header";
import '../css/Test.css';
import { Slider, Switch } from 'antd';
import { useState, useRef} from 'react';
import userEvent from "@testing-library/user-event";

message.config({
    // top: 500,
    duration: 2,
    maxCount: 1,

  });

const Test = (props) => {
    const [disabled, setDisabled] = useState(false);
    const { Title, Text, Link } = Typography;
    const sizeChange = (newValue) => {

    }

    const marginChange = (newValue) => {

    }

    const correctInfo = () => {
        message.success({
            content: 'This is a prompt message with custom className and style',
            className: 'custom-class',
            style: {
              marginTop: '500',
              width:'400'
            },
          });
    };

    const wrongInfo = () => {
        message.error('This is a normal message');
    };

    // 创建选中项list
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);

    // 打开drawer与关闭drawer
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
      setOpen(true);
    };
    const onClose = () => {
      setOpen(false);
    };

    // 执行回调
    const onSelectChange = (newSelectedRowKeys) => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        setSelectedRowKeys(newSelectedRowKeys);
    };

    // table选中操作回调
    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    };
    const columns = [
        {
            title: 'No',
            dataIndex: 'No',
            key: 'No',
        },
        {
            title: 'Tag',
            dataIndex: 'Tag',
            key: 'Tag',
        },
        {
            title: 'Name',
            dataIndex: 'Name',
            key: 'Name',
        },
        {
            title: 'Type',
            dataIndex: 'Type',
            key: 'Type',
        },
        {
            title: 'ReachTime',
            dataIndex: 'ReachTime',
            key: 'ReachTime',
        },
        {
            title: 'ManipulationTime',
            dataIndex: 'ManipulationTime',
            key: 'ManipulationTime',
        },
      ];

    // The data of Fits' law result table
    const data = [
        {
            key: '1',
            No: '01',
            Tag: 'button',
            Name: 'ButtonA',
            Type: 'button',
            ReachTime: 'H+M+P',
            ManipulationTime: '2*B',
        },
        {
            key: '2',
            No: '02',
            Tag: 'button',
            Name: 'ButtonA',
            Type: 'button',
            ReachTime: 'H+M+P',
            ManipulationTime: '2*B',
          },
          {
            key: '3',
            No: '03',
            Tag: 'button',
            Name: 'ButtonA',
            Type: 'button',
            ReachTime: 'H+M+P',
            ManipulationTime: '2*B',
          },
          {
            key: '4',
            No: '04',
            Tag: 'button',
            Name: 'ButtonA',
            Type: 'button',
            ReachTime: 'H+M+P',
            ManipulationTime: '2*B',
          },
          
      ];


    return (
        <div>
            <Header></Header>
            <div id="testContainer">
                <Title id="tutorialTitle">For each question, please select the correct answer below.</Title>
                <div id="controllerContainer">
                    <div className="sliderContainer">
                        <span>Button Distence</span>
                        <Slider defaultValue={30} disabled={disabled} className="slider" onChange={sizeChange} />
                    </div>
                    <div className="sliderContainer">
                        <span>Button Size</span>
                        <Slider defaultValue={30} disabled={disabled} className="slider" onChange={marginChange}/>
                    </div>
                    <Button shape="round" size='middle' className='checkButton' onClick={showDrawer}>Fitts' Law Visulization</Button>
                </div>
                <div id="quizContainer">
                    <Title id="quizTitle">Q1. Copy text, picture or file</Title>

                    <div id="optionContainer">
                        <div className="optionItem">
                            <button className="optionButton" onClick={wrongInfo}>Alt + C</button>
                        </div>
                        <div className="optionItem">
                            <button className="optionButton" onClick={correctInfo} >Ctrl + C</button>
                        </div>
                        <div className="optionItem">
                            <button className="optionButton" onClick={wrongInfo} >Alt + V</button>
                        </div>
                        <div className="optionItem">
                            <button className="optionButton" onClick={wrongInfo} >Ctrl + V</button>
                        </div>
                    </div>
                </div>
                <Drawer title="Fitts' Law Visulization" placement="right" onClose={onClose} open={open} size={"large"}>
                    {/* 右侧抽屉打开后的第一个 */}
                    <div className="flResultContainer">
                        <Title level={3}>Fitt's Law Result</Title>
                        <Table columns={columns} dataSource={data} pagination={false} rowSelection={rowSelection} />
                    </div>
                    <br/>
                    <br/>
                    {/* 右侧抽屉打开后的第二个 */}
                    <div className="flCalContainer">
                        <Title level={3}>Fitt's Law Calculation</Title>
                        <Descriptions bordered column={1} >
                            <Descriptions.Item label="KLM Result">H+M+P+2*B+M+P+2*B+M+P+2*B+M+P+2*B</Descriptions.Item>
                            <Descriptions.Item label="KLM Sum Up">H+4M+4P+8B</Descriptions.Item>
                            <Descriptions.Item label="KLM Predicted Time(sec)">11.6</Descriptions.Item>
                        </Descriptions>
                    </div>
                </Drawer>
            </div>
        </div>    
    )
};

export default Test;