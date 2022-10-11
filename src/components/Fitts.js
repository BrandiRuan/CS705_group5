import { Typography, Image, Divider, Space} from 'antd';
import React from 'react';
import Header from "./Header";
import "../css/Fitts.css";
import pic1 from '../image/Picture1.png'
import pic2 from '../image/Picture2.png'

const { Title, Text, Link } = Typography;

const Fitts = () => (
    <div>
      <Header></Header>
      <div id='fittsContainer'>
        <Title id='tutorialTitle'>What is Fitts' Law?</Title>
        <Title level={4} id="tutorialTitle" style={{marginBottom:40}}>Please read and watch the video carefully.</Title>
        {/* intro */}
        <div className='FittsMain'>
          <div className='FittsIntro'>
            <p>
            <strong>Fitts' law</strong> is a model for predicting performance of human movement in computer interaction [1]. Fitts' law states that the amount of time required for a person to move a pointer (e.g., mouse cursor) to a target area is a function of the distance to the target divided by the size of the target. Thus, the longer the distance and the smaller the target's size, the longer it takes [4].
            </p>
            <p>
            <strong>Fitts' law</strong> is widely applied in user experience (UX) and user interface (UI) design. For example, this law influenced the convention of making interactive buttons large (especially on finger-operated mobile devices)—smaller buttons are more difficult (and time-consuming) to click. Likewise, the distance between a user's task/attention area and the task-related button should be kept as short as possible [4].
            </p>
            <Image className='Fittsimage1'
              src="https://media.nngroup.com/media/articles/opengraph_images/FittsLaw-Application_89.png"
            />
            <Divider />
            <div className='FittsVideo'>
              <Title level={3}>A Video to introduce the Fitts' Law</Title>
              <iframe allowFullScreen className='FittsToutube' src="https://www.youtube.com/embed/0OPmsy7SXoM" >
              </iframe>
            </div>
          </div>
          <Divider />

          {/* Calculation of Fitts’ Law */}
          <div className='calculate'>
            <Title level={2}>Calculation of Fitts' Law</Title>
            <Space direction='vertical' size={20}>
              <Space size={20}>
                <Image className='Fittsimage2'
                  src="https://public-media.interaction-design.org/images/uploads/user-content/76639/QO8sufUXA8VYSB4Mf7NLv1ig2vbdyoqJVzS3v6qf.png" width={'80%'}
                />
                <p>
                Fitts' Law states: "...the time to acquire a target is a function of the distance to and size of the target". As the distance increases, movement takes longer and as the size decreases selection again takes longer [3].
                </p>
              </Space>
              <Space size={20}>
                <Image className='Fittsimage3'
                  src="https://miro.medium.com/max/1400/1*6F4eq89boJV00UcUxSiVlw.png" width={'90%'}
                />
                <ul>
                  <li>The longer the distance D between the current position of the device and the target position, the longer the time taken.</li>
                  <li>The larger the size W of the target, the shorter the time used.</li>
                </ul>
              </Space>
            </Space>
          </div>
          <Divider />

          {/* UI design */}
          <div className='UIFitts'>
            <Title level={2}>Applying Fitts' Law to User Interface Design</Title><br/>
            <Space direction='vertical' size={20}>
                <div>
                  <p className='textfitts'>1.	<strong>Windows and Mac system Menu Design: increase the target size to reduce the positioning time (infinite edges)</strong></p>
                  <p className='textfitts'>Mac places the bar to the bottom of the screen. So the bottom bar becomes "infinitely selectable", because the user cannot move the cursor below the bottom bar, so the cursor is always on the bottom bar after a significant movement in the direction of the bottom bar.</p>
                </div>

                <div className='imageFitts'>
                  <div className='column'>
                    <Image className='Fittsimage4'
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHTI-rWKGVanCJuMwvBmxI-G_yoGu-05ngOg&usqp=CAU" width={'80%'}
                    />
                    <p className='subpic'>Edge of the screen, W infinite, T approximately equal to 0</p>
                  </div>
                  <div className='column'>
                    <Image className='Fittsimage4'
                      src={pic1}
                    />
                    <p className='subpic'>Macbook Buttom Menu</p>
                  </div>
                </div>
                <div>
                  <p className='textfitts'>In Windows, the start menu is in the bottom left corner of the screen. A corner that is "infinitely selectable", because the cursor will always stop above the Start menu button no matter how far the user move in the direction of the bottom left corner.</p>
                </div>

                <div className='imageFitts'>
                  <div className='column'>
                    <Image className='Fittsimage4'
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRekBCCoBg4o65NCNO3ilWIsNgLozTeptnU2l5MFQnwY6eFc0lQ7ejuJS7B101xPV3q-uo&usqp=CAU" width={'80%'}
                    />
                    <p className='subpic'>Screen corner, W infinite</p>
                  </div>
                  <div className='column'>
                    <Image className='Fittsimage4'
                      src={pic2}
                    />
                    <p className='subpic'>Windows Start Menu</p>
                  </div>
                </div>
            </Space>
            <br/><br/><br/>
            <Space direction='vertical' size={20}>
                <div>
                  <p className='textfitts'>2.	<strong>Pop-up menus </strong>better support immediate selection of interactive elements than dropdown menus as the user does not have to move the cursor from its current position. Therefore, graphical designs that allow the user to interact without moving help to reduce the 'travel time' [3].</p>
                </div>

                <div className='imageFitts'>
                  <div className='column'>
                      <Image className='Fittsimage4'
                        src="http://www.prof-uis.com/img/elegantribbon/tour/popup-menu-designer.png" width={'60%'}
                      />
                      <p className='subpic'>Pop-up Menu</p>
                  </div>
                  <div className='column'>
                    <Image className='Fittsimage4'
                      src="http://www.velocitypartners.co.uk/wp-content/uploads/2008/11/picture-2.png" width={'50%'}
                    />
                    <p className='subpic'>Dropdown Menu</p>
                  </div>

                </div>
            </Space>
            <br/><br/><br/>
            <Space direction='vertical' size={20} className="lastSpace">
                <div>
                  <p className='textfitts'>3.	<strong>Selecting options</strong> within linear menus, whether vertical (e.g. dropdown menus) or horizontal (e.g. top-level navigation), takes longer than clicking options in pie menus - where choices are arranged in a circle. Travelling distance is the same for all options in pie menus, unlike linear menus where distance increases the further along or down the list of options the user goes. In addition, the size of target areas is large in the pie menu, with the wedge-shaped buttons affording a larger margin for error when moving the cursor.</p>
                </div>

                <div className='imageFitts'>
                  <div className='column'>
                    <Image className='Fittsimage4'
                      src={pic1}
                    />
                    <p className='subpic'>Horizontal Selecting Options</p>
                  </div>
                  <div className='column'>
                    <Image className='Fittsimage4'
                      src="https://cdn.dribbble.com/users/170905/screenshots/801609/conceptidea.gif" width={'87%'}
                    />
                    <p className='subpic'>Pie Menu</p>
                  </div>
                </div>
            </Space>

            <Text type="secondary" underline>Think about any other design that can apply Fitts' Law? See&nbsp;<Link href="https://www.interaction-design.org/literature/article/fitts-s-law-the-importance-of-size-and-distance-in-ui-design" target="_blank">here</Link>.</Text>
          </div>

          <Divider/>
        </div>
      </div>
  </div>
);

export default Fitts;
