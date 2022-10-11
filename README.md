# About the project:
The aim of this project was to investigate whether experiential learning would have an impact on the effectiveness of learning Fitts' Law. We hypothesise that people will learn Fitts' Law better when they can interact with buttons of different distances and sizes. We will use an online website as the platform for this experiment, as it is the most common and context-free way of learning online and facilitates the evaluation of the effectiveness of participants' engagement in experiential learning.<br><br>
In this study, participants will first complete a pre-test questionnaire. This will be followed by an initial introduction to Fitts Law on the website. Users will debug the button distance and size of the interface in the Tutorial interface, and after the interface countdown, will participate in different versions of the game, which will involve seeing and feeling the changes in Movement Time (MT) for the interface buttons they have set, and completing a shortcut question test. Participants will be randomly assigned equally to different groups. Participants assigned to Group A will only be able to see changes in MT, while participants in Group B will be able to see and click to feel changes in MT. The purpose of this design is to ensure that a control group can be presented to compare the different learning styles in order to better identify the effectiveness of the participants' learning. The study lasts 15 minutes and at the end, participants are redirected to a post-test questionnaire page and are asked to complete a post-test evaluation of their user experience and the usability of the tool.<br><br>
In our user study, we will use the questionnaire to collect data in two separate sessions: (a) before participants use the Shortcuts Easy Learn (SEL) online learning tool for the Fitts Law learning activity (pretest), and (b) after students have completed the SEL learning tool-mediated learning activity (posttest).<br><br>
The pretest questionnaire consists of two parts: (a) demographic questions recording students' age (open-ended questions) and gender (female, male); and (b) a knowledge test. The post-test questionnaire consisted of five sections: (a) knowledge test, (b) perceived educational experience scale, (c) system usability scale (SUS), (d) usability adjective scores, and (e) open-ended questions about the positive and negative features of the SEL online learning tool, suggestions for improvement and any other comments. These research questionnaires were created using the Google Forms service, and we will provide the URLs to participants before and after use. <br><br>
## Research Question<br>
How does experiencing (observing vs. observing and clicking) various configurations of button distances and sizes impact on learning Fitts' Law in multiple-choice interface design?”<br>

# Web Page Design
We have 5 pages in our project website. The realistic task of this website is to answer question about windows shortcuts. We want users to learn and experience Fitts' Law from the multiple choice questions about keyboard shortcuts. 
1. Homepage: This page shows the purpose of this website is to learn Fitts' Law. Users can find the steps in this page. 
2. Learning Fitts' Law: This page gives definition and simple introduction of Fitts' Law. Users can read through this page and watch the embedded video to have a preview of Fitts' Law. 
3. Document: This page contains some common-used windows shortcuts. We will tell users focus on experiencing of Fitts' Law rather than answering shortcut questions. They can find the correct answers directly from this page. 
4. Tutorial: This is the main page of our website. 
  - Users have 3 minutes to try themselves. Each question has 4 choice. Users can modify the button sizes and the distances between buttons to see what kinds of configuration are easy and helpful to choose answer. There is a blue button called `Fitts' Law visualization`. Users can click on this button to see the calculation of Fitts' Law. The parameters used in the calculation are dynamic and real-time, which depends on the current location of cursor and current size & distance of buttons. 
  - After 3 minutes, users will be randomly splited into two groups: `observe` and `observe & click`. Before experiencing the website, We will tell them which group are they in (They can not choose group by themselves). We determine three configurations for both groups, and they can only change between these three configurations. Each group has three questions. Users in the first group can only view the questions. They cannot actually answer questions and interact with buttons. Users in the second group can both view the questions and click on buttons. They will get real feedback when they answer questions. Both groups are allowed to jump between different questions and different configurations. They are always allowed to visualise the calculation of Fitts' Law by clicking on the "visualization button" as well. <br>
  
<div align="center">

  | Configuration | Size     | Distance |
  | :---------:   | :------: | :------: |
  |        1      |   100    |     0    |
  |        2      |    0     |    100   |
  |        3      |    50    |    50    |
  
</div>


  
5. Contact us: This page contains names of our group members and their email addresses. 

# Research Design
- Methods: within-subjects<br>
- We have followed the within-subjects experimental design of this study. Participants will be divided into 2 groups, and all group members will participate in a pre-study knowledge test as well as experiential learning with Fitt's Law. In order to reduce the confounding variables of the test, group A will act as a control group.<br>
- Number of participants: at least 10 university students. A minimum of 10 university students will be recruited to participate in this experiment.<br>
- Duration: approximately 25 minutes (including learning test and questionnaire)<br>
- Before the experiment begins, participants will fill out a knowledge test, which may take about 5 minutes. The website content study and learning test will take about 15 min and at the end of the experiment participants will be asked to fill in questions, which may take about 10 minutes. The total time cost is approximately 25 min.<br>

## Procedures
1.	Introduce the purposes of our research and introduce how to use our website to participants. <br>
2.	Participants read the participant information sheet and sign the Consent Form.<br>
3.	Participants are randomly and equally divided into two groups (Group A: observe, Group B: observe & click).<br>
4.	Participants will first complete a pretest questionnaire on google form.<br>
https://forms.gle/JP1UPho2d9snDgpz9
5.	Visit http://3.87.225.135/ in a laptop or Android device using a browser.<br>
6.	Participants will then read materials about Fitts’ Law on the website and be asked to adjust the distance and size of the buttons in the tutorial page.<br>
7.	At the end of the countdown, group A will perform Test 1 (observation only) and group B will perform Test 2 (both observation and click).<br>
8.	Participants start Test 1 or 2. They can experience as much time as they want until they feel that they understand Fitts' Law. <br>
9.	Participants will be asked to complete a post-test questionnaire after the experiment.<br>
https://forms.gle/2WH2uHraH5AD9mik8
10.	Complete the user study.<br>

# How to view/run our website
## You can access the application from a web browser:
http://3.87.225.135/
## Alternatively, you can choose to run the application in your local machine:
This project was built on `React.js` using `Ant Design` UI library.
### Before you run the application in the local environment:
### Intstall Enviroment<br>
Make sure you have a recent Node.js version: https://nodejs.org/en/<br>
### To run the application:
- In terminal/powershell, enter the application's folder path.<br>
### Initialize dependency and package:
```bash
npm install
```
```bash
npm install antd
```
or
```bash
yarn install
```
```bash
yarn add antd
```
### Run the application:
```bash
npm run start
```
or
```bash
yarn start
```
## Configured code is located at src\ folder
