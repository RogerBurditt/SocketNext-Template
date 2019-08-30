import React from 'react';
import "./css/main.css";
import io from "socket.io-client"

export default class Index extends React.Component{
  constructor(props){
    super(props);

    this.state = {

    }
  }

  componentDidMount(){
    var socket = io();

    socket.on("connected", (data) => {
      // Socket is ready. Tell DataLoader to load data.
      socket.emit("LOAD_DATA");
    });
  }


  render(){
    return (
      <div>
        <div id="header">
          <div className="top">
            {/* Logo */}
            <div id="logo">
              <h1 id="title">Boilerplate!</h1>
            </div>
            {/* Nav */}
            <nav id="nav">
              {/* Put a list here */}
            </nav>
          </div>
        </div>
        {/* Main */}
        <div id="main">
          {/* Intro */}
          <section id="top" className="one dark cover">
            <div className="container">
              HTML5Up Reponsive template, Next.js, Custom Express Server, Socket.io
            </div>
          </section>

          <section id="portfolio" className="two">
            <div className="container">

            </div>
          </section>
        </div>
        {/* Footer */}
        <div id="footer">
          {/* Copyright */}
          <ul className="copyright">
            <li>Built on: Node | Next.js | Express | Webpack | React | Socket.io</li>
          </ul>
        </div>
      </div>

    );
  }
}
