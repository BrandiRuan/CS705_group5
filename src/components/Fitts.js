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

        {/* intro */}
        <div className='FittsMain'>
          <div className='FittsIntro'>
            <p>
            <strong>Fitts law</strong> is a model for predicting performance of human movement in computer interaction [1]. Fitts' law states that the amount of time required for a person to move a pointer (e.g., mouse cursor) to a target area is a function of the distance to the target divided by the size of the target. Thus, the longer the distance and the smaller the target's size, the longer it takes [4].
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

          {/* Risks */}
          <div className='risk'>
            <Title level={2}>Risks (When You Shouldn't Use Fitts Law To Measure User Experience?)</Title>

            <div className="row">
              <div className="column2">
                <Title level={5}>1.	Create Larger Targets</Title>
                <p className='textfitts'>
                The downside of large targets is, of course, that <strong>they can break the balance in your interface as well as quickly take up screen real estate</strong>. However, even if you have plenty of space to spare, you do not have to constantly enlarge your target areas to make them more usable since the predicted usability of the size of a button progresses in a non-linear fashion.
                </p>
                <p className='textfitts'>
                Thus, if you make a small button 10% larger, it will become much more clickable, but if you make an already very large button 10% larger, you will not gain much more in terms of its usability.
                </p>
              </div>
              <div className="column2">
                <Image className='Fittsimage4'
                        src="https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/69791d95-c334-4db7-8e0c-9125a60cdafc/non-linear-progression-low-res.jpg" width={'85%'}
                      />
                <p className='subpic'>Good for your pixels: The usability of the size of a button is a non-linear relationship.</p>
              </div>
            </div>

            <div className="row">
              <div className="column2">
                <Title level={5}>2.	Minimize Cursor Movement</Title>
                <p className='textfitts'>
                  Arranging elements strictly according to this formula can cause conflict with other important design principles, such as the principle of <strong>grouping and separating different classes of functionality or content</strong>. Its purpose is to give your interface a clear and consistent structure as well as increase its discoverability.
                </p>
              </div>
              <div className="column2">
                <Title level={5}>3.	Exploit The Prime Pixels</Title>
                <p className='textfitts'>
                  Empirical studies confirm the theoretical assumptions about radial and linear context menus, stating that seek time and error rates give the linear menus a slight edge over the pie menus. <strong>Yet when the participants were asked purely about their subjective preferences, the pie menu was not favored anymore</strong>.
                </p>
                <p className='textfitts'>
                  In fact, the pie menu, although favored by Fitts's Law, does have a few disadvantages that can outweigh its benefits in certain situations.
                </p>
              </div>
            </div>
            <div className="lastText">
              <Text  type="secondary" underline>Think about any other risks and reasons that we do not use Fitts' Law. See&nbsp;<Link href="https://www.smashingmagazine.com/2012/12/fittss-law-and-user-experience/" target="_blank">here</Link>.</Text>
            </div>
          </div>

          <div className='lastSpace'>
            <Title level={4} mark keyboard>Think about how Fitts' Law applies on computer keyboard? </Title>
          </div>
        </div>

        {/* footer */}
        <footer>
          <div className='ref'>
            <p>[1] Fitts, P. M. (1954). The information capacity of the human motor system in controlling the amplitude of movement. <i>Journal of Experimental Psychology, 47(6)</i>, 381-391. https://doi.org/10.1037/h0055392</p>
            <p>[2] https://www.smashingmagazine.com/author/anastasios-karafillis. (2012). <i>When You Shouldn't Use Fitts Law To Measure User Experience — Smashing Magazine</i>. Smashing Magazine. https://www.smashingmagazine.com/2012/12/fittss-law-and-user-experience/</p>
            <p>[3] IDF Instructor. (2019, June 5). <i>Fitts's Law: The Importance of Size and Distance in UI Design</i>. The Interaction Design Foundation; UX courses. https://www.interaction-design.org/literature/article/fitts-s-law-the-importance-of-size-and-distance-in-ui-design</p>
            <p>[4] <i>What is Fitts' Law?</i> (n.d.). The Interaction Design Foundation. https://www.interaction-design.org/literature/topics/fitts-law#:~:text=Fitts</p>
          </div>
        </footer>
      </div>
  </div>
);

export default Fitts;