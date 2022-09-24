import React from 'react';
import { Card } from 'antd';

const { Meta } = Card;

const Single = (props) => (
    <Card
        hoverable
        style={{
        width: 200,
        height: 200,
        // minWidth:'30rem',
        // minHeight:'30rem'
        }}
        cover={
            <div>
            <br/>
            {props.icon}
            </div>
        }
        headStyle={{
            textAlign:'center'
        }}
        bodyStyle={{
            textAlign:'center'
        }}
    >
        <Meta title={props.title} description={props.desc} style={{textAlign:'center', display:'block'}}/>
    </Card>
);

export default Single;