import React from 'react';
import { Typography, Space,Button,Tooltip } from 'antd';
import {
    RightCircleOutlined,
    CopyOutlined,
    SnippetsOutlined,
    ScissorOutlined,
    UndoOutlined,
    SwapOutlined,
    CloseOutlined,
    WindowsFilled,
    FontColorsOutlined,
    FileSearchOutlined,
    FileOutlined,
    RedoOutlined,
    CheckSquareOutlined,
    EyeOutlined,
    ForwardOutlined,
    ApiOutlined,
    EnterOutlined,
    ArrowsAltOutlined,
    ArrowLeftOutlined,
    ArrowRightOutlined,
    UpOutlined,
    DownOutlined,
    CloseCircleOutlined,
    CarryOutOutlined,
    DeleteOutlined,
    CaretRightOutlined,
    CaretLeftOutlined,
    RightOutlined,
    RollbackOutlined, AppstoreAddOutlined,
} from '@ant-design/icons';
import Header from './Header'
import Single from './Single';
import '../css/Document.css';
const { Title, Text, Link } = Typography;
const goToTutor = () => {
    // navigate('/tutorial')
}
const Document = (props) => (
    <div>
        <Header history={props.history}></Header>
        <div  id='documentContainer'>
            <Title id='tutorialTitle'>Keyboard Shortcuts in Windows</Title>
            <div className='icon_main'>
            <Space align='center' size={30} wrap={true} className="shortcutintro">
                <Single title={"Ctrl + C"} desc={'Copy the selected item.'} icon={<CopyOutlined style={{ fontSize: '3.5rem', color:'#4D504E'}}/>}/>
                <Single title={"Ctrl + V"} desc={'Paste the selected item.'} icon={ <SnippetsOutlined style={{ fontSize: '3.5rem', color:'#4D504E'}}/>}/>
                <Single title={"Ctrl + X"} desc={'Cut the selected item.'} icon={ <ScissorOutlined style={{ fontSize: '3.5rem', color:'#4D504E'}}/>}/>
                <Single title={"Ctrl + Z"} desc={'Undo/back to an action'} icon={ <UndoOutlined style={{ fontSize: '3.5rem', color:'#4D504E'}}/>}/>
                <Single title={"Alt + Tab"} desc={'Switch between open apps.'} icon={ <SwapOutlined style={{ fontSize: '3.5rem', color:'#4D504E'}}/>}/>
                <Single title={"Alt + F4"} desc={'Close the active item, or exit the active app.'} icon={ <CloseOutlined style={{ fontSize: '3.5rem', color:'#4D504E'}}/>}/>
                <Single title={"Wins + L"} desc={'Lock your computer/device.'} icon={<WindowsFilled style={{ fontSize: '3.5rem', color:'#4D504E'}}/>}/>
                <Single title={"Wins + D"} desc={'Display and hide the desktop.'} icon={<WindowsFilled style={{ fontSize: '3.5rem', color:'#4D504E'}}/>}/>
                <Single title={"F2"} desc={'Rename the selected item.'} icon={<FontColorsOutlined style={{ fontSize: '3.5rem', color:'#4D504E'}}/>}/>
                <Single title={"F3"} desc={'Search for a file or folder in File Explorer.'} icon={<FileSearchOutlined style={{ fontSize: '3.5rem', color:'#4D504E'}}/>}/>
                <Single title={"F4"} desc={'Display the address bar list in File Explorer.'} icon={<FileOutlined style={{ fontSize: '3.5rem', color:'#4D504E'}}/>}/>
                <Single title={"F5"} desc={'Refresh the active window.'} icon={<RedoOutlined style={{ fontSize: '3.5rem', color:'#4D504E'}}/>}/>
                <Single title={"F6"} desc={'Cycle through screen elements in a window or on the desktop.'} icon={<RedoOutlined style={{ fontSize: '3.5rem', color:'#4D504E'}}/>}/>
                <Single title={"F10"} desc={'Activate the Menu bar in the active app.'} icon={<CheckSquareOutlined style={{ fontSize: '3.5rem', color:'#4D504E'}}/>}/>
                <Single title={"Alt + F8"} desc={'Show your password on the sign-in screen.'} icon={<EyeOutlined style={{ fontSize: '3.5rem', color:'#4D504E'}}/>}/>
                <Single title={"Alt + Esc"} desc={'Cycle through items in the order in which they were opened.'} icon={<ForwardOutlined style={{ fontSize: '3.5rem', color:'#4D504E'}}/>}/>
                <Single title={"Alt + underlined"} desc={'Perform the command for that letter.'} icon={<ApiOutlined style={{ fontSize: '3.5rem', color:'#4D504E'}}/>}/>
                <Single title={"Alt + Enter"} desc={'Display properties for the selected item.'} icon={<EnterOutlined style={{ fontSize: '3.5rem', color:'#4D504E'}}/>}/>
                <Single title={"Alt + Spacebar"} desc={'Open the shortcut menu for the active window.'} icon={<ArrowsAltOutlined style={{ fontSize: '3.5rem', color:'#4D504E'}}/>}/>
                <Single title={"Alt + Left arrow"} desc={'Go back.'} icon={<ArrowLeftOutlined style={{ fontSize: '3.5rem', color:'#4D504E'}}/>}/>
                <Single title={"Alt + Right arrow"} desc={'Go forward.'} icon={<ArrowRightOutlined style={{ fontSize: '3.5rem', color:'#4D504E'}}/>}/>
                <Single title={"Alt + Page Up"} desc={'Move up one screen.'} icon={<UpOutlined style={{ fontSize: '3.5rem', color:'#4D504E'}}/>}/>
                <Single title={"Alt + Page Down"} desc={'Move down one screen.'} icon={<DownOutlined style={{ fontSize: '3.5rem', color:'#4D504E'}}/>}/>
                <Single title={"Ctrl + F4"} desc={'Close the active document.'} icon={<CloseCircleOutlined style={{ fontSize: '3.5rem', color:'#4D504E'}}/>}/>
                <Single title={"Ctrl + A"} desc={'Select all items in a document or window.'} icon={<CarryOutOutlined style={{ fontSize: '3.5rem', color:'#4D504E'}}/>}/>
                <Single title={"Ctrl + D (or Delete)"} desc={'Delete the selected item and move it to the Recycle Bin.'} icon={<DeleteOutlined style={{ fontSize: '3.5rem', color:'#4D504E'}}/>}/>
                <Single title={"Ctrl + R (or F5)"} desc={'Refresh the active window.'} icon={<RedoOutlined style={{ fontSize: '3.5rem', color:'#4D504E'}}/>}/>
                <Single title={"Ctrl + Y"} desc={'Redo an action.'} icon={<RedoOutlined style={{ fontSize: '3.5rem', color:'#4D504E'}}/>}/>
                <Single title={"Ctrl + Right arrow"} desc={'Move the cursor to the beginning of the next word.'} icon={<CaretRightOutlined style={{ fontSize: '3.5rem', color:'#4D504E'}}/>}/>
                <Single title={"Ctrl + Left arrow"} desc={'Move the cursor to the beginning of the previous word.'} icon={<CaretLeftOutlined style={{ fontSize: '3.5rem', color:'#4D504E'}}/>}/>
                <Single title={"Shift + Tab"} desc={'Move back through options.'} icon={<RollbackOutlined style={{ fontSize: '3.5rem', color:'#4D504E'}}/>}/>
                <Single title={"Wins + Tab"} desc={'Open Task view.'} icon={<AppstoreAddOutlined style={{ fontSize: '3.5rem', color:'#4D504E'}}/>}/>
            </Space>
            </div>
            <br/><br/><br/>
            <Space direction='vertical' size={30}>
                <Text type="secondary">*Shortcuts shown in this page is from Windows 10.</Text>
                <Title level={5}>For more official shortcuts of Windows and for more versions click&nbsp;
                    <Link href="https://support.microsoft.com/en-us/windows/keyboard-shortcuts-in-windows-dcc61a57-8ff0-cffe-9796-cb9706c75eec#WindowsVersion=Windows_10" target="_blank">
                    here
                    </Link>
                    .
                </Title>
                <Tooltip title="Tutorial">
                    <Link href={'/tutorial'}>
                        <Button onClick={goToTutor} shape="circle" icon={<RightOutlined />} size='large' />
                    </Link>
                </Tooltip>
                {/* <Button shape="circle" icon={<RightCircleOutlined />} size='large' /> */}
                <br/>
            </Space>
        </div>

    </div>
);

export default Document;
