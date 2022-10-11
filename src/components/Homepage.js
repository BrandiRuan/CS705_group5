
import React from 'react';
import { Button, Space } from 'antd';
import {useNavigate, useLocation } from 'react-router-dom';
import '../css/Homepage.css';
import Header from './Header'
import BannerAnim, { Element } from 'rc-banner-anim';
import TweenOne from 'rc-tween-one/lib/TweenOne';
import 'rc-banner-anim/assets/index.css';
import 'antd/dist/antd.min.css'
const BgElement = Element.BgElement;

const Homepage = (props) => {
    const history = useNavigate();
    const location = useLocation();

    return (
        <div className={'bottomMargin'}>
            <div>
                <Header history={props.history}></Header>
            </div>
            <div className='banner'>
                <BannerAnim prefixCls="banner-user" autoPlay>
                <Element
                    prefixCls="banner-user-elem"
                    key="0"
                >
                    <BgElement
                    key="bg"
                    className="bg bg1"
                    />
                    <TweenOne className="banner-user-title" animation={{ y: 30, opacity: 0, type: 'from' }}>
                        Welcome to the Fitts' Law learning platform!
                    </TweenOne>
                    <TweenOne className="banner-user-text"
                    animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
                    >
                        Zixuan Wang, Jiayu Wan, Nandi Ruan, Qiong Zhou, Bao Li, Kai Chen
                    </TweenOne>
                </Element>
                <Element
                    prefixCls="banner-user-elem"
                    key="1"
                >
                    <BgElement
                    key="bg"
                    className="bg"
                    />
                    <TweenOne className="banner-user-title" animation={{ y: 30, opacity: 0, type: 'from' }}>
                    Learn it and use it!
                    </TweenOne>
                    <TweenOne className="banner-user-text"
                    animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
                    >
                    Enjoy your learning trip!
                    </TweenOne>
                </Element>
                </BannerAnim>
            </div>
            <div id='buttonContainer'>
                <Button shape="round" size='large' className='homepageButton'onClick={() =>{history('/fitts')}} >Learn Fitts' Law</Button>
                <Button shape="round" size='large' className='homepageButton' onClick={() =>{history('/document')}} >Learn Document </Button>
                <Button shape="round" size='large' className='homepageButton'onClick={() =>{history('/tutorial')}} >Learn Toturial </Button>

                
            </div>
        </div>
)};

export default Homepage;
