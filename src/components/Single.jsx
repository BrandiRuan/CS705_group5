import React from 'react';
import { Card } from 'antd';

const { Meta } = Card;

const Single = (props) => (
    <Card
        hoverable
        style={{
        width: 200,
        height: 200
        }}
        cover={
            <div>
            <br/>
            {props.icon}
            </div>
        }
    >
        <Meta title={props.title} description={props.desc} />
    </Card>
);

export default Single;