import React, { Component } from 'react';
import '../homepage.css';
import LogInContainer from './LogInContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './NavBar';
import NavBar from './NavBar';


class  HomePage extends Component {
  render(){
       return (
      
      <div className="HomePage">
        < NavBar />
        
  <section className="colored-section" id="title">

    <div className="container-fluid">
       
      <div className="row">
        
        <div className="col-lg-6">
          <h1 className="big-heading">Adapt to a new place easy peasy.</h1>
          <button type="button" className = "btn btn-info login mr-1">Log In</button>
          
          <button type="button" className="btn btn-info loginb" >Sign Up</button>

        </div>
        
        <div className="col-lg-6">
          <img className="title-image" src="/locaft.png" alt="locaft-mockup" />
        </div>
        
      </div>
    </div>
  </section>
  <section className="white-section" id="features">

    <div className="container-fluid">

      <div className="row">
        <div className="feature-box col-lg-4">
          <i className="icon fas fa-check-circle fa-4x"></i>
          <h3 className="feature-title">Easy to use.</h3>
          <p>Get relocated.We'll take care of everything.</p>
        </div>

        <div className="feature-box col-lg-4">
          <i className="icon fas fa-bullseye fa-4x"></i>
          <h3 className="feature-title">Efficient</h3>
          <p>Get highest number of services for lowest cost possible.</p>
        </div>

        <div className="feature-box col-lg-4">
          <i className="icon fas fa-heart fa-4x"></i>
          <h3 className="feature-title">Relax</h3>
          <p>Sit back , we'll do the dirty work.</p>
        </div>
      </div>


    </div>
  </section>
  <section className="colored-section" id="testimonials">

    <div id="testimonial-carousel" className="carousel slide" data-ride="false">
      <div className="carousel-inner">
        <div className="carousel-item active container-fluid">
          <h2 className="testimonial-text">I had to shift from Bangalore to Hyderabad. Thanks to Locaft , it was easy to know about this place.</h2>
          <img className="testimonial-image" src="Images/WhatsApp Image 2020-09-18 at 5.38.53 PM.jpeg" alt="mc-profile" />
          <em>Mani , Hyderabad</em>
        </div>
        <div className="carousel-item container-fluid">
          <h2 className="testimonial-text">Relocation took me 3 months previously , but thanks to Locaft , everything was done within 3 days.</h2>
          <img className="testimonial-image" src="Images/WhatsApp Image 2020-09-18 at 5.38.39 PM.jpeg" alt="nishi-profile" />
          <em>Nishanth , Bangalore</em>
        </div>
      </div>
      <a className="carousel-control-prev" href="#testimonial-carousel" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon"></span>
      </a>
      <a className="carousel-control-next" href="#testimonial-carousel" role="button" data-slide="next">
    <span className="carousel-control-next-icon"></span>
      </a>
    </div>

  </section>
  <section className="colored-section" id="press">
    <img className="press-logo" src="/indigo.png" alt="indigo-logo" />
    <img className="press-logo" src="/avasa.jpg" alt="avasa-logo" />
    <img className="press-logo" src="/vrl.jpg" alt="vrl-logo" />
    <img className="press-logo" src="/nobroker.png" alt="nobroker-logo" />

  </section>
  <section className="white-section" id="about-us">

    <div className="container-fluid">
    
        <div className="row">
            <div className="feature-box col-lg-4">
                <i className="icon fas fa-address-card fa-4x"></i>
                <h2 className="feature-title">About Us</h2>
                <p>Adapting to a new place is always hard in any phase of life. We aim to make it easy. </p>
            </div>
    
            <div className="feature-box col-lg-4">
                <i className="icon fas fa-bullseye fa-4x"></i>
                <h2 className="feature-title">Vision</h2>
                <p>Bringing all the basic amenities to the new place before your arrival.</p>
            </div>
    
            <div className="feature-box col-lg-4">
                <i className="icon fas fa-chart-line fa-4x"></i>
                <h2 className="feature-title">Mission</h2>
                <p>Getting adapted and familiar to the new place made easy.</p>
            </div>
        </div>
    </div>
  </section>



  <section className="colored-section" id="cta">

    <div className="container-fluid">

      <h3 className="big-heading">Recommend us to your friends !</h3>
      <button className="download-button btn btn-lg btn-dark" type="button"><i className="fab fa-apple"></i> Download</button>
      <button className="download-button btn btn-lg brn-light" type="button"><i className="fab fa-google-play"></i> Download</button>
    </div>

    <div className="container-fluid">
      <h2>Any comments ?</h2>
      <p>Your comments are what help us improve.</p>
      
    </div>
  </section>


  <footer className="white-section" id="footer">
    <div className="container-fluid">
      <i className="social-icon fab fa-facebook-f"></i>
      <i className="social-icon fab fa-twitter"></i>
      <i className="social-icon fab fa-instagram"></i>
      <i className="social-icon fas fa-envelope"></i>
      <p>© Copyright 2020 Locaft</p>
      <p><a href="/tc">Terms and Conditions</a></p>
      <p><a href="/pp">Privacy Policy</a></p>
    </div>
    </ footer>



        </div>
         





     

    );
  }
}

export default HomePage;