import React, { Component } from 'react';
// import profilepic from '../img/profile.jpg';
import ReactTypingEffect from 'react-typing-effect'

class Home extends Component {
    render() {
        return (
            <div className="condiv home">
                <img src="https://media1.tenor.com/images/20bc6de41f80d394a4483701a097d6f9/tenor.gif?itemid=14164078" alt="profile" className="profilepic" />
                <ReactTypingEffect text={['เลือกหัวข้อที่ต้องการคิดได้เลยครับ', 'นาย ภาณุ โห้เฉื่อย','6104062636105']} speed={80} eraseDelay={200} className="typingeffect" />
            </div>
        );
    }
}

export default Home;