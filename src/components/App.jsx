import React from 'react';
import '../styles/desktop/app.css';
import '../styles/mobile/app.css';
import ArtNote from '../assets/imgs/art_note.png'

import ToggleButton from "./DarkModeToggles/ToggleButton";
import LMDMIcons from './DarkModeToggles/LMDMIcons'

import { ReactComponent as DailyVector } from '../assets/vectors/daily_full.svg';
import { ReactComponent as DahzenLogo } from '../assets/vectors/dahzen_logo_vector.svg'
import { ReactComponent as LarcombsSig } from '../assets/vectors/my_signature.svg'
import { ReactComponent as DahzShortLogo } from '../assets/vectors/dahzen_short_vector_gray.svg';

import Notifications, { notify } from "./Notifications";
import DailyAppImages from "./ImageSets/DailyAppImages";


// TODO: Continue converting from traditional CSS usage to 'styled-components'.

class App extends React.Component
{

    constructor(props) {
        super(props);

        this.state = {
            toggled: false,

            // TODO: Consider moving this data off-site.
            statements:
                [
                    "When founding Dähzen months ago, I envisioned a culture that was capable " +
                    "of enhancing our local communities by promoting healthier and more independent " +
                    "lifestyles through our companies. In the founding document I wrote “Dähzen’s culture " +
                    "is capable of revolutionizing the world around us, and we intend to do so.” Furthermore, " +
                    "I’ve stated “The way Dähzen operates distinctively highlights our interest in empowering " +
                    "the little guy; offering the brush and canvas for many to non-compromisingly paint their stories”. " +
                    "From the founding of our company until now, our mission has never been clearer; " +
                    "empower the little guy.",

                    "Even though we’ve started relatively small, our subsidiaries products quickly became " +
                    "community driven implementing tools and concepts to enhance their lives even further. Juubii, " +
                    "for example, sought out to tackle problems which plagued the freelance and small-business " +
                    "community. With the immense amount of support from our community, we’ve been able to provide " +
                    "a platform securing jobs for millions of users right from home. Granted, Juubii is not an " +
                    "exception to the rule, more of an example of our mission.",

                    "The vision for our company is to remain dynamic and explorative; we hold ourselves to higher " +
                    "standards than traditional companies who more often than not stagnate and follow trends of very " +
                    "little progression. Our parent company acts as a container company for all of our wonderful " +
                    "leaders and subsidiaries working on tremendous applications.",

                    "All of our subsidiaries operate with small and highly efficient teams which hone in on the " +
                    "concept of rapid prototyping and customer feedback. By doing this, we not only get our products " +
                    "out to our users faster, but we also get much needed feedback to perfect our company's products.",

                    "Thankfully, our teams consist of engineers, artists, environmentalists, economists, and much " +
                    "more who strive to help increase the quality of life for everyone on a daily basis. The degree " +
                    "of perfection and artistry that goes into our company's products is truly impeccable; all thanks " +
                    "to our wonderful teams.",

                    "Dähzen is currently a private company and will remain so until our team, and our stakeholders, " +
                    "are prepared for launch. However, at this current time, we are still accepting investments. " +
                    "When our company becomes public, we will publicly trade under the indicator DAHZ. Additionally, " +
                    "as a three-character indicator: DZN. All of our company's activity – investor information, finances, " +
                    "keynotes, objectives - will be accessible once our first company officially launches; Juubii. " +
                    "Transparency is impeccably important to us hence the comprehensive documentation and our communication " +
                    "practices.",

                    "From our movements, products, teams, users, and missions, I’m incredibly excited for the what the " +
                    "future holds and I recognize how privileged I am to be a part of something much larger than myself. " +
                    "Let’s continue making this world a better place than how we’ve inherited it."
                ]

        }
    }

    handleClick = () => { this.setState({ toggled: !this.state.toggled }) }

    render() {

        return (
            <>

                {/* Renders the notification box in the DOM */}
                <Notifications/>

                <header id="mobile_header">

                    <DahzShortLogo/>

                    <div onClick={() => notify('Heads up!', 'The investors page is currently under construction!')} id="investors-button-mobile">Investors</div>

                </header>

                <div id="grid-container">
                    <div onClick={() => notify('Heads up!', 'The investors page is currently under construction!')}  id="investors-button-desk">Investors</div>

                    <div id="sidebar">
                        <DahzenLogo/>
                    </div>

                    <div id="content">

                        <div id="content-message">

                            <div className="section" id="section-one">

                                {/* Company Header */}
                                <h1>
                                    <span>Defining</span>
                                    <br/>
                                    <span>Dähzen</span>
                                    <span>Inc</span>
                                    <span>.</span>
                                </h1>

                                {/* Render all of the message elements */}
                                {this.state.statements.map(statement => (
                                    <p>
                                        {statement}
                                    </p>
                                ))}

                                <p>
                                    <br/>
                                    <LarcombsSig/>
                                    {/* Add an image of my signature here and position it  */}
                                    <br/>
                                    Christian C. Larcomb
                                    <br/>
                                </p>

                            </div>

                            <div className="section" id="section-two">
                                <img src={ArtNote} alt=""/>
                            </div>

                        </div>

                        <div id="content-companies">

                            <div id="our-companies">
                                <h4>Our Companies</h4>
                            </div>

                            <div id="dailyapp">

                                <div id="dailyapp-content">

                                    <div id="dailyapp-title">
                                        <DailyVector fill="#9b9b9b"/>
                                        <p>NEW</p>
                                    </div>

                                    <p>It's a lifestyle.</p>

                                    <a href="/">Learn more</a>
                                </div>

                                <div id="light-switch-grid-container">

                                    {/* Updated to utilize Styled-Components */}
                                    <LMDMIcons toggled={this.state.toggled}/>

                                    {/* Updated to utilize Styled-Components */}
                                    <ToggleButton handleClick={this.handleClick} toggled={this.state.toggled}/>

                                </div>

                                <DailyAppImages toggled={this.state.toggled}/>

                            </div>
                        </div>
                    </div>
                </div>

                <footer>
                    <DahzenLogo fill="#" id="footer-logo"/>
                </footer>
            </>
        );
    }

    }

export default App;
