import React, {useState} from "react";
import { Typography, Space,Button,Tooltip } from 'antd';
import {
    CopyOutlined,
    ScissorOutlined,
    RedoOutlined,
    UndoOutlined,
    CloseOutlined,
    FontColorsOutlined, SwapOutlined, WindowsFilled, FileSearchOutlined, RollbackOutlined
} from '@ant-design/icons';
import '../css/Tutorial.css';
import Keyboard from "./Keyboard";
import Header from "./Header";



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

const UndoChallenge = () => <div className="questionContainer">
    <UndoOutlined style={{ fontSize: '3.5rem', color:'#4D504E'}} className='questionIcon'/>
    <span className="questionTitle">Undo/back to an action.</span>
</div>
const RedoChallenge = () => <div className="questionContainer">
    <RedoOutlined style={{ fontSize: '3.5rem', color:'#4D504E'}} className='questionIcon'/>
    <span className="questionTitle">Redo an action.</span>
</div>
const CloseActiveChallenge = () => <div className="questionContainer">
    <CloseOutlined style={{ fontSize: '3.5rem', color:'#4D504E'}} className='questionIcon'/>
    <span className="questionTitle">Close the active document.</span>
</div>

const RenameChallenge = () => <div className="questionContainer">
    <FontColorsOutlined style={{ fontSize: '3.5rem', color:'#4D504E'}} className='questionIcon'/>
    <span className="questionTitle">Rename the selected item.</span>
</div>

const SwitchAPPChallenge = () => <div className="questionContainer">
    <SwapOutlined style={{ fontSize: '3.5rem', color:'#4D504E'}} className='questionIcon'/>
    <span className="questionTitle">Switch between open apps.</span>
</div>

const LockAPPChallenge = () => <div className="questionContainer">
    <WindowsFilled style={{ fontSize: '3.5rem', color:'#4D504E'}} className='questionIcon'/>
    <span className="questionTitle">Lock your computer/device.</span>
</div>

const SearchFileChallenge = () => <div className="questionContainer">
    <FileSearchOutlined style={{ fontSize: '3.5rem', color:'#4D504E'}} className='questionIcon'/>
    <span className="questionTitle">Search for a file or folder in File Explorer.</span>
</div>

const MoveBackChallenge = () => <div className="questionContainer">
    <RollbackOutlined style={{ fontSize: '3.5rem', color:'#4D504E'}} className='questionIcon'/>
    <span className="questionTitle">Move back through options.</span>
</div>

const challengeMap = {
    copy: {element: <CopyChallenge/>, correctAnswer:[["ControlLeft", "ContextMenu","ControlRight"], "KeyC"] },
    cut: {element: <CutChallenge/>, correctAnswer: [["ControlLeft", "ContextMenu","ControlRight"],"KeyX"]},
    refe: {element: <RefreshChallenge/>, correctAnswer: ["F5"]},
    undo: {element: <UndoChallenge/>, correctAnswer: [["ControlLeft", "ContextMenu","ControlRight"], "KeyZ"]},
    closeActive: {element: <CloseActiveChallenge/>, correctAnswer: [["ControlLeft", "ContextMenu","ControlRight"], "F4"]},
    rename: {element: <RenameChallenge/>, correctAnswer: ["F2"]},
    switch: {element: <SwitchAPPChallenge/>, correctAnswer: [["AltLeft","AltRight"],"Tab"]},
    lock: {element: <LockAPPChallenge/>, correctAnswer: [["MetaLeft","MetaRight"],"KeyL"]},
    searchFile: {element: <SearchFileChallenge/>, correctAnswer: ["F3"]},
    redo:{element: <RedoChallenge/>, correctAnswer: [["ControlLeft", "ContextMenu","ControlRight"], "KeyY"]},
    moveBack: {element: <MoveBackChallenge/>, correctAnswer: [["ShiftLeft","ShiftRight"],"Tab"]},
}
const challenges=Object.keys(challengeMap)

const Tutorial = (props) => {
    const { Title, Text, Link } = Typography;
    const [currentChallenge, setCurrentChallenge] = useState(0)
    const [finished, setFinished] = useState(false)

    const learnAgain = () => {
        setCurrentChallenge(0)
        setFinished(false)
        setFinished(false)
    }
    return (
        <div className={'bottomMargin'}>
            <Header></Header>
            <div id="tutorialContainer">
                <Title id="tutorialTitle">Keyboard Shortcuts in Windows</Title>
                <Title style={{textAlign:'center'}} level={3}>Please answer the following questions by clicking key(s) on the virtual keyboard on the screen or by operating the physical keyboard.</Title>
                {!finished && challengeMap[challenges[currentChallenge]].element}
                {finished && <div className={'keyboardCongrats'}>
                    <div className="questionTitle">Congratulations!</div>
                    <Button className={'customBtn'} onClick={learnAgain}>Learn again!</Button>
                </div>}
            </div>
            <div id='tutorialKeyboard'>
                <Keyboard correctShortcut={ challengeMap[challenges[currentChallenge]].correctAnswer} onCorrect={() => currentChallenge === challenges.length - 1 ?setFinished(true):setCurrentChallenge(curr => curr+1)}/>
            </div>

        </div>
    )
};

export default Tutorial;

