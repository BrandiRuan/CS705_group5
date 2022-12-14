import React, {useEffect} from "react";
import {Typography, Space, Button, Tooltip, Drawer, Table, Badge, Descriptions, message,Col, Row, Statistic } from 'antd';
import {CopyOutlined} from '@ant-design/icons';
import {useNavigate, useLocation } from 'react-router-dom';
import Header from "./Header";
import '../css/new Tutorial.css';
import {Slider, Switch} from 'antd';
import {useState, useRef} from 'react';
import userEvent from "@testing-library/user-event";

// import Countdown from "react-countdown";
message.config({
    // top: 500,
    duration: 2,
    maxCount: 1,

});



// const cb = () =>{
//     console.log(1)
// }

// const OPTIONS = {
//     prefix: "Please enjoy your time",
//     cb
// }

// const CountdownWrapper = () => {
//   return <Countdown date={Date.now() + 1000} options={OPTIONS}/>;
// };

// const MemoCountdown = React.memo(CountdownWrapper);



const Tutorial = (props) => {
    const test = Date.now()
    const originData = [
        {
            key: '1',
            No: '01',
            Tag: 'button',
            Name: 'ButtonA',
            Type: 'button',
            ReachTime: 'H+M+P',
            ManipulationTime: '2*B',
            selected: false,
        },
        {
            key: '2',
            No: '02',
            Tag: 'button',
            Name: 'ButtonB',
            Type: 'button',
            ReachTime: 'H+M+P',
            ManipulationTime: '2*B',
            selected: false,
        },
        {
            key: '3',
            No: '03',
            Tag: 'button',
            Name: 'ButtonC',
            Type: 'button',
            ReachTime: 'H+M+P',
            ManipulationTime: '2*B',
            selected: false,
        },
        {
            key: '4',
            No: '04',
            Tag: 'button',
            Name: 'ButtonD',
            Type: 'button',
            ReachTime: 'H+M+P',
            ManipulationTime: '2*B',
            selected: false,
        },
    ];

    const nextData = [
        {
            key: '#nextBtn',
            No: '05',
            Tag: 'button',
            Name: 'Next Button',
            Type: 'button',
            ReachTime: 'H+M+P',
            ManipulationTime: '2*B',
            selected: false,
        },
        ]

    const againData = [
        {
            key: '#againBtn',
            No: '06',
            Tag: 'button',
            Name: 'Again Button',
            Type: 'button',
            ReachTime: 'H+M+P',
            ManipulationTime: '2*B',
            selected: false,
        },
    ]
    const [time,setTime] = useState(test)
    const [disabled, setDisabled] = useState(false);
    // ???????????????list
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    // ??????drawer?????????drawer
    const [open, setOpen] = useState(false);
    const [chooseButton, setChooseButton] = useState(null);
    const openRef = useRef(false)
    const chooseBtnRef = useRef(null)
    const [distance, setDistance] = useState(15);
    const [size, setSize] = useState(Number((15 / 100 * 25).toFixed(1)));
    const [currentData, setCurrentData] = useState([]);

    const [selectedResult, setSelectedResult] = useState(false);
    const selectedResultRef = useRef(false);
    const [selectedResultBoolean, setSelectedResultBoolean] = useState(false);
    const [questionNum, setQuestionNum] = useState(0);
    const questionNumRef = useRef(0);
    const score = useRef(0)
    const [data, setData] = useState(originData);
    const {Title, Text, Link} = Typography;
    const [display, setDisplay] = useState('none');
    const [sliderStatus, setSliderStatus] = useState(false)
    const history = useNavigate();
    const location = useLocation();
    // countdown??????

    const { Countdown } = Statistic;
    const deadline = time + 1000 * 60 * 3 + 1000 ; // Momen
    // const deadline = time + 1000 * 1
    // const CountdownWrapper = () => {return <Countdown title="Please enjoy your time" value={deadline} onFinish={countdownEnd} id='countdown' style={{display:sliderStatus?'none':'block'}}/>};
    // const MemoCountdown = React.memo(CountdownWrapper);

    const countdownEnd = () => {
        console.log('finished!');
        setDisplay('inline-block')
        setSliderStatus(true)
        setOpen(false);
      };
    

    const clickGroup1 = () =>{
        history('/group1')
    }
    const clickGroup2 = () =>{
        history('/group2')
    }
    const questionList = [
        {
            question: 'Copy text, picture or file',
            answerList: ['Ctrl + C', 'Ctrl + V', 'Ctrl + X', 'Ctrl + Z'],
            correctAnswerIndex: 0,
        },
        {
            question: 'Refresh the active window.',
            answerList: ['F9', 'Ctrl + R', 'Alt + C', 'F5'],
            correctAnswerIndex: 3,
        },
        {
            question: 'Undo/back to an action',
            answerList: ['Ctrl + A', 'Ctrl + Z', 'Ctrl + C', 'Alt + SpaceBar'],
            correctAnswerIndex: 1,
        },
        {
            question: 'Close the active document.',
            answerList: ['Ctrl + F4', 'Alt + Enter', 'Ctrl + Y', 'Alt + Esc'],
            correctAnswerIndex: 0,
        },
        {
            question: 'Rename the selected item.',
            answerList: ['F2', 'Wins + L', 'Ctrl + D', 'F10'],
            correctAnswerIndex: 0,
        },
        {
            question: 'Switch between open apps.',
            answerList: ['Alt + SpaceBar', 'Wins + D', 'Alt + Tab', 'Alt + underlined'],
            correctAnswerIndex: 2,
        },
        {
            question: 'Lock your computer/device.',
            answerList: ['Ctrl + F4', 'Ctrl + A', 'Wins + L', 'Alt + PageUp'],
            correctAnswerIndex: 2,
        },
        {
            question: 'Search for a file or folder in File Explorer.',
            answerList: ['Ctrl + F3', 'F3', 'Alt + F8', 'Ctrl + D'],
            correctAnswerIndex: 1,
        },
        {
            question: 'Redo an action.',
            answerList: ['Ctrl + Z', 'Ctrl + Y', 'Alt + Left arrow', 'Alt + Right arrow'],
            correctAnswerIndex: 1,
        },
        {
            question: 'Move back through options.',
            answerList: ['Alt + Tab', 'shift + Page Up', 'Ctrl + Page Up', 'Shift + Tab'],
            correctAnswerIndex: 3,
        }
    ]
    const answer1Config = [
        {
            key: '1',
            label: questionList[questionNum].answerList[0],
            onClick: () => {
                if(!sliderStatus){
                    setChooseButton({key: '1'});
                    if (questionList[questionNum].correctAnswerIndex === 0) {
                        correctInfo()
                    } else {
                        wrongInfo()
                    }
                }

            },
        },
        {
            key: '2',
            label: questionList[questionNum].answerList[1],
            onClick: () => {
                if(!sliderStatus){
                    setChooseButton({key: '2'});
                    if (questionList[questionNum].correctAnswerIndex === 1) {
                        correctInfo()
                    } else {
                        wrongInfo()
                    }
                }

            },
        }
    ]


    const answer2Config = [
        {
            key: '3',
            label: questionList[questionNum].answerList[2],
            onClick: () => {
                if(!sliderStatus){
                    setChooseButton({key: '3'});
                    if (questionList[questionNum].correctAnswerIndex === 2) {
                        correctInfo()
                    } else {
                        wrongInfo()
                    }
                }

            },
        },
        {
            key: '4',
            label: questionList[questionNum].answerList[3],
            onClick: () => {
                if(!sliderStatus){
                    setChooseButton({key: '4'});
                    if (questionList[questionNum].correctAnswerIndex === 3) {
                        correctInfo()
                    } else {
                        wrongInfo()
                    }
                }

            },
        }
    ]

    const marginChange = (newValue) => {
        setDistance(newValue);
    }
    useEffect(() => {
        // ???chooseBtnRef.current??????chooseButton
        chooseBtnRef.current = chooseButton
    }, [chooseButton])

    useEffect(() => {
        selectedResultRef.current = selectedResult
    }, [selectedResult])
    useEffect(() => {
        questionNumRef.current = questionNum
    }, [questionNum])


    const sizeChange = (newValue) => {
        // ???0-100?????????0-6???????????????1???????????????????????????????????????
        setSize(Number((newValue / 100 * 25).toFixed(1)));
    }

    const correctInfo = () => {
        /*        message.success({
                    content: 'This is a prompt message with custom className and style',
                    className: 'custom-class',
                    style: {
                        marginTop: '500',
                        width: '400'
                    },
                });*/
        score.current = score.current+1
        setSelectedResult(true)
        setSelectedResultBoolean(true)
        const correctBtn = document.querySelector('#correctAnswerDiv')
        correctBtn.classList.add('correct')
    };

    const wrongInfo = () => {
        setSelectedResult(true)
        setSelectedResultBoolean(false)
        const correctBtn = document.querySelector('#correctAnswerDiv')
        correctBtn.classList.add('false')
    };

    function again() {
        clickNext()
        score.current=0
        setQuestionNum(0)
    }

    function handleMouseMove(e) {
        try {
        e.preventDefault();
        // console.log(e.clientX, e.clientY);

        let _data
        if (!selectedResultRef.current) {
            _data = originData
        }else{
            if(questionNumRef.current+1<questionList.length){
                _data = nextData
            }else{
                _data = againData
            }
        }
        let resultData = _data.map((item) => {
            const btn = document.querySelector(selectedResultRef.current?item.key:`#button${item.key}`)

            //??????btn?????????????????????
            const btnRect = btn.getBoundingClientRect();
            /* console.log(e.clientX, e.clientY);
             console.log(btnRect)*/
            const btnCenterX = btnRect.left + btnRect.width / 2;
            const btnCenterY = btnRect.top + btnRect.height / 2;
            //??????btnReact???????????????????????????fitts law?????????
            const distance = Math.sqrt(Math.pow(e.clientX - btnCenterX, 2) + Math.pow(e.clientY - btnCenterY, 2))
            //??????distance?????????fitts???MT
            const MT = Math.log2(distance / btnRect.width + 1) * distance / distance
            // console.log(distance,MT)

            //??????btnReact?????????????????????????????????????????????
            const angle = -Math.atan2(e.clientY - btnCenterY, e.clientX - btnCenterX) * 180 / Math.PI
            return {
                ...item, ...{
                    Button: item.Name,
                    MT: MT.toFixed(2),
                    Distance: distance.toFixed(2),
                    Angle: angle.toFixed(2),
                    ButtonWidth: btnRect.width.toFixed(2),
                    MousePosition: e.clientX + ', ' + e.clientY,
                }
            }
        })

        setData(resultData)
        if (!openRef.current) {
            document.removeEventListener('mousemove', handleMouseMove)
        }
        } catch (e) {
            document.removeEventListener('mousemove', handleMouseMove)
        }
    }

    function showDrawer() {
        if(!sliderStatus){
            document.addEventListener('mousemove', throttle(handleMouseMove, 100))
            setOpen(true);
            openRef.current = true
        }


    }

    function onClose() {
        setOpen(false);
        openRef.current = false
        setChooseButton(null)
        chooseBtnRef.current = null
    }

    function clickNext() {
        setSelectedResult(false)
        const correctBtn = document.querySelector('#correctAnswerDiv')
        correctBtn.classList.remove('correct')
        correctBtn.classList.remove('false')
        if (questionNum+1<questionList.length){ //length=10  questionNum=9?????????10
            setQuestionNum(questionNum+1)
        }
    }

    // ????????????
    const onSelectChange = (newSelectedRowKeys) => {
        setSelectedRowKeys(newSelectedRowKeys);
        console.log('selectedRowKeys changed: ', selectedRowKeys);
    };

    // table??????????????????
    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    };
    const chooseRow = (record) => {
        console.log(record);
        setChooseButton(record);
    }
    const calcRowClass = (record, index) => {
        if (!chooseButton) {
            return 'customRow';
        }
        if (record.key === chooseButton.key) {
            return 'rowChoose customRow';
        } else {
            return 'customRow';
        }
    }
    const columns = [
        {
            title: 'No',
            dataIndex: 'No',
            key: 'No',
        },
        /*   {
               title: 'Tag',
               dataIndex: 'Tag',
               key: 'Tag',
           },*/
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
            title: 'Movement Time(MT/s)',
            dataIndex: 'MT',
            key: 'MT',
        },
        {
            title: 'Mouse position(a/px)',
            dataIndex: 'MousePosition',
            key: 'MousePosition',
        },
        {
            title: 'Angle(b??)',
            dataIndex: 'Angle',
            key: 'Angle',
        },
        {
            title: 'Distance(D/px)',
            dataIndex: 'Distance',
            key: 'Distance',
        },
        {
            title: 'Button Width(W/px)',
            dataIndex: 'ButtonWidth',
            key: 'ButtonWidth',
        },
        /*     {
                 title: 'ReachTime',
                 dataIndex: 'ReachTime',
                 key: 'ReachTime',
             },*/
        // {
        //     title: 'ManipulationTime',
        //     dataIndex: 'ManipulationTime',
        //     key: 'ManipulationTime',
        // },
    ];
    const currentColumns = [
        {
            title: 'Button',
            dataIndex: 'Button',
            key: 'Button',
        },
        {
            title: 'MT',
            dataIndex: 'MT',
            key: 'MT',
        },
        {
            title: 'Mouse position(a)',
            dataIndex: 'MousePosition',
            key: 'MousePosition',
        },
        {
            title: 'Angle(b)',
            dataIndex: 'Angle',
            key: 'Angle',
        },
        {
            title: 'Distance(D)',
            dataIndex: 'Distance',
            key: 'Distance',
        },
        {
            title: 'Button Width(W)',
            dataIndex: 'ButtonWidth',
            key: 'ButtonWidth',
        },
    ];

    //?????????????????????????????????
    function throttle(fn, delay) {
        let timer = null;
        return function () {
            if (!timer) {
                timer = setTimeout(() => {
                    fn.apply(this, arguments);
                    timer = null;
                }, delay)
            }
        }
    }
    let calcMTPredicted = () => {
        if (!selectedRowKeys || selectedRowKeys.length === 0) {
            return 0;
        }
        if (selectedRowKeys.length === 1) {
            const result = data.find(item => item.key === selectedRowKeys[0])
            return result&&result.MT
        }


       const res= selectedRowKeys.map((item, index) => {
            const currentMTObj = data.find(_item => _item.key === item)
           if (currentMTObj&&currentMTObj.MT){
               return Number(currentMTObj.MT)
           }else{
               return 0
           }
        })

         const res2 =   res.reduce((pre, cur) => {
            return pre + cur
        })
        return res2.toFixed(2)
    };
    return (
        <div className={'testMainDiv bottomMargin'}>
            <Header></Header>
            <div className={'tabMainContainer'}>
                <div className={'testLeftDiv'}>
                    <div id="testContainer">
                        <Title id="tutorialTitle">Please use slider to change button distances and sizes to see the different visualization.</Title>
                        <Title level={4} id="tutorialTitle" style={{marginBottom:40}}>Please don't worry about the correct answer. Just focus on the experience on visulization</Title>
                        <div id="controllerContainer">
                            <div className="sliderContainer">
                                <span>Button Distance</span>
                                <Slider defaultValue={15} disabled={sliderStatus} className="slider"
                                        onChange={marginChange}/>
                            </div>
                            <div className="sliderContainer">
                                <span>Button Size</span>
                                <Slider defaultValue={15} disabled={sliderStatus} className="slider" onChange={sizeChange}/>
                            </div>
                            <Button type={"primary"} shape="round" size='middle' className='checkButton'
                                    onClick={showDrawer}>Fitts' Law Visulization</Button>
                        </div>
                        <div className={'answerContainer'}>
                            {/*??????answer1Config????????????????????????div????????????openItem???*/}
                            <Title id="quizTitle">Q{questionNum+1}. {questionList[questionNum].question}</Title>
                            <div id="optionContainer">

                                {!selectedResult && answer1Config.map((item, index) => {
                                    let _style = {
                                        margin: `${distance / 2}px ${distance}px`,
                                        width: `${size + 20}%`,
                                        height: `${size / 5 + 2}rem`
                                    }
                                    if (open && chooseButton && (chooseButton.key === item.key)) {
                                        _style = {..._style, boxShadow: 'grey 0px 0px 5px 8px inset'};
                                    }
                                    return (

                                            <div key={item.key} className={'optionButton'} id={'button' + item.key}
                                                 onClick={item.onClick}
                                                 style={_style}>
                                                <span>{item.label}</span>
                                            </div>

                                    )
                                })}
                            </div>
                            <div id="optionContainer">
                                {!selectedResult && answer2Config.map((item, index) => {
                                    let _style = {
                                        margin: `${distance / 2}px ${distance}px`,
                                        width: `${size + 20}%`,
                                        height: `${size / 5 + 2}rem`
                                    }
                                    if (open && chooseButton && (chooseButton.key === item.key)) {
                                        _style = {..._style, boxShadow: 'grey 0px 0px 5px 8px inset'};
                                    }
                                    return (

                                            <div className={'optionButton'} key={item.key} id={'button' + item.key}
                                                 onClick={item.onClick}
                                                 style={_style}>
                                                <span>{item.label}</span>
                                            </div>
                                    )
                                })}
                            </div>
                            { <div className={'showAnswerDiv'} style={{display:selectedResult?'flex':'none'}}>
                                <Title level={4}>
                                    Correct Answer:
                                </Title>
                                <div id={'correctAnswerDiv'} className={'correctBase'}>
                                    {
                                        <span>{questionList[questionNum].answerList[[questionList[questionNum].correctAnswerIndex]]}</span>}
                                </div>
                            </div>}
                            { selectedResult &&<div className={selectedResultBoolean?'correctIcon':'falseIcon'}>
                                {selectedResultBoolean?'???':'???'}
                            </div>}
                            {selectedResult && questionNum+1!==questionList.length&& <Button id={'nextBtn'} onClick={clickNext} className={'nextBtn'}>
                                Next
                            </Button>}
                            {selectedResult&&questionNum+1===questionList.length&&<div className={'scoreDiv'}>
                                Your Score Is: {score.current*10}/100
                                <Button id={'againBtn'} className={'againBtn'} onClick={again}>Play again?</Button>
                            </div>}
                        </div>
                        {open  && <>
                            <img src={require('../image/whatsFittsLaw2.png')} alt="" className={'whatsFittsLawImg'}/>
                            <img src={require('../image/whatsFittsLaw.png')} alt="" className={'whatsFittsLawImg lawSecondImg'}/></>}
                        <div className="countdownContainer">
                            <Row>
                                <Col span={12} offset={6}>
                                    <Countdown title="Please enjoy your time" value={deadline} onFinish={countdownEnd} id='countdown' style={{display:sliderStatus?'none':'block'}}/>
                                </Col>
                            </Row>
                            
                            <div className="buttonGroup">
                                <Title level={5} style={{display:`${display}`}} className="groupTitle">Please choose your group. If you are not sure please ask for help from any team member of us.</Title>
                                <Button className="groupButtonItem" style={{display:`${display}`}} shape="round" size="large" onClick={clickGroup1}>Observe</Button>
                                <Button className="groupButtonItem" style={{display:`${display}`}} shape="round" size="large" onClick={clickGroup2}>Observe & Click</Button>
                                
                            </div>
                        </div>
                    </div>
                </div>
                {open && <div className={'rightDrawer'}>
                    {/* ????????????????????????????????? */}
                    <div className="flResultContainer">

                        <div className={'fittsLawHeader'}>
                            <Title level={3}>Fitt's Law Calculation</Title>
                            <div className={'closeIcon'} onClick={onClose}>??</div>
                        </div>
                        <Table columns={columns} dataSource={data} pagination={false} rowSelection={rowSelection}
                               onRow={record => {
                                   return {
                                       onClick: event => {
                                           chooseRow(record)
                                       }, //
                                   }
                               }}
                               rowClassName={(record, index) => {
                                   return calcRowClass(record, index)
                               }
                               }
                        />
                    </div>
                    <br/>
                    <br/>
                    {/* ????????????????????????????????? */}
                    <div className="flCalContainer">
                        <div className={'fittsLawHeader'}>
                            <Title level={3}>Fitt's Law Result</Title>

                        </div>
                        <Descriptions bordered column={1}>
                            <Descriptions.Item label="MT Formula">MT = a + b * log<sub>2</sub> * (2 *
                                D/W)</Descriptions.Item>
                            <Descriptions.Item label="MT Sum Up">{
                                selectedRowKeys.sort().map((item, index) => {
                                    const result = data.find((item1) => item1.key === item);
                                    return <span>{result&&result.MT}{result&&result.MT&&index !== selectedRowKeys.length - 1 ? ' + ' : ''}</span>
                                })
                            }</Descriptions.Item>
                            <Descriptions.Item label="MT Predicted Time(sec)">{calcMTPredicted()}</Descriptions.Item>
                        </Descriptions>
                    </div>
                </div>}

            </div>

        </div>
    )
};

export default Tutorial;
