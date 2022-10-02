import React, {useState} from "react";
import { Typography, Space,Button,Tooltip } from 'antd';
import {CopyOutlined, ScissorOutlined, RedoOutlined} from '@ant-design/icons';
import '../css/Tutorial.css';
import Keyboard from "./Keyboard";
import Header from "./Header";

const challenges=["copy", "cut", "refe"]


const CopyChallenge = () => <div className="questionContainer">
<CopyOutlined style={{ fontSize: '3.5rem', color:'#4D504E'}} className='questionIcon'/>
<span className="questionTitle">Copy the selected item.</span>
</div>

const CutChallenge = () => <div className="questionContainer">
<ScissorOutlined style={{ fontSize: '3.5rem', color:'#4D504E'}} className='questionIcon'/>
<span className="questionTitle">Cut the selected item.</span>
</div>

const RefreshChallenge = () => <div className="questionContainer">
<RedoOutlined style={{ fontSize: '3.5rem', color:'#4D504E'}} className='questionIcon'/>
<span className="questionTitle">Refersh the page.</span>
</div>

const challengeMap = {
    copy: {element: <CopyChallenge/>, correctAnswer:[["ControlLeft", "ContextMenu"], "KeyC"] },
    cut: {element: <CutChallenge/>, correctAnswer: [["ControlLeft", "ContextMenu"],"KeyX"]},
    refe: {element: <RefreshChallenge/>, correctAnswer: ["F5"]},
}

const Tutorial = (props) => {
    const { Title, Text, Link } = Typography;
    const [currentChallenge, setCurrentChallenge] = useState(0)
    const [finished, setFinished] = useState(false)
    return (
        <div>
            <Header></Header>
            <div id="tutorialContainer">
                <Title id="tutorialTitle">Keyboard Shortcuts in Windows</Title>
                <Title level={3}>Please answer the following question by clicking key(s) on virtual keyboard.</Title>
               {!finished && challengeMap[challenges[currentChallenge]].element}
               {finished && <span className="questionTitle">Congratulations!</span>}
            </div>
            <div id='tutorialKeyboard'>
                <Keyboard correctShortcut={ challengeMap[challenges[currentChallenge]].correctAnswer} onCorrect={() => currentChallenge === challenges.length - 1 ?setFinished(true):setCurrentChallenge(curr => curr+1)}/>
            </div>
            
        </div>    
    )
};

export default Tutorial;

