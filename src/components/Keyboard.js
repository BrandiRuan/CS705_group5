import React, { useEffect, useState } from "react";
import '../css/Keyboard.css';
import { Col, Row } from 'antd';

import {WindowsOutlined,SwapLeftOutlined,ArrowUpOutlined,ArrowLeftOutlined,ArrowDownOutlined,ArrowRightOutlined} from '@ant-design/icons';

const Keyboard = ({correctShortcut, onCorrect}) => {   

    const [keyDownMap, setKeyDownMap] = useState(new Map())
    const handleKeyDownEvent = (event) => {console.log(event.key);event.preventDefault();setKeyDownMap(keyDownMap =>new Map(keyDownMap.set(event.code, true)))}
    const handleKeyUpEvent = (event) => {setKeyDownMap(keyDownMap =>new Map(keyDownMap.set(event.code, false)))}
    useEffect(()=> {
        window.addEventListener('keydown', handleKeyDownEvent)
        window.addEventListener('keyup', handleKeyUpEvent)
        return ()=>{window.removeEventListener('keydown', handleKeyDownEvent)
        window.removeEventListener('keyup', handleKeyUpEvent)
    }
    }, [])

    useEffect(()=>{
       const keysDown = Array.from(keyDownMap.entries()).filter(pair => pair[1]).map(pair=>pair[0])
       if(keysDown.length !== correctShortcut.length) {
        return
       }
       if(correctShortcut.every(answer => {
        console.log("answer:")
        console.log(answer)
        console.log(Array.isArray(answer)? answer.some(k => keysDown.includes(k)) : keysDown.includes(answer))
        return Array.isArray(answer)? answer.some(k => keysDown.includes(k)) : keysDown.includes(answer)})){
        onCorrect()
       }

    },[correctShortcut, keyDownMap, onCorrect])

    console.log(keyDownMap)
    return (
        <div id="keyboardContainer">
            {/* 键盘第一行 */}
            <Row wrap={false} className="rowItem"
                gutter={{
                    xs: 1,
                    sm: 2,
                    md: 4,
                    lg: 8,
                }}
                >
                <Col className="gutter-row" flex={1}>
                    <div className={`keyboardNormalItem${keyDownMap.get("F1") ? " keyboardActiveItem":""}`}>F1</div>
                </Col>
                <Col className="gutter-row" flex={1}>
                    <div className={`keyboardNormalItem${keyDownMap.get("F2") ? " keyboardActiveItem":""}`}>F2</div>
                </Col>
                <Col className="gutter-row" flex={1}>
                    <div className={`keyboardNormalItem${keyDownMap.get("F3") ? " keyboardActiveItem":""}`}>F3</div>
                </Col>
                <Col className="gutter-row" flex={1}>
                    <div className={`keyboardNormalItem${keyDownMap.get("F4") ? " keyboardActiveItem":""}`}>F4</div>
                </Col>
                <Col className="gutter-row" flex={1}>
                    <div className={`keyboardNormalItem${keyDownMap.get("F5") ? " keyboardActiveItem":""}`}>F5</div>
                </Col>
                <Col className="gutter-row" flex={1}>
                    <div className={`keyboardNormalItem${keyDownMap.get("F6") ? " keyboardActiveItem":""}`}>F6</div>
                </Col>
                <Col className="gutter-row" flex={1}>
                    <div className={`keyboardNormalItem${keyDownMap.get("F7") ? " keyboardActiveItem":""}`}>F7</div>
                </Col>
                <Col className="gutter-row" flex={1}>
                    <div className={`keyboardNormalItem${keyDownMap.get("F8") ? " keyboardActiveItem":""}`}>F8</div>
                </Col>
                <Col className="gutter-row" flex={1}>
                    <div className={`keyboardNormalItem${keyDownMap.get("F9") ? " keyboardActiveItem":""}`}>F9</div>
                </Col>
                <Col className="gutter-row" flex={1}>
                    <div className={`keyboardNormalItem${keyDownMap.get("F10") ? " keyboardActiveItem":""}`}>F10</div>
                </Col>
                <Col className="gutter-row" flex={1}>
                    <div className={`keyboardNormalItem${keyDownMap.get("F11") ? " keyboardActiveItem":""}`}>F11</div>
                </Col>
                <Col className="gutter-row" flex={1}>
                    <div className={`keyboardNormalItem${keyDownMap.get("F12") ? " keyboardActiveItem":""}`}>F12</div>
                </Col>
            </Row>
            {/* 键盘第二行 */}
            <Row wrap={false} className="rowItem"
                gutter={{
                    xs: 1,
                    sm: 2,
                    md: 4,
                    lg: 8,
                }}
                >
                <Col className="gutter-row" flex={1}>
                    <div  className={`keyboardNormalItem${keyDownMap.get("Digit1")? " keyboardActiveItem":""}`}>1</div>
                </Col>
                <Col className="gutter-row" flex={1}>
                    <div className={`keyboardNormalItem${keyDownMap.get("Digit2") ? " keyboardActiveItem":""}`}>2</div>
                </Col>
                <Col className="gutter-row" flex={1}>
                    <div className={`keyboardNormalItem${keyDownMap.get("Digit3") ? " keyboardActiveItem":""}`}>3</div>
                </Col>
                <Col className="gutter-row" flex={1}>
                    <div className={`keyboardNormalItem${keyDownMap.get("Digit4") ? " keyboardActiveItem":""}`}>4</div>
                </Col>
                <Col className="gutter-row" flex={1}>
                    <div className={`keyboardNormalItem${keyDownMap.get("Digit5") ? " keyboardActiveItem":""}`}>5</div>
                </Col>
                <Col className="gutter-row" flex={1}>
                    <div className={`keyboardNormalItem${keyDownMap.get("Digit6") ? " keyboardActiveItem":""}`}>6</div>
                </Col>
                <Col className="gutter-row" flex={1}>
                    <div className={`keyboardNormalItem${keyDownMap.get("Digit7") ? " keyboardActiveItem":""}`}>7</div>
                </Col>
                <Col className="gutter-row" flex={1}>
                    <div className={`keyboardNormalItem${keyDownMap.get("Digit8") ? " keyboardActiveItem":""}`}>8</div>
                </Col>
                <Col className="gutter-row" flex={1}>
                    <div className={`keyboardNormalItem${keyDownMap.get("Digit9") ? " keyboardActiveItem":""}`}>9</div>
                </Col>
                <Col className="gutter-row" flex={1}>
                    <div className={`keyboardNormalItem${keyDownMap.get("Digit0") ? " keyboardActiveItem":""}`}>0</div>
                </Col>
                <Col className="gutter-row" flex={1}>
                    <div className={`keyboardNormalItem${keyDownMap.get("Minus") ? " keyboardActiveItem":""}`}>
                        <span className="doubleText1 ">—</span>
                        <span className="doubleText2">-</span>
                    </div>
                </Col>
                <Col className="gutter-row" flex={1}>
                    <div className={`keyboardNormalItem${keyDownMap.get("Equal") ? " keyboardActiveItem":""}`}>
                        <span className="doubleText1">+</span>
                        <span className="doubleText2">=</span>
                    </div>
                </Col>
                <Col className="gutter-row" flex={1}>
                    <div className={`keyboardNormalItem${keyDownMap.get("Backspace") ? " keyboardActiveItem":""}`}><SwapLeftOutlined /></div>
                </Col>
            </Row>
            {/* 键盘第三行 */}
            <Row wrap={false} className="rowItem"
                gutter={{
                    xs: 1,
                    sm: 2,
                    md: 4,
                    lg: 8,
                }}
                >
                <Col className="gutter-row" flex={1}>
                    <div className={`keyboardNormalItem ${keyDownMap.get("Tab") ? " keyboardActiveItem":""}`}>tab</div>
                </Col>
                <Col className="gutter-row" flex={1}>
                    <div  className={`keyboardNormalItem${keyDownMap.get("KeyQ") ? " keyboardActiveItem":""}`}>Q</div>
                </Col>
                <Col className="gutter-row" flex={1}>
                    <div className={`keyboardNormalItem${keyDownMap.get("KeyW") ? " keyboardActiveItem":""}`}>W</div>
                </Col>
                <Col className="gutter-row" flex={1}>
                    <div className={`keyboardNormalItem${keyDownMap.get("KeyE") ? " keyboardActiveItem":""}`}>E</div>
                </Col>
                <Col className="gutter-row" flex={1}>
                    <div className={`keyboardNormalItem${keyDownMap.get("KeyR") ? " keyboardActiveItem":""}`}>R</div>
                </Col>
                <Col className="gutter-row" flex={1}>
                    <div className={`keyboardNormalItem${keyDownMap.get("KeyT") ? " keyboardActiveItem":""}`}>T</div>
                </Col>
                <Col className="gutter-row" flex={1}>
                    <div className={`keyboardNormalItem${keyDownMap.get("KeyY") ? " keyboardActiveItem":""}`}>Y</div>
                </Col>
                <Col className="gutter-row" flex={1}>
                    <div className={`keyboardNormalItem${keyDownMap.get("KeyU") ? " keyboardActiveItem":""}`}>U</div>
                </Col>
                <Col className="gutter-row" flex={1}>
                    <div className={`keyboardNormalItem${keyDownMap.get("KeyI") ? " keyboardActiveItem":""}`}>I</div>
                </Col>
                <Col className="gutter-row" flex={1}>
                    <div className={`keyboardNormalItem${keyDownMap.get("KeyO") ? " keyboardActiveItem":""}`}>O</div>
                </Col>
                <Col className="gutter-row" flex={1}>
                    <div className={`keyboardNormalItem${keyDownMap.get("KeyP") ? " keyboardActiveItem":""}`}>P</div>
                </Col>
                <Col className="gutter-row" flex={1}>
                    <div className={`keyboardNormalItem${keyDownMap.get("BracketLeft") ? " keyboardActiveItem":""}`}>
                        <span className="doubleText1">&#123;</span>
                        <span className="doubleText2">&#91;</span>
                    </div>
                </Col>
                <Col className="gutter-row" flex={1}>
                    <div className={`keyboardNormalItem${keyDownMap.get("BracketRight") ? " keyboardActiveItem":""}`}>
                        <span className="doubleText1">&#125;</span>
                        <span className="doubleText2">&#93;</span>
                    </div>
                </Col>
                <Col className="gutter-row" flex={1}>
                    <div className={`keyboardNormalItem${keyDownMap.get("Backslash") ? " keyboardActiveItem":""}`}>
                        <span className="doubleText1">&#124;</span>
                        <span className="doubleText2">\</span>
                    </div>
                </Col>
            </Row>
            {/* 键盘第四行 */}
            <Row wrap={false} className="rowItem"
                gutter={{
                    xs: 1,
                    sm: 2,
                    md: 4,
                    lg: 8,
                }}
                >
                <Col className="gutter-row" flex={2}>
                    <div className={`keyboardDoubleItem keyboardSpecialItem${keyDownMap.get("CapsLock") ? " keyboardActiveItem":""}`}>caps lock</div>
                </Col>
                <Col className="gutter-row" flex={1}>
                    <div className={`keyboardNormalItem${keyDownMap.get("KeyA") ? " keyboardActiveItem":""}`}>A</div>
                </Col>
                <Col className="gutter-row" flex={1}>
                    <div className={`keyboardNormalItem${keyDownMap.get("KeyS") ? " keyboardActiveItem":""}`}>S</div>
                </Col>
                <Col className="gutter-row" flex={1}>
                    <div className={`keyboardNormalItem${keyDownMap.get("KeyD") ? " keyboardActiveItem":""}`}>D</div>
                </Col>
                <Col className="gutter-row" flex={1}>
                    <div className={`keyboardNormalItem${keyDownMap.get("KeyF") ? " keyboardActiveItem":""}`}>F</div>
                </Col>
                <Col className="gutter-row" flex={1}>
                    <div className={`keyboardNormalItem${keyDownMap.get("KeyG") ? " keyboardActiveItem":""}`}>G</div>
                </Col>
                <Col className="gutter-row" flex={1}>
                    <div className={`keyboardNormalItem${keyDownMap.get("KeyH") ? " keyboardActiveItem":""}`}>H</div>
                </Col>
                <Col className="gutter-row" flex={1}>
                    <div className={`keyboardNormalItem${keyDownMap.get("KeyJ") ? " keyboardActiveItem":""}`}>J</div>
                </Col>
                <Col className="gutter-row" flex={1}>
                    <div className={`keyboardNormalItem${keyDownMap.get("KeyK") ? " keyboardActiveItem":""}`}>K</div>
                </Col>
                <Col className="gutter-row" flex={1}>
                    <div className={`keyboardNormalItem${keyDownMap.get("KeyL") ? " keyboardActiveItem":""}`}>L</div>
                </Col>
                <Col className="gutter-row" flex={1}>
                    <div className={`keyboardNormalItem${keyDownMap.get("Semicolon") ? " keyboardActiveItem":""}`}>
                        <span className="doubleText1">&#58;</span>
                        <span className="doubleText2">&#59;</span>
                    </div>
                </Col>
                <Col className="gutter-row" flex={1}>
                    <div className={`keyboardNormalItem${keyDownMap.get("Quote") ? " keyboardActiveItem":""}`}>
                        <span className="doubleText1">&#8221;</span>
                        <span className="doubleText2">&#8217;</span>
                    </div>
                </Col>
                <Col className="gutter-row" flex={3}>
                    <div className='keyboardTripleItem keyboardSpecialItem'>Return</div>
                </Col>
            </Row>
            {/* 键盘第五行 */}
            <Row wrap={false} className="rowItem"
                gutter={{
                    xs: 1,
                    sm: 2,
                    md: 4,
                    lg: 8,
                }}
                >
                <Col className="gutter-row" flex={3}>
                    <div className={`keyboardNormalItem${keyDownMap.get("ShiftLeft") ? " keyboardActiveItem":""}`}>shfit</div>
                </Col>
                <Col className="gutter-row" flex={1}>
                    <div className={`keyboardNormalItem${keyDownMap.get("KeyZ") ? " keyboardActiveItem":""}`}>Z</div>
                </Col>
                <Col className="gutter-row" flex={1}>
                    <div className={`keyboardNormalItem${keyDownMap.get("KeyX") ? " keyboardActiveItem":""}`}>X</div>
                </Col>
                <Col className="gutter-row" flex={1}>
                    <div className={`keyboardNormalItem${keyDownMap.get("KeyC") ? " keyboardActiveItem":""}`}>C</div>
                </Col>
                <Col className="gutter-row" flex={1}>
                    <div className={`keyboardNormalItem${keyDownMap.get("KeyV") ? " keyboardActiveItem":""}`}>V</div>
                </Col>
                <Col className="gutter-row" flex={1}>
                    <div className={`keyboardNormalItem${keyDownMap.get("KeyB") ? " keyboardActiveItem":""}`}>B</div>
                </Col>
                <Col className="gutter-row" flex={1}>
                    <div className={`keyboardNormalItem${keyDownMap.get("KeyN") ? " keyboardActiveItem":""}`}>N</div>
                </Col>
                <Col className="gutter-row" flex={1}>
                    <div className={`keyboardNormalItem${keyDownMap.get("KeyM") ? " keyboardActiveItem":""}`}>M</div>
                </Col>
                <Col className="gutter-row" flex={1}>
                    <div className={`keyboardNormalItem${keyDownMap.get("Comma") ? " keyboardActiveItem":""}`}>
                        <span className="doubleText1">&#60;</span>
                        <span className="doubleText2">&#44;</span>
                    </div>
                </Col>
                <Col className="gutter-row" flex={1}>
                    <div className={`keyboardNormalItem${keyDownMap.get("Period") ? " keyboardActiveItem":""}`}>
                        <span className="doubleText1">&#62;</span>
                        <span className="doubleText2">&#46;</span>
                    </div>
                </Col>
                <Col className="gutter-row" flex={1}>
                    <div className={`keyboardNormalItem${keyDownMap.get("Slash") ? " keyboardActiveItem":""}`}>
                        <span className="doubleText1">&#63;</span>
                        <span className="doubleText2">&#47;</span>
                    </div>
                </Col>
                <Col className="gutter-row" flex={1}>
                    <div className='keyboardNormalItem keyboardSpecialItem'><ArrowUpOutlined /></div>
                </Col>
                <Col className="gutter-row" flex={1}>
                    <div className='keyboardEmptyItem'></div>
                </Col>
            </Row>
            {/* 键盘第六行 */}
            <Row wrap={false} className="rowItem"
                gutter={{
                    xs: 1,
                    sm: 2,
                    md: 4,
                    lg: 8,
                }}
                >
                <Col className="gutter-row" flex={2}>
                <div className={`keyboardNormalItem${keyDownMap.get("ControlLeft") ? " keyboardActiveItem":""}`}>ctrl</div>
                </Col>
                <Col className="gutter-row" flex={1}>
                    <div className={`keyboardNormalItem${keyDownMap.get("MetaLeft") ? " keyboardActiveItem":""}`}><WindowsOutlined /></div>
                </Col>
                <Col className="gutter-row" flex={1}>
                <div className={`keyboardNormalItem${keyDownMap.get("AltLeft") ? " keyboardActiveItem":""}`}>alt</div>
                </Col>
                <Col className="gutter-row" flex={1}>
                    <div className={`keyboardSpaceItem${keyDownMap.get("Space") ? " keyboardActiveItem":""}`}></div>
                </Col>
                <Col className="gutter-row" flex={1}>
                    <div className={`keyboardNormalItem${keyDownMap.get("AltRight") ? " keyboardActiveItem":""}`}>alt</div>
                </Col>
                <Col className="gutter-row" flex={1}>
                    <div className={`keyboardNormalItem${keyDownMap.get("fn") ? " keyboardActiveItem":""}`}>fn</div>
                </Col>
                <Col className="gutter-row" flex={1}>
                    <div className={`keyboardNormalItem${keyDownMap.get("ControlRight") ? " keyboardActiveItem":""}`}>ctrl</div>
                </Col>
                <Col className="gutter-row" flex={1}>
                    <div className='keyboardNormalItem keyboardSpecialItem'><ArrowLeftOutlined /></div>
                </Col>
                <Col className="gutter-row" flex={1}>
                    <div className='keyboardNormalItem keyboardSpecialItem'><ArrowDownOutlined /></div>
                </Col>
                <Col className="gutter-row" flex={1}>
                    <div className='keyboardNormalItem keyboardSpecialItem'><ArrowRightOutlined /></div>
                </Col>
            </Row>
        </div>    
    )
};

export default Keyboard;