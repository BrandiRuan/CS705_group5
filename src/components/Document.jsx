import React from 'react';
import { Card, Typography, Space } from 'antd';
import { RightCircleOutlined } from '@ant-design/icons';
import Single from './Single';

const { Meta } = Card;
const { Title, Text, Link } = Typography;

const Document = () => (
    <div>
        <Title>Keyboard Shortcuts in Windows</Title>
        <Space direction='vertical' size={30}>
            <Space align='center' size={30}>
                <Single />
                <Single />
                <Single />
                <Single />
                <Single />
                <Single />
            </Space>
            <Space align='center' size={30}>
                <Single />
                <Single />
                <Single />
                <Single />
                <Single />
                <Single />
            </Space>
            <Space align='center' size={30}>
                <Single />
                <Single />
                <Single />
                <Single />
                <Single />
                <Single />
            </Space>
            <Space align='center' size={30}>
                <Single />
                <Single />
                <Single />
                <Single />
                <Single />
                <Single />
            </Space>
            <Space align='center' size={30}>
                <Single />
                <Single />
                <Single />
                <Single />
                <Single />
                <Single />
            </Space>
            <Text type="secondary">*Shortcuts shown in this page is from Windows 10.</Text>
            <Title level={5}>For more official shortcuts of Windows and for more versions click&nbsp;
                <Link href="https://support.microsoft.com/en-us/windows/keyboard-shortcuts-in-windows-dcc61a57-8ff0-cffe-9796-cb9706c75eec#WindowsVersion=Windows_10" target="_blank">
                 here
                </Link>
                .
            </Title>
            <RightCircleOutlined style={{ fontSize: '80px'}} />
            <br/>
        </Space>
    </div>
);

export default Document;