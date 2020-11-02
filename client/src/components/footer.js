import React from 'react';
import logo from './share.png';
import '../static/css/app.css';
import { Chat, addResponseMessage, addLinkSnippet, addUserMessage } from 'react-chat-popup';
class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        addResponseMessage("Hi, How can I help you today?");
      }
      handleNewUserMessage = (newMessage) => {
        console.log(`New message incomig! ${newMessage}`);
        // Now send the message throught the backend API
      }
    render() {
        return (
            <div id="footer" className="container-fluid">
<div className="App">
        <Chat
          handleNewUserMessage={this.handleNewUserMessage}
          profileAvatar={logo}
          title="Sharing Benefits"
          subtitle="And my cool subtitle"
        />
      </div>
  <hr/>
                <div id="footer-detail">
                    <img src={logo} alt="Logo" id="flogo" height="60" width="60" />
                    <small style={{ fontSize: "99%"}}>&copy; Copyright 2020, Soal</small>
                    <div style={{ float: "right" ,color:"white"}}>
                        <a href="/about" style={{ color: "black"}}>About Us</a> <br/>
                        <a href="/contact" style={{ color: "black"}}>ContactUs</a> <br/>
                        
                    </div>
                </div>
            </div>
        );
    }
}
export default Footer;