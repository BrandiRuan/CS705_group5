import React from 'react';
import { Card } from 'antd';
import { CopyOutlined } from '@ant-design/icons';

const { Meta } = Card;

const Single = () => (
    <Card
        hoverable
        style={{
        width: 200
        }}
        cover={
            <div>
            <br/>
            <CopyOutlined style={{ fontSize: '50px', color:'#4D504E'}}/>
            </div>
        }
    >
        <Meta title="Ctrl + C" description="Copy the selected item."/>
    </Card>
);

export default Single;