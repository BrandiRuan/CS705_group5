import React from "react";
import '../css/Keyboard.css';
import { Col, Row } from 'antd';
import {WindowsOutlined,SwapLeftOutlined,ArrowUpOutlined,ArrowLeftOutlined,ArrowDownOutlined,ArrowRightOutlined} from '@ant-design/icons';
const Keyboard = (props) => {


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
                    <div className='keyboardNormalItem'>F1</div>
                </Col>
                <Col className="gutter-row" flex={1}>
                    <div className='keyboardNormalItem'>F2</div>
                </Col>
                <Col className="gutter-row" flex={1}>
                    <div className='keyboardNormalItem'>F3</div>
                </Col>
                <Col className="gutter-row" flex={1}>
                    <div className='keyboardNormalItem'>F4</div>
                </Col>
                <Col className="gutter-row" flex={1}>
                    <div className='keyboardNormalItem'>F5</div>
                </Col>
                <Col className="gutter-row" flex={1}>
                    <div className='keyboardNormalItem'>F6</div>
                </Col>
                <Col className="gutter-row" flex={1}>
                    <div className='keyboardNormalItem'>F7</div>
                </Col>
                <Col className="gutter-row" flex={1}>
                    <div className='keyboardNormalItem'>F8</div>
                </Col>
                <Col className="gutter-row" flex={1}>
                    <div className='keyboardNormalItem'>F9</div>
                </Col>
                <Col className="gutter-row" flex={1}>
                    <div className='keyboardNormalItem'>F10</div>
                </Col>
                <Col className="gutter-row" flex={1}>
                    <div className='keyboardNormalItem'>F11</div>
                </Col>
                <Col className="gutter-row" flex={1}>
                    <div className='keyboardNormalItem'>F12</div>
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
                    <div className='keyboardNormalItem'>1</div>
                </Col>
                <Col className="gutter-row" flex={1}>
                    <div className='keyboardNormalItem'>2</div>
                </Col>
                <Col className="gutter-row" flex={1}>
                    <div className='keyboardNormalItem'>3</div>
                </Col>
                <Col className="gutter-row" flex={1}>
                    <div className='keyboardNormalItem'>4</div>
                </Col>
                <Col className="gutter-row" flex={1}>
                    <div className='keyboardNormalItem'>5</div>
                </Col>
                <Col className="gutter-row" flex={1}>
                    <div className='keyboardNormalItem'>6</div>
                </Col>
                <Col className="gutter-row" flex={1}>
                    <div className='keyboardNormalItem'>7</div>
                </Col>
                <Col className="gutter-row" flex={1}>
                    <div className='keyboardNormalItem'>8</div>
                </Col>
                <Col className="gutter-row" flex={1}>
                    <div className='keyboardNormalItem'>9</div>
                </Col>
                <Col className="gutter-row" flex={1}>
                    <div className='keyboardNormalItem'>0</div>
                </Col>
                <Col className="gutter-row" flex={1}>
                    <div className='keyboardNormalItem'>
                        <span className="doubleText1">—</span>
                        <span className="doubleText2">-</span>
                    </div>
                </Col>
                <Col className="gutter-row" flex={1}>
                    <div className='keyboardNormalItem'>
                        <span className="doubleText1">+</span>
                        <span className="doubleText2">=</span>
                    </div>
                </Col>
                <Col className="gutter-row" flex={1}>
                    <div className='keyboardNormalItem keyboardSpecialItem'><SwapLeftOutlined /></div>
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
                    <div className='keyboardNormalItem keyboardSpecialItem'>tab</div>
                </Col>
                <Col className="gutter-row" flex={1}>
                    <div className='keyboardNormalItem'>Q</div>
                </Col>
                <Col className="gutter-row" flex={1}>
                    <div className='keyboardNormalItem'>W</div>
                </Col>
                <Col className="gutter-row" flex={1}>
                    <div className='keyboardNormalItem'>E</div>
                </Col>
                <Col className="gutter-row" flex={1}>
                    <div className='keyboardNormalItem'>R</div>
                </Col>
                <Col className="gutter-row" flex={1}>
                    <div className='keyboardNormalItem'>T</div>
                </Col>
                <Col className="gutter-row" flex={1}>
                    <div className='keyboardNormalItem'>Y</div>
                </Col>
                <Col className="gutter-row" flex={1}>
                    <div className='keyboardNormalItem'>U</div>
                </Col>
                <Col className="gutter-row" flex={1}>
                    <div className='keyboardNormalItem'>I</div>
                </Col>
                <Col className="gutter-row" flex={1}>
                    <div className='keyboardNormalItem'>O</div>
                </Col>
                <Col className="gutter-row" flex={1}>
                    <div className='keyboardNormalItem'>P</div>
                </Col>
                <Col className="gutter-row" flex={1}>
                    <div className='keyboardNormalItem'>
                        <span className="doubleText1">&#123;</span>
                        <span className="doubleText2">&#91;</span>
                    </div>
                </Col>
                <Col className="gutter-row" flex={1}>
                    <div className='keyboardNormalItem'>
                        <span className="doubleText1">&#125;</span>
                        <span className="doubleText2">&#93;</span>
                    </div>
                </Col>
                <Col className="gutter-row" flex={1}>
                    <div className='keyboardNormalItem'>
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
                    <div className='keyboardDoubleItem keyboardSpecialItem'>caps lock</div>
                </Col>
                <Col className="gutter-row" flex={1}>
                    <div className='keyboardNormalItem'>A</div>
                </Col>
                <Col className="gutter-row" flex={1}>
                    <div className='keyboardNormalItem'>S</div>
                </Col>
                <Col className="gutter-row" flex={1}>
                    <div className='keyboardNormalItem'>D</div>
                </Col>
                <Col className="gutter-row" flex={1}>
                    <div className='keyboardNormalItem'>F</div>
                </Col>
                <Col className="gutter-row" flex={1}>
                    <div className='keyboardNormalItem'>G</div>
                </Col>
                <Col className="gutter-row" flex={1}>
                    <div className='keyboardNormalItem'>H</div>
                </Col>
                <Col className="gutter-row" flex={1}>
                    <div className='keyboardNormalItem'>J</div>
                </Col>
                <Col className="gutter-row" flex={1}>
                    <div className='keyboardNormalItem'>K</div>
                </Col>
                <Col className="gutter-row" flex={1}>
                    <div className='keyboardNormalItem'>L</div>
                </Col>
                <Col className="gutter-row" flex={1}>
                    <div className='keyboardNormalItem'>
                        <span className="doubleText1">&#58;</span>
                        <span className="doubleText2">&#59;</span>
                    </div>
                </Col>
                <Col className="gutter-row" flex={1}>
                    <div className='keyboardNormalItem'>
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
                    <div className='keyboardTripleItem keyboardSpecialItem'>shfit</div>
                </Col>
                <Col className="gutter-row" flex={1}>
                    <div className='keyboardNormalItem'>Z</div>
                </Col>
                <Col className="gutter-row" flex={1}>
                    <div className='keyboardNormalItem'>X</div>
                </Col>
                <Col className="gutter-row" flex={1}>
                    <div className='keyboardNormalItem'>C</div>
                </Col>
                <Col className="gutter-row" flex={1}>
                    <div className='keyboardNormalItem'>V</div>
                </Col>
                <Col className="gutter-row" flex={1}>
                    <div className='keyboardNormalItem'>B</div>
                </Col>
                <Col className="gutter-row" flex={1}>
                    <div className='keyboardNormalItem'>N</div>
                </Col>
                <Col className="gutter-row" flex={1}>
                    <div className='keyboardNormalItem'>M</div>
                </Col>
                <Col className="gutter-row" flex={1}>
                    <div className='keyboardNormalItem'>
                        <span className="doubleText1">&#60;</span>
                        <span className="doubleText2">&#44;</span>
                    </div>
                </Col>
                <Col className="gutter-row" flex={1}>
                    <div className='keyboardNormalItem'>
                        <span className="doubleText1">&#62;</span>
                        <span className="doubleText2">&#46;</span>
                    </div>
                </Col>
                <Col className="gutter-row" flex={1}>
                    <div className='keyboardNormalItem'>
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
                    <div className='keyboardDoubleItem keyboardSpecialItem'>ctrl</div>
                </Col>
                <Col className="gutter-row" flex={1}>
                    <div className='keyboardNormalItem keyboardSpecialItem'><WindowsOutlined /></div>
                </Col>
                <Col className="gutter-row" flex={1}>
                    <div className='keyboardNormalItem keyboardSpecialItem'>alt</div>
                </Col>
                <Col className="gutter-row" flex={1}>
                    <div className='keyboardSpaceItem'></div>
                </Col>
                <Col className="gutter-row" flex={1}>
                    <div className='keyboardNormalItem'>alt</div>
                </Col>
                <Col className="gutter-row" flex={1}>
                    <div className='keyboardNormalItem'>fn</div>
                </Col>
                <Col className="gutter-row" flex={1}>
                    <div className='keyboardNormalItem'>ctrl</div>
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