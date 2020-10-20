import React from 'react';
import logoImg from './images/logo.png';
import './App.css';
import './settings/global.css';

function App() {
    return (
      <div id="page">
        <div id="container">
          <div className="topo">
            <div className="branding">
              <img className="logo" src={logoImg} alt="Logo da página"/>
              <h1>Ross Bulat</h1>
            </div>

            <div className="login">
              <a href="">
                Sign in
              </a>
              <a href="">
                Get started
              </a>
            </div>  
          </div>
        </div>
      </div> 
    );






  










  {/*return (
    <div className="App">
      <div className="page">
        <div className="container">
          <div className="branding">
            <img className="logo" src={logo} alt=""/>
            <h3>Ross Bulant</h3>
          </div>
          <hr/>
          <div className="user-container">
            <div className="user-details">
                <div className="user">
                  <p>R</p>
                </div>
                <p>
                Sign in to your account (<span>re__@u__.br</span>) for your personalized experience.
                </p>
            </div>
            <img className="close" src={close} alt="close windows"/>
          </div>
          
          <div className="login">
            <a href="">Sign in with Google</a>
            <p>

            </p>
          </div>
          <hr />

          <section className="main-article">
            asff
          </section>

        </div> 
      </div>
    </div>
  );*/}
}

export default App;


/*
const Container = styled.div`
  width: 80%;
  background-color: blue;
  
  @media (min-width: 768px) {
    background-color: tomato;
  }
`*/